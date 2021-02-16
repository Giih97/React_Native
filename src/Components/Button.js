import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
const Button = (props) => {
    return (
        <View style={{alignItems: 'flex-start', padding: 20}}>
            <TouchableOpacity
            onPress={() => {
                props.navigation.openDrawer();
                setTimeout(()=>{
                    props.navigation.closeDrawer();
                }, 4000);
            }}
            >
              <Icon name="bars" size={50} />
            </TouchableOpacity>

        
        </View>
    )
}

export default Button;
