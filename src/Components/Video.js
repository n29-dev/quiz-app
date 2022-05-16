import classes from '../Styles/Video.module.css';
import thumbnail from '../assets/images/3.jpg'
import { Link } from 'react-router-dom';

export default function Video({title, noq, videoId}) {
  return (
    <Link to={`/quiz/${videoId}`} style={{display: 'inline-block', paddingBottom: '20px'}}>
      <div className={classes.video}>
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Points: {noq * 5}</p>
        </div>
      </div>
    </Link>
  );
}
