import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { useStyles } from "./styles";
import listaCursos from "../../../public/listaCursos";

function CoursesMobile({
  setOpenCurso,
  slideCourses,
  setSlideCourses,
  openNthModal,
  setOpenNthModal,
}) {
  const classes = useStyles();
  const [slideClass, setSlideClass] = useState(classes.cardButtons);

  useEffect(() => {
    if (slideCourses === "standby") setSlideClass(classes.cardButtons);
    else if (slideCourses === "hide") setSlideClass(classes.cardButtonsHide);
    else if (slideCourses === "show") setSlideClass(classes.cardButtonsShow);
    else if (slideCourses === "fadeIn")
      setSlideClass(classes.cardButtonsFadeIn);
    else if (slideCourses === "fadeOut")
      setSlideClass(classes.cardButtonsFadeOut);
  }, [slideCourses]);

  return (
    <Card className={slideClass}>
      <CardContent className={classes.cardContent}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          size="small"
          className={classes.buttonsGroup}
        >
          {listaCursos.map((curso, index) => {
            return (
              <div className={classes.buttonsLine}>
                <Button
                  key={index}
                  className={classes.buttonsList}
                  variant="text"
                  onClick={() => {
                    setOpenCurso({open: true, index: index, style: 'up'});
                    // let updatedArray = [...openNthModal];
                    // updatedArray[index] = true;
                    // setOpenNthModal(updatedArray);
                    setSlideCourses("fadeIn");
                  }}
                  style={{ textTransform: "none" }}
                >
                  <Typography
                    style={{
                      color: "#ffffff",
                      fontWeight: 500,
                      fontSize: 15,
                      cursor: "pointer",
                    }}
                  >
                    {curso.title}
                  </Typography>
                  {curso.subtitle &&
                  <Typography
                    style={{ color: "#ffffff", fontSize: 12, marginLeft: "8px" }}
                  >
                    {curso.subtitle}
                  </Typography>
                  }
                </Button>

                <ArrowForwardIos
                  style={{ color: "white", cursor: "pointer" }}
                  className={classes.icon}
                  onClick={() => {
                    setOpenCurso({open: true, index: index, style: 'up'});
                    // let updatedArray = [...openNthModal];
                    // updatedArray[index] = true;
                    // setOpenNthModal(updatedArray);
                    setSlideCourses("fadeIn");
                  }}
                />
              </div>
            );
          })}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default CoursesMobile;
