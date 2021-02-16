import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import TextCenter from '../../Components/TextCenter'
import Button from '../../Components/Button'
import { useState } from 'react';


const Login =(props) => {
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')

    const reset = () =>{
    setEmail('')
    setSenha('')
}
    return (
        <View style={{flex:1, textAlign:"center"}} >
            <Button navigation={props.navigation} />
          
            <TextCenter text="Login"  />
            <View style={styles.container}>
            <TextInput  style={styles.input} placeholder="Digite seu E-mail" onChangeText={text=>setEmail(text)} value={email}/>
            <TextInput  style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} onChangeText={text=>setSenha(text)} value={senha}/>
           

            <TouchableOpacity style={styles.button}>
                <Text>Login</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>reset()} >
            <Text>Reset</Text>
             </TouchableOpacity>

        </View>
        
        </View>
    )
}
export default Login

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        padding:10,
        width:300,
        backgroundColor:'#fff',
        fontSize:20,
        borderRadius:5
    },
    button:{
    marginTop:10,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"#900c3f",
    width:150,
    }
})



