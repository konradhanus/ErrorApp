import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
// import { ErrorBoundary } from '@sentry/react';
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

          <ErrorBoundary> 
           <ErrorButton />
          </ErrorBoundary>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );

export default App;
