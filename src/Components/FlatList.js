import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "1",
    title: "Buquê de Cravos",
    image: require("./img/cravos.jpg"),
    price:"99,80",
  },
  {
    id:"2",
    title:"Buquê de Girassois",
    image: require("./img/girassois.jpg"),
    price:"99,80",
  },
  {
    id:"3",
    title:"Buquê de Lírios",
    image: require("./img/lirios.jpg"),
    price:"99,80",
  },
  {
    id:"4",
    title:"Buquê de Margaridas",
    image: require("./img/margaridas.jpg"),
    price:"99,80",
  },
  {
    id:"5",
    title:"Buquê de Orquídeas",
    image: require("./img/orquideas.jpg"),
    price:"99,80",
  },
  {
    id:"6",
    title:"Buquê de Rosas",
    image: require("./img/rosas.jpg"),
    price:"99,80",
  }
];


class ListProdutos extends Component{
  render(){
    return(
      <View style={{flex:1, flexDirection:"column"}}>
      <View style={{flex:1,flex:"row"}}>
      <Image
      source={{uri:this.props.item.image}}
         style={{width: 100, height: 100, margin: 5}}>

      </Image>

      <View style={{flex:1, flexDirection:"column",height:100}}>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.price}</Text>
      </View>
      </View>
      </View>
    )
  }
}


export default class BasicFlatList extends Component {
  render(){
    return(
<SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item,index}) => {
          return ( 
          <ListProdutos image={{uri: item.image}} item={item} index={index}>
          keyExtractor={item=> item.id} </ListProdutos> )

          }}
        >

        </FlatList>
   </SafeAreaView>
    )
  }
}


