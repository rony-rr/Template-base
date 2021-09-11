import React, {useState, useEffect} from 'react';

import { 
  View, SafeAreaView, Animated

} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

/** Import Global Variables */
import GlobalVars from '../../global/globalVars';

/** Import Componentes Custom */
import ButtonComponent from '../../components/atoms/Buttons';
import LabelTextComponent from '../../components/atoms/Texts';

/** Import styles */
import Styles from './style';

const styles = Styles;  
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const Test = ({navigation}) => {

  useEffect( () => {
        
  }, []);


  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.viewRoot} >

            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.contentContainer} >
                
                <ButtonComponent text="Test" iconName="rightcircle" />
                <ButtonComponent text="Test 2" color="transparent" />

                <LabelTextComponent text="Test" color={GlobalVars.bluePantone} size={15} />

            </ScrollView>

        </View>
    </SafeAreaView>
  );

};

export default Test;