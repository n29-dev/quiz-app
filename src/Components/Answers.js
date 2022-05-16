import classes from '../Styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers ({options, checkHandler}) {
    return (
        <div className={classes.answers}>
          {options.map((option, index) => {
            return (
              <Checkbox htmlfor={index} id={index} className={`${option.checked && option.correct ? classes.correct : option.checked ? classes.wrong : null} ${classes.answer}`} label={option.title} key={Math.random() + index} checkHandler={(e) => { checkHandler(e, index) }} readOnly={true}/>
            )
          })}
 
      </div>
    );
};
