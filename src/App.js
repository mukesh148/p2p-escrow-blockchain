// src/App.js

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Dropdown from "./components/Dropdown";
import SellerList from "./components/SellerList";
import AddFunds from "./components/AddFunds";
import InitiateContract from "./components/InitiateContract";
import BuyerSellerConnect from "./components/BuyerSellerConnect";

function App() {
  const [userType, setUserType] = useState("buyer");
  const [selectedSeller, setSelectedSeller] = useState(null);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flex: 1, backgroundColor: "#0f1f3d" }} />
      <Container
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: 2,
          overflowY: "scroll",
        }}
      >
        <Paper elevation={3} sx={{ width: "80%", padding: 2, marginBottom: 2 }}>
          <Dropdown onChange={setUserType} userType={userType}></Dropdown>
        </Paper>

        {userType === "buyer" && (
          <Paper
            elevation={3}
            sx={{ width: "80%", padding: 2, marginBottom: 2 }}
          >
            <SellerList
              onChange={setSelectedSeller}
              selectedSeller={selectedSeller}
            />
          </Paper>
        )}

        {selectedSeller !== null && selectedSeller !== undefined && (
          <Paper
            elevation={3}
            sx={{ width: "80%", padding: 2, marginBottom: 2 }}
          >
            <BuyerSellerConnect selectedSeller={selectedSeller} />
          </Paper>
        )}
        <Paper elevation={3} sx={{ width: "80%", padding: 2, marginBottom: 2 }}>
          <AddFunds />
        </Paper>
        <Paper elevation={3} sx={{ width: "80%", padding: 2, marginBottom: 2 }}>
          <InitiateContract />
        </Paper>
      </Container>
      <Box sx={{ flex: 1, backgroundColor: "#040030" }} />
    </Box>
  );
}

export default App;