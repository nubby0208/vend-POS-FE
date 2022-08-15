import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AllOuslets from "../components/dashboard/AllOuslets";
import SaleToday from "../components/dashboard/SaleToday"
import DiscountOffered from "../components/dashboard/DiscountOfferd"
import Blog from "../components/dashboard/Blog";
import { Tabs, Tab, Box, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardBody, CardTitle, Row, Col, } from "reactstrap";
import './views.css';
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";


const BlogData = [
  {
    title: "GROSS PROFIT",
    subtitle: "SR20.00",
    description:
      "SR20.00 more than this time last Saturday."
  },
  {
    title: "REVENUE",
    subtitle: "SR40.00",
    description:
      "SR40.00 more than this time last Saturday"
  },
  {
    title: "SALES WITH CUSTOMER",
    subtitle: "100%",
    description:
      "100% more than this time last Saturday",
  },
  {
    title: "SALE COUNT",
    subtitle: "1",
    description:
      "1 more than this time last Saturday",
  },
  {
    title: "AVG. SALE VALUE",
    subtitle: "SR40.00",
    description:
      "SR40.00 more than this time last Saturday",
  },
  {
    title: "AVG. ITEMS PER SALE",
    subtitle: "1",
    description:
      "1 more than this time last Saturday",
  }
];

const ProductData = [
  {
    img: bg1,
    subtitle_1: "Shampoo",
    subtitle_2: "1000",
    uId: "1"
  },
  {
    img: bg2,
    subtitle_1: "tiger",
    subtitle_2: "2000",
    uId: "2"
  },
  {
    img: bg3,
    subtitle_1: "king",
    subtitle_2: "3000",
    uId: "3"
  },
]

