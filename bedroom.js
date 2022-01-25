function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetection=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = ("Status : Object Detected");
}

img ="";
status="";

function preload()
{
img = loadImage("dog_cat.jpg");
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status= "True";
    objectDetection.detect(img, gotPoses);
}

function draw()
{
 image(img, 0, 0, 640, 420);
 fill("#800000");
 text("Dog", 45, 75);
 noFill();
 stroke("#FF0000");
 rect(30, 60, 450, 350);  
 
 fill("#800000");
 text("Cat", 350, 120);
 noFill();
 stroke("#FF0000");
 rect(300, 90, 270, 320);
}

function gotPoses(error, results)
{
    if(error){
        console.log(error)
    }
    else{
       console.log(results);     
    }
}
