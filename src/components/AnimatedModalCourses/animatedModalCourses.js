import isMobile from "../../pages/isMobile";
import AnimatedModalCoursesDesktop from "./animatedModalCoursesDesktop";
import React from "react";
import AnimatedModalCoursesMobile from "./animatedModalCoursesMobile";

function AnimatedModalCourses (props) {
  const {openCurso, setOpenCurso, setSlideCourses, closeModal} = props;
  return (
    <>
      {isMobile ?
        <AnimatedModalCoursesMobile
          styleModal={openCurso.style}
          indexCurso={openCurso.index}
          setOpenCurso={setOpenCurso}
          setSlideCourses={setSlideCourses}
        />
        :
        <AnimatedModalCoursesDesktop
          styleModal={openCurso.style}
          close={closeModal}
          indexCurso={openCurso.index}
        />}
    </>
  )
}

export default AnimatedModalCourses