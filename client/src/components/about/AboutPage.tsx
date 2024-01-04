import { Typography, Container, Grid, Button } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
  return (
    <Container sx={{ mt: 12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Welcome to our Ski Shop! We are passionate about skiing and
            providing high-quality ski equipment to our customers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Our team of experienced skiers carefully selects the best ski gear
            from top brands to ensure that you have an amazing skiing
            experience.
          </Typography>
        </Grid>
      </Grid>
      <Button onClick={() => agent.TestErrors.get400Error()}>Errors</Button>
    </Container>
  );
}
