import Progressbar from '../Progressbar';
import Miniplayer from '../Miniplayer';
import Answers from '../Answers';
import { useNavigate, useParams } from 'react-router-dom';
import useQuiz from '../../hooks/useQuiz';
import { useCallback, useEffect, useReducer, useState } from 'react';
import _ from 'lodash';
import {useAuth} from '../Contexts/AuthContext'
import { getDatabase, ref, set } from 'firebase/database';
const reducer = (state, action) => {
  switch(action.type){
    case 'initialize':
      return action.initializer;

    default: 
      return state;
  }
}

export default function Quiz() {

  const videoId = useParams().id;

  const navigate = useNavigate()

  const {error, loading, questions} = useQuiz(videoId);
  // creating a new state to store use answers
  const [state, dispatch] = useReducer(reducer, []);
  //creating a state to track the current index of question
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  // creating a new state to store the data for the current question
  const [currentQuestion, setCurrentQuestion] = useState({...state[currQuesIndex]});


  const {currentUser} = useAuth();

  // set a checked property into every option 
  const addCheckedProp = useCallback(() => {
    const newQuesArrary = _.cloneDeep(questions)
      newQuesArrary.forEach((question) => {
      question.options.forEach((option) => {
        option.checked = false;
      });
    })

    return newQuesArrary;

  }, [questions]);

  useEffect(() => {
    // update the state the new questions array
    dispatch({
      type: 'initialize',
      initializer: addCheckedProp(questions)
    });

  }, [questions, addCheckedProp]);

  useEffect(() => {
    setCurrentQuestion(state[currQuesIndex]);
  }, [currQuesIndex, state])

  function chooseAwnser(event, index = 0) {
    currentQuestion.options[index].checked = event.target.checked;
  }

  function nextQuestion() {
      if(currQuesIndex < state.length - 1){
        state[currQuesIndex] = currentQuestion;
        setCurrQuesIndex((prev) => prev + 1);
      }
      console.log(state)
  }

  function prevQuestion() {
    if(currQuesIndex !== 0  ){
    setCurrQuesIndex((prev) => prev - 1);
    }
  }

  async function submit () {
    const db = getDatabase();
    const dbRef = ref(db, `/result/${currentUser.uid}`);
    
    await set(dbRef, {
      [videoId]: state,
    })

    navigate(`/result/${videoId}`, {state: {state}})

  }

  return (
    <>
      {loading && '...loading'}
      {error && 'There was an problem'}
      {!loading && !error && (
              <>
              <h1>{currentQuestion?.title || ''}</h1>
              <h4>Question can have multiple answers</h4>
              <Answers options={currentQuestion?.options || []} checkHandler={chooseAwnser}/>
              <Progressbar nextQuestion={nextQuestion} prevQuestion={prevQuestion} progress={((currQuesIndex + 1) / state.length ) * 100} submit={submit}/>
              <Miniplayer videoId={videoId} title={currentQuestion?.title || ''}/>
            </>
      )}
    </>
  );
}
