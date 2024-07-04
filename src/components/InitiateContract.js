// src/components/InitiateContract.js

import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const InitiateContract = () => {
  const [status, setStatus] = useState('Pending');

  const handleInitiateContract = () => {
    // Simulate contract initiation and status updates
    setStatus('Initiated');
    setTimeout(() => setStatus('In Progress'), 2000);
    setTimeout(() => setStatus('Completed'), 5000);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleInitiateContract}>
        Initiate Contract
      </Button>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Contract Status: {status}
      </Typography>
    </div>
  );
};

export default InitiateContract;
