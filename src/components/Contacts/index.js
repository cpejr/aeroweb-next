import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import { useStyles } from "./styles";
import {
  Button,
  Card,
  CardContent,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Contacts({ contactStyle }) {
  // variaveis de estilização
  const classes = useStyles();
  const [contactClass, setContactClass] = useState(classes.cardContacts);

  // variaveis de configuração do emailJs
  const serviceId = "service_p5jlw0d";
  const templateId = "template_d282t06";
  const userId = "user_gLVfhvvveWgsdihdNm20d";

  // variaveis de input do usuario
  const nameInput = useRef('');
  const emailInput = useRef('');
  const msgInput = useRef('');

  // variaveis do snackbar
  const [openSnackbar,setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // variveis de validação
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMsgMessage, setErrorMsgMessage] = useState('');

  useEffect(() => {
    if(contactStyle === 'standby') setContactClass(classes.cardContacts);
    else if(contactStyle === 'up') setContactClass(classes.cardContactsShow);
    else if(contactStyle === 'down') setContactClass(classes.cardContactsHide);
  }, [contactStyle]);

  // função de validação
  function validateInput(type, value) {

    let isValid = true;

    switch(type) { 
      case 'name':
        value === "" ? (isValid = false) : (isValid = true);
        break;

      case 'email':
        if (!value.includes('@') || !value.includes('.com') || value === "") {
          isValid = false;
        } else isValid = true;
        break;
      
      case 'msg': 
        value === "" ? (isValid = false) : (isValid = true);
        break;
    }

    return isValid;
  }

  // função ao pressionar enviar
  function handleSend() {

    // validação
    if(!validateInput('name', nameInput.current.value)) {
      setErrorName(true);
      setErrorNameMessage('Nome não pode estar vazio.');
    } else {
      setErrorName(false);
      setErrorNameMessage('');
    }

    if(!validateInput('email', emailInput.current.value)) {
      setErrorEmail(true);
      setErrorEmailMessage('Email inválido.');
    } else {
      setErrorEmail(false);
      setErrorEmailMessage('');
    }

    if(!validateInput('msg', msgInput.current.value)) {
      setErrorMsg(true);
      setErrorMsgMessage('Mensagem não pode estar vazio.');
    } else {
      setErrorMsg(false);
      setErrorMsgMessage('');
    }

    // se estiver tudo OK
    if(validateInput('name', nameInput.current.value) &&
      validateInput('email', emailInput.current.value) && 
      validateInput('msg', msgInput.current.value)) {
      
        // envia o email
        emailjs.send(serviceId, templateId, {
          name: nameInput.current.value,
          email: emailInput.current.value,
          message: msgInput.current.value,
        }, userId)
        .then(
          (result) => {
          console.log(result.text);
          setSnackbarMessage('Email enviado com sucesso!');
          setSnackbarType('success');
          }, 
          (error) => {
            console.log(error.text);
            setSnackbarMessage('Falha no envio do email.');
            setSnackbarType('error');
          });

      setOpenSnackbar(true);
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
          required
          size='small'
          placeholder="Nome"
          label="Nome"
          style={{ marginTop: '8px' }}
          inputRef={nameInput}
          
          error={errorName}
          helperText={errorNameMessage}
        />
        <TextField 
          fullWidth
          required
          size='small'
          placeholder="Email"
          label="Email"
          style={{ marginTop: '8px' }}
          inputRef={emailInput}

          error={errorEmail}
          helperText={errorEmailMessage}
        />

        <TextField 
          fullWidth
          required
          size='small'
          placeholder="Mensagem"
          label="Mensagem"
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

        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={3000} 
          onClose={() => setOpenSnackbar(false)}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity={snackbarType}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>

      </CardContent>
    </Card>
  );
}

export default Contacts;
