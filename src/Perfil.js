import React, { Component } from 'react'
import Momo from '../images/momo.jpg'
import Romance from '../images/romance.jpeg'

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button
  
} from 'react-native';


class Perfil extends Component {
    state={
        idade:null,
        imagem:null,
        senha:null,
        nome:null,
        email:null,
        gosto:null,
        saldo:null,
        data:null,
        objeto:null
      }

    render(){
      {/*  
      var pref=''
        switch(objeto.gosto){
          case 'terror':
            pref=Momo
            break
          case 'romance':
            pref=Romance
            break
          case 'acao':
             pref=Acao
             break
          case 'comedia':
             pref=Comedia
             break
        }*/}
        
        
      return (
          <View style={styles.container}>
            <ImageBackground style={{flex:1, height:'100%', width:'100%', backgroundColor:'black'}}>
              <Text>Olá</Text>
              <Text>Olá</Text>
              
            </ImageBackground>
          </View>


        )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  })
  export default Perfil