function preload()
{
 //clown_nose= loadImage("https://i.postimg.cc/13fwyBHV/clown-nose.jpg");
}

noseX=0;
noseY=0;

function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
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
  //image(clown_nose,noseX,noseY,30,30);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX,noseY,20);
}

function take_snapshot()
{
   save('filter_snapshot.png');
}