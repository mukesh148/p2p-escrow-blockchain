// src/components/SellerList.js

import { React, useState } from "react";
import {
  Table,
  Button,
  Typography,
  TableBody,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

const sellers = [
  { name: "Rockstar", bid: "100/-", status: "Active" },
  { name: "Jeetu Bhaiya", bid: "200/-", status: "Active" },
  { name: "Jhony liver", bid: "150/-", status: "Active" },
  { name: "Must Not Be Named", bid: "250/-", status: "Active" },
];

const SellerList = ({ onChange, selectedSeller }) => {
  const handleChange = (sellerId) => {
    onChange(sellerId);
    // Perform further processing with the selected seller ID, e.g., API calls, state updates, etc.
    console.log(`Selected seller ID: ${sellerId}`);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c2d1f0",
          padding: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          List of Sellers and Bids
        </Typography>
      </Container>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Seller ID</TableCell>
              <TableCell>Bid Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller, index) => (
              <TableRow key={index}>
                <TableCell>{seller.name}</TableCell>
                <TableCell>{seller.bid}</TableCell>
                <TableCell>{seller.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleChange(seller.name)}
                  >
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SellerList;
