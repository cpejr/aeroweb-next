import React, { useState, useEffect } from "react";
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

function Contacts({ contactStyle }) {
  const classes = useStyles();
  const [contactClass, setContactClass] = useState(classes.cardContacts);

  useEffect(() => {
    if(contactStyle === 'standby') setContactClass(classes.cardContacts)
    else if(contactStyle === 'up') setContactClass(classes.cardContactsShow)
    else if(contactStyle === 'down') setContactClass(classes.cardContactsHide)
  }, [contactStyle]);

  return (
    <Card style={{ zIndex: '200' }} className={contactClass}>
      <CardContent>
        <Typography variant="h6" >
          TEXTO TEXTO
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Contacts;
