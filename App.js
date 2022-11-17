import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import * as Sentry from "@sentry/react";
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';


const App = () =>  (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>

          <ErrorBoundary> 
           <ErrorButton />
          </ErrorBoundary>  

          <Sentry.ErrorBoundary fallback={<Text>Error from Sentry</Text>}> 
           <ErrorButton />
          </Sentry.ErrorBoundary>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );

export default App;
