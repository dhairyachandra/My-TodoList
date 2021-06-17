import React, {useState} from 'react';
import { KeyboardAvoidingView,Platform, StyleSheet, Text, TouchableOpacity, View , TextInput, Keyboard, ScrollView} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
    <View style = {styles.tasksWrapper}>
        <Text style ={styles.sectionTitle}>My Tasks</Text>
        
        <View style = {styles.items}>
          <ScrollView>
          {
            taskItems.map((item, index) => {
              return (<TouchableOpacity key={index} onPress={() => completeTask(index)}>
                 <Task  text = {item} />
              </TouchableOpacity>)
             
            })
          }
          </ScrollView>

        </View>
    </View>
    <KeyboardAvoidingView
      behaviour={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder = {'New Task'} value = {task} onChangeText = {text => setTask(text)}></TextInput>
        <TouchableOpacity onPress ={() => handleAddTask()}> 
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30,
    marginBottom: 200,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    marginLeft: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addtext:{},
    
});
