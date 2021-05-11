import isMobile from "../../utils/isMobile";
import QuemSomosDesktop from "./quemSomosDesktop";
import React from "react";
import QuemSomosMobile from "./quemSomosMobile";

function QuemSomos(props) {
  const {
    quemSomosMobileControl,
    setQuemSomosMobileControl,
    quemSomosControl,
    setQuemSomosControl,
  } = props;
  return (
    <>
      {isMobile ? (
        <QuemSomosMobile
          animationControl={quemSomosMobileControl}
          close={() => setQuemSomosMobileControl("hide")}
        />
      ) : (
        <QuemSomosDesktop
          animationControl={quemSomosControl}
          close={() => setQuemSomosControl("hide")}
        />
      )}
    </>
  );
}

export default QuemSomos;
