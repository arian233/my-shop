import { ShoppingCart } from "@mui/icons-material";
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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Catalog", path: "/catalog" },
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
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            component={NavLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", variant: "h6" }}
          >
            My Shop
          </Typography>
          <Switch
            checked={props.childState === "dark"}
            onChange={props.onChange}
          />
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
