import {
  TextField,
  Button,
  FormControl,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all the fields.");
      return;
    }

    fetch("https://formcarry.com/s/16fmEuNMRP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return (
      <Typography variant="h4" sx={{ mt: 12, textAlign: "center" }}>
        {error}
      </Typography>
    );
  }

  if (submitted) {
    return (
      <Typography variant="h4" sx={{ mt: 12, textAlign: "center" }}>
        We've received your message, thank you for contacting us!
      </Typography>
    );
  }

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
        Contact Us
      </Typography>
      <form onSubmit={submit}>
        <FormControl>
          <TextField
            sx={{ my: 2 }}
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!emailRegex.test(email) || !name || !message}
            sx={{ mt: 4 }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
