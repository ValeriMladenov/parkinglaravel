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

const AllCars = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const result = await axios("http://parkingvratsa.test/api/vehicles");

        setData(result.data);
    };

    useEffect(() => {
        loadData();

        setInterval(async () => {
            loadData();
        }, 5000);
    }, []);

    const checkVehicle = typeCar => {
        if (typeCar === 1) {
            return "Автомобил";
        }

        if (typeCar === 2) {
            return "Мотоциклет";
        }

        if (typeCar === 3) {
            return "Микробус";
        }
    };
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">
                                    Всички превозни средства
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Номер на автомобил</th>
                                            <th>Тип Автомобил</th>
                                            <th>Регистриран на </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(el => (
                                            <tr key={el.car_number}>
                                                <td>{el.car_number}</td>
                                                <td>
                                                    {checkVehicle(el.car_type)}
                                                </td>
                                                <td>{el.created_at}</td>
                                            </tr>
                                        ))}
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

export default AllCars;
