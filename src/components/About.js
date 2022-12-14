import Layout from "./Layout";
import { Typography, Card, CardMedia, Box } from "@mui/material";
import logo from "../assets/intuit-logo.png";

const About = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Card
          sx={{ bgcolor: "lavenderblush", width: "100%", marginBottom: "20px" }}
          elevation={5}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <CardMedia
              component="img"
              height="94"
              image={logo}
              sx={{
                objectFit: "scale-down",
                width: "fit-content",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                maxWidth: "fit-content",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
              color="#4b77d9"
            >
              About
            </Typography>
          </Box>
        </Card>
        <Typography
          variant="h4"
          sx={{
            maxWidth: "fit-content",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          color="#4b77d9"
        >
          Mission
        </Typography>
        <Typography variant="subtitle1" component="p">
          Our mission is to ensure that every high school student finds the
          tools and resources, whether it's to learn a new skill or plan their
          future goals. That is by creating a stress-free zone where each member
          has the comfort to sync their future goals with full support.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            maxWidth: "fit-content",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          color="#4b77d9"
        >
          Vision
        </Typography>

        <Typography variant="subtitle1" component="p">
          For Intuit to be the leading academic organization in hosting
          workshops and guiding students to their passion and future goals.
        </Typography>
      </div>
    </Layout>
  );
};

export default About;
