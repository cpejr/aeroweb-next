import isMobile from "../../pages/isMobile";
import {ThemeProvider} from "@material-ui/core/styles";
import cardContentOverride from "../../theme/cardContentOverride";
import React from "react";
import CoursesListMobile from "./courseListMobile";
import CoursesListDesktop from "./courseListDesktop";

function CoursesList({ coursesMobileControl, setCoursesMobileControl, setOpenCurso, coursesDesktopControl }) {
  return (
    <>
      {isMobile ? (
          <ThemeProvider theme={cardContentOverride}>
            <CoursesListMobile
              animationControl={coursesMobileControl}
              setAnimationControl={setCoursesMobileControl}
              setOpenCurso={setOpenCurso}
            />
          </ThemeProvider>
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