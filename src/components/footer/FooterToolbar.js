import React from "react";
import Credits from "./Credits";
import Quotes from "./Quotes";

export default function FooterToolbar({ credits }) {
  return (
    <div className="flex justify-between items-center">
      <Credits credits={credits} />
      <Quotes />
      <div />
    </div>
  );
}
