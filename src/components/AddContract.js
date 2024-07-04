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
  Box,
  TextField,
} from "@mui/material";

const AddContract = ({ onChange, selectedSeller }) => {
  const [formData, setFormData] = useState({
    description: "",
    bidPrice: "",
    validTill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#f5f5f5",
          padding: 4,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography align="center" gutterBottom>
          Add New Contract
        </Typography>
        <TextField
          label="description"
          name="Description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="bidPrice"
          name="Bid Price"
          value={formData.bidPrice}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="validTill"
          name="Valid Till"
          value={formData.validTill}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default AddContract;
