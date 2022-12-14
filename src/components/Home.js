import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg3 from "../assets/svg3.svg";
import { Box } from "@mui/system";
import { Button, Grid, Tooltip } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [openToolTip, setOpenToolTip] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrapper">
        <Card sx={{ bgcolor: "lavenderblush" }} elevation={5}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="194"
              image={svg1}
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: { sm: "20vw" },
                width: { sm: "40vw" },
                height: { sm: "270px" },
                objectFit: { xs: "cover", sm: "scale-down" },
              }}
            />
            <CardContent
              sx={{
                padding: 0,
                position: { sm: "absolute" },
                bottom: { sm: "70px" },
                left: { sm: "20px" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  padding: "10px",
                }}
              >
                Intuit
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  padding: "10px",
                }}
              >
                Dream it, Make it happen
              </Typography>
            </CardContent>
            <Button
              onClick={() => {
                navigate("/quiz");
              }}
              variant="contained"
              color="primary"
              sx={{
                position: { sm: "absolute" },
                bottom: { sm: "20px" },
                left: { sm: "10px" },
                marginLeft: "10px",
              }}
            >
              Get Started
            </Button>
          </Box>
          <CardActions disableSpacing>
            <Tooltip title="Link copied to clipboard!" open={openToolTip}>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setTimeout(() => {
                    setOpenToolTip(false);
                  }, 1000);
                  setOpenToolTip(true);
                }}
                aria-label="share"
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="body2">Share</Typography>
          </CardActions>
        </Card>

        <Grid container sx={{ paddingTop: "30px" }} spacing={3}>
          <Grid item md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={svg2}
                  sx={{
                    objectFit: "scale-down",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Academic Guidance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={svg3}
                  sx={{
                    objectFit: "scale-down",
                  }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Learning
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={svg1}
                  sx={{
                    objectFit: "scale-down",
                  }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Critical Thinking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={svg2}
                  sx={{
                    objectFit: "scale-down",
                  }}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lorem ipsum
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default Home;
