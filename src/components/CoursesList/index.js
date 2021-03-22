import React from "react";
import {
  Card,
  CardContent,
  ButtonGroup,
  Button
} from '@material-ui/core'
import { useStyles } from "./styles";

function CoursesList({ listStyle, openFirst, openSecond, openThird, slideStyle, setSlideStyle }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={listStyle}>
        <CardContent className={classes.cardContentButtons}>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            size="small"
            className={classes.buttonsGroup}
          >
            <Button className={classes.buttonsList} onClick={openFirst} variant='text'> Simulados ICAO - comentados</Button>
            <Button className={classes.buttonsList} onClick={openSecond} variant='text'> Curso Inglês ICAO</Button>
            <Button className={classes.buttonsList} onClick={openThird} variant='text'> Curso Cartas Jappesen</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </div>
  );
}

export default CoursesList;
