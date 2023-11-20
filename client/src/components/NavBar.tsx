import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  childState: string;
  onChange: () => void;
}

export default function NavBar(props: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography> My Shop </Typography>
        <Switch
          checked={props.childState === "dark"}
          onChange={props.onChange}
        />
      </Toolbar>
    </AppBar>
  );
}
