import Summary from '../Summary';
import Analysis from '../Analysis';
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import _ from 'lodash';
import { useEffect, useState, useCallback } from 'react';

export default function Result () {
    
    const videoId = useParams().id;
    const location = useLocation();
    const [userAnswers, setUserAnswers] = useState(location.state.state);

    const {answers, loading, error} = useAnswers(videoId);
    const [results, setResults] = useState({});
    console.log("userAnswers", userAnswers)


    const calcAwnsers = useCallback(() => {

      let correctAnswers = 0;
      let correctOptions = [];
      let checkedOptions = [];

      const newAnswers = _.cloneDeep(answers);

      newAnswers.forEach((ques, quesIndex) => {
        ques.options.forEach((option, optnIndex) => {
          if(userAnswers[quesIndex].options[optnIndex].checked){
            option.checked = true;
            checkedOptions.push(optnIndex)
          }
          if(option.correct){
            correctOptions.push(optnIndex)
          }
        })

        if(_.isEqual(correctOptions, checkedOptions)){
          console.log(correctAnswers)
          correctAnswers++;
        }

        correctOptions = [];
        checkedOptions = [];

      })

      setResults({
        correctAnswers: correctAnswers,
        analysizedAnswers: newAnswers
      })

    }, [userAnswers, answers]);

    useEffect(() => {
      calcAwnsers();

    },[calcAwnsers]); 

    console.log('analysizedAnswers',results.analysizedAnswers)
  
    return (
        <>
        {loading && '...Loading'}
        {error && 'There was an problem'}
        {!loading && !error && results.analysizedAnswers &&(
          <>
            <Summary correctAnswers={results.correctAnswers} totalQuestion={results.analysizedAnswers.length}/>
            <Analysis results={results.analysizedAnswers}/>
          </>
        )}

        </>
    );
};