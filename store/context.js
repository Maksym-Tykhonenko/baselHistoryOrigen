import {createContext, useEffect, useState} from 'react';
import {fetchGameData, storeQuizzData} from './asyncUtils';
import {BASEL} from '../data/basel_data';

export const GameContext = createContext({
  easyLevel: [],
  hardLevel: [],
  choosenLevel: () => [],
  //   saveLevelPoints: [],
  nextLevelOpenHandler: () => [],
  setLevelScore: () => [],
  updateLevelScoreAndUnlockNext: () => [],
});

export const GameProvider = ({children}) => {
  const [easyLevel, setEasyLevel] = useState([]);
  const [hardLevel, setHardLevel] = useState([]);
  // const [totalScore, setTotalScore] = useState([]);

  useEffect(() => {
    console.log('easyLevel updated', easyLevel);
  }, [easyLevel]);

  // useEffect(() => {
  //   console.log('hardLevel updated', hardLevel);
  // }, [hardLevel]);

  useEffect(() => {
    initializeGameData();
  }, []);

  // const setLevelScore = async (id, score, level) => {
  //   try {
  //     const quizToUpdate = await fetchGameData(level);
  //     const updatedData = quizToUpdate.map(quiz => {
  //       if (quiz.id === id) {
  //         console.log('QUIZ TO CHANGE---', quiz);
  //         return {...quiz, subjectScore: score};
  //       }
  //       return quiz;
  //     });
  //     await storeQuizzData(updatedData, level);

  //     switch (level) {
  //       case 'easy':
  //         setEasyLevel(updatedData);
  //         break;
  //       case 'hard':
  //         setHardLevel(updatedData);
  //         break;
  //       default:
  //         break;
  //     }
  //   } catch (error) {}
  // };

  const updateLeveScoreAndUnlockNext = async (id, score, level) => {
    try {
      const quizData = await fetchGameData(level);
      const thisQuizIndex = quizData.findIndex(quiz => quiz.id === id);

      if (thisQuizIndex !== -1) {
        const updatedData = quizData.map((quiz, i) => {
          if (i === thisQuizIndex) {
            return {...quiz, subjectScore: score};
          } else if (i === thisQuizIndex + 1) {
            return {...quiz, isClose: false};
          }
          return quiz;
        });
        await storeQuizzData(updatedData, level);

        switch (level) {
          case 'easy':
            setEasyLevel(updatedData);
            break;
          case 'hard':
            setHardLevel(updatedData);
            break;
          default:
            break;
        }
      }
    } catch (error) {}
  };

  // const nextLevelOpenHandler = async (id, level, score) => {
  //   console.log('open next level', id, level);
  //   try {
  //     const AllQuizData = await fetchGameData(level);
  //     const thisQuizIndex = AllQuizData.findIndex(quiz => quiz.id === id);
  //     if (thisQuizIndex !== -1 && thisQuizIndex + 1 < AllQuizData.length) {
  //       const updatedData = AllQuizData.map((quiz, i) =>
  //         i === thisQuizIndex + 1
  //           ? {...quiz, isClose: false, subjectScore: score}
  //           : quiz,
  //       );
  //       await storeQuizzData(updatedData, level);

  //       switch (level) {
  //         case 'easy':
  //           setEasyLevel(updatedData);
  //           break;
  //         case 'hard':
  //           setHardLevel(updatedData);
  //           break;
  //         default:
  //           break;
  //       }

  //       // console.log(updatedData);
  //     }
  //   } catch (error) {
  //     console.log('error accured', error);
  //   }
  // };

  const choosenLevel = level => {
    switch (level) {
      case 'easy':
        return easyLevel;
      case 'hard':
        return hardLevel;
      default:
        break;
    }
  };

  const initializeGameData = async () => {
    try {
      let easy = await fetchGameData('easy');
      let hard = await fetchGameData('hard');
      if (easy.length === 0) {
        await storeQuizzData(BASEL, 'easy');
        easy = await fetchGameData('easy');
      }
      setEasyLevel(easy);

      if (hard.length === 0) {
        await storeQuizzData(BASEL, 'hard');
        hard = await fetchGameData('hard');
      }
      setHardLevel(hard);
    } catch (error) {
      console.log('data set error', error);
    }
  };

  const contextValue = {
    easyLevel,
    hardLevel,
    choosenLevel,
    // nextLevelOpenHandler,
    // setLevelScore,
    updateLeveScoreAndUnlockNext,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
