import isMobile from "../../utils/isMobile";
import React from "react";
import ContactsMobile from "./contactsMobile";
import ContactsDesktop from "./contactsDesktop";

function Contacts(props) {
  const {
    contactsMobileControl,
    setContactsMobileControl,
    contactsControl,
    setContactsControl,
    setCarouselControl,
  } = props;
  return (
    <>
      {isMobile ? (
        <ContactsMobile
          animationControl={contactsMobileControl}
          close={() => setContactsMobileControl("hide")}
        />
      ) : (
        <ContactsDesktop
          animationControl={contactsControl}
          close={() => {
            setContactsControl("hide");
            setCarouselControl("show");
          }}
        />
      )}
    </>
  );
}

export default Contacts;
