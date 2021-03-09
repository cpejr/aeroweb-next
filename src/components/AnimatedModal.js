import React, { useState } from 'react'
import { 
  Button, 
  Modal, 
  Fade, 
  Grow, 
  Card, 
  CardContent, 
  CardActions,
  CardMedia,
  makeStyles,
  Typography 
} from '@material-ui/core'
import { ExpandMore } from "@material-ui/icons"
import { useStyles} from "./AnimatedModalStyles";

function AnimatedModal() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      

      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        classNme={classes.modalBackground}
      >
        <Grow in={open} timeout={2500}>
          <Fade in={open} timeout={2500}>
            <div className={classes.fadeRoot}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <Typography variant="h4" style={{ color: '#3467eb' }}>
                        Título do Curso
                      </Typography>
                      <ExpandMore onClick={() => setOpen(false)} fontSize="large" />
                    </div>
                    <div className={classes.cardBody}>
                      <Typography variante="h6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem.
                    </Typography>
                    </div>
                  </div>
                </CardContent>


                <CardActions>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={() => setOpen(false)}
                    >
                      Garanta sua vaga
                    </Button>
                  </div>

                </CardActions>
              </Card>
            </div>
          </Fade>
        </Grow>
      </Modal>
    </div>
  );

}

export default AnimatedModal;