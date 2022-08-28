import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Videos({navigation}) {
    const[lessonapi, setLessonApi]=useState([]);
    const[lessonlist, setlessonList]=useState([]);
    useEffect(()=>{
        //Access Lesson Api From Storage
        AsyncStorage.getItem("storeLessonapi").then(val=>{
            setLessonApi(JSON.parse(val));
        })
        //store lesson list
        AsyncStorage.getItem("storeLessonList").then(valu=>{
            setlessonList(JSON.parse(valu))
        })
    },[])

     return (
    <ScrollView>             
        <View style={styles.container}>
            <Text style={styles.title}>{lessonapi["title"]}</Text>
            <Image style={styles.image} source={{uri:`${lessonapi["splash"]}`}}/>
            
        </View>
        <Text style={{ 
            fontSize: 25,
            fontWeight: 'bold',
            color: 'red'
        }}>LESSONS</Text>
       <View>
            {lessonlist.map(lessons =>
            <TouchableOpacity onPress={()=>{
                //navigation.navigate('Listen'); 
                navigation.navigate('Lesson',{
                    link: `https://absg.adventist.org/assets/public/files/lessons/2022/3Q/SE/PDFs/EAQ322_${lessons.id}.pdf`
                });
            }}>
                <View style={styles.list}>
                    <Text style={styles.titlelist}>{lessons.title.toUpperCase()} - LESSON {lessons.id}</Text>
                    <Text>{lessons.start_date} - {lessons.end_date}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'indigo',
                        fontSize: 19
                    }}>{lessons.end_date}</Text>
                </View>
            </TouchableOpacity>
            )}
       </View>
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
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green'
    },
    image: {
        height: 400,
        width: '100%'
    },
    list: {
        padding: 5,
        borderBottomWidth: 1,
        marginBottom: 4
    }
})
export default Videos