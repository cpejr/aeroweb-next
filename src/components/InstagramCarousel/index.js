import React from "react";
import { useStyles } from "./styles";
import { Card, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

function Item(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      {props.item.map((item) => (
        <a href={item.href} style={{ padding: "2%" }}>
          <img src={item.src} alt={item.alt} width="100%" height="100%" />
        </a>
      ))}
    </div>
  );
}

function InstagramCarousel() {
  const classes = useStyles();
  var items = [
    [
      {
        src: "tailwindPost1.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CMf8NH9J_7t/?igshid=1pelqeaupblvj",
      },
      {
        src: "tailwindPost2.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CMdZD2GJJwL/?igshid=1u3wiwrsmc191",
      },
      {
        src: "tailwindPost3.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CLvA4_eJ6c3/?igshid=1879431vqvt7p",
      },
    ],
    [
      {
        src: "tailwindPost4.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CLVKNdBpVZG/?igshid=tanx49fy5ztm",
      },
      {
        src: "tailwindPost5.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CKUy_4TpFki/?igshid=36fqqj0iv1v6",
      },
      {
        src: "tailwindPost6.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CIoxLfZJQqS/?igshid=1hz0daegrjmpl",
      },
    ],
    [
      {
        src: "tailwindPost7.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CHwEWq2pBA0/?igshid=1iismvpl7clrj",
      },
      {
        src: "tailwindPost8.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CHRP7ubpRWw/?igshid=15uw3c6zrcn5i",
      },
      {
        src: "tailwindPost9.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CG5-koup6jM/?igshid=ryebz8a22eir",
      },
    ],
    [
      {
        src: "tailwindPost10.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CFIoBHbpp6t/?igshid=1bdgphq47ypph",
      },
      {
        src: "tailwindPost11.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CEsb8dzJDC2/?igshid=1g75uuoog549i",
      },
      {
        src: "tailwindPost12.jpg",
        alt: "Probably the most random thing you have ever seen!",
        href: "https://www.instagram.com/p/CE7sgVXJW1n/?igshid=qlih27k2h7w0",
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
        Últimos Posts
      </Typography>
      <Carousel animation="slide" indicators={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Card>
  );
}

export default InstagramCarousel;
