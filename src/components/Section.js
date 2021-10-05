import React from "react";

const Section = ({childrenComp}) => {
    return (
        <div style={{ margin: "50px"}}>
             {childrenComp}
        </div>
    );
};

export default Section;