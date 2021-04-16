import React from "react";
import { useStyles } from "./styles";
import { Card, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Item(props) {
  return (
    <Paper>
      {props.item.map((item, i) => (
        <a>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </a>
      ))}
    </Paper>
  );
}

function InstagramCarousel() {
  const classes = useStyles();
  var items = [
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #2",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #3",
        description: "Probably the most random thing you have ever seen!",
      },
    ],
    [
      {
        name: "Random Name #4",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #5",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #6",
        description: "Hello World!",
      },
    ],
  ];

  return (
    <Card className={classes.divFeedInstagram}>
      <img src="/assets/union.svg" className={classes.logoTitle} />
      <Typography
        style={{
          position: "relative",
          bottom: "24px",
          color: "white",
          fontSize: "24px",
          fontFamily: "Roboto",
        }}
      >
        Nosso Instagram
      </Typography>
      <Carousel>
        {items.map((item, i) => (
          <Item
            style={{ display: "flex", flexDirection: "row" }}
            key={i}
            item={item}
          />
        ))}
      </Carousel>
    </Card>
  );
}

export default InstagramCarousel;
