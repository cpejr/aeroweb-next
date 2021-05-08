import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./courseListDesktopStyle";
import listaCursos from "../../../public/listaCursos";

function CoursesListDesktop({ animationControl, setOpenCurso }) {
  const classes = useStyles();
  const [coursesDesktopClass, setCoursesDesktopClass] = useState(classes.card);

  useEffect(() => {
    if (animationControl === "standby") setCoursesDesktopClass(classes.card);
    else if (animationControl === "hide") setCoursesDesktopClass(classes.cardUp);
    else if (animationControl === "show") setCoursesDesktopClass(classes.cardDown);
  }, [animationControl]);

  return (
    <Card className={coursesDesktopClass}>
      <div className={classes.scrollList}>
        <CardContent className={classes.cardContent}>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            size="small"
            className={classes.buttonsGroup}
          >
            {listaCursos.map((curso, index) => {
              return (
                <Button
                  className={index === 0 ? classes.buttonsListFirst : (index === listaCursos.length - 1 ? classes.buttonsListLast : classes.buttonsList)}
                  onClick={()=>{setOpenCurso({open: true, index: index, style: 'show'})}}
                  variant="text"
                  style={{ textTransform: "none" }}
                >
                  <Typography
                    style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}
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
              )
            })}
          </ButtonGroup>
        </CardContent>
      </div>
    </Card>
  );
}

export default CoursesListDesktop;
