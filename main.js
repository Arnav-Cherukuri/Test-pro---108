gesture = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90

});
camera = document.getElementById("camera");
Webcam.attach(' #camera ');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 console.log('ml5 version:', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wRjV6r0WV/model.json',modelLoaded);
 
 function modelLoaded(){
     console.log('Model Loaded!');
 }

 function check(){
img = document.getElementById("captured_image");
classifier.classify(img, gotResult);
 }

 function gotResult(error, results){
     if (error){
         console.error(error);
     }
     
        console.log(results);
        gesture = results[0].label;
        document.getElementById("result_object_names").innerHTML = results[0].label;
       
        if (gesture == Amazing) {
    document.getElementById("result_object_gesture_icon").innerHTML = "&#128076";
        }
        
        if (gesture == Best) {
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077";
        }
        
        if (gesture == Victory) {
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996";
                }
            
    
 }
