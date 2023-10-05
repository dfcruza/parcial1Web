import React from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useEffect } from "react";

const Cafe = (props) => {

    const [cafe, setCafe] = useState(null);

    useEffect(() => {
        if (props.cafe) {
            fetch("http://localhost:3001/cafes/" + props.cafe.id)
            .then((res) => res.json())
            .then((data) => {
                props.setCafe(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [props.cafe]);

    if (!cafe) {
        return null;
    }

    return (
        <Card style={{width:"18rem", textAlign: "center"}}>
            <b style={{fontSize: "16px", textAlign:"center"}}>
                {cafe.nombre}
            </b>
            <FormattedDate 
            value={cafe.fecha_cultivo} 
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"            
            />
            <br />
            <img src={cafe.imagen} alt={cafe.nombre} width="100px" />
            <br />
            <FormattedMessage id="notas" />
            <br />
            <b>
                <FormattedMessage id="altura" /> {cafe.altura}
                <FormattedMessage id="msnm" />
            </b>
        </Card>
    );

};

export default Cafe;