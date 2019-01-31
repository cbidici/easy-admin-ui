import React from "react";
import LayoutContent from "../LayoutContent";
import EntityMenu from "./EntityMenu";

class DeleteEntityData extends React.Component {

    render() {
        return (<><EntityMenu /><LayoutContent><div>Display entities to be deleted.</div></LayoutContent></>);
    }
};

export default DeleteEntityData;