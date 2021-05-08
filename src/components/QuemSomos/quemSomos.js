import isMobile from "../../pages/isMobile";
import QuemSomosDesktop from "./quemSomosDesktop";
import React from "react";
import QuemSomosMobile from "./quemSomosMobile";

function QuemSomos (props) {
  const {quemSomosMobileControl, setQuemSomosMobileControl, quemSomosControl, setQuemSomosControl} = props;
  return (
    <div>
      {isMobile ? (
        <QuemSomosMobile
          animationControl={quemSomosMobileControl}
          close={ () => setQuemSomosMobileControl("hide") }
        />
      ) : (
        <QuemSomosDesktop
          animationControl={quemSomosControl}
          close={() => setQuemSomosControl('hide')}
        />
      )}
    </div>
  )
}

export default QuemSomos;