import React from "react";
import {
  Button,
  Modal,
  Fade,
  Grow,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useStyles } from "./styles";

function AnimatedModal({ open, close, title, text, videoLink }) {
  const classes = useStyles();

  return (
    <div className={classes.container} >
      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        className={classes.modalBackground}
      >
        <Grow in={open} timeout={2500} className={classes.growContent}>
          <Fade in={open} timeout={2500}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <Typography variant="h4" style={{ color: "#3467eb" }}>
                        { title }
                      </Typography>
                      <ExpandMore
                        onClick={close}
                        fontSize="large"
                        style={{cursor: "pointer"}}
                      />
                    </div>
                    <div className={classes.cardBody}>
                      <Typography variante="h6">
                        { text }
                      </Typography>
                    </div>
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
          </Fade>
        </Grow>
      </Modal>
    </div>
  );
}

export default AnimatedModal;
