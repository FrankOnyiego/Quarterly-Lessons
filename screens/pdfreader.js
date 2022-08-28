import React, { useEffect, useState } from 'react'
import PDFReader from 'rn-pdf-reader-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Pdfreader({ route , navigation }) {
const[savedlink, setSavedLink]=useState();
//const { link } = route.params;

useEffect(()=>{
  if(route.params === undefined){
    console.log("undefined"); 
    //save it to Asyncstorage
    AsyncStorage.getItem("prevlesson").then(value=>{
      value=JSON.parse(value);
      setSavedLink(value);
    })
}
else{ 
  console.log("defined");
  const { link } = route.params;
  setSavedLink(link);
    //save it to Asyncstorage
    AsyncStorage.setItem("prevlesson",JSON.stringify(link));
}
})

    return (
      <>
      <PDFReader
              source={{ 
              uri: `${savedlink}`,
              }}
          />
      </>
    )

  this.props.route.setParams({link: null});
}

export default Pdfreader