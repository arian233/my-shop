import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Props {
  childState: string;
  onChange: () => void;
}

export default function NavBar(props: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = [
    { name: "Catalog", path: "/catalog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const userActions = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            component={NavLink}
            to="/"
            sx={{
              color: "inherit",
              textDecoration: "none",
              variant: "h6",
              mr: 2,
            }}
          >
            My Shop
          </Typography>
          <LightModeIcon />
          <Switch
            checked={props.childState === "dark"}
            onChange={props.onChange}
          />
          <DarkModeIcon />
        </Box>

        <List sx={{ display: { xs: "none", sm: "flex" } }}>
          {navItems.map(({ name, path }) => {
            return (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "inherit",
                  "&:hover": { color: "grey.400" },
                  "&.active": { color: "secondary.main" },
                }}
              >
                {name}
              </ListItem>
            );
          })}
        </List>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {navItems.map(({ name, path }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "inherit",
                  "&:hover": { color: "grey.400" },
                  "&.active": { color: "secondary.main" },
                }}
              >
                {name}
              </ListItem>
            ))}
            {userActions.map(({ name, path }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "inherit",
                  "&:hover": { color: "grey.400" },
                  "&.active": { color: "secondary.main" },
                }}
              >
                {name}
              </ListItem>
            ))}
          </List>
        </Drawer>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", sm: "flex" } }} alignItems={"center"}>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {userActions.map(({ name, path }) => {
              return (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "grey.400" },
                    "&.active": { color: "secondary.main" },
                  }}
                >
                  {name}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
