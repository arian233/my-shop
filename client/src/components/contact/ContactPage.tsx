import { TextField, Button, Box, FormControl } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
