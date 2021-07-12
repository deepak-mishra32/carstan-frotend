import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/Constant";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./styles/CarDisplay.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "10px",
    // minWidth: 150,
    // maxWidth: 150,
    // minHeight: 350,
  },
  img: {
    height: 160,
    // minHeight: 160,
    boxShadow: "1px 2px 8px 3px #888888",
  },
});

function CarsDisplay(props) {
  const classes = useStyles();
  const cars = props.props;
  return (
    <Grid container>
      {cars.map((car) => (
        <Grid item sm={12} m={4} lg={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.img}
                image={`${IMG_URL}${car.image1}`}
                title={car.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {car.company} {car.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  &#8377;
                  {car.price} Lakhs
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link
                id="link"
                to={{
                  pathname: `/product/${car.name}`,
                }}
              >
                <Button size="small" color="primary" id="button">
                  View
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CarsDisplay;
