import isMobile from "../../pages/isMobile";
import {ThemeProvider} from "@material-ui/core/styles";
import cardContentOverride from "../../theme/cardContentOverride";
import React from "react";
import CoursesListMobile from "./courseListMobile";
import CoursesListDesktop from "./courseListDesktop";

function CoursesList(props) {
  const {slideCourses, openNthModal, setOpenNthModal, setSlideCourses, setOpenCurso, listStyle} = props;
  return (
    <>
    {isMobile ? (
        <ThemeProvider theme={cardContentOverride}>
          <CoursesListMobile
            slideCourses={slideCourses}
            openNthModal={openNthModal}
            setOpenNthModal={setOpenNthModal}
            setSlideCourses={setSlideCourses}
            setOpenCurso={setOpenCurso}
          />
        </ThemeProvider>
      ) : (
        <CoursesListDesktop
          listStyle={listStyle}
          setOpenCurso={setOpenCurso}
          // feito estaticamente: implementar via .map igual no cursos do mobile
          // openFirst={() => setStyleFirst('show')}
          // openSecond={() => setStyleSecond('show')}
          // openThird={() => setStyleThird('show')}
        />
      )}
      </>
  )
}

export default CoursesList