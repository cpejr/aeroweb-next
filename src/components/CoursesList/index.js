import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import listaCursos from "../../../public/listaCursos";

function CoursesList({
  listStyle,
  setOpenCurso,
  slideStyle,
  setSlideStyle,
}) {
  const classes = useStyles();
  const [listClass, setListClass] = useState(classes.cardButtons);

  useEffect(() => {
    if (listStyle === "standby") setListClass(classes.cardButtons);
    else if (listStyle === "hide") setListClass(classes.cardButtonsUp);
    else if (listStyle === "show") setListClass(classes.cardButtonsDown);
  }, [listStyle]);

  return (
    <Card className={listClass}>
      <div className={classes.scrollList}>
        <CardContent className={classes.cardContentButtons}>
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

export default CoursesList;
