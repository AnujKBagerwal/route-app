import React from "react";
import { withRouter } from "react-router-dom";

const Dynamic = (props) => {
  //   console.log("props", props);
  return <div>Dynamic Value from {props.location.pathname}</div>;
};

// If you are not able to Find Location path
// Wrap component using withRouter
export default withRouter(Dynamic);
