import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Videos() {
    const[audiolist, setaudioList]=useState([]);
    useEffect(()=>{
            AsyncStorage.getItem("StoreAudioList").then(val=>{
                setaudioList(JSON.parse(val));
            })
    },[])

     return (
    <ScrollView>             
       <View>
            {audiolist.map(video =>
                <View style={styles.list}> 
                    <Text style={styles.titlelist}>{video.artist.toUpperCase()}</Text>
                    {video.clips.map(v=>
                        <View>
                            <Text style={{
                                color: 'blue',
                                fontWeight: 'bold'
                            }}>{v.title.toUpperCase()}</Text>        
                            <WebView  
                                allowsFullscreenVideo={true}
                                scalesPageToFit={true}
                                mediaPlaybackRequiresUserAction={true}
                            source={{html: ` <video width="100%" height="100%" controls="0" poster="${v.thumbnail}">
                            <source src="${v.src}" type="video/mp4">
                             Your browser does not support the video 
                        </video>`}}
                            style={{marginTop: 4,
                            height: 200,                            
                            }}
                            startInLoadingState={true}
                            />  
                        </View>
                    )

                    }
                </View>
            )}
       </View> 
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    video: {
        height: 200
    },
    titlelist: {
       fontWeight: 'bold',
       color: 'green',
       textDecorationLine: 'underline',
       fontWeight: 'serif' 
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