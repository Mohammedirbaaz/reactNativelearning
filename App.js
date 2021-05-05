import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [name,setName]=useState('ibbu');
  const namehandler=()=>{
    if(name==='ibbu'){
      setName('irbaaz');
    }else{
      setName('ibbu');

    }

  }
  return (
    <View style={styles.container}>
      <Text>hey this is {name}</Text>
      
      <Button title='change name' onPress={namehandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
