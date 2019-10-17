/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Settings extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"> Настройки</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Номер на автомобил</th>
                        <th>Плащане номер</th>
                        <th>Билет номер</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ВР4355СА</td>
                        <td>#65363</td>
                        <td>4354423</td>
                      </tr>
                      <tr>
                        <td>ВР4355СА</td>
                        <td>#65363</td>
                        <td>4354423</td>
                      </tr> <tr>
                        <td>ВР4355СА</td>
                        <td>#65363</td>
                        <td>4354423</td>
                      </tr> <tr>
                        <td>ВР4355СА</td>
                        <td>#65363</td>
                        <td>4354423</td>
                      </tr> <tr>
                        <td>ВР4355СА</td>
                        <td>#65363</td>
                        <td>4354423</td>
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
  }
}

export default Settings;
