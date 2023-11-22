// import React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const styles = {
//   container: {
//     padding: '20px',
//     border: '1px solid #ccc',
//     marginTop: '20px'
//   },
//   paper: {
//     padding: '20px',
//     // border: '1px solid #ccc',
//     boxShadow: 'none'
//   },
//   sectionTitle: {
//     marginBottom: '10px',
//     fontWeight: 'bold',
//   },
// };

// const dummyData = {
//   invoiceNumber: 'INV12345',
//   date: '2023-10-23',
//   planName: 'Premium Hosting',
//   planPrice: '₹ 99.99',
//   additionalServices: 'Domain Registration',
//   totalAmount: '₹ 109.99',
// };

// const InvoiceComponent = () => {
//   return (
//     <Container style={styles.container}>
//       <Typography variant="h4" component="h2" sx={{textAlign:'center', mt: '2'}} >
//         Invoice
//       </Typography>
//       <Paper style={styles.paper}>
//         <Typography variant="h6" style={styles.sectionTitle}>
//           SiteWorx Cloud 
//         </Typography>
//       </Paper>
//       <Paper style={styles.paper}>
//         <Typography variant="h6" style={styles.sectionTitle}>
//           Invoice Details
//         </Typography>
//         <Grid container spacing={1}>
//           <Grid item xs={6}>
//             <Typography variant="body2">Invoice Number: {dummyData.invoiceNumber}</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="body2">Date: {dummyData.date}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Paper style={styles.paper}>
//         <Typography variant="h6" style={styles.sectionTitle}>
//           Plan Details
//         </Typography>
//         <Typography variant="body2">Plan Name: {dummyData.planName}</Typography>
//         <Typography variant="body2">Plan Price: {dummyData.planPrice}</Typography>
//       </Paper>

//       <Paper style={styles.paper}>
//         <Typography variant="h6" style={styles.sectionTitle}>
//           More Details
//         </Typography>
//         <Typography variant="body2">Additional Services: {dummyData.additionalServices}</Typography>
//         <Typography variant="body2">Total Amount: {dummyData.totalAmount}</Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default InvoiceComponent;

import React from 'react'
import logo from '../../Assets/img/shape/icon-shape.png'
import './Invoice.css'
import { light } from '@mui/material/styles/createPalette'

const Invoice = () => {
  return (
    <div className='invoice-container'>
      <h1>Invoice</h1>
    <div className='invoice'>
      <div className='invoice-header'>
        <div className='invoice-left'>
          <div className='invoice-logo'>
            <img className='invoice-logo-img' src={logo} />

          </div>
          <div className='invoice-sender'>
            <h6>SiteWorx info</h6>
            <p>vijay path, Sanganer, Jaipur</p>
            <p>Jaipur Rajasthan</p>
            <p>India</p>
            <p>302029</p>
            <p>info@sitework.in</p>
            <p>8559957782</p>

          </div>
        </div>
        <div className='invoice-right'>

          <div className='invoice-to-details'>
            <h6 style={{ fontWeight: light, color: 'rgb(120, 144, 156)' }}>BILLED TO :</h6>
            <h6>Stardev info</h6>
            <p>Neota, Sanganer, Jaipur</p>
            <p>Jaipur Rajasthan</p>
            <p>India</p>
            <p>302029</p>
            <p>info@stardevinfo.com</p>
            <p>8559957782</p>
          </div>
          <div className='invoice-no'>
            <p>Invoice No : b2yh345874895378 </p>
            <p> Invoice Date : 10/05/2023 </p>
            <p>Due Date : 09/06/2023 </p>
          </div>
        </div>
      </div>
      <div className='invoice-body'>
        <div className='invoice-bill-details'>
          <div>
            <h3>
              Plan Description
            </h3>
            <table className='invoice-table'>
              <thead>
                <th style={{ width: '50%' }} >Description</th>
                <th>Taxed</th>
                <th>Unit Cost</th>
                <th>Qty</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr>
                  <td>VPS V23</td>
                  <td>Yes</td>
                  <td>299</td>
                  <td>1</td>
                  <td>₹299.00</td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2} style={{fontWeight:'bold'}}>Subtotal: </td>
                  <td>₹299.00</td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2} style={{fontWeight:'bold'}}>Credit: </td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td colSpan={5}></td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={2} style={{fontWeight:'bold'}}>IGST(18.0%): </td>
                  <td>₹53.82</td>
                </tr>
                <tr style={{backgroundColor: 'rgb(200, 240, 245)'}}>
                  <td colSpan={2}></td>
                  <td colSpan={2} style={{fontWeight:'bold'}}>Total: </td>
                  <td style={{fontWeight:'bold'}}>₹352.82</td>
                </tr>
              </tbody>
            </table>
            <h3>
              Transactions
            </h3>
            <table className='invoice-table'>
              <thead>
                <th style={{ width: '40%' }} >Transaction Date </th>
                <th>Gateway</th>
                <th>Transaction ID</th>
                <th>Amount</th>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} style={{textAlign:'center'}}>No Related Transactions Found</td>
                </tr>
                <tr style={{backgroundColor: 'rgb(200, 240, 245)', marginTop:'12px'}}>
                  <td colSpan={2}></td>
                  <td style={{fontWeight:'bold'}} >Balance</td>
                  <td style={{fontWeight:'bold'}}>₹352.82</td>
                </tr>
                
          
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Invoice