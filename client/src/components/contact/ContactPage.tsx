import {
  TextField,
  Button,
  FormControl,
  Typography,
  Container,
} from "@mui/material";

export default function ContactPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <FormControl>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 4 }}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
}
