import React from "react";
import Chart from "react-apexcharts";
import './dashboard.css'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

const DiscountOffered = () => {
     const options = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 1
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
     }
     const series = [
          {
               name: "Desktops",
               data: [10, 41, 35, 51]
          }
     ];



  return (
     <Card>
          <CardBody className="p-4">
               <CardTitle tag="h5" className="blogCardTitle">DISCOUNT OFFERED</CardTitle>
               <Row>
                  <Col xxl='9' lg='6' md='4'>
                    <Chart options={options} series={series} type="line" height="250"/>
                  </Col>
                  <Col xxl='3' lg='6' md='4' className="totalDiscount">
                    <div><p>Total Discount</p> <span>12</span></div>
                    <div><p>Total Discount (%)</p> <span>78%</span></div>
                  </Col>
               </Row>
          </CardBody>
     </Card>
  );
};

export default DiscountOffered;
