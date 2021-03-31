import React, { useState, useRef, useEffect } from "react";
import useStyles from "../stylesJs/HomeStyles";
import styles from "../styles/Home.module.css";

// imagens
import Background1 from "../../public/assets/GradienteHome.svg";
import Logo from "../../public/assets/Logomarca.svg";

// componentes
import AnimatedModal from "../components/AnimatedModal/index";
import AnimatedModalMobile from "../components/AnimatedModalMobile/index";
import Footer from "../components/Footer/index";
import Contacts from "../components/Contacts/index"
import ModalQuemSomos from "../components/ModalQuemSomos";
import QuemSomosMobile from "../components/QuemSomosMobile"
import CoursesList from "../components/CoursesList";
import isMobile from './isMobile'; // usa para ver se é mobile ou não

function Home() {
  const classes = useStyles();

  // variaveis da animacao
  let x1 = 90;
  let grad = Background1;
  const [posBackground, setPosBackground] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState("12vw");
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState("15vh");
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(0);
  const [colorHome, setColorHome] = useState("#100554");
  const [colorCursos, setColorCursos] = useState("#100554");
  const [colorQuemSomos, setColorQuemSomos] = useState("#100554");
  const [colorContato, setColorContato] = useState("#100554");
  
  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [openQuemSomos, setOpenQuemSomos] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  // Parâmetros para o novo gradiente:
  const [newGradient, setNewGradient] = useState();
  const [oldGradient, setOldGradient] = useState(
    "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)",
  );
  const [change, setChange] = useState(false);
  const home = "linear-gradient(214.44deg, #78CBEE -1.2%, #0E41C5 113.99%)";
  const cursos = "linear-gradient(258.81deg, #78CBEE -18.81%, #0E41C5 109.84%)";
  const quemSomos =
    "linear-gradient(346.31deg, #78CBEE 16.62%, #0E41C5 99.07%)";
  const contato = "linear-gradient(83.83deg, #78CBEE 3.06%, #0E41C5 96.88%)";
  const [size, setSize] = useState(null);

  // variaveis da animacao dos modais
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [listStyle, setListStyle] = useState('standby');
  const [slideStyle, setSlideStyle] = useState('standby');
  const [contactStyle, setContactStyle] = useState('standby');

  // vetor de objetos com os dados a serem mostrados nos modais do Cursos
  const data = [ 
    {
      open: openFirst,
      title: "Simulados ICAO - COMENTADOS",
      text1: 
      `Os simulados comentados do teste ICAO da ANAC elaborados pela Tailwind Aviation Courses 
      foram todos criteriosamente desenvolvidos por uma equipe formada por pilotos comerciais e professores 
      especialistas na área de inglês voltado para a aviação.`, 
      text2:
      `Nossos simulados trazem situações corriqueiras 
      apresentadas nas provas oficiais e têm o grau de dificuldade compatível com os exigidos no teste da ANAC. 
      A qualidade dos áudios, imagens e das questões elaboradas fazem toda a diferença tanto para aqueles que já 
      são certificados e buscam uma melhora em seu nível de proficiência, quanto para os candidatos que buscam 
      a qualificação pela primeira vez.`,
      text3: 
      `Há ainda uma oportunidade de se obter um feedback personalizado de 
      proficiência e orientações de estudo diretamente da nossa equipe pedagógica.`,
      videoLink: "youtube.com"
    },

    {
      open: openSecond,
      title: "Curso Inglês ICAO",
      text1: 
      `O domínio da língua inglesa é imprescindível não somente para os pilotos que estão iniciando a carreira, 
      mas também para profissionais consolidados que buscam a renovação de sua certificação ICAO ou a melhora 
      do nível obtido em exames anteriores.`,
      text2: 
      `O curso preparatório para o exame de inglês da ANAC oferecido pela Tailwind Aviation Courses tem por 
      objetivo não somente a familiarização com as etapas do teste, mas também a melhora da proficiência 
      linguística do aluno, através da apresentação de termos técnicos, estruturas vitais para o melhor 
      aproveitamento na prova, assim como oportunidades de desenvolver habilidades de comunicação, interação e 
      fraseologia em inglês, tão necessárias para a obtenção da certificação.`,
      text3: 
      `O curso foi preparado por profissionais que contam com larga experiência na preparação de alunos 
      para a prova, com grande histórico de aprovações, certificações internacionais e formação superior em 
      ensino de língua estrangeira.`,
      videoLink: "youtube.com"
    },

    {
      open: openThird,
      title: "Curso Cartas Jappesen",
      text1: 
      `A interpretação e manuseio de cartas aeronáuticas é uma habilidade que todo piloto deve ter, 
      sendo ela necessária tanto para a manutenção da padronização quanto, como consequência, para a 
      segurança de voo. Além disso, essas habilidades demonstram-se essenciais para aqueles candidatos 
      que buscam o ingresso em uma linha área ou taxi aéreo.`,
      text2: 
      `O curso de Cartas Jeppesen da Tailwind Aviation Courses foi elaborado por profissionais capacitados e 
      estruturado de maneira lógica para facilitar o entendimento e proporcionar uma 
      abordagem prática do tema.`,
      text3: 
      `Dessa maneira, o curso tem como objetivo a demonstração da correta utilização dos materiais 
      relacionados à cartografia aeronáutica Jeppesen, no que diz respeito à utilização do Jeppesen 
      General Airway Manual, assim como, e não menos importante, a interpretação, entendimento e briefing de 
      cartas aeronáuticas.`,
      videoLink: "youtube.com"
    }
  ]

  // --------------------------------- //

  function windowSize() {
    let proposedWidth = window.innerWidth / 40;
    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  }

  useEffect(() => {
    setSize(windowSize());
  });

  function spin1(e) {
    //Para a animação da linha:
    x1 = 90;
    setPosBackground(x1);
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

    setPosX("12vw");
    setPosY("15vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controla dos modais
    if(listStyle !== 'standby') setListStyle('hide');
    if(contactStyle !== 'standby') setContactStyle('hide');
    if(isMobile && slideStyle !== 'standby') setSlideStyle('hide');
  }

  function spin2(e) {
    //Para a animação da linha:
    x1 = 60;
    setPosBackground(x1);
    //Para a animação do gradiente:
    setNewGradient(cursos);
    setChange(true);
    setTimeout(() => {
      setOldGradient(cursos);
      console.log("cabou Cursos");
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

    setPosX("33vw");
    setPosY("30vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    //Para a animação do modalQuemSomos:
    setTimeout(() => {
      setOpen(true);
    }, 1200);

    // controle dos modais
    if(contactStyle !== 'standby') setContactStyle('hide');
    if(isMobile && slideStyle !== 'standby') setSlideStyle('hide');
    if(listStyle === 'standby' || listStyle === 'hide') {
      setListStyle('show')
    } else {
      setListStyle('hide')
    }
  }

  function spin3(e) {
    //Para a animação da linha:
    x1 = 30;
    setPosBackground(x1);

    //Para a animação do gradiente:
    setNewGradient(quemSomos);
    setChange(true);
    setTimeout(() => {
      setOldGradient(quemSomos);
      console.log("cabou quem somos");
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

    setPosX("55vw");
    setPosY("48vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    setOpenMobile(true);

    //Para a animação do modal:
    setTimeout(() => {
      setOpenQuemSomos(true);
    }, 1200);

    // controle dos modais
    if(listStyle !== 'standby') setListStyle('hide');
    if(contactStyle !== 'standby') setContactStyle('hide');
    if(isMobile && slideStyle !== 'show') {
      setSlideStyle('show')
    } else {
      setSlideStyle('hide')
    }
  }

  function spin4(e) {
    //Para a animação da linha:
    x1 = 0;
    setPosBackground(x1);

    //Para a animação do gradiente:
    setNewGradient(contato);
    setChange(true);
    setTimeout(() => {
      setOldGradient(contato);
      console.log("cabou contato");
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

    setPosX("85vw");
    setPosY("68vh");
    setPosXAngle(x - size / 2);
    setPosYAngle(y - size / 2 + 40);

    // controle dos modais
    if(listStyle !== 'standby') setListStyle('hide');
    if(isMobile && slideStyle !== 'standby') setSlideStyle('hide');
    if(contactStyle === 'standby' || contactStyle === 'hide') {
      setContactStyle('show')
    } else {
      setContactStyle('hide')
    }
  }

  function closeModal() {
    setOpenFirst(false);
    setOpenSecond(false);
    setOpenThird(false);
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
            width={size}
            height={size}
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
          ></div>
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
            <h1>INVISTA HOJE NO SEU FUTURO</h1>
            <h1>E DÊ ASAS AO SEU SONHO</h1>
          </div>
          <div
            className={classes.homeContainerChildren}
            style={{
              backgroundPositionX: posBackground,
              backgroundPositionY: -200,
              height: "100vh",
            }}
          ></div>
          <div
            className={classes.planeContainer}
            style={{
              position: "absolute",
              left: "44vw",
              top: "0.1vh",

              transformOrigin: "center",
              width: size,
              height: size,
              zIndex: "200",
            }}
          >
            <img className={styles.logo} src="/assets/Logomarca.svg"></img>
          </div>

          <div className={classes.buttonHome} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin1}
              style={{ cursor: "pointer" }}
            >
              HOME
            </p>
          </div>
          <div className={classes.button2} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin2}
              style={{ cursor: "pointer" }}
            >
              CURSOS
            </p>

          </div>

          <div className={classes.button3} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin3}
              style={{ cursor: "pointer" }}
            >
              QUEM SOMOS
            </p>
          </div>
          <div className={classes.button4} style={{ zIndex: "100" }}>
            <p
              className={styles.name}
              onClick={spin4}
              style={{ cursor: "pointer" }}
            >
              CONTATO
            </p>
          </div>
          
        </div>
      </div>

      { isMobile ? (
        <QuemSomosMobile slideStyle={slideStyle} close={ () => setSlideStyle('hide') } />
      ) : (
        <ModalQuemSomos open={openQuemSomos} setOpen={setOpenQuemSomos} />
      )}

      <Contacts 
        contactStyle={contactStyle}
        close={ () => setContactStyle('hide') }
      />

      <CoursesList 
        listStyle={ listStyle }
        // daqui para baixo é GAMBIARRA: passando as funções pro componente retornar
        openFirst= { () => setOpenFirst(true)  }
        openSecond={ () => setOpenSecond(true) }
        openThird= { () => setOpenThird(true)  }
      />

      {!isMobile && (
        <Footer />
      )}

      { // Modais de transição DESKTOP
        data.map((object, index) => {
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
          )
        })
      }

    </div>
  );
}

export default Home;
