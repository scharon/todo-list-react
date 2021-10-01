import React from "react";

const Section = ({childrenComp}) => {
    return (
        <div style={{ margin: "10px"}}>
            * {childrenComp}
        </div>
    );
};

export default Section;