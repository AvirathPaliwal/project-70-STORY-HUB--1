import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            text1:''
        }
    }
    
    render(){
        return(
            <View>
              <Header
                    backgroundColor={'teal'}
                    centerComponent={{
                    text: 'My Story Hub',
                    style: { color: '#fff', fontSize: 20 },
                    }}
                />
                <Text style = {styles.text}>Title of the Book:- </Text>
               <TextInput
               style={styles.inputBox}
               onChangeText={text => {
                 this.setState({ text: text });
               }}
               value={this.state.text}
               
             />
             <Text style = {styles.text2}>Author of the Book:-
             </Text>
             <TextInput 
                onChangeText={text => {
                 this.setState({ text1:text });
               }}
               style={styles.inputBox2}
               value={this.state.text1}/>
                <TouchableOpacity 
         
          style= {styles.submit}>
         <Text> SUBMIT</Text>
        </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
 inputBox: {
             marginTop: 50,
             width: '80%',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
           inputBox2: {
            marginTop: 20,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
            
          },
          text:{
            color:'purple',
            fontSize:20,
            textAlign:'center'
          },
          text2:{
            color:'purple',
            fontSize:20,
            textAlign:'center'
          },
          submit:{
            justifyContent:'center',
            borderWidth:4,
            backgroundColor:'orange',
            marginTop:20,
            marginLeft:700,
            width:75,
            height:45,
          }
    
})