import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Cafe from './cafe';


function cafeLista () {

    const [cafes, setCafes] = useState([]);

    const [cafe, setCafe] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/cafes")
        .then((res) => res.json())
        .then((data) => {
            setCafes(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        if (cafes.length > 0) {
            setCafe(cafes[0]);
        }
    }, [cafes]
    );

    const handleClick = (c) => {
        setCafe(cafes[c]);
        console.log(cafes[c]);
    };

    return (
        <div>
            <div className='col'>
                <Table striped bordered hover variant="dark" style={{marginLeft:"100px"}}>
                    <thead>
                        <tr>
                            <th scope='col'>
                                #
                            </th>
                            <th scope='col'>
                                <FormattedMessage id="nombre" />
                            </th>
                            <th scope='col'>
                                <FormattedMessage id="tipo" />
                            </th>
                            <th scope='col'>
                                <FormattedMessage id="region" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cafes.map((element, index) => (
                            <tr key={element.id} onClick={() => handleClick(index)}>
                                <th scope='row'>{element.id}</th>
                                <td>{element.nombre}</td>
                                <td>{element.tipo}</td>
                                <td>{element.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className='col'>
                <Cafe cafe={cafe} setCafe={setCafe} />
            </div>
        </div>
    );

}

export default cafeLista;