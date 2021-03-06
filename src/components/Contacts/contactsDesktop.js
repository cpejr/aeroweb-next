import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useStyles } from "../../stylesJs/contactsDesktopStyle";
import MuiAlert from "@material-ui/lab/Alert";
import { Clear } from "@material-ui/icons";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";

function ContactsDesktop({ animationControl, close }) {
  // variaveis de estilização
  const classes = useStyles();
  const [contactsClass, setContactsClass] = useState(classes.card);

  // variaveis de configuração do emailJs
  const serviceId = "service_cvbz72e";
  const templateId = "template_gw9dj3v";
  const userId = "user_QXyzm2XiqRZOTLl3tqksz";

  // variaveis de input do usuario
  const nameInput = useRef("");
  const emailInput = useRef("");
  const msgInput = useRef("");

  // variaveis do snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // variaveis de validação
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMsgMessage, setErrorMsgMessage] = useState("");

  useEffect(() => {
    if (animationControl === "standby") setContactsClass(classes.card);
    else if (animationControl === "show") setContactsClass(classes.cardShow);
    else if (animationControl === "hide") {
      setContactsClass(classes.cardHide);

      // reseta os campos todos
      setErrorName(false);
      setErrorNameMessage("");
      setErrorEmail(false);
      setErrorEmailMessage("");
      setErrorMsg(false);
      setErrorMsgMessage("");
    }
  }, [animationControl]);

  // função de validação
  function validateInput(type, value) {
    let isValid = true;

    switch (type) {
      case "name":
        value === "" ? (isValid = false) : (isValid = true);
        break;

      case "email":
        if (!value.includes("@") || !value.includes(".com") || value === "") {
          isValid = false;
        } else isValid = true;
        break;

      case "msg":
        value === "" ? (isValid = false) : (isValid = true);
        break;
    }

    return isValid;
  }

  // função ao pressionar enviar
  function handleSend() {
    // validação
    if (!validateInput("name", nameInput.current.value)) {
      setErrorName(true);
      setErrorNameMessage("Nome não pode estar vazio.");
    } else {
      setErrorName(false);
      setErrorNameMessage("");
    }

    if (!validateInput("email", emailInput.current.value)) {
      setErrorEmail(true);
      setErrorEmailMessage("Email inválido.");
    } else {
      setErrorEmail(false);
      setErrorEmailMessage("");
    }

    if (!validateInput("msg", msgInput.current.value)) {
      setErrorMsg(true);
      setErrorMsgMessage("Mensagem não pode estar vazio.");
    } else {
      setErrorMsg(false);
      setErrorMsgMessage("");
    }

    // se estiver tudo OK
    if (
      validateInput("name", nameInput.current.value) &&
      validateInput("email", emailInput.current.value) &&
      validateInput("msg", msgInput.current.value)
    ) {
      setLoading(true);

      // envia o email
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: nameInput.current.value,
            email: emailInput.current.value,
            message: msgInput.current.value,
          },
          userId,
        )
        .then(
          result => {
            console.log(result.text);
            setTimeout(() => {
              setSnackbarMessage("Email enviado com sucesso!");
              setSnackbarType("success");
              setOpenSnackbar(true);
              setLoading(false);
            }, 1000);
          },
          error => {
            console.log(error.text);
            setTimeout(() => {
              setSnackbarMessage("Falha no envio do email.");
              setSnackbarType("error");
              setOpenSnackbar(true);
              setLoading(false);
            }, 1000);
          },
        );
    }
  }

  return (
    <Card style={{ zIndex: "200" }} className={contactsClass}>
      <CardContent className={classes.cardContent}>
        <div className={classes.title}>
          <img
            src="/assets/Tailwind3.svg"
            style={{ height: "75px", fontFamily: "Roboto" }}
            alt="Logomarca da Tailwind Aviation"
          ></img>
          <Typography
            variant="h5"
            style={{ color: "white", textAlign: "center" }}
          >
            Mande sua mensagem
          </Typography>
          <Clear
            className={classes.icon}
            style={{ color: "white", cursor: "pointer" }}
            onClick={close}
          />
        </div>

        <TextField
          fullWidth
          required
          size="small"
          placeholder="NOME"
          label="NOME"
          style={{ marginTop: "8px" }}
          inputRef={nameInput}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssLabel,
            },
            style: { color: "white", fontSize: 12 },
          }}
          InputProps={{
            classes: {
              root: classes.textfield,
              underline: classes.underline,
            },
            style: { color: "white", fontSize: 12 },
          }}
          FormHelperTextProps={{
            style: { color: "orange" },
          }}
          error={errorName}
          helperText={errorNameMessage}
        />
        <TextField
          fullWidth
          required
          size="small"
          placeholder="EMAIL"
          label="EMAIL"
          style={{ marginTop: "8px" }}
          inputRef={emailInput}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssLabel,
            },
            style: { color: "white", fontSize: 12 },
          }}
          InputProps={{
            classes: {
              root: classes.textfield,
              underline: classes.underline,
            },
            style: { color: "white", fontSize: 12 },
          }}
          FormHelperTextProps={{
            style: { color: "orange" },
          }}
          error={errorEmail}
          helperText={errorEmailMessage}
        />

        <TextField
          fullWidth
          required
          size="small"
          placeholder="MENSAGEM"
          label="MENSAGEM"
          style={{ marginTop: "8px" }}
          inputRef={msgInput}
          multiline={true}
          rows="3"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssLabel,
            },
            style: { color: "white", fontSize: 12 },
          }}
          InputProps={{
            classes: {
              root: classes.textfieldMsg,
              underline: classes.underline,
            },
            style: { color: "white", fontSize: 12 },
          }}
          FormHelperTextProps={{
            style: { color: "orange" },
          }}
          error={errorMsg}
          helperText={errorMsgMessage}
        />

        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => handleSend()}
        >
          {loading ? (
            <CircularProgress color="primary" size={32} thickness={2.5} />
          ) : (
            "Enviar"
          )}
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <MuiAlert elevation={6} variant="filled" severity={snackbarType}>
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </CardContent>
    </Card>
  );
}

export default ContactsDesktop;
