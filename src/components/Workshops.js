//import AddCircleIcon from "@mui/icons-material/AddCircle";
import Layout from "./Layout";
import WorkShopCard from "./WorkShopCard";
import financeImg from "../assets/finance.jpg";
import codingImg from "../assets/coding.jpg";
import disciplineImg from "../assets/discipline.jpg";
import roboticsImg from "../assets/robotics.jpg";
import crypto from "../assets/crypto.jpg";
import {
  Typography,
  Card,
  Divider,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import workShopsBanner from "../assets/workshops_banner.svg";

const Workshops = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Card
          sx={{ bgcolor: "#fff", width: "100%", marginBottom: "20px" }}
          elevation={5}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <CardMedia component="img" height="194" image={workShopsBanner} />
            <CardContent sx={{ marginLeft: "20px" }}>
              <Typography
                variant="h4"
                sx={{
                  maxWidth: "fit-content",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
                color="#ec4c9c"
              >
                Workshops and courses for you to learn new valuable skills
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#8d969f", borderBottomWidth: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#4b77d9", marginTop: "10px" }}
              >
                Explore ~ Enroll
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <div className="workshop_grid">
          <WorkShopCard
            subheader="Apply Now!"
            color="green"
            title="Learn about robotics"
            img={roboticsImg}
          />
          <WorkShopCard
            subheader="Unavailable registration"
            title="Learn self discipline"
            img={disciplineImg}
          />
          <WorkShopCard
            subheader="Apply Now!"
            color="green"
            title="Learn coding and programming"
            img={codingImg}
          />
          <WorkShopCard
            subheader="Unavailable registration"
            title="Study financial management"
            img={financeImg}
          />
          <WorkShopCard
            subheader="Apply Now!"
            color="green"
            title="Learn about cryptocurrency"
            img={crypto}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Workshops;
