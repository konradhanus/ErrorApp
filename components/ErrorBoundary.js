import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import {Text, Button} from 'react-native-paper';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) { 
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error('MY ERROR', error, errorInfo);
    }

      handleBackToSignIn = async () => {
    // remove user settings
    await this.destroyAuthToken();
    // restart app
    RNRestart.Restart();
  }
  
    render() {
      if (this.state.hasError) {
        console.log('im here')
        // You can render any custom fallback UI
        return <SafeAreaView
    
      >
        <View >
          <View >
            <Text style={{ fontSize: 32 }}>Oops, Something Went Wrong</Text>
            <Text style={{ marginVertical: 10, lineHeight: 23, fontWeight: '500', }}>
              The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.
            </Text>
            <Button
              label={'Back to Sign In Screen'}
              onPress={() => this.handleBackToSignIn()}
              style={{ 
                marginVertical: 15, 
              }}
            />
          </View>
        </View>
      </SafeAreaView>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;