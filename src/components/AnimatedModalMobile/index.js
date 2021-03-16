import React from 'react'
import { 
  Modal, 
  Card, 
  CardContent, 
  Slide,
  Typography 
} from '@material-ui/core'
import { ExpandMore, ExpandLess } from "@material-ui/icons"
import { useStyles} from "./styles";

function AnimatedModal({open, setOpen, slideStyle, setSlideStyle}) {

  const classes = useStyles();

  return (
    <div className={classes.container}>
     <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        classNme={classes.modalBackground}
      >
        <Slide direction="left" in={open} timeout={1500}>
          <div className={slideStyle}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.cardContent}>
                  <div className={classes.cardTitle}>
                    <Typography variant="h4" style={{ color: "#3467eb" }}>
                      Quem Somos
                    </Typography>
                    {slideStyle === classes.cardMobileUp && (
                      <ExpandMore
                        onClick={() => {
                          setSlideStyle(classes.cardMobileDown);
                          setTimeout(() => {
                            setSlideStyle(classes.cardMobile);
                          }, 1500); // epsera a animação acaba
                        }}
                        fontSize="large"
                      />
                    )}
                    {slideStyle !== classes.cardMobileUp && (
                      <ExpandLess
                        onClick={() => setSlideStyle(classes.cardMobileUp)}
                        fontSize="large"
                      />
                    )}
                  </div>

                  <div className={classes.cardBody}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam auctor in mi ut egestas. Phasellus mi neque,
                      viverra sed pulvinar sit amet, eleifend non ante.
                      Phasellus vel nibh tempor, tincidunt tortor nec, molestie
                      nibh. Morbi nec odio volutpat, mollis quam a, fringilla
                      urna. Cras iaculis velit risus, convallis vestibulum urna
                      sollicitudin et. Aenean id ex finibus, rutrum enim sed,
                      semper ante. In aliquam, arcu id consectetur euismod,
                      purus turpis tincidunt felis, vitae dapibus erat sem quis
                      turpis. Mauris non scelerisque lorem, ac ornare nulla.
                      Mauris venenatis elit id tellus convallis tempus. In
                      blandit vulputate eros, a rutrum purus. Aliquam eu mi at
                      diam bibendum mollis convallis et sem.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Slide>
      </Modal>
    </div>
  );

}

export default AnimatedModal;