const MoreRetailMetrics = [
  {
    key: "MySalesPerformance",
    title: "My Sales Performance",
    subtitle: "Keep track of your own sales performance."
  },
  {
    key: "AverageSaleValue",
    title: "Average Sale Value",
    subtitle: "See the average revenue made per sale."
  },
  {
    key: "GrossProfit",
    title: "Gross Profit",
    subtitle: "Keep an eye on your margins."
  },
  {
    key: "AverageItemsPerSale",
    title: "Average Items Per Sale",
    subtitle: "See the average number of items sold per sale."
  },
  {
    key: "Revenue",
    title: "Revenue",
    subtitle: "Get a snapshot of your overall revenue by outlet(s)"
  },
  {
    key: "DiscountsOfferd",
    title: "Discounts Offerd",
    subtitle: "Monitoer the discounts applied by staff."
  },
  {
    key: "SalesWithCustomer",
    title: "Sales With Customer",
    subtitle: "Track the percentage of ales that have customer details recorded."
  },
  {
    key: "TopProductsSold",
    title: "Top Products Sold",
    subtitle: "Easily view your bestselling products."
  },
  {
    key: "SaleCount",
    title: "Sale Count",
    subtitle: ""
  },
  {
    key: "TopSalesPeople",
    title: "Top Sales People",
    subtitle: "Easily view your est-performing sales people."
  },
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ShowMoreRetailMetrics = (index) => {
    console.log(index)
  };

  return (
    <div className='homeContent'>

      <Row>
        <Col sm="4" lg="4" className='siteSubtitle'>
          <div>
            <h4>Hi, here’s what’s happening in your stores</h4>
          </div>
          <div >
            <h5>Today your stores have sold SR40.00</h5>
          </div>
          <div>
            <p>That’s SR40.00 more than this time last Saturday!</p>
          </div>
        </Col>
        <Col sm="6" lg="6">
          <AllOuslets />
        </Col>
        <Col sm="2" lg="2"  className='siteSubtitle' >
          <div><Button color="primary" variant="contained" onClick={handleClose}> All Ouslets </Button></div>
          <div>
            <h5>Average Sales Value 40 S.R.</h5>
            <h5>Average Item per sale 1</h5>
            <p>1 more than this time last Saturday!</p>
          </div>
        </Col>
      </Row>

      <div className='thingsToKnow spaceBetween'>
        <div>
          <h4>Things To Know</h4>
          <Link to='#' onClick={handleClickOpen}><h5>+Show more details</h5></Link>
        </div>
        <div>
          <h4>Things To do</h4>
        </div>
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Show More Retail Metrics
          <p>Choose the information you want to see on your Home dashboard.</p>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Row>
            { MoreRetailMetrics.map((item, index) => (
              <Col xxl="6" md="6" sm="6" className='RetailMetricsCheckBox' key={index}>
                <FormControlLabel control={<Checkbox onChange={() => ShowMoreRetailMetrics(item.key)} color="success" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label={item.title} />
                <p>{item.subtitle && item.subtitle}</p>
              </Col>
            ))}
            
          </Row>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="success" variant="contained" >
            Update Dashboard
          </Button>
        </DialogActions>
      </Dialog>

      <div className='ThingsBody'>
        <Col lg="8" xxl="10">
          <Card body>
            <Row>
              <Col sm="6" lg="6" xl="6" xxl="6">
                  <CardTitle tag="h5">Your Sale Target</CardTitle>
                  <div className='divider'></div>
                  <CardBody>
                    <div className="SaleTagetHeader spaceBetween">
                      <div className='SR400Name'>SR400</div>
                      <Link to="">Set a Sales Target</Link>
                    </div>
                    <Row>
                      <Col lg="6">
                        <h6>Average Sale Value</h6>
                        <div className='SR400Name'>SR400</div>
                        <p className='blogCardDescription'>SR400 more than last Saturday</p>
                      </Col>
                      <Col lg="6">
                        <h6>Average Item Per Sale</h6>
                        <div className='SR400Name'>1</div>
                        <p className='blogCardDescription'>1 more than last Saturday</p>
                      </Col>
                    </Row>
                  </CardBody>
              </Col>
              <Col sm="6" lg="6" xl="6" xxl="6">
                <SaleToday />
              </Col>
            </Row>
          </Card>

          <Row>
            {BlogData.map((blg, index) => (
              <Col lg="6" xl="4" key={index}>
                <Blog
                  title={blg.title}
                  subtitle={blg.subtitle}
                  text={blg.description}
                />
              </Col>
            ))}
          </Row>

          <Col lg="6" xl="8">
            <DiscountOffered />
          </Col>

          <Col lg="6" xl="8">
            <Card body >
              <CardBody>
                <CardTitle className='blogCardTitle' tag="h5">TOP PRODUCTS SOLD</CardTitle>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'green', color: 'green'}}}>
                    <Tab label="By Quantity" {...a11yProps(0)} />
                    <Tab label="By Revenue" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  {ProductData.map((data, index) => (
                    <div className='spaceBetween productList' key={index}>
                      <div className='tablist'>
                        <img src={data.img} />
                        <div>
                          <p>{data.subtitle_1}</p>
                          <p>{data.subtitle_2}</p>
                        </div>
                      </div>
                      <div className='tablistindex'>
                        <h6>{data.uId}</h6>
                      </div>
                    </div>
                  ))}
                  
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6" xl="8">
            <Card body >
              <CardBody>
              <CardTitle className='blogCardTitle' tag="h5">TOP SALE PEOPLE</CardTitle>
                <div className='spaceBetween productList'>
                  <div className='tablist'>
                    <img src={bg4} />
                    <div>
                      <p>lbrahim Mohammed</p>
                      <p>tigertopdev714@gmail.com</p>
                    </div>
                  </div>
                  <div className='tablistindex'>
                    <h6>SR40.00</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Col>

        <Col lg="4" xxl="2">
          <Card className='viewCount spaceBetween' body>
            <CardTitle tag="h6">You have 1 count due</CardTitle>
            <Link to=''>View Count</Link>
          </Card>
        </Col>
      </div>
              
    </div>
  );
};

export default Home;
