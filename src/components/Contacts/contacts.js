import isMobile from "../../pages/isMobile";
import {ThemeProvider} from "@material-ui/core/styles";
import buttonOverride from "../../theme/buttonOverride";
import React from "react";
import ContactsMobile from "./contactsMobile";
import ContactsDesktop from "./contactsDesktop";

function Contacts (props) {
  const {contactsMobileControl, setContactsMobileControl, contactsControl, setContactsControl, setCarouselControl} = props;
  return (
    <div>
      {isMobile ? (
        <ThemeProvider theme={buttonOverride}>
          <ContactsMobile
            animationControl={contactsMobileControl}
            close={() => setContactsMobileControl("hide")}
          />
        </ThemeProvider>
      ) : (
        <ContactsDesktop
          animationControl={contactsControl}
          close={() => {
            setContactsControl("hide");
            setCarouselControl('show');
          }}
        />
      )}
    </div>
  )
}

export default Contacts;