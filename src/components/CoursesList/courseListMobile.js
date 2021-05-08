import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { useStyles } from "../../stylesJs/courseListMobileStyle";
import listaCursos from "../../../public/listaCursos";

function CoursesListMobile({
  setOpenCurso,
  animationControl,
  setAnimationControl,
}) {
  const classes = useStyles();
  const [coursesMobileClass, setCoursesMobileClass] = useState(classes.card);

  useEffect(() => {
    if (animationControl === "standby") setCoursesMobileClass(classes.card);
    else if (animationControl === "hide") setCoursesMobileClass(classes.cardHide);
    else if (animationControl === "show") setCoursesMobileClass(classes.cardShow);
  }, [animationControl]);

  return (
    <Card className={coursesMobileClass}>
      <CardContent className={classes.cardContent}>
        {listaCursos.map((curso, index) => {
          return (
            <div className={classes.buttonsLine} key={index}> 
              <Button
                className={classes.buttonsList}
                variant="text"
                onClick={() => {
                  setOpenCurso({open: true, index: index, style: 'up'});
                  setAnimationControl("fadeIn");
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
                  setAnimationControl("fadeIn");
                }}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default CoursesListMobile;
