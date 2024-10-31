import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
});

export const PaymentReceiptPDF = ({ data = {} }) => {

  const [orderDetails , setOrderDetails] = useState({})

  useEffect(()=>{
    setOrderDetails(data)
  },[data])
  const {
    email = 'N/A',
    phone = 'N/A',
    address = {},
    razorpay_order_id = 'N/A',
    razorpay_payment_id = 'N/A',
    paymentType = 'N/A',
    paymentStatus = 'N/A',
    deliveryStatus = 'N/A',
    products = [],
    deliveryCharge = 0,
    totalAmount = 0,
  } = orderDetails;

  console.log(orderDetails);
  

  return (
    <Document>
      {/* <Text> this is ok</Text> */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Payment Receipt</Text>
          <Text style={styles.subtitle}>Customer Information</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Text style={styles.text}>Phone: {phone}</Text>
          <Text style={styles.text}>
            Address: {address.city || 'N/A'}, {address.district || 'N/A'}, {address.state || 'N/A'} - {address.pincode || 'N/A'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <Text style={styles.text}>Order ID: {razorpay_order_id}</Text>
          <Text style={styles.text}>Payment ID: {razorpay_payment_id}</Text>
          <Text style={styles.text}>Payment Type: {paymentType}</Text>
          <Text style={styles.text}>Payment Status: {paymentStatus}</Text>
          <Text style={styles.text}>Delivery Status: {deliveryStatus}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Order Summary</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Product</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Quantity</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Price</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total</Text>
              </View>
            </View>

            {products.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.productName || 'N/A'}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{product.productQuantity || 0}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>₹{(product.totalPrice / product.productQuantity) || 0}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>₹{product.totalPrice || 0}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Delivery Charge: ₹{deliveryCharge}</Text>
          <Text style={styles.text}>Total Amount: ₹{totalAmount}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PaymentReceiptPDF;
