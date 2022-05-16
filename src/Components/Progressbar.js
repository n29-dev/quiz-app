import { useState, useRef } from "react";
import classes from "../Styles/Progressbar.module.css";
import Button from "./Button";

export default function Progressbar({ nextQuestion, prevQuestion, progress, submit}) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip(){
      console.log('something')
    if(tooltip){
      tooltipRef.current.style.visibility = 'hidden';
      tooltipRef.current.style.opacity = '0';
      setTooltip(false);
    }else{
      tooltipRef.current.style.visibility = 'visible';
      tooltipRef.current.style.opacity = '1';
      tooltipRef.current.style.left = `calc(${progress}% - 65px) `;
      setTooltip(true);
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prevQuestion}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>{progress}% Complete!</div>
        <div className={classes.rangeBody} onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}>
          <div className={classes.progress} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div onClick={progress < 100 ? nextQuestion : submit }>
        <Button className={classes.next}>
          <span>{ progress < 100 ? 'Next Question' : 'Submit'}</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </div>
  );
}
