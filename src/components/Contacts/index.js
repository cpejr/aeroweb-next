import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import emailjs from 'emailjs-com'
import { useStyles } from "./styles";

function Contacts({ contactStyle }) {
  const classes = useStyles();
  const [contactClass, setContactClass] = useState(classes.cardContacts);

  // variaveis de input do usuario
  const nameInput = useRef('');
  const emailInput = useRef('');
  const msgInput = useRef('');

  // variveis de validação
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMsgMessage, setErrorMsgMessage] = useState('');

  useEffect(() => {
    if(contactStyle === 'standby') setContactClass(classes.cardContacts)
    else if(contactStyle === 'up') setContactClass(classes.cardContactsShow)
    else if(contactStyle === 'down') setContactClass(classes.cardContactsHide)
  }, [contactStyle]);

  // função de validação
  function validateInput(type, value) {
    let isValid = true 

    switch(type) { 
      case 'name':
        value === "" ? (isValid = false) : (isValid = true)
        break

      case 'email':
        if (!value.includes('@') || !value.includes('.com') || value === "") {
          isValid = false
        } else isValid = true
        break
      
      case 'msg': 
        value === "" ? (isValid = false) : (isValid = true)
        break
    }

    return isValid
  }

  // função ao pressionar enviar
  function handleSend() {

    // validação
    if(!validateInput('name', nameInput.current.value)) {
      setErrorName(true)
      setErrorNameMessage('Nome não pode estar vazio.')
    } else {
      setErrorName(false)
      setErrorNameMessage('')
    }

    if(!validateInput('email', emailInput.current.value)) {
      setErrorEmail(true);
      setErrorEmailMessage('Email inválido.')
    } else {
      setErrorEmail(false)
      setErrorEmailMessage('')
    }

    if(!validateInput('msg', msgInput.current.value)) {
      setErrorMsg(true);
      setErrorMsgMessage('Mensagem não pode estar vazio.')
    } else {
      setErrorMsg(false)
      setErrorMsgMessage('')
    }

    // se estiver tudo OK
    if(validateInput('name', nameInput.current.value) &&
      validateInput('email', emailInput.current.value) && 
      validateInput('msg', msgInput.current.value)) {
      
      emailjs.send("service_p5jlw0d", "template_d282t06", {
        name: nameInput.current.value,
        email: emailInput.current.value,
        message: msgInput.current.value,
      }, "user_gLVfhvvveWgsdihdNm20d").then((result) => console.log(result.text), 
      (error) => console.log(error.text));
    }

  }

  return (
    <Card style={{ zIndex: '200' }} className={contactClass}>
      <CardContent className={classes.cardContentContacts}>
        <Typography variant="h5" style={{ color: "#ffffff" }} >
          Mande sua mensagem
        </Typography>
        <TextField 
          fullWidth
          placeholder="Nome"
          style={{ marginTop: '32px' }}
          inputRef={nameInput}
          
          error={errorName}
          helperText={errorNameMessage}
        />
        <TextField 
          fullWidth
          placeholder="Email"
          style={{ marginTop: '8px' }}
          inputRef={emailInput}

          error={errorEmail}
          helperText={errorEmailMessage}
        />

        <TextField 
          fullWidth
          placeholder="Mensagem"
          style={{ marginTop: '8px' }}
          inputRef={msgInput}

          multiline={true}
          rows="3"

          error={errorMsg}
          helperText={errorMsgMessage}
        />

        <Button
          variant='outlined'
          className={classes.buttonContacts}
          onClick={() => handleSend()}
        
        >
          Enviar Mensagem
        </Button>

      </CardContent>
    </Card>
  );
}

export default Contacts;
