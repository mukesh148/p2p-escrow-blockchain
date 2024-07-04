// src/components/AddFunds.js

import { React, useState } from "react";
import { Box, Paper, Button } from "@mui/material";
import { Grid, Typography, Container } from "@mui/material";
import axios from "axios";

const AddFunds = () => {
  const [fundAdded, setIsFundsAdded] = useState(null);

  const handleAddFunds = async () => {
    console.log("Add funds Init");
    const url =
      "https://api-web-smart-contract.dev.razorpay.in/v1/ecollect/validate";
    const token =
      "cnpwX3Rlc3RfYW9zSVBQdzhGdnc1RUM6NGFRVVZCZ1pacnRQSVc2QmN3YVZCQU5M";

    const requestData = {
      validate: {
        attempt_no: 1,
        bene_account_ifsc: "YESB0CMSNOC",
        bene_account_no: "RZPAYX.7167293864603",
        bene_full_name: "RZPX Pvt Ltd",
        customer_code: "RZPAYX",
        rmtr_account_ifsc: "UTIB0001082",
        rmtr_account_no: "917010043879429",
        rmtr_account_type: "10",
        rmtr_full_name: "UJJWAL ANAND",
        rmtr_to_bene_note: "UPI",
        transfer_amt: 1000,
        transfer_ccy: "INR",
        transfer_timestamp: "2024-06-11 17:54:19",
        transfer_type: "UPI",
        transfer_unique_no: "416384189279",
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json",
          //   "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setIsFundsAdded(requestData.validate.transfer_amt);
      console.log("Successfully added funds:", data);

      // Optionally handle the response data or update state
    } catch (error) {
      console.error("Error adding funds:", error);
      // Optionally show an error message or handle the error
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      {fundAdded === null && (
        <Grid container spacing={2} justifyContent="center">
          {/* Left Part: Text */}
          <Grid item xs={6}>
            <Typography variant="body1">
              Please add fund before initiating the smart contract with the
              seller.
            </Typography>
          </Grid>

          {/* Right Part: Add Funds Button */}
          <Grid
            item
            xs={6}
            container
            justifyContent="center"
            //   sx={{
            //     background: "#000000",
            //   }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddFunds}
            >
              Add Funds
            </Button>
          </Grid>
        </Grid>
      )}

      {fundAdded !== null && (
        <Grid container spacing={2} justifyContent="center">
          {/* Left Part: Text */}
          <Grid item xs={6}>
            <Typography variant="body1">
              Oh Bouy! <br /> Funds add successfully
            </Typography>
          </Grid>

          {/* Right Part: Add Funds Button */}
          <Grid
            item
            xs={6}
            container
            justifyContent="center"
            //   sx={{
            //     background: "#000000",
            //   }}
          >
            <Paper
              elevation={3}
              sx={{
                width: 300,
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6"> Balance </Typography>
              <Typography variant="body1">{fundAdded}/-</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>

    // <Button variant="contained" color="primary" onClick={handleAddFunds}>
    //   Add Funds
    // </Button>
  );
};

export default AddFunds;
