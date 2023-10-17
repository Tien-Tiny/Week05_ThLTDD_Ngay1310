import {
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    View,
  } from "react-native";
import React, { Component, useState } from "react";
export default function App ({navigation}){
  return (
<View style ={styles.container}>

  <View
          style={{
            flexDirection: "column",
            width: "100%",
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/vs_blue.png")}
            style={{ width: "330px", height: "360px" }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3  - Hàng chính hãng
        </Text>
  </View>
  <View
      style={{
        width:"100%",
        height:"40%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
         
      <View
        style = {{
            flexDirection:"row",
          }}>
            <Image
            source={require("../../assets/star.png")}
            style={{width:"33px", height:"33px"}}
        />
        <Image
            source={require("../../assets/star.png")}
            style={{width:"33px", height:"33px"}}
        />
        <Image
            source={require("../../assets/star.png")}
            style={{width:"33px", height:"33px"}}
        />
        <Image
            source={require("../../assets/star.png")}
            style={{width:"33px", height:"33px"}}
        />
        <Image
            source={require("../../assets/star.png")}
            style={{width:"33px", height:"33px"}}
        />
        <Text style={{ fontWeight: "normal", fontSize: 21}}>
          (Xem 828 đánh giá)
        </Text>
        </View>
        <View style={{ flexDirection: "row"}}>
            <Text style={{ fontWeight: "bold", fontSize: 19, marginRight:'50px' }}>1.790.000 đ</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, textDecorationLine: 'line-through',opacity: 0.5,}}>1.790.000 đ</Text>
          </View>
          <View style={{ flexDirection: "row"}}>
            <Text style={{ fontWeight: "bold", fontSize: 19, marginRight:'50px',color:"red" }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image
            source={require("../../assets/Group 1.png")}
            style={{width:"33px", height:"33px"}}
        />
          </View>
            <View style={{borderWidth:1, borderRadius:10, width:"100%", height:"45px" }}>
              <TouchableOpacity onPress={()=>{
               navigation.navigate('Screen2')
          }
        } style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={{marginRight:"60px", marginLeft:"120px"}}>
            4 MÀU-CHỌN MÀU
          </Text>
          <Image
            source={require("../../assets/Vector.png")}
            style={{width:"33px", height:"33px"}}
        />
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
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  }, 
  
})
