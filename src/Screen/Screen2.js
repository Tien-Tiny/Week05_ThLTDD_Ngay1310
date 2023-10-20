import { StatusBar } from "expo-status-bar";
import React,{Component, useState} from "react";
import { 
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View,
 } from "react-native";
 import Screen01 from './Screen01.js'
 export default function App({navigation}){
  const [color, setColor] = useState(require("../../assets/vs_blue.png"));

    return(
<View style ={styles.container}>

  <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "20%",
          }}
        >
          
            <Image
            source={color}
            style={{width:"112px", height:"132px", margin:"3px"}}/>
          
          <Text style={{fontSize: 15, width: "164px", height: "36px", marginTop:"20px"}}>
          Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
        </Text>
  </View>

    <View style={{width:"100%", height:"80%",backgroundColor:"#C4C4C4"}}>
    <Text style={{fontSize: 18,color:"white", fontFamily: "roboto", margin: "3px", marginLeft:"20px", color:"black"}}>
            Chọn một màu bên dưới:
    </Text>
        <View  style={{flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
            <View>
            <TouchableOpacity 
            onPress={()=>{
              setColor(require("../../assets/vs_silver.png"));
            }}
            style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#C5F1FB",
                margin: "6px",
              }}
            ></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
             onPress={()=>{
               setColor(require("../../assets/vs_red_a 1.png"));
            }}
            style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#F30D0D",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
            onPress={()=>{
              setColor(require("../../assets/vs_black.png"));
            }}
            style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#000000",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
            onPress={()=>{
              setColor(require("../../assets/vs_blue.png"));
            }}
            style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#234896",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
            <TouchableOpacity 
            onPress={()=>{
                navigation.goBack();
            }
              } 
              style={{
            width: "350px",
            height: "49px",
            backgroundColor: "blue",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: "10px",
            marginTop: "50px",
            justifyContent:"center",
            alignItems: "center"
          }}>
          <Text style={{fontSize: 20, color:"white", fontWeight:"bold"}}>
          XONG
        </Text>
            </TouchableOpacity>
          </View>

        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
    }, 
    
 });