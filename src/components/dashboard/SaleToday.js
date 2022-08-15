import React, { useState } from "react";
import Chart from "react-apexcharts";
import './dashboard.css'
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const SaleToday = () => {
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
      <div>
        <CardTitle>Your Sales Today</CardTitle>
        <Chart options={options} series={series} type="line" height="300"/>
      </div>
  );
};

export default SaleToday;
