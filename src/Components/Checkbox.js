import React from "react";

const Checkox = React.forwardRef(({className, id, htmlfor, label, checkHandler, ...rest}, ref) => {
    return (
        <label htmlFor={`checkbox${htmlfor}`} className={className} {...rest} ref={ref}>
            <input type="checkbox" id={`checkbox${id}`} onClick={checkHandler}/>
            <span>{" " + label}</span>
        </label>
    );
})

export default Checkox;