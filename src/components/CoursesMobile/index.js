import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons';
import { useStyles } from "./styles";
import data from '../../../public/data'

function CoursesMobile({ slideCourses, openNthModal, setOpenNthModal }) {
  const classes = useStyles();
  const [slideClass, setSlideClass] = useState(classes.cardButtons)
  
  useEffect(() => {
    if(slideCourses === 'standby') setSlideClass(classes.cardButtons);
    else if(slideCourses === 'hide') setSlideClass(classes.cardButtonsHide);
    else if(slideCourses === 'show') setSlideClass(classes.cardButtonsShow);
    // console.log(listStyle)
  }, [slideCourses]);

  return (
    <Card className={slideClass} >
      <CardContent className={classes.cardContent} style={{ padding: '4px' }}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          size="small"
          className={classes.buttonsGroup}
        >
          {
            data.map((object, index) => {
              return (
                <div className={classes.buttonsLine} >
                  <Button 
                    key={index}
                    className={classes.buttonsList} 
                    variant='text' 
                    onClick={ () => {
                      let updatedArray = [...openNthModal ];
                      updatedArray[index] = true;
                      setOpenNthModal(updatedArray);
                      setSlideClass(classes.cardButtonsHide)
                    }}
                    style={{ textTransform: 'none' }}
                  > 
                    <Typography style={{ color: "#ffffff", fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>
                      {object.title}
                    </Typography> 
                  </Button>

                  <ArrowForwardIos
                    style={{ color: 'white', cursor:  'pointer' }}
                    className={classes.icon}
                  />
                </div>
              )})
          }
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default CoursesMobile;
