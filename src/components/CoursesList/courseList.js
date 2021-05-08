import isMobile from "../../pages/isMobile";
import React from "react";
import CoursesListMobile from "./courseListMobile";
import CoursesListDesktop from "./courseListDesktop";

function CoursesList({ coursesMobileControl, setCoursesMobileControl, setOpenCurso, coursesDesktopControl }) {
  return (
    <>
      {isMobile ? (
          <CoursesListMobile
            animationControl={coursesMobileControl}
            setAnimationControl={setCoursesMobileControl}
            setOpenCurso={setOpenCurso}
          />
        ) : (
          <CoursesListDesktop
            animationControl={coursesDesktopControl}
            setOpenCurso={setOpenCurso}
          />
      )}
    </>
  )
}

export default CoursesList