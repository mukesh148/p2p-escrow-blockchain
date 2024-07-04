// src/components/Dropdown.js

import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({onChange, userType}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="user-type-label">What Defines You</InputLabel>
      <Select
        labelId="user-type-label"
        id="user-type"
        value={userType}
        label="What Defines You"
        onChange={handleChange}
      >
        <MenuItem value="buyer">Buyer</MenuItem>
        <MenuItem value="seller">Seller</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
