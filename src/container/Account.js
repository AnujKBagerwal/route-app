import React from "react";
import { withRouter } from "react-router-dom";

const Account = (props) => {
  //   console.log("query", props.location.search);
  return <div>Account by {props.location.search}</div>;
};

export default withRouter(Account);
