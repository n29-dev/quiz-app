import { Fragment } from "react";
import classes from "../Styles/Analysis.module.css";
import Answers from "./Answers";

export default function Analysis({results}) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      {results.map((question, quesIndex) => {
        return (<Fragment key={quesIndex + Math.random()}>
        <h1>{question?.title}</h1>
          <Answers options={question.options} checkHandler={() => {}}/>
        </Fragment>)
      })}
    </div>
  );
}

// matched={ option.checked && option.correct ? 'correct' : option.checked ? 'wrong' : null}