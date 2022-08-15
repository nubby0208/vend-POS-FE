import React, { useState } from 'react'
import { Row, Col, Card, Button } from "reactstrap";
import Select from 'react-select';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import './sell.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#1e1c21",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: "#27252a",
    boxShadow: "#477bff",
    "&:hover": {
      borderColor: "#477bff"
    }
  }),
  menu: base => ({
    ...base,
    background: "#1e1c21",
    borderRadius: 0,
    marginTop: '10px',
    "&:focus": {
      background: "#477bff"
    }
  }),
  menuList: base => ({
    ...base,
    padding: 0
  })
};

const Sell = () => {

  const [values, setValues] = useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  return (
    <div className='custom-py-4'>
      <Row>
        <Col xxl="7" lg="6" className="sell-first-body">
          <div className="sell-first-body-search">
            <p>Search for products</p>
            <Select styles={customStyles} options={options} placeholder={<div>Start typing or scanning</div>} />
          </div>
          
          <div className="sell-first-quickKey">
            <div className="quickKeys">
              <span className="quickKeyHeader">
                <h2>Quick Keys</h2>
              </span>
              <div className="sell-first-keys">
                <div>
                  <p>Giftcard</p>
                </div>
                <div>
                  <p>Bracelet</p>
                </div>
                <div>
                  <p>Sunnies</p>
                </div>
                <div>
                  <p>Red Beanie</p>
                </div>
              </div>
              <span>
                <p>Create custom buttons or Quick Keys for your most popular products, and speed up checkouts.</p>
              </span>

              <div className="sell-first-button">
                <Button className="mt-3" color="primary">
                  Set up Quick Keys
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xxl="5" lg="6">
          <div className="sell-second-card">
            <div>
              <img src="https://vendfrontendassets.freetls.fastly.net/images/sell/register-closed-v1.svg" className="sell-closed-image" />
              <h3>Register closed</h3>
            </div>
            <p>Set an opening float to open the register and make a sale.</p>
            <div>
              <div className='sell-second-register'>
                <TextField
                  label="Opening Float"
                  id="openingFloat"
                  fullWidth 
                  color="primary"
                  placeholder='0.00'
                  type='number'
                  focused 
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <TextField
                  label="Notes Optional"
                  id="notesOptional"
                  fullWidth
                  color="primary"
                  multiline
                  rows={4}
                  placeholder="Enter a note"
                  focused 
                />
              </div>
              <div>
                <Button className="mt-12" color="primary">
                  Open Register
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    
  );
};

export default Sell;
