import {playVideoFromCamera} from '../helper/webrtc'
import { useEffect, useState } from 'react';


 function Video(props){
    // let stream = null;
    // const [stream,setStream] = useState(null)

    // playVideoFromCamera().then(stream => setStream(stream))

    useEffect(() => {
      return 
    })
    function handleVideo(){
        console.log(videoRef)
    
        playVideoFromCamera().then(data => {
          console.log(videoRef)
          videoRef.current.srcObject =data;
       })
      }
    return(
        <video  autoPlay>

        </video>
        
    )
}

function getOwnStream(){

}

// playVideoFromCamera()

export default Video