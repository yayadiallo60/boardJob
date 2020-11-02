import React from "react";
import Description from "./Description";
import Contrat from "./Contrat";

const Board = (props) => {
  return (
    <>
      <div className={props.className}>
        <Description description={props.description} />
        <Contrat contrat={props.contrat} />
      </div>
    </>
  );
};

export default Board;
