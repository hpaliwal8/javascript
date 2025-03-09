let localStream;
let remoteStream;

let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    console.log(document.getElementById('user-content-1'));
    document.getElementById('user-content-1').srcObject = localStream;
}

init();
