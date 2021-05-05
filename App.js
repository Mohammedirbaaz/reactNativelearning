import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView} from 'react-native';

export default function App() {
  /////////
  //hooks//
  /////////
  
  const [name,setName]=useState('ibbu');
  const [people,setPeople]=useState([
    {name:'messi',id:1},
    {name:'di maria',id:2},
    {name:'agueroooo',id:3},
    {name:'messi',id:1},
    {name:'di maria',id:2},
    {name:'agueroooo',id:3},
    {name:'messi',id:1},
    {name:'di maria',id:2},
    {name:'agueroooo',id:3},
    {name:'messi',id:1},
    {name:'di maria',id:2},
    {name:'agueroooo',id:3},
    {name:'messi',id:1},
    {name:'di maria',id:2},
    {name:'agueroooo',id:3},
    
  ])

  /////////////
  //functions//
  ////////////

  const namehandler=()=>{
    if(name==='ibbu'){
      setName('irbaaz');
    }else{
      setName('ibbu');

    }

  }
  return (
    <View style={styles.container}>

    <ScrollView>
      
      {/* dynamic text */}
      <Text>hey this is {name}</Text>

      {/* normal text */}
      <Text>Enter your name:</Text>

      {/* alphabetic,multiline restricted text */}
      <TextInput multiline keyboardType='ascii-capable' style={styles.inputs}  placeholder={' Person Name'}  onChangeText={(val)=>setName(val)} />
      
      {/* name changer button */}
      <Button title='change name' style={styles.btns} onPress={namehandler} />

      {/* disabled showing button */}
      <Button title="Press me" disabled  onPress={() => alert('Cannot press this one')}/>

      {/* lists */}
      {people.map((item,ids)=>{
            return(
              <View key={ids}>
                <Text style={styles.datae} >
                  {item.name}
                </Text>
              </View>
            )
          })
      }
      

      </ScrollView>
    </View>
  );
}

//styling area
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:30,
    paddingHorizontal:5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputs:{
    borderWidth:2,
    borderRadius:5,
    width:100,
    padding:1,
    borderColor:'#777',
  },
  btns:{
    paddingTop:30,
    width:80,
    backgroundColor:'yellow'
  },
  datae:{
    textAlign:'center',
    fontSize:20,
    textTransform:'capitalize',
    padding:10,
    margin:2,
    backgroundColor:'lightblue'

  }
});
