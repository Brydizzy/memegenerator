const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image; 

imageFileInput.addEventListener("change",() => {
const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);

image = new image();
image.src = imageDataUrl;

image.addEventListener("load", () =>{
  updateMemeCanvas(canvas,image,topTextInput.value,bottomTextInput.value);
}, {once: true});
});


topTextInput.addEventListener("change",() =>{
  updateMemeCanvas(canvas, topTextInput.value, bottomTextInput.value);
});


bottomTextInput.addEventListener("change",() =>{
  updateMemeCanvas(canvas, topTextInput.value, bottomTextInput.value);
});



function updateMemeCanvas(canvas,image,topText,bottomText){
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffSet = height / 25;

// Update Canvas background
canvas.width = width;
canvas.height = height;
ctx.drawImage(image, 0, 0);

//prepare text
ctx.strokeStyle = 'black';
ctx.lineWidth = Math.floor(fontSize / 4); 
ctx.fileStyle = "white";
ctx.textAlign = "center";
ctx.LineJoin = " round";
ctx.font = `${fontSize}px sans-serif`;

//Add top text
ctx.textBaseline = "top";
ctx.strokeText(topText,width / 2, yOffset);
ctx.fillText(topText, width / 2, yoffset);

// add bottom text
ctx.textBaseline = "bottom";
ctx.strokeText(bottomText,width / 2, height - yOffset);
ctx.fillText(bottomText, width / 2, height - yoffset);

}





