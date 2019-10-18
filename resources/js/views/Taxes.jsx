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

const Taxes = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const result = await axios("http://parkingvratsa.test/api/taxes");

        setData(result.data);

        console.log(result.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">
                                    Такси за превозно средство
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Тип на автомобила</th>
                                            <th>за 30мин</th>
                                            <th>за 1час</th>
                                            <th>за 2часа</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Автомобил</td>
                                            <td>1лв.</td>
                                            <td>2лв.</td>
                                            <td>3лв.</td>
                                        </tr>
                                        <tr>
                                            <td>Мотоциклет</td>
                                            <td>1лв.</td>
                                            <td>2лв.</td>
                                            <td>3лв.</td>
                                        </tr>
                                        <tr>
                                            <td>Микробус</td>
                                            <td>1лв.</td>
                                            <td>2лв.</td>
                                            <td>3лв.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Taxes;
