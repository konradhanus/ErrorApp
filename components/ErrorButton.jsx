import { Alert } from "react-native"
import { Button } from "react-native-paper"

const ErrorButton = () => {

    const crashApp = () => {

        fetch('a stick')
        .then((res) => res.json())
        .then(res => {
           console.log('success', res);
        })
        .catch(error => {
            console.error('an error occured:', error)
        })
    }

    return <Button mode="contained" buttonColor="red" onPress={crashApp}>Error button</Button>
}

export default ErrorButton;