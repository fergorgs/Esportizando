import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

import WelcomeSlide from './Slides/WelcomeSlide'
import ExplanationSlide from './Slides/ExplanationSlide'
import TeamOrAloneSlide from './Slides/TeamOrAloneSlide'
import OpponentsSlide from './Slides/OpponentsSlide'
import MainObjectivesSlide from './Slides/MainObjectivesSlide'
import OtherGoalsSlide from './Slides/OtherGoalsSlide'
import FocussedMusclesSlide from './Slides/FocussedMusclesSlide' 
import SpecificitiesSlide from './Slides/SpecificitiesSlide'
import MidWaySlide from './Slides/MidWaySlide'
import TimeSlide from './Slides/TimeSlide'
import PlaceOfPracticeSlide from './Slides/PlaceOfPracticeSlide'
import EquipamentsSlide from './Slides/EquipamentsSlide'
import ConditionsSlide from './Slides/ConditionsSlide'
import EndSlide from './Slides/EndSlide'

const QuestionsScreen = () => {

    return (
        <Swiper loop={false} showsButtons={true}>
            <WelcomeSlide/>
            <ExplanationSlide/>
            <TeamOrAloneSlide/>
            <OpponentsSlide/>
            <MainObjectivesSlide/>
            <OtherGoalsSlide/>
            <FocussedMusclesSlide/>
            <SpecificitiesSlide/>
            <MidWaySlide/>
            <TimeSlide/>
            <PlaceOfPracticeSlide/>
            <EquipamentsSlide/>
            <ConditionsSlide/>
            <EndSlide/>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      padding: 5
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  })

export default QuestionsScreen