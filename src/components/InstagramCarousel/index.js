import React, { useState, useEffect } from "react";
import { useStyles } from "../../stylesJs/instagramStyle";
import { Card, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import isMobile from "../../utils/isMobile";
import listaPosts from "../../../public/contents/listaPosts"

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
          timeout={1000}
          swipe={false}
          navButtonsAlwaysInvisible={isMobile} 
        >
          {listaPosts.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </Card>
  );
}

export default InstagramCarousel;
