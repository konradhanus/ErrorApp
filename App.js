import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import ErrorButton from './components/ErrorButton';


const App = () =>  (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
         <ErrorButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

export default App;
