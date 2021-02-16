import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Produtos from '../Pages/Produtos'


const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
       <routeDrawer.Navigator initialRouteName="Home">
           <routeDrawer.Screen name="Home" component={Home} />
           <routeDrawer.Screen name="Login" component={Login} />
           <routeDrawer.Screen name="Produtos" component={Produtos} />
       </routeDrawer.Navigator>
    )
}

export default Drawer
