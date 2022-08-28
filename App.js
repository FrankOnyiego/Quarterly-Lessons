
import { StyleSheet, Text, View , Alert} from 'react-native';
import Tabs from './components/Tab';
import Download from './components/Download';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function App() {
  const thisversion = 1;
  //CHECK UPDATE
  const[version, setVersion]=useState("");
  const baseUrl = 'https://fxpesa.pie.co.ke/lessons/version.php';

  axios({
    method: 'get',
    url: `${baseUrl}`,
  }).then((response) => {
    console.log("setting the version");
    setVersion(response.data);
  }); 
 
  //CODE FOR VIDEOS.JS
  useEffect(()=>{ 
      //store data for the lessson Api
      fetch('https://sabbath-school-stage.adventech.io/api/v2/en/quarterlies/index.json').then(value=>{
            const promise = value.json();
            promise.then(res=>{
              AsyncStorage.setItem("storeLessonapi",JSON.stringify(res[0]));
            })
        })

      //store lessonlist
    fetch('https://sabbath-school-stage.adventech.io/api/v2/en/quarterlies/2022-03/index.json').then(value=>{
                    const promise = value.json();
                    promise.then(res=>{
                      AsyncStorage.setItem("storeLessonList",JSON.stringify(res.lessons))
                    })
                })
},[])

//CODE FOR AUDIO.JS
useEffect(()=>{
    fetch('https://fxpesa.pie.co.ke/newsapi/sdanews.php').then(value=>{
            const promise = value.json();
            promise.then(res=>{
              AsyncStorage.setItem("StoreNewsList",JSON.stringify(res));
            })
        })
})

useEffect(()=>{
  fetch('https://sabbath-school-stage.adventech.io/api/v2/en/quarterlies/2022-03/video.json').then(value=>{
    const promise = value.json();
    promise.then(res=>{
        AsyncStorage.setItem("StoreAudioList",JSON.stringify(res))
    })
}) 
})

  if(version > thisversion){  
  //CONTINUE IF APP IS UP TO DATE
  return (
    <>
      <Download />     
    </> 
  );
  }else{
    return(
      <>
         <Tabs />  
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
