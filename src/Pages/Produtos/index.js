import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import TextCenter from '../../Components/TextCenter'
import Button from '../../Components/Button'
import BasicFlatList from '../../Components/FlatList'


const Produtos =(props) => {
    return (
        <View style={{flex: 1}}>
            <Button navigation={props.navigation} />
            <TextCenter text="Flores" />
            <BasicFlatList/>
        
        </View>
    )
}

export default Produtos