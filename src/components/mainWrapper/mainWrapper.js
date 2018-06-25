import React from "react";

const MainWrapper = props => (
<div className="container">
    <div className="row pt-5">{props.children}</div>
</div>
)

export default MainWrapper;
