import React, { useState, useEffect } from "react";
import { useStyles } from "../../stylesJs/instagramStyle";
import { Card, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import isMobile from "../../utils/isMobile";

function Item(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden" }}
    >
      {props.item.map((item, index) => (
        <a
          key={index}
          href={item.href}
          style={{ padding: "2%", height: "100%", width: "100%" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.src} alt={item.alt} style={{
            height: "100%",
            width: "100%"
          }} />
        </a>
      ))}
    </div>
  );
}

function InstagramCarousel({ animationControl }) {
  const classes = useStyles();
  const [carouselClass, setCarouselClass] = useState(classes.card);

  useEffect(() => {
    if (animationControl === "standby") setCarouselClass(classes.card);
    if (animationControl === "show") setCarouselClass(classes.cardShow);
    if (animationControl === "hide") setCarouselClass(classes.cardHide);
  }, [animationControl]);

  let items = [
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
    <Card className={carouselClass}>
      <img src="/assets/Union.svg" className={classes.logoTitle} />
      <Typography
        style={{
          marginBottom: "8px",
          color: "white",
          fontFamily: "Roboto",
          fontSize: "20px",
        }}
      >
        Últimos Posts
      </Typography>
      {/* precisa da div para esconder o overflow ao carregar imagem */}
      <div className={classes.carouselContainer}> 
        <Carousel 
          animation="slide" 
          indicators={false}
          interval={8000}
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
          swipe={false} 
          navButtonsAlwaysInvisible={isMobile} 
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      
    </Card>
  );
}

export default InstagramCarousel;
