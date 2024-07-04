import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  Stepper,
  Step,
  StepLabel,
  ListItem,
  Button,
  ListItemText,
} from "@mui/material";

const dummyContracts = [
  {
    id: "1234",
    Buyer: "buyer",
    Seller: "sellet",
    Amount: "100",
    status: "Completed",
  },
];

const predefinedStatuses = [
  "Contract Signed",
  "In Progress",
  "Approved",
  "Payment Processed",
  "Completed",
];

const History = () => {
  const [buyerContracts, setBuyerContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  const buyerContractsUrl =
    "https://a8c3-115-110-224-178.ngrok-free.app/getSellerContracts";

  useEffect(() => {
    const fetchBuyerContracts = async () => {
      try {
        const response = await fetch(buyerContractsUrl, {
          method: "GET",
          mode: "no-cors",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBuyerContracts(response);
        setLoading(false);
        console.log("fetch buyer contracts:", data);
        // Handle response data as needed
      } catch (error) {
        console.error("failed fetching buyer contracts:", error);
        // Handle error as needed
      }
    };

    fetchBuyerContracts();
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        gutterBottom
        sx={{
          marginBottom: 2,
        }}
      >
        Contract History
      </Typography>

      {loading ? (
        <Typography variant="body1">Loading contracts...</Typography>
      ) : (
        buyerContracts.map((contract, index) => (
          <Container
            key={index}
            align="center"
            sx={{
              padding: 2,
              marginBottom: 3,
              border: 0.5,
            }}
          >
            <Typography
              sx={{
                marginBottom: 2,
              }}
            >
              Contract Address: {contract.id}
            </Typography>

            <Stepper
              activeStep={predefinedStatuses.indexOf(contract.status)}
              alternativeLabel
              sx={{
                marginBottom: 2,
              }}
            >
              {predefinedStatuses.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Button
              variant="contained"
              color="primary"
              // onClick={fetchSelletContracts}
            >
              Work Recieved
            </Button>
          </Container>
        ))
      )}
    </Container>
  );
};

export default History;
