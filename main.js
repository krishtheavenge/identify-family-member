Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    png_quality:1000
});

camera=document.getElementById("camera1");


Webcam.attach('#cam');


function take_snapshot(){
    Webcam.snap(function(photo){
            document.getElementById("output").innerHTML ="<img id='capured_image' src='"+photo+"'>";
    })
};


console.log("ml5version",ml5.version);



    classifier=ml5.imageClassifier('so far nothing here but will add later',modelLoaded);



