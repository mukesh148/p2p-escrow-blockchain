import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";

const NavBar = ({ onMenuItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    handleMenuClose();
    onMenuItemClick(option);
  };

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 2,
      }}
    >
      <Toolbar>
        {/* Three Dots on the Left */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>

        {/* Centered Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Smarty Escrow
        </Typography>
        {/* Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuItemClick("Home")}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Add Contract")}>
            Add Contract
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Pending Contracts")}>
            Pending Contracts
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Account")}>
            Account
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("History")}>
            History
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Settings")}>
            Settings
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
