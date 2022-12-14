import Layout from "./Layout";
import { Typography, Card, CardMedia, Box } from "@mui/material";
import logo from "../assets/intuit-logo.png";
const Contact = () => {
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
              Contact
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
          Contact us
        </Typography>
        <Typography variant="subtitle1" component="p">
          You may also book an appointment with an academic coach, contact us at{" "}
          <span className='link'>+968 96716795</span> for more details.
        </Typography>
      </div>
    </Layout>
  );
};

export default Contact;
