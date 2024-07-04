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

const buyers = [
  // { name: "Rockstar", bid: "100/-", status: "Active" },
  // { name: "Jeetu Bhaiya", bid: "200/-", status: "Active" },
  // { name: "Jhony liver", bid: "150/-", status: "Active" },
  // { name: "Must Not Be Named", bid: "250/-", status: "Active" },
];

const sellers = [
  { name: "Rockstar", bid: "100/-", status: "Active" },
  // { name: "Jeetu Bhaiya", bid: "200/-", status: "Active" },
  // { name: "Jhony liver", bid: "150/-", status: "Active" },
  // { name: "Must Not Be Named", bid: "250/-", status: "Active" },
];

const PendingContracts = ({ onChange, selectedSeller }) => {
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
        <Typography gutterBottom>Pending Contract for Buyer</Typography>
      </Container>

      <TableContainer
        sx={{
          marginBottom: 2,
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Seller ID</TableCell>
              <TableCell>Bid Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buyers.map((buyer, index) => (
              <TableRow key={index}>
                <TableCell>{buyer.name}</TableCell>
                <TableCell>{buyer.bid}</TableCell>
                <TableCell>{buyer.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={() => handleChange(buyer.name)}
                  >
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
        <Typography gutterBottom>Pending Contract for Seller</Typography>
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
                    // onClick={() => handleChange(seller.name)}
                  >
                    Contract <br></br> Accept
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={() => handleChange(seller.name)}
                  >
                    Work <br></br> Done
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

export default PendingContracts;
