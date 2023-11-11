import { Button, Grid,Input } from "@mui/material";
import DropdownList from '../utilities/Dropdown'
import axios from "axios";
const benificaryList = JSON.parse(localStorage.getItem('benificary'))
const accountList = JSON.parse(localStorage.getItem('acd'))
import {useEffect} from 'react'
import countiesList from '../assets/countries.json'
const Fundtransfer = () => {
    function loadScript(src) {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
              resolve(true);
          };
          script.onerror = () => {
              resolve(false);
          };
          document.body.appendChild(script);
      });
  }

  async function displayRazorpay() {
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }
      const result = await axios.post('http://localhost:5003/payment/orders');

      if (!result) {
          alert("Server error. Are you online?");
          return;
      }

      const { amount, id: order_id, currency } = result.data;

      const options = {
          key: "rzp_test_yWxIyhMZq8Twq5", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "NVC Fund Bank",
          description: "Test Transaction",
          // image: { logo },
          order_id: order_id,
          handler: async function (response) {
              const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };

              const result = await axios.post("http://localhost:5003/payment/success", data);

              alert(result.data.msg);
          },
          prefill: {
              name: "mahantesh",
              email: "mahantesh@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "mahantesh Corporate Office",
          },
          theme: {
              color: "#61dafb",
          },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
  }
  return (
    <>  
    <div className="border border-primary" style={{width:'60vw'}}>
    <div className="d-flex justify-content-around align-items-center my-2">
       <h5 style={{textAlign:'left'}}>*From Country: </h5>
       <DropdownList  name={countiesList} label='From Country'/> 
    </div>
    <div  className="d-flex justify-content-around align-items-center my-2"> 
    <h5 style={{textAlign:'left'}}>*To Country: </h5><DropdownList name={countiesList} label='To Country'/> 
      </div>
      <div  className="d-flex justify-content-around"> 
      <h5 style={{textAlign:'left'}}>*Transfer Type: </h5> <DropdownList name={countiesList} label='Transfer Type'/> 
  </div>
      <div className="d-flex justify-content-around my-2"> 
      <h5 style={{textAlign:'left'}}>*Amount Type: </h5> <DropdownList name={countiesList} label='Amount Type'/> 
  </div>
      <div className="d-flex justify-content-around my-2"> 
      <h5 style={{textAlign:'left'}}>*Amount</h5> <Input name={countiesList} label='Amount'/> 
  </div>
    <div className="d-flex justify-content-around my-2"> 
    <Button onClick={displayRazorpay} variant="outlined">Transfer</Button>
      </div>             
    </div>  
{/* 
    <Grid container spacing={1}>
    <Grid item xs={3}>
      <b>From :</b><DropdownList name={accountList.name || 'NA'} mobile={accountList.mobile || 'NA'}/> 
   
    </Grid>
    <Grid item xs={3}> 
    <Input type="text" placeholder="amount" />
      </Grid>
    <Grid item xs={4}> 
      <b>To : </b> <DropdownList name={benificaryList.name || 'NA'} mobile={benificaryList.mobile || 'NA'}/> 
      </Grid>
    <Grid item xs={2}> 
    <Button onClick={transfer} variant="outlined">Transfer</Button>
      </Grid>      
    </Grid> */}

    
    </>
  )
}

export default Fundtransfer