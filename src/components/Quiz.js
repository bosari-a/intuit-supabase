import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import Layout from "./Layout";
import quizBanner from "../assets/quiz-banner.svg";
import {
  CardContent,
  Divider,
  Typography,
  Grid,
  Paper,
  styled,
  Button,
} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: "80%",
  color: theme.palette.text.primary,
  borderRadius: "0",
  border: "1px solid #d0cacf",
}));

const Quiz = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrapper">
        <Card sx={{ bgcolor: "#fff", width: "100%" }} elevation={5}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <CardMedia component="img" height="194" image={quizBanner} />
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
                SELECTED QUESTIONS FROM THE HOLLAND CODE CAREER TEST
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#8d969f", borderBottomWidth: 3 }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#4b77d9", marginTop: "10px" }}
              >
                Accurate, free test to discover your interests
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Typography
          variant="body1"
          sx={{ marginTop: "30px", padding: "30px", textAlign: "center" }}
        >
          This free career quiz uses the scientific Holland Code model to show
          you which jobs will suit your interests, talents, and aptitude. Get
          scores for 6 major job areas to guide your career planning.
        </Typography>
        <Box
          sx={{
            bgcolor: "#eab676",
            width: "100%",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography>Dislike</Typography>
          <div className="dot"></div>
          <Typography>Neutral</Typography>
          <div className="dot"></div>
          <Typography>Like</Typography>
        </Box>
        <Box
          sx={{ flexGrow: 1, overflow: "hidden", px: 3, bgcolor: "#eeeee4" }}
        >
          <StyledPaper
            sx={{
              bgcolor: "#fff",
              mx: "auto",
              "&:hover": { bgcolor: "#eeeee4" },
            }}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <FormLabel sx={{ color: "black" }}>
                Repair a dish washer
              </FormLabel>
              <form>
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
              </form>
            </Grid>
          </StyledPaper>
          <StyledPaper
            sx={{
              bgcolor: "#fff",
              mx: "auto",
              "&:hover": { bgcolor: "#eeeee4" },
            }}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <FormLabel sx={{ color: "black" }}>
                Code a program that solves an issue
              </FormLabel>
              <form>
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
              </form>
            </Grid>
          </StyledPaper>
          <StyledPaper
            sx={{
              bgcolor: "#fff",
              mx: "auto",
              "&:hover": { bgcolor: "#eeeee4" },
            }}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <FormLabel sx={{ color: "black" }}>
                Review financial records for accuracy
              </FormLabel>
              <form>
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
              </form>
            </Grid>
          </StyledPaper>
          <StyledPaper
            sx={{
              bgcolor: "#fff",
              mx: "auto",
              "&:hover": { bgcolor: "#eeeee4" },
            }}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <FormLabel sx={{ color: "black" }}>Build a robot</FormLabel>
              <form>
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
                <input type="radio" name="group" />
              </form>
            </Grid>
          </StyledPaper>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              display: "block",
              width: "50%",
              margin: "20px auto",
              padding: "10px",
              bgcolor: "#e28743",
              "&:hover": { bgcolor: "#eab676" },
            }}
            onClick={() => navigate("/workshops")}
          >
            Submit
          </Button>
        </Box>
      </div>
    </Layout>
  );
};

export default Quiz;
