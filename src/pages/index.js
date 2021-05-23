import React, { useState, useRef, useEffect } from "react";
import isMobile from "../utils/isMobile"; // usa para ver se é mobile ou não

// estilização
import {useStylesHome, useStylesAirPlane} from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";

// componentes
import AnimatedModalCourses from "../components/AnimatedModalCourses/animatedModalCourses";
import Footer from "../components/Footer/index";
import Contacts from "../components/Contacts/contacts";
import QuemSomos from "../components/QuemSomos/quemSomos";
import CoursesList from "../components/CoursesList/courseList";
import InstagramCarousel from "../components/InstagramCarousel";

import { NextSeo } from "next-seo";

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

  // variaveis da animacao
  let selectedComp;

  const [posBackground, setPosBackground] = useState(90);
  const [selected, setSelected] = useState('HOME');
  const [posX, setPosX] = useState(isMobile? "23%":"20%");
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState(isMobile? "11%":"6%");
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(isMobile? 13:349);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  // Parâmetros para o novo gradiente:
  const [newGradient, setNewGradient] = useState("linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)");
  const [oldGradient, setOldGradient] = useState(
    "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
  );
  const [change, setChange] = useState(false);
  const cursosGradient =
    "linear-gradient(258.81deg, #78CBEE -18.81%, #0E41C5 109.84%)";
  const quemSomosGradient =
    "linear-gradient(346.31deg, #78CBEE 16.62%, #0E41C5 99.07%)";
  const contatoGradient =
    "linear-gradient(83.83deg, #78CBEE 3.06%, #0E41C5 96.88%)";
  const [size, setSize] = useState(null);

  // controle das animações
  const [coursesDesktopControl, setCoursesDesktopControl] = useState("standby");
  const [coursesMobileControl, setCoursesMobileControl] = useState("standby");

  const [quemSomosControl, setQuemSomosControl] = useState("standby");
  const [quemSomosMobileControl, setQuemSomosMobileControl] = useState(
    "standby",
  );

  const [contactsControl, setContactsControl] = useState("standby");
  const [contactsMobileControl, setContactsMobileControl] = useState("standby");

  const [carouselControl, setCarouselControl] = useState("standby");

  const [openCurso, setOpenCurso] = useState({
    open: false,
    index: null,
    style: "",
  });
  const [modalControl, setModalControl] = useState("standby");

  const classesAirPlane = useStylesAirPlane({posX: posX, posY: posY, angle: angle})();
  const classes = useStylesHome({newGradient: newGradient, oldGradient: oldGradient})();

  function windowSize() {
    let proposedWidth = window.innerWidth / 40;

    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  }

  useEffect(() => {
    setSize(windowSize());
  });

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

    setAngle(360 - newAngle);

    if(isMobile) {
      setPosX('23%');
      setPosY('11%');
    } else {
      setPosX('20%');
      setPosY('6%');
    }

    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controla dos modais
    if (coursesDesktopControl !== "standby") setCoursesDesktopControl("hide");
    if (isMobile && coursesMobileControl !== "standby")
      setCoursesMobileControl("hide");

    if (!isMobile && quemSomosControl !== "standby")
      setQuemSomosControl("hide");
    if (isMobile && quemSomosMobileControl !== "standby")
      setQuemSomosMobileControl("hide");

    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");

    if (isMobile && carouselControl === "hide") setCarouselControl("show");
    if (!isMobile && carouselControl !== "standby") setCarouselControl("show");
    if (!isMobile && modalControl !== "standby") setModalControl("hide");
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

    setAngle(360 - newAngle);

    if(isMobile) {
      setPosX('49%');
      setPosY('29%');
    } else {
      setPosX('47%');
      setPosY('19%');
    }

    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controle dos modais
    if (
      coursesDesktopControl === "standby" ||
      coursesDesktopControl === "hide"
    ) {
      setCoursesDesktopControl("show");
    } else {
      setCoursesDesktopControl("hide");
    }
    if (isMobile && coursesMobileControl !== "show") {
      setCoursesMobileControl("show");
    } else {
      setCoursesMobileControl("hide");
    }

    if (!isMobile && quemSomosControl !== "standby")
      setQuemSomosControl("hide");
    if (isMobile && quemSomosMobileControl !== "standby")
      setQuemSomosMobileControl("hide");

    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");

    if (isMobile && carouselControl !== "hide") setCarouselControl("hide");
    if (!isMobile && carouselControl !== "standby") setCarouselControl("show");
    if (!isMobile && modalControl !== "show") {
      setModalControl("show");
    } else {
      setModalControl("hide");
    }
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

    setAngle(360 - newAngle);

    if(isMobile) {
      setPosX('57%');
      setPosY('54%');
    } else {
      setPosX('66%');
      setPosY('57.5%');
    }

    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controle dos modais
    if (coursesDesktopControl !== "standby") setCoursesDesktopControl("hide");
    if (isMobile && coursesMobileControl !== "standby")
      setCoursesMobileControl("hide");

    if (!isMobile && quemSomosControl !== "show") {
      setTimeout(() => setQuemSomosControl("show"), 1000);
    } else {
      setQuemSomosControl("hide");
    }
    if (isMobile && quemSomosMobileControl !== "show") {
      setQuemSomosMobileControl("show");
    } else {
      setQuemSomosMobileControl("hide");
    }

    if (!isMobile && contactsControl !== "standby") setContactsControl("hide");
    if (isMobile && contactsMobileControl !== "standby")
      setContactsMobileControl("hide");

    if (isMobile && carouselControl !== "hide") setCarouselControl("hide");
    if (!isMobile && carouselControl !== "standby") setCarouselControl("show");
    if (!isMobile && modalControl !== "standby") setModalControl("hide");
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

    setAngle(360 - newAngle);

    if(isMobile) {
      setPosX('80%');
      setPosY('77%');
    } else {
      setPosX('87%');
      setPosY('83%');
    }

    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controle dos modais
    if (coursesDesktopControl !== "standby") setCoursesDesktopControl("hide");
    if (isMobile && coursesMobileControl !== "standby")
      setCoursesMobileControl("hide");

    if (!isMobile && quemSomosControl !== "standby")
      setQuemSomosControl("hide");
    if (isMobile && quemSomosMobileControl !== "standby")
      setQuemSomosMobileControl("hide");

    if (
      (!isMobile && contactsControl === "standby") ||
      contactsControl === "hide"
    ) {
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

    if (isMobile && carouselControl !== "hide") setCarouselControl("hide");
    if (
      (!isMobile && carouselControl === "show") ||
      carouselControl === "standby"
    ) {
      setCarouselControl("hide");
    } else if (!isMobile && carouselControl === "hide") {
      setCarouselControl("show");
    }
    if (!isMobile && modalControl !== "standby") setModalControl("hide");
  }

  function closeModal() {
    setOpenCurso({ open: false, index: null, style: "" });
  }

  return (
    <div
      className={classes.homeContainer}>
      <div className={classes.homeContainerChildren}>
        <div className={classes.homeContainerOldGradient}>
          <div
            className={
              change ? classes.homeGradienteMutavel : classes.homeGradienteImutavel
            }
            onAnimationEnd={() => {
              setChange(false);
            }}
          />

          {/*<div*/}
          {/*  className={classesAirPlane.planeContainer}*/}
          {/*  style={{*/}
          {/*    position: "absolute",*/}
          {/*    left: "4vw",*/}
          {/*    top: "65vh",*/}
          {/*    margin: "0",*/}
          {/*    transformOrigin: "center",*/}
          {/*    width: "38vw",*/}
          {/*    zIndex: "200",*/}
          {/*    color: "#fff",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  {!isMobile && (*/}
          {/*    <>*/}
          {/*      <h1 className={classes.footerTitle1}>*/}
          {/*        INVISTA HOJE NO SEU FUTURO*/}
          {/*      </h1>*/}
          {/*      <h1 className={classes.footerTitle2}>E DÊ ASAS AO SEU SONHO</h1>*/}
          {/*    </>*/}
          {/*  )}*/}
          {/*</div>*/}

          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              transitionDuration: "2.5s",
              // backgroundPositionY: -200,
              height: "100vh",
            }}
          />

          {isMobile ?
            <div className={classes.logoMobile}>
              <img className={classes.logoImgMobile} src={"/assets/TAILWINDAVIATION.svg"} />
              <img className={classes.logoImgMobile} src={"/assets/Union.svg"} />
            </div>
            :
            <div className={classes.logoDesktop}>
              <img className={classes.logoImgDesktop} src={"/assets/Logomarca.svg"} />
            </div>
          }

          <div className={classes.rotaContainer}>
            {isMobile ?
              <img
                src="/assets/RotaMobile.svg"
                className={classes.rotasImg}
              />
            :
              <img
                src="/assets/RotaDesktop.svg"
                className={classes.rotasImg}
              />
            }
          </div>

          <div className={classes.buttonHomeContainer}>
            <div
              className={classesAirPlane.planeContainer}
            >
              <img
                src="/assets/AviaoIcon.svg"
                className={classesAirPlane.plane}
              />
            </div>

            <div className={classes.buttonHome} style={{ zIndex: "100" }}>
              <p
                className={selected === "HOME" ? classes.selectedButtonPageHome : classes.buttonPageHome}
                onClick={home}
              >
                HOME
              </p>
            </div>
            <div className={classes.buttonCursos} style={{ zIndex: "100" }}>
              <p
                className={selected === "CURSOS" ? classes.selectedButtonPageHome : classes.buttonPageHome}
                onClick={cursos}
              >
                CURSOS
              </p>
            </div>

            <div className={classes.buttonQuemSomos} style={{ zIndex: "100" }}>
              <p
                className={selected === "QUEMSOMOS" ? classes.selectedButtonPageHome : classes.buttonPageHome}
                onClick={quemSomos}
              >
                QUEM SOMOS
              </p>
            </div>
            <div className={classes.buttonContato} style={{ zIndex: "100" }}>
              <p
                className={selected === "CONTATO" ? classes.selectedButtonPageHome : classes.buttonPageHome}
                onClick={contato}
              >
                CONTATO
              </p>
            </div>
          </div>
        </div>
        <InstagramCarousel animationControl={carouselControl} />

        <CoursesList
          coursesMobileControl={coursesMobileControl}
          setCoursesMobileControl={setCoursesMobileControl}
          coursesDesktopControl={coursesDesktopControl}
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

        {openCurso.open && (
          <AnimatedModalCourses
            openCurso={openCurso}
            setOpenCurso={setOpenCurso}
            setCoursesMobileControl={setCoursesMobileControl}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
