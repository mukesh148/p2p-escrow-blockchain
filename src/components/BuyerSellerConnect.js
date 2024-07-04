// src/components/SellerList.js

import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
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

const BuyerSellerConnect = ({ selectedSeller }) => {
  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",
  });

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
        {/* <Typography>
          Buyer is connected to Seller ID: {selectedSeller}
        </Typography> */}
        <animated.div style={props}>
          <Typography>
            Buyer is connected to Seller ID: {selectedSeller}
          </Typography>
        </animated.div>
      </Container>
    </>
  );
};

export default BuyerSellerConnect;
