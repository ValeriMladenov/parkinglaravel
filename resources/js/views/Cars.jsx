/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

const Cars = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const result = await axios("http://parkingvratsa.test/api/ctop");

        setData(result.data);
    };

    useEffect(() => {
        loadData();

        setInterval(async () => {
            loadData();
        }, 5000);
    }, []);

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Заети парко места</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Номер на автомобил</th>
                                        <th>Улица</th>
                                        <th>Билет номер</th>
                                        <th className="text-right">
                                            Оставащо време
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(el => (
                                        <tr key={el.car_number}>
                                            <td>{el.car_number}</td>
                                            <td>{el.street}</td>
                                            <td>{el.payment_code}</td>
                                            <td className="text-right">
                                                {el.payment_time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Cars;
