import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Picker,
  Alert,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';


class Cadastro extends Component {
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
  inputs={
    inputNome:null,
    inputEmail:null,
    inputSenha:null,
    inputIdade:null,
  }
  Next=()=>{
    this.props.navigation.navigate('Perfil')
  }
  storeLogin = async()=> {
    const userNome = this.state.nome
    try {
      await AsyncStorage.setItem('userNome', userNome);
    } catch (error) {
      Alert.alert(error.message);
    }
    
    this.props.navigation.navigate('Perfil')
    
  };
  
 render(){
 return (
    <View style={styles.container}>
      <View style={styles.view}>
      <KeyboardAvoidingView>
      <ScrollView>
        <Text style={styles.header}>Cadastro</Text>
        <Text style={styles.header}>Bem vindo</Text>
        <Text style={styles.title}>Digite seu nome</Text>
            <TextInput
              multiline
              placeholder={'Nome'}
              onChangeText={nome=>this.setState({nome})}
              value={this.state.nome}
              style={{height:80, color:'white', borderBottomWidth: 1,
              borderBottomColor: 'white',
              fontSize: 15,width:200
              }}
              ref={variable => (this.inputs.inputNome = variable)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Enter') {
                    this.inputs.inputEmail.focus()
                  }
                }}
            />
        <Text style={styles.title}>Digite seu email</Text>
            <TextInput
              multiline
              placeholder={'E-mail'}
              onChangeText={email=>this.setState({email})}
              value={this.state.email}
              style={{height:80, color:'white', borderBottomWidth: 1,
              borderBottomColor: 'white',
              fontSize: 15,width:200
              }}
              ref={variable => (this.inputs.inputEmail = variable)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Enter') {
                    this.inputs.inputSenha.focus()
                  }
                }}
            />
        <Text style={styles.title}>Digite sua senha</Text>
            <TextInput
              multiline
              placeholder={'senha'}
              onChangeText={senha=>this.setState({senha})}
              value={this.state.senha}
              style={{height:80, color:'white', borderBottomWidth: 1,
              borderBottomColor: 'white',
              fontSize: 15,width:200
              }}
              ref={variable => (this.inputs.inputSenha = variable)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Enter') {
                    this.inputs.inputIdade.focus()
                  }
                }}
            />
        <Text style={styles.title}>Digite sua idade</Text>
            <TextInput
              multiline
              placeholder={'idade'}
              onChangeText={idade=>this.setState({idade})}
              value={this.state.idade}
              style={{height:80, color:'white', borderBottomWidth: 1,
              borderBottomColor: 'white',
              fontSize: 15,width:200
              }}
              ref={variable => (this.inputs.inputIdade = variable)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Enter') {
                    this.inputs.inputIdade.blur()
                  }
                }}
            />
        <Text style={styles.title}>Escolha uma preferencia temática</Text>
        <Picker
            selectedValue={this.state.gosto}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({gosto: itemValue})
            }>
            <Picker.Item label="escolha o genero" />
            <Picker.Item label="Terror" value="terror" />
            <Picker.Item label="Comédia" value="comedia" />
            <Picker.Item label="Romance" value="romance" />
            <Picker.Item label="Ação" value="acao" />
        </Picker>
        
        <Button onPress={()=>this.storeLogin()}
          title={'Visualizar Perfil'}/>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>          
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
    header:{
      fontSize:24,
      margin:10
    },
    title:{
      fontSize:16
    },
    container:{
            backgroundColor:'blue',
      width:'100%',
      height:'100%'
    },
    view:{
      margin:36,
    }
});

export default Cadastro