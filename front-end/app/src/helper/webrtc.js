 export async function playVideoFromCamera(){
    try {
        const constraints = {'video':false}
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        return stream
    } catch (error) {
        console.error('Error opening video camera.',error)
    }
}