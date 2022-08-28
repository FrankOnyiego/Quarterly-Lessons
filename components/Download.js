import {View,Text, StyleSheet, Button, Linking} from "react-native"
import React from "react"

export default function Download(){
     return (
              <View style={styles.container}>
                <Text style={{
                  fontWeight: 'bold'
                }} >UPDATE AVAILABLE</Text>
                <Button title="Download"
                onPress={()=>{
                  Linking.openURL('https://play.google.com/store/apps/details?id=ke.co.pie');
                }}
                />
              </View>
    );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfffa'
  },

})

  