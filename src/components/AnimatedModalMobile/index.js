import React from "react";
import { 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Slide, 
  Typography 
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { useStyles } from "./styles";
import LogomarcaAzul from "../../../public/assets/LogomarcaAzul.svg";

function AnimatedModalMobile({ index, upStyle, openNthModal, openNthModalIndex, setOpenNthModal, title, text1, text2, text3, videoLink }) {
  const classes = useStyles();

  if (!openNthModalIndex){
    return null;
  } else {
    return (
      <Card className={classes.card} >
        <CardContent className={classes.cardContent} >
          <div className={classes.cardHeader}>
            <img className={classes.image} src={'/assets/LogomarcaAzul.svg'} />

            <ExpandMore
              fontSize='large'
              className={classes.icon}
              style={{ color: '#3467eb', cursor: 'pointer' }}
              onClick={() => {
                let updatedArray = [...openNthModal ];
                updatedArray[index] = false;
                setOpenNthModal(updatedArray);
              }}
            />

          </div>
          
          <Typography 
            variant="h5" 
            className={classes.title}
            style={{ color: "#3467eb", paddingBottom: '8px', flex: '9', textAlign: 'center', cursor: 'pointer' }}
          >
            {title}
          </Typography>

          <Typography style={{ fontFamily: 'Roboto', color: 'black' }} className={classes.text} >
            {text1} <br/> <br className={classes.line} />
            {text2} <br/> <br className={classes.line} />
            {text3} <br/> <br className={classes.line} />
          </Typography>

          <div className={classes.cardVideo}>

          </div>
        </CardContent>

        <CardActions>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={close}
            >
              Garanta sua vaga
            </Button>
            
          </div>
        </CardActions>
      </Card>
    );
  }

}

export default AnimatedModalMobile;
