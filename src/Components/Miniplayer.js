import classes from '../Styles/Miniplayer.module.css';
import image from '../assets/images/3.jpg';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';


export default function Miniplayer ({videoId, title}) {
  
  const buttonRef = useRef();
  const [state, setState] = useState(false);
  
  function toogleButton() {
    if(state){
      buttonRef.current.classList.add(classes.floatingBtn);
      setState(false)
    }else{
      buttonRef.current.classList.remove(classes.floatingBtn);
      setState(true)
    }
  }

    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef}>
        <span className={`${"material-icons-outlined"} ${classes.open}`} onClick={toogleButton} > play_circle_filled </span>
        <span className={`${'material-icons-outlined'} ${classes.close}`} onClick={toogleButton}> close </span>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} style={{width: '300px',height: "170px"}}/>
        <p>{title}</p>
      </div>
    );
};
