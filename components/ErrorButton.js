import {useState} from 'react';
import { Button } from "react-native-paper"

const ErrorButton = () => {

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState()

    const crashApp = () => {
        setIsError(true)
        setErrorMessage('HI ERROR');
    }

    if(isError)
        throw new Error(errorMessage);

    return <Button mode="contained" buttonColor="red" onPress={crashApp}>Throw an Error</Button>
}

export default ErrorButton;