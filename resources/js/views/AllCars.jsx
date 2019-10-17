/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";

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

class Cars extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Всички превозни средства</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Номер на автомобил</th>
                        <th>Регистриран на </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ВР 4355 СА</td>
                        <td>23.09.2015</td>
                      </tr>
                      <tr>
                        <td>ВР 4355 СА</td>
                        <td>23.09.2015</td>
                      </tr><tr>
                        <td>ВР 4355  СА</td>
                        <td>23.09.2015</td>

                      </tr><tr>
                        <td>ВР 4355 СА</td>
                        <td>23.09.2015</td>

                      </tr><tr>
                        <td>ВР 4355 СА</td>
                        <td>23.09.2015</td>

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

export default Cars;
