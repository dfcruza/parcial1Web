import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

function Formulario() {

    const navgate = useNavigate();

    const [formValues, setFormValues] = useState({ email: "", password: "" });

    const [validations, setValidations] = useState({ email: true, password: true });

    const handleEmailChange = (event) => {
        setFormValues({ ...formValues, email: event.target.value });
    };

    const handlePasswordChange = (event) => {
        setFormValues({ ...formValues, password: event.target.value });
    };

    const handleClickSubmit = () => {
        const credentials = {
            email: formValues.email,
            password: formValues.password,
        };

        fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "success") {
                    setValidations({ ...validations, email: true, password: true });
                    navgate("/cafes");
                } else {
                    setValidations({ ...validations, email: false, password: false });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleCancelClick = () => {
        alert("Cancelado");
        navgate("/");
    };

    return (
        <div>
            <h4 style={{ marginLeft: "15%", marginTop: "10px" }}><FormattedMessage id="InicioSesion" /></h4>
            <Card style={{ width: "900px", marginLeft: "15%", marginTop: "10px" }}>
                <Form>
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Label><FormattedMessage id="email" /></Form.Label>    <Form.Control type="email" value={formValues.email} isInvalid={!validations.email} onChange={handleEmailChange} />
                        {validations.email === false && <Form.Text className="text-muted">
                            Email incorrecto
                        </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><FormattedMessage id="password" /> </Form.Label>    <Form.Control type="password" value={formValues.password} isInvalid = {!validations.password} onChange={handlePasswordChange} />
                        {validations.password === false && <Form.Text className="text-muted">
                            Contraseña incorrecta
                        </Form.Text>}
                    </Form.Group>
                    <Container>
                        <Button variant="primary" type="button" onClick={handleClickSubmit}>
                            <FormattedMessage id="submit" />
                        </Button>
                        <Button variant="danger" type="button" onClick={handleCancelClick}>
                            <FormattedMessage id="cancelar" />
                        </Button>
                    </Container>
                </Form>
            </Card>
        </div>
    );
}

export default Formulario;