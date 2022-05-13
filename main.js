function preload()
{
  mustach_image= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

noseX=0;
noseY=0;

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300.300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length>0)
    {
       console.log(results);
       noseX=results[0].pose.nose.x-40;
       noseY=results[0].pose.nose.y;
       console.log("noseX = " + noseX);
       console.log("noseY = " + noseY);
    }
}

function modelLoaded()
{
    console.log('modelLoaded');
}

function draw()
{
  image(video,0,0,300,300);
  image(mustach_image,noseX,noseY,80,35);
}

function take_snapshot()
{
   save('filter_snapshot.png');
}