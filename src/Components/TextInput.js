import React from 'react';
import classes from '../Styles/TextInput.module.css';

const TextInput = React.forwardRef(({icon, ...rest}, ref) => {

  return (
    <div className={classes.textInput}>
      <input {...rest} ref={ref}/>
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
});

export default TextInput;