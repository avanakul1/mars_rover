canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10; // we are setting the inital x position of rover
rover_y = 10; // we are setting the inital y position of rover

function add() {
  background_imgTag = new Image(); //we are creating object background_imgtag with image properties  example akul is an object and beloging to the class human
  background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
  background_imgTag.src = background_image; // load image

  rover_imgTag = new Image(); //defining a variable with a new image
  rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
  rover_imgTag.src = rover_image; // load image
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown); // keydown is an event name and my_keydown is a name of the function which is to be called when key is pressed

function my_keydown(e) {
  keyPressed = e.keyCode; // we are saving the keycode of pressed button we are saving it in the variable key_pressed
  console.log(keyPressed);
  if (keyPressed == "38") {
    // 38 is the key code for up
    console.log("up"); //if we are pressing the up button it will show up on the console
    up();
  }
  if (keyPressed == "40") {
    console.log("down");
    down();
  }
  if (keyPressed == "37") {
    console.log("left");
    left();
  }
  if (keyPressed == "39") {
    console.log("right");
    right();
  }
}
function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    uploadBackground();
    uploadrover();
  }
}

function down() {
  if (rover_y <= 600) {
    rover_y = rover_y + 10;
    uploadBackground();
    uploadrover();
  }
}

function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    uploadBackground();
    uploadrover();
  }
}

function right() {
  if (rover_x >= 0) {
    rover_x = rover_x + 10;
    uploadBackground();
    uploadrover();
  }
}
