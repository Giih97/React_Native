import React from 'react'

import TextCenter from '../../Components/TextCenter'
import { View, StyleSheet, Text} from 'react-native'
import Button from '../../Components/Button'


const Home = (props) => {
    return (
        <View style={styles.container}>
            <Button navigation={props.navigation} />
        

            <TextCenter text="Seja Bem Vindo a Loja GiihFlores!" />
            <Text ><h2>Aqui você encontra as melhore flores para dá de presente!</h2></Text>
            

        </View>

    )
}

export default Home

const styles = StyleSheet.create({
   container: {
    flex: 1,
    textAlign:"center"
},
text:{
    flex:1,
    textAlign:"center",
    marginTop:10,
    

}
})