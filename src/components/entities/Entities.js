import React from "react";
import LayoutContent from "../LayoutContent";
import EntityMenu from "./EntityMenu";
import Entity from "./Entity";

const returnEntity = props => {
  if (props.match && props.match.params && props.match.params.key) {
    return <Entity entityKey={props.match.params.key} />;
  } else {
    return <div>Please select an entity.</div>;
  }
};

const Entities = props => {
  return (
    <>
      <EntityMenu />
      <LayoutContent>{returnEntity(props)}</LayoutContent>
    </>
  );
};

export default Entities;
