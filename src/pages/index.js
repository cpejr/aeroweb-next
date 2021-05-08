import React, { useState, useRef, useEffect } from "react";
import isMobile from "./isMobile"; // usa para ver se é mobile ou não
import listaCursos from "../../public/listaCursos";

// estilização
import useStyles from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";

// componentes
import AnimatedModal from "../components/AnimatedModal/index";
import AnimatedModalMobile from "../components/AnimatedModalMobile/index";
import Footer from "../components/Footer/index";
import Contacts from "../components/Contacts/contacts";
import QuemSomos from "../components/QuemSomos/quemSomos";
import CoursesList from "../components/CoursesList/courseList";

import InstagramCarousel from "../components/InstagramCarousel";

import { NextSeo } from "next-seo";
import { SettingsPhone } from "@material-ui/icons";

function Home() {
  <>
    <NextSeo
      title="Tailwind Aviation"
      description="Os melhores cursos de aviação."
      openGraph={{
        url: "https://www.twcourses.com.br",
        title: "Tailwind Aviation",
        description: "Cursos de Aviação, confira nossas redes sociais",
        images: [
          {
            url:
              "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 800,
            height: 600,
            alt: "Um avião",
          },
        ],
        site_name: "Tailwind Aviation",
      }}
      instagram={{
        handle: "@tailwindaviation_",
        site: "@twcourses.com.br",
        cardType: "Imagem",
      }}
    />
  </>;

  const classes = useStyles();

  // variaveis da animacao
  let selectedComp;
  const [responseSize, setResponseSize] = useState("");
  const [union, setUnion] = useState("");
  const [posBackground, setPosBackground] = useState(90);
  const [selected, setSelected] = useState();
  const [posX, setPosX] = useState("18vw");
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState("22vh");
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(0);

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [quemSomosControl, setQuemSomosControl] = useState('standby');
  const [openMobile, setOpenMobile] = useState(false);

  // Parâmetros para o novo gradiente:
  const [newGradient, setNewGradient] = useState();
  const [oldGradient, setOldGradient] = useState(
    "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
  );
  const [change, setChange] = useState(false);
  const cursosGradient = "linear-gradient(258.81deg, #78CBEE -18.81%, #0E41C5 109.84%)";
  const quemSomosGradient =
    "linear-gradient(346.31deg, #78CBEE 16.62%, #0E41C5 99.07%)";
  const contatoGradient = "linear-gradient(83.83deg, #78CBEE 3.06%, #0E41C5 96.88%)";
  const [size, setSize] = useState(null);

  // variaveis da animacao dos modais
  // const [styleFirst, setStyleFirst] = useState('standby');
  // const [styleSecond, setStyleSecond] = useState('standby');
  // const [styleThird, setStyleThird] = useState('standby');
  const [listStyle, setListStyle] = useState("standby");
  const [quemSomosMobileControl, setQuemSomosMobileControl] = useState("standby");
  const [contactsControl, setContactsControl] = useState("standby");
  const [contactsMobileControl, setContactsMobileControl] = useState("standby");
  const [carouselControl, setCarouselControl] = useState('standby');
  const [slideCourses, setSlideCourses] = useState("standby");

  const [openCurso, setOpenCurso] = useState({open: false, index: null, style: ''});

  const [openNthModal, setOpenNthModal] = useState([]);
  const [modalStyle, setModalStyle] = useState('standby');

  // variaveis das linhas do avião
  const [isPhone, setPhone] = useState();
  const [isResponsive1, setResponsive1] = useState();
  const [isResponsive2, setResponsive2] = useState();

  // gambiarra do listaCursos.js
  // listaCursos[0].open = styleFirst;
  // listaCursos[1].open = styleSecond;
  // listaCursos[2].open = styleThird;

  // --------------------------------- //

  // reset do array dos modais ao carregar pagina
  useEffect(() => {
    let auxArray = [];
    for (let i = 0; i < listaCursos.length; ++i) {
      auxArray.push(false);
    }

    setOpenNthModal(auxArray);

    if (isMobile) setPhone(true);
  }, []);

  function windowSize() {
    let proposedWidth = window.innerWidth / 40;

    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  }

  useEffect(() => {
    setSize(windowSize());
  }, []);

  useEffect(()=>{
    const checkDisplay = () =>{
      setPhone(window.matchMedia("(max-width: 415px)").matches);
      setResponsive1(window.matchMedia("(max-width: 800px)").matches);
      setResponsive2(window.matchMedia("(max-width: 1000px)").matches);
    }

    window.addEventListener('resize',checkDisplay);
    return () => {
      window.removeEventListener('resize',checkDisplay);
    }
  }, [isPhone, isResponsive1, isResponsive2])

  useEffect(() => {
    var aux = window.innerWidth;
    if (aux < 500) {
      setResponseSize("/assets/TAILWINDAVIATION.svg");
      setUnion("/assets/Union.svg");
    } else {
      setResponseSize("/assets/Logomarca.svg");
      setUnion("");
    }
    return responseSize;
  }, []);

  function home(e) {
    //Para a animação da linha:
    setPosBackground(90);
    //Para saber em qual componente está:
    selectedComp = "HOME";
    setSelected(selectedComp);
    // Para a animação do gradiente:
    setNewGradient(
      "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
    );
    setChange(true);
    setTimeout(() => {
      setOldGradient(
        "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
      );
    }, 1000);

    // Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    if(isPhone){
      setPosX("20vw");
      setPosY("37vh");
    }else if(isResponsive1){
      setPosX("26vw");
      setPosY("26vh");
    }else if(isResponsive2){
      setPosX("18vw");
      setPosY("33vh");
    }else{
      setPosX("18vw");
      setPosY("22vh");
    }
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controla dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && quemSomosMobileControl !== "standby") setQuemSomosMobileControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
    if (isMobile && carouselControl === 'hide') setCarouselControl('show');
    if (!isMobile && carouselControl !== 'standby') setCarouselControl('show');
    if (!isMobile && modalStyle !== "standby") setModalStyle("hide");

    if (!isMobile && quemSomosControl !== 'standby') setQuemSomosControl('hide');
  }

  function cursos(e) {
    //Para a animação da linha:
    setPosBackground(60);
    //Para saber em qual componente está:
    selectedComp = "CURSOS";
    setSelected(selectedComp);
    //Para a animação do gradiente:
    setNewGradient(cursosGradient);
    setChange(true);
    setTimeout(() => {
      setOldGradient(cursosGradient);
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    if(isPhone){
      setPosX("40vw");
      setPosY("45vh");
    }else if(isResponsive1){
      setPosX("42vw");
      setPosY("41vh");
    }else if(isResponsive2){
      setPosX("39vw");
      setPosY("39vh");
    }else{
      setPosX("39vw");
      setPosY("31vh");
    }
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);


    //Para a animação do modalQuemSomos:
    setTimeout(() => {
      setOpen(true);
    }, 1200);

    // controle dos modais
    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");
    if (isMobile && quemSomosMobileControl !== "standby") setQuemSomosMobileControl("hide");
    if (listStyle === "standby" || listStyle === "hide") {
      setListStyle("show");
    } else {
      setListStyle("hide");
    }
    if (isMobile && slideCourses !== "show") {
      setSlideCourses("show");
    } else {
      setSlideCourses("hide");
    }
    if (isMobile && carouselControl !== 'hide') setCarouselControl('hide');
    if (!isMobile && carouselControl !== 'standby') setCarouselControl('show');
    if (!isMobile && modalStyle !== "show") {
      setModalStyle("show");
    } else {
      setModalStyle("hide");
    }

    if (!isMobile && quemSomosControl !== 'standby') setQuemSomosControl('hide');
  }

  function quemSomos(e) {
    //Para a animação da linha:
    setPosBackground(30);
    //Para saber em qual componente está:
    selectedComp = "QUEMSOMOS";
    setSelected(selectedComp);
    //Para a animação do gradiente:
    setNewGradient(quemSomosGradient);
    setChange(true);
    setTimeout(() => {
      setOldGradient(quemSomosGradient);
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    if(isPhone){
      setPosX("49vw");
      setPosY("57vh"); 
    }else if(isResponsive1){
      setPosX("47vw");
      setPosY("60vh");
    }else if(isResponsive2){
      setPosX("55vw");
      setPosY("57vh");     
    }else{
      setPosX("55vw");
      setPosY("59vh");
    }
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    setOpenMobile(true);

    // controle dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");
    if (isMobile && quemSomosMobileControl !== "show") {
      setQuemSomosMobileControl("show");
    } else {
      setQuemSomosMobileControl("hide");
    }
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
    if (isMobile && carouselControl !== 'hide') setCarouselControl('hide');
    if (!isMobile && carouselControl !== 'standby') setCarouselControl('show');
    if (!isMobile && modalStyle !== "standby") setModalStyle("hide");
    if (!isMobile && quemSomosControl !== "show") {
      setTimeout(() => setQuemSomosControl("show"), 1000);
    } else {
      setQuemSomosControl("hide");
    }
  }

  function contato(e) {
    //Para a animação da linha:
    setPosBackground(0);
    //Para saber em qual componente está:
    selectedComp = "CONTATO";
    setSelected(selectedComp);
    //Para a animação do gradiente:
    setNewGradient(contatoGradient);
    setChange(true);
    setTimeout(() => {
      setOldGradient(contatoGradient);
    }, 1000);

    //Para a animação do avião:
    const x = e.clientX;
    const y = e.clientY;

    let newAngle =
      (180 / Math.PI) * Math.atan2(posYAngle - y, x - posXAngle) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 };

    setFlying(true);

    setAngle(360 - newAngle);

    if(isPhone){
      setPosX("69vw");
      setPosY("70vh");
    }else if(isResponsive1){
      setPosX("60vw");
      setPosY("80vh");
    }else if(isResponsive2){
      setPosX("71vw");
      setPosY("68vh");    
    }else{
      setPosX("71vw");
      setPosY("76vh");
    }
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controle dos modais
    if (listStyle !== "standby") setListStyle("hide");
    if (isMobile && quemSomosMobileControl !== "standby") setQuemSomosMobileControl("hide");
    if ((!isMobile && contactsControl === "standby") || contactsControl === "hide") {
      setContactsControl("show");
    } else {
      setContactsControl("hide");
    }
    if (
      (isMobile && contactsMobileControl === "standby") ||
      contactsMobileControl === "hide"
    ) {
      setContactsMobileControl("show");
    } else {
      setContactsMobileControl("hide");
    }
    if (isMobile && slideCourses !== "standby") setSlideCourses("hide");
    if (isMobile && carouselControl !== 'hide') setCarouselControl('hide');
    if (!isMobile && carouselControl === 'show' || carouselControl === 'standby') {
      setCarouselControl('hide');
    } else if (!isMobile && carouselControl === 'hide') {
      setCarouselControl('show');
    }
    if (!isMobile && modalStyle !== "standby") setModalStyle("hide");
    if (!isMobile && quemSomosControl !== 'standby') setQuemSomosControl('hide');
  }

  function closeModal() {
    setOpenCurso({open: false, index: null, style: ''})
    // setStyleFirst('hide');
    // setStyleSecond('hide');
    // setStyleThird('hide');
  }

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainerChildren}>
        <div
          className={classes.planeContainer}
          style={{
            position: "absolute",
            left: posX,
            top: posY,
            transform: `rotate(${angle}deg)`,
            transformOrigin: "center",
            width: size,
            height: size,
            zIndex: "200",
          }}
        >
          <img
            className={"plane" + (flying ? " flying" : "")}
            src="/assets/AviaoIcon.svg"
            width={40}
            height={40}
            onAnimationEnd={(e) => {
              setFlying(false);
            }}
          />
        </div>

        <div
          className={styles.gradientVelho}
          style={{ backgroundImage: oldGradient }}
        >
          <div
            className={
              change ? styles.gradienteMutavel : styles.gradienteImutavel
            }
            onAnimationEnd={() => {
              setChange(false);
            }}
            style={{ backgroundImage: newGradient }}
          />
            <div
              className={classes.planeContainer}
              style={{
                position: "absolute",
                left: "4vw",
                top: "65vh",
                margin: "0",
                transformOrigin: "center",
                width: "38vw",
                zIndex: "200",
                color: "#fff",
              }}
            >
              {
                !isMobile && (
                  <>
                    <h1 className={classes.footerTitle1}>INVISTA HOJE NO SEU FUTURO</h1>
                    <h1 className={classes.footerTitle2}>E DÊ ASAS AO SEU SONHO</h1>
                  </>
                )
              }
             
            </div>
          
          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              transitionDuration: "2.5s",
              backgroundPositionY: -200,
              height: "100vh",
            }}
          />
          <div
            className={classes.planeContainerMobile}
            style={{
              width: size,
              height: size,
            }}
          >
            <img className={styles.logo2} src={union} />
          </div>
          <div
            className={classes.planeContainer}
            style={{
              width: size,
              height: size,
            }}
          >
            <img className={styles.logo} src={responseSize}/>
          </div>

          <div className={classes.rotaContainer} style={{position: 'absolute', zIndex: '90'}}>
            {(isPhone || isResponsive1)? <img src="/assets/RotaMobile.svg" style={{height: '75vh', width: '83vw', marginTop: '15vh'}}/>:
            <img src="/assets/RotaDesktop.svg" style={{height: '75vh', width: '83vw', marginTop: '15vh'}}/>}
          </div>

          <div className={classes.buttonHome} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={home}
              style={
                selected === "HOME"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              HOME
            </p>
          </div>
          <div className={classes.button2} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={cursos}
              style={
                selected === "CURSOS"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              CURSOS
            </p>
          </div>

          <div className={classes.button3} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={quemSomos}
              style={
                selected === "QUEMSOMOS"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              QUEM SOMOS
            </p>
          </div>
          <div className={classes.button4} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={contato}
              style={
                selected === "CONTATO"
                  ? {
                      cursor: "pointer",
                      transition: "font-size 1.5s",
                      fontSize: "1.25rem",
                    }
                  : { cursor: "pointer" }
              }
            >
              CONTATO
            </p>
          </div>
        </div>
      </div>

      <InstagramCarousel animationControl={carouselControl} />

        <CoursesList
          slideCourses={slideCourses}
          openNthModal={openNthModal}
          setOpenNthModal={setOpenNthModal}
          setSlideCourses={setSlideCourses}
          listStyle={listStyle}
          setOpenCurso={setOpenCurso}
        />

        <QuemSomos
          quemSomosMobileControl={quemSomosMobileControl}
          setQuemSomosMobileControl={setQuemSomosMobileControl}
          quemSomosControl={quemSomosControl}
          setQuemSomosControl={setQuemSomosControl}
        />
        <Contacts
          contactsMobileControl={contactsMobileControl}
          setContactsMobileControl={setContactsMobileControl}
          contactsControl={contactsControl}
          setContactsControl={setContactsControl}
          setCarouselControl={setCarouselControl}
        />

      {!isMobile && <Footer />}

      

      {/* {
        // Modais de transição DESKTOP
        !isMobile &&
          listaCursos.map((object, index) => {
            return (
              <AnimatedModal
                key={index}
                open={object.open}
                close={closeModal}
                title={object.title}
                text1={object.text1}
                text2={object.text2}
                text3={object.text3}
              />
            );
          })
      } */}

      {
        // Modais de transição DESKTOP
        openCurso.open &&
        (
          // Modais de transição MOBILE
          isMobile ?
              <AnimatedModalMobile
                key={openCurso.index}
                index={openCurso.index} // precisa desse pq key é impossível acessar, 'key' é palavra reservada
                openNthModal={openNthModal}
                openNthModalIndex={openNthModal[openCurso.index]} // precisa desse para evitar crash
                styleModal={openCurso.style}
                close={closeModal}
                setOpenNthModal={setOpenNthModal}
                setSlideCourses={setSlideCourses}
                indexCurso={openCurso.index}
              />
            :
            <AnimatedModal
              key={openCurso.index}
              styleModal={openCurso.style}
              close={closeModal}
              indexCurso={openCurso.index}
            />
        )
      }
    </div>
  );
}

export default Home;
