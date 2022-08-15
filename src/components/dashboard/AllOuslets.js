import React, { useState } from "react";
import Chart from "react-apexcharts";
import Container from '@material-ui/core/Container';
import './dashboard.css'
import {
  Card,
  CardBody,
  ButtonGroup,
  Button,
} from "reactstrap";

const AllOuslets = () => {
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

  const [rSelected, setRSelected] = useState(null);

  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };

  return (
    <Card>
      <CardBody>
        <Container className="homeChartHeader spaceBetween">
          <h5>All Ouslets</h5>
          <ButtonGroup>
            <Button
              color="primary"
              outline
              onClick={() => onRadioBtnClick(1)}
              active={rSelected === 1}
            >
              Day
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => onRadioBtnClick(2)}
              active={rSelected === 2}
            >
              Week
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => onRadioBtnClick(3)}
              active={rSelected === 3}
            >
              Year
            </Button>
          </ButtonGroup>
        </Container>

        <Chart options={options} series={series} type="line" height="250"/>
      </CardBody>
    </Card>
  );
};

export default AllOuslets;
