import classes from '../Styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers () {
    return (
        <div className={classes.answers}>
        <Checkbox htmlfor='option1' id="option1" className={`${classes.answer} ${classes.correct}`} label="The first awnser"/>
      </div>
    );
};