import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet,ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Videos() {
    const[newsList, setnewsList]=useState([]);
    useEffect(()=>{
            AsyncStorage.getItem("StoreNewsList").then(val=>{
                setnewsList(JSON.parse(val));
            })
    },[])

     return (
    <ScrollView>             
        {newsList.map(news =>
            <View style={{
                borderBottomWidth: 1,
                marginBottom: 4,
                padding: 4
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}>{news.title["en-US"].toUpperCase()}</Text>
                        {JSON.parse(JSON.stringify(news.data.body.value["en-US"])).map(val=>
                            <Text style={{
                                color: 'purple'
                            }}>{(val.children[0].text)}</Text>
                        )
                    }
            </View>                
        )}  

    </ScrollView>
  )
}
 
const styles=StyleSheet.create({
    titlelist: {
       fontWeight: 'bold'
    },
    container: {
      margin: 1
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'green'
    },
    image: {
        height: 200,
        width: '100%'
    },
    list: {
        padding: 5,
        borderBottomWidth: 1,
        marginBottom: 4
    }
})
export default Videos