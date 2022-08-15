import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle
} from "reactstrap";
import Chart from "react-apexcharts";

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

const Blog = (props) => {
  return (
    <Card>
      <CardBody className="p-4">
        <CardTitle tag="h5" className="blogCardTitle">{props.title}</CardTitle>
        <CardSubtitle tag="h4">{props.subtitle}</CardSubtitle>
        <p className="blogCardDescription">{props.text}</p>
        <Chart options={options} series={series} type="line" height="200"/>
      </CardBody>
    </Card>
  );
};

export default Blog;
