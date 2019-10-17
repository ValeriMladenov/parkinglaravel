/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import { type, bymonth } from "../variables/charts.jsx";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col md="4" xs="5">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-tile-56 text-warning" />
                                            </div>
                                        </Col>
                                        <Col md="8" xs="7">
                                            <div className="numbers">
                                                <p className="card-category">
                                                    Свободни места
                                                </p>
                                                <CardTitle tag="p">
                                                    15/540
                                                </CardTitle>
                                                <p />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col md="4" xs="5">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-money-coins text-success" />
                                            </div>
                                        </Col>
                                        <Col md="8" xs="7">
                                            <div className="numbers">
                                                <p className="card-category">
                                                    Събрана сума днес
                                                </p>
                                                <CardTitle tag="p">
                                                    345лв.
                                                </CardTitle>
                                                <p />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Статистика</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Pie
                                        data={type.data}
                                        options={type.options}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="legend">
                                        <i className="fa fa-circle text-primary" />{" "}
                                        Коли{" "}
                                        <i className="fa fa-circle text-warning" />{" "}
                                        Мотори{" "}
                                        <i className="fa fa-circle text-danger" />{" "}
                                        Микробуси{" "}
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="8">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h5">
                                        Статистика по дни
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Line
                                        data={bymonth.data}
                                        options={bymonth.options}
                                        width={400}
                                        height={100}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info" />{" "}
                                        Автомобили{" "}
                                        <i className="fa fa-circle text-warning" />{" "}
                                        Мотоциклети
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}
export default Dashboard;
