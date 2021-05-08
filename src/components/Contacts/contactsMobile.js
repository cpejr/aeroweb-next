import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { useStyles } from "../../stylesJs/contactsMobileStyle";
import MuiAlert from "@material-ui/lab/Alert";
import {
  ExpandMore,
  ExpandLess,
  Facebook,
  Instagram,
  YouTube,
} from "@material-ui/icons";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";

function ContactsMobile({ animationControl }) {
  // variaveis de estilização
  const classes = useStyles();
  const [contactsMobileClass, setContactsMobileClass] = useState(classes.card);
  const [isUp, setIsUp] = useState(false);

  // variaveis de configuração do emailJs
  const serviceId = "service_p5jlw0d";
  const templateId = "template_d282t06";
  const userId = "user_gLVfhvvveWgsdihdNm20d";

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
    if (animationControl === "standby") setContactsMobileClass(classes.card);
    else if (animationControl === "show")
      setContactsMobileClass(classes.cardShow);
    else if (animationControl === "hide") {
      setContactsMobileClass(classes.cardHide);

      resetFields();
    }
  }, [animationControl]);

  function resetFields() {
    // reseta os campos todos
    setErrorName(false);
    setErrorNameMessage("");
    setErrorEmail(false);
    setErrorEmailMessage("");
    setErrorMsg(false);
    setErrorMsgMessage("");
  }

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

  function handleTitleClick() {
    if (isUp) {
      setContactsMobileClass(classes.cardDown);
      setIsUp(false);

      resetFields();
    } else {
      setContactsMobileClass(classes.cardUp);
      setIsUp(true);
    }
  }

  return (
    <Card style={{ zIndex: "200" }} className={contactsMobileClass}>
      <CardContent className={classes.cardContent}>
        <div className={classes.title}>
          <Typography
            style={{
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              cursor: "pointer",
              flex: 9,
            }}
            onClick={() => handleTitleClick()}
          >
            Mande sua mensagem
          </Typography>
          {isUp ? (
            <ExpandMore
              fontSize="large"
              style={{ color: "white", cursor: "pointer", flex: 1 }}
              onClick={() => {
                setContactsMobileClass(classes.cardDown);
                setIsUp(false);
                resetFields();
              }}
            />
          ) : (
            <ExpandLess
              fontSize="large"
              style={{ color: "white", cursor: "pointer", flex: 1 }}
              onClick={() => {
                setContactsMobileClass(classes.cardUp);
                setIsUp(true);
              }}
            />
          )}
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
          rows="5"
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
          onClick={() => handleSend()}
          style={{ marginTop: "16px", backgroundColor: "white" }}
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

        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            width: "100%",
            marginTop: "16px",
          }}
        >
          contato@twcourses.com.br
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          31 0000-0000
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          endereço, n° 00
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          Bairro
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          Belo Horizonte
        </Typography>

        <div className={classes.appBarIcons}>
          <a
            href="https://www.instagram.com/tailwindaviation_/?igshid=e1xunf1mbnxw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className={classes.icon} />
          </a>
          <a
            href="https://www.facebook.com/tailwindaviation_-101677271700685/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className={classes.icon} style={{ marginLeft: "16px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKyRogxlGFKulDlpBgfnokA/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube className={classes.icon} style={{ marginLeft: "16px" }} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactsMobile;
