import React, { Component } from 'react';



import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
  } from 'react-native';



class App extends Component {
  
  state={
    idade:null,
    imagem:null,
    senha:null,
    nome:null,
    email:null,
    gosto:null,
    saldo:null,
    data:null
  }
  
  
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <Text style={styles.title}>Digite seu email</Text>
          <TextInput
            placeholder={'E-mail'}
            onChangeText={email=>this.setState({email})}
            value={this.state.email}
            style={{height:50, color:'white', borderBottomWidth: 1,
            borderBottomColor: 'white',
            fontSize: 15,width:200
            }}
          />
          <Text style={styles.title}>Digite sua senha</Text>
          <TextInput
            placeholder={'Password'}
            onChangeText={senha=>this.setState({senha})}
            value={this.state.senha}
            style={{height:50, color:'white', borderBottomWidth: 1,
            borderBottomColor: 'white',
            fontSize: 15,width:200
            }}
          /><TouchableOpacity onPress={()=>this.props.navigation.replace('Cadastro')}>
              <Text style={styles.texto}>Login</Text>
            </TouchableOpacity>
        
        </View>
      
     
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'#0022cc',
   height:'100%',
   width:'100%'
 },
 title:{
   color:'white',
   fontSize:24
 },
 box:{
   marginTop:100,
   alignItems:'center',
   alignContent:'center',
  
 },
 texto:{
   color:'white',
   fontSize:20
 }
});

export default App;