import { Typography, Container, Grid } from "@mui/material";

export default function AboutPage() {
  return (
    <Container>
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
    </Container>
  );
}
