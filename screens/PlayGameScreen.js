import {Modal, StyleSheet, View, Text} from 'react-native';
import GameLayout from '../components/layout/GameLayout';
import {useContext, useEffect, useState} from 'react';
import {GameContext} from '../store/context';
import {
  GameOverModal,
  NextBtn,
  Options,
  Questions,
  Statistic,
} from '../components/PlayGameComponents';

const PlayGameScreen = ({route}) => {
  const {choosenLevel} = useContext(GameContext);
  const subjectId = route.params.itemId;
  const level = route.params.level;
  const [dataSet, setDataSet] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrectOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disableOption, setDisableOption] = useState(false);
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  //   const [levelIDone, setLevelIsDone] = useState(false);
  const [timerFinish, setTimerFinish] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    const data = choosenLevel(level);
    if (Array.isArray(data)) {
      setDataSet(data);
    } else {
      console.error('Invalid data returned from choosenLevel:', data);
    }
  }, [choosenLevel, level]);

  useEffect(() => {
    if (timerFinish) {
      setShowModal(true);
    }
  }, [timerFinish]);

  if (!dataSet) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const quizData = dataSet.find(quiz => quiz.id === subjectId);

  if (!quizData || !Array.isArray(quizData.levelQuestions)) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No data found for the selected quiz</Text>
      </View>
    );
  }

  const questions = quizData.levelQuestions;
  const thisQuestion = questions[currentIndex]?.question || '';
  const thisOptions = questions[currentIndex]?.options || [];
  const thisAnswer = questions[currentIndex]?.correct || null;

  const checkValidation = selectedOption => {
    const correct = thisAnswer;
    setCurrectOption(selectedOption);
    setCorrectOption(correct);
    setDisableOption(true);
    console.log(selectedOption, correct);
    if (selectedOption === correct) {
      setScore(score + 1);
    }
    setNext(true);
  };

  const showNext = () => {
    if (currentIndex === questions.length - 1) {
      setShowModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrectOption(null);
      setCorrectOption(null);
      setDisableOption(false);
      setNext(false);
    }
  };

  const restartGame = () => {
    setShowModal(false);
    setCurrentIndex(0);
    setCurrectOption(null);
    setCorrectOption(null);
    setScore(0);
    setNext(false);
    setDisableOption(false);
    setTimerFinish(false);
    setResetTimer(true);
    setTimeout(() => setResetTimer(false), 100);
  };

  return (
    <GameLayout>
      <Statistic
        score={score}
        length={questions.length}
        currentIndex={currentIndex + 1}
        level={level}
        setTimeOut={setTimerFinish}
        resetTimer={resetTimer}
      />
      <Questions question={thisQuestion} />
      <Options
        options={thisOptions}
        onPress={checkValidation}
        disable={disableOption}
        correctOption={correctOption}
        currentOption={currentOption}
      />
      {next && <NextBtn onPress={showNext} />}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <GameOverModal
          closeModal={() => setShowModal(false)}
          restart={() => restartGame()}
          score={score}
          level={level}
          id={subjectId}
          currentIndex={currentIndex}
          dataLength={quizData.length - 1}
        />
      </Modal>
    </GameLayout>
  );
};

export default PlayGameScreen;

const styles = StyleSheet.create({});
