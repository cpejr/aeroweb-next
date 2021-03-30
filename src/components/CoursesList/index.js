import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { useStyles } from "./styles";

function CoursesList({ listStyle, openFirst, openSecond, openThird, slideStyle, setSlideStyle }) {
  const classes = useStyles();
  const [listClass, setListClass] = useState(classes.cardButtons)

  useEffect(() => {
    if(listStyle === 'standby') setListClass(classes.cardButtons);
    else if(listStyle === 'hide') setListClass(classes.cardButtonsUp);
    else if(listStyle === 'show') setListClass(classes.cardButtonsDown);
    // console.log(listStyle)
  }, [listStyle]);

  return (
    <Card className={listClass} class="scroll" >
      <CardContent className={classes.cardContentButtons}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          size="small"
          className={classes.buttonsGroup}
        >
          <Button 
            className={classes.buttonsListFirst} 
            onClick={openFirst} 
            variant='text' 
            style={{ textTransform: 'none' }}
          > 
            <Typography style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}>
              Simulados ICAO
            </Typography> 
            <Typography style={{ color: "#ffffff", fontSize: 12, marginLeft: '8px' }}>
               - COMENTADOS
            </Typography> 
          </Button>

          <Button 
            className={classes.buttonsList} 
            onClick={openSecond} 
            variant='text' 
            style={{ textTransform: 'none' }}
          > 
            <Typography style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}>
              Curso Inglês ICAO
            </Typography> 
          </Button>

          <Button 
            className={classes.buttonsListLast} 
            onClick={openThird} 
            variant='text' 
            style={{ textTransform: 'none' }}
          >
            <Typography style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}>
              Curso Cartas Jappesen
            </Typography> 
            
          </Button>

        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default CoursesList;
