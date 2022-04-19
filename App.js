import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './component/Task';


export default function App() {
  const [id, setId] = useState(0)
  const [isText, setText] = useState();
  const [taskItems, setTaskItem] = useState([])

  const handleAddTask = (index) => {
    setTaskItem([...taskItems, isText])
    setText(null)
    setId(index)
  }
 
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy)
  }


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks!</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index}  onPress={() => completeTask()}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
          
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTextWrapper}
      >
        <TextInput style={styles.input} 
          placeholder={'write your text...'} 
          onChangeText={text => setText(text)} 
        />
        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4DAD8',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTextWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    paddingVertical:15,
    width:250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText:{

  }
});
