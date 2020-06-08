import React from 'react';
import { Text } from 'react-native';
import { Button, teXT } from 'native-base';

const InitSettings = ({ navigation }) => {
  return (
    <>
    <Text>fsdfsdfsdf</Text>
    <Button success onPress={() => navigation.navigate('Home')}>
      <Text>Go to Home screen!</Text>
    </Button>
    </>
  )
}

export default InitSettings