// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React from 'react';
//  import type {Node} from 'react';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//  } from 'react-native';
 
 
 
 
 
//  import Input from './src/components/Input';
 
 
//  const App: () => Node = () => {
//    const [inputs, setInputs] = React.useState({
//      phone: '',
//    });
//    const [errors, setErrors] = React.useState({
//      phone: '',
//    });
//    const validate = () => {
//      Keyboard.dismiss();
 
//      const validatePhoneNumber = require('validate-phone-number-react-native');
//      let phoneNumberIsValidated = validatePhoneNumber(inputs.phone);
//      if (phoneNumberIsValidated) {
//        ToastAndroid.show('Successful!', ToastAndroid.SHORT);
//      } else {
//        handleError('Please input valid phone number', 'phone');
//      }
//    };
//    const handleOnChange = (text, input) => {
//      setInputs(prevState => ({...prevState, [input]: text}));
//    };
 
//    const handleError = (errorMessage, input) => {
//      setErrors(prevState => ({...prevState, [input]: errorMessage}));
//    };
 
//    const isDarkMode = useColorScheme() === 'dark';
   
   
 
//    return (
//      <View style={styles.container}>
//        <View style={styles.wrapper}>
//          <Input
//            onChangeText={text => handleOnChange(text, 'phone')}
//            error={errors.phone}
//            onFocus={() => {
//              handleError(null, 'phone');
//            }}
//            keyboardType="numeric"
//            label="Phone Number"
//            placeholder="Enter your phone number"
//          />
//          <Button title="Validation" onPress={validate} />
//          <View style={{flexDirection: 'row', marginTop: 20}}></View>
//        </View>
//      </View>
//    );
//  };
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//      backgroundColor: '#fff',
//    },
//    wrapper: {
//      width: '80%',
//    },
//  });
 
 
//  export default App;
 