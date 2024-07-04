// src/components/InitiateContract.js

import React, { useState } from "react";
import {
  Button,
  Grid,
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";

const predefinedStatuses = [
  "Contract Signed",
  "In Progress",
  "Approved",
  "Payment Processed",
  "Completed",
];

const InitiateContract = () => {
  const [status, setStatus] = useState("");
  const [contractCreated, setContractCreated] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  // Update active step based on status change
  React.useEffect(() => {
    const index = predefinedStatuses.indexOf(status);
    setActiveStep(index);
  }, [status]);

  const handleInitiateContract = async () => {
    setStatus("Pending");

    console.log("Initiate contract");

    const url = "https://a8c3-115-110-224-178.ngrok-free.app/createEscrow";

    const payload = {
      buyerAddress: "0x3A970B05EA9E524A1a30A9048C48d12EA201792A",
      sellerAddress: "0xc1ede42b6A8Dd916EE0e471514b93482b9850462",
      trusteeAddress: "0x3f0b3415C1E517dF84F19F109433A1E67F465A6A",
      amountINR: 100000,
      buyerBank: {
        accountHolderName: "John Doe",
        accountNumber: "1234567890",
        bankName: "Bank of Example",
        ifscCode: "EXMP0001234",
      },
      sellerBank: {
        accountHolderName: "Jane Smith",
        accountNumber: "0987654321",
        bankName: "Another Bank",
        ifscCode: "ANTR0009876",
      },
      payoutAuth: {
        razorpayApiKey: "rzp_test_yourapikey",
        razorpayApiSecret: "yourapisecret",
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setContractCreated(true);
      console.log("Escrow creation successful:", data);
      // Handle response data as needed
    } catch (error) {
      console.error("Error creating escrow:", error);
      // Handle error as needed
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
      {/* Initiate Contract Button */}
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleInitiateContract}
        >
          Initiate Contract
        </Button>

        {status !== "" && (
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <Typography>Contract Initated Successfully</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default InitiateContract;
