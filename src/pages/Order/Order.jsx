import React, { useState } from 'react'
import axios from 'axios'
import API from '../../utils/axiosSetup';
import { baseUrl } from '../../App';
// import fatch from 'fs'



function Order() {
  
  const [latitude , setLatitude]=useState()
  const [longitude , setLongitude] = useState()


  const getLocation =async ()=>{
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          console.log( latitude ,longitude);
      },
      (error)=>{
          console.log(error);
      }
    )
     }

    //  try {
    //   await fetch(url).then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(
    //       'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
    //     );
    //   });
    //   // console.log(data);
    //  } catch (error) {
    //    console.log(error);
    //  }

      try {
        const {data} = API.post(`${baseUrl}/order`, {latitude , longitude} , {
          headers: { "Content-Type": "multipart/form-data", },
          withCredentials: true
      })
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>Order
      <button onClick={getLocation}> Location </button>
    </div>
  )
}

export default Order
