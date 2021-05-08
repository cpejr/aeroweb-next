import isMobile from "../../pages/isMobile";
import AnimatedModalCoursesDesktop from "./animatedModalCoursesDesktop";
import React from "react";
import AnimatedModalCoursesMobile from "./animatedModalCoursesMobile";

function AnimatedModalCourses(props) {
  const {
    openCurso,
    setOpenCurso,
    setCoursesMobileControl,
    closeModal,
  } = props;
  return (
    <>
      {isMobile ? (
        <AnimatedModalCoursesMobile
          animationControl={openCurso.style}
          indexCurso={openCurso.index}
          setOpenCurso={setOpenCurso}
          setCoursesMobileControl={setCoursesMobileControl}
        />
      ) : (
        <AnimatedModalCoursesDesktop
          animationControl={openCurso.style}
          close={closeModal}
          indexCurso={openCurso.index}
        />
      )}
    </>
  );
}

export default AnimatedModalCourses;
