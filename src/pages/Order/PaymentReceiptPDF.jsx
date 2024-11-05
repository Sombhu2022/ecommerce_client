import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f0f4f8',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#007acc',
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#1f2937',
    marginBottom: 10,
    fontWeight: 'bold',
    borderBottom: '2px solid #007acc',
    paddingBottom: 4,
  },
  text: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 5,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginTop: 10,
    backgroundColor: '#e5e7eb',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
  },
  tableHeaderRow: {
    backgroundColor: '#007acc',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 5,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
    color: '#374151',
  },
  tableHeaderCell: {
    margin: 'auto',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  highlightText: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: '1px solid #d1d5db',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#6b7280',
  },
  footerLink: {
    color: '#007acc',
    textDecoration: 'none',
  },
});

export const PaymentReceiptPDF = ({ data = {} , topic="Payment Receipt"}) => {
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    setOrderDetails(data);
  }, [data]);

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
    totalAmmount = 0,
    createdAt = 'N/A',
  } = orderDetails;

  let orderdate = '';
  if (createdAt !== 'N/A') {
    const date = new Date(createdAt);
    orderdate = date.toLocaleString() || 'N/A';
  }

  let deliveryStatusColor = 'text-yellow-500'
  if(deliveryStatus === 'success') deliveryStatusColor = 'text-green-600'
  else if(deliveryStatus === 'rejected') deliveryStatusColor = 'text-red-600'

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{topic}</Text>
          <Text style={styles.subtitle}>Customer Information</Text>
          <Text style={styles.text}>Email: <Text style={styles.highlightText}>{email}</Text></Text>
          <Text style={styles.text}>Phone: <Text style={styles.highlightText}>{phone}</Text></Text>
          <Text style={styles.text}>
            Address: <Text style={styles.highlightText}>{address.city || 'N/A'}, {address.district || 'N/A'}, {address.state || 'N/A'} - {address.pincode || 'N/A'}</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <Text style={styles.text}>Order ID: {razorpay_order_id}</Text>
          <Text style={styles.text}>Payment ID: {razorpay_payment_id}</Text>
          <Text style={styles.text}>Payment Type: {paymentType}</Text>
          <Text style={styles.text}>Payment Status: {paymentStatus}</Text>
          <Text style={styles.text} >Delivery Status: <Text>{deliveryStatus}</Text></Text>
          <Text style={styles.text}>Date: {orderdate}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Order Summary</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeaderRow]}>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeaderCell}>Product</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeaderCell}>Quantity</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeaderCell}>Price (INR)</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeaderCell}>Total (INR)</Text>
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
                  <Text style={styles.tableCell}> {(product.totalPrice / product.productQuantity) || 0}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}> {product.totalPrice || 0}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Delivery Charge: {deliveryCharge}</Text>
          <Text style={styles.totalText}>Total Amount: {totalAmmount}</Text>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Thank you for shopping with Apna Bazar!</Text>
          <Text style={styles.footerText}>Website: <Link src="https://som-apna-bazar.vercel.app" style={styles.footerLink}>apnabazar</Link></Text>
          <Text style={styles.footerText}>Contact Us: +91-7047808326 | sombhudas93@gmail.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PaymentReceiptPDF;
