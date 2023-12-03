import { ShoppingCart } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  childState: string;
  onChange: () => void;
}

export default function NavBar(props: Props) {
  const navItems = [
    { name: "Catalog", path: "/catalog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const userActions = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

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

        <List sx={{ display: "flex" }}>
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

        <Box display={"flex"} alignItems={"center"}>
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
