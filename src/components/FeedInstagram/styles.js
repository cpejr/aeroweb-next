import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  divFeedInstagram: {
    maxWidth: "",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    borderRadius: "8px",
    paddingTop: "5%",
  },
  photo: {
    maxWidth: "360px",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    borderRadius: "8px",
    paddingTop: "5%",
    "& > a": {
      width: "120px",
      height: "120px",
      "& > img": {
        width: "120px",
        height: "120px",
      },
    },
  },
}));
