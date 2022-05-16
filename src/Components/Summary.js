import classes from '../Styles/Summary.module.css';
import image from '../assets/images/success.png';

export default function Summary ({correctAnswers, totalQuestion}) {
    return (
        <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />
            {`${correctAnswers * 5} out of ${totalQuestion * 5}`}
          </p>
        </div>
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      </div>
    );
}; 