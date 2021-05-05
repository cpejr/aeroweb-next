import React from "react";
import { useStyles } from "./styles";

function FeedInstagram() {
  const classes = useStyles();

  return (
    <div className={classes.divFeedInstagram}>
      <Feed userName="cristiano" classNameLoading={false} limit="3" />
    </div>
  );
}

export default FeedInstagram;
