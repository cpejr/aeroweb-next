import isMobile from "../../pages/isMobile";
import {ThemeProvider} from "@material-ui/core/styles";
import cardContentOverride from "../../theme/cardContentOverride";
import React from "react";
import CoursesListMobile from "./courseListMobile";
import CoursesListDesktop from "./courseListDesktop";

function CoursesList(props) {
  const {slideCourses, setSlideCourses, setOpenCurso, listStyle} = props;
  return (
    <>
    {isMobile ? (
        <ThemeProvider theme={cardContentOverride}>
          <CoursesListMobile
            slideCourses={slideCourses}
            setSlideCourses={setSlideCourses}
            setOpenCurso={setOpenCurso}
          />
        </ThemeProvider>
      ) : (
        <CoursesListDesktop
          listStyle={listStyle}
          setOpenCurso={setOpenCurso}
        />
      )}
      </>
  )
}

export default CoursesList