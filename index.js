document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Create a new div element
    let newDiv = document.createElement('div');
    newDiv.className = 'box';

    let divStyle = newDiv.style;
    divStyle.height = '60%';
    divStyle.width = '40%';
    divStyle.backgroundColor = 'yellow';
    divStyle.border = '2px solid black';

    // created buttons
    let firstButton = document.createElement('button');
    firstButton.style.marginBottom='3px';
    let secondButton = document.createElement('button');
    firstButton.textContent = 'Change Shape'; // Set the button's text
    secondButton.textContent = 'Change Color';
// created circle
    let circle=document.createElement('div');
    circle.style.marginTop='15px';
    circle.style.height='200px';
    circle.style.width='200px';
    circle.style.borderRadius='100%';
    circle.style.border='2px solid black';
    circle.style.backgroundColor='white';
    circle.style.position = 'relative';
    circle.style.display = 'flex';           // Added to use flexbox layout
    circle.style.alignItems = 'center';      // Center vertically
    circle.style.justifyContent = 'center';  // Center horizontally

    
    // creating image tag
    let images=document.createElement('img');
    // images.src='./4yaar.jpg';
    images.style.width = '100px'; // Set width for the image
    images.style.height = '100px'; // Set height for the image
   
    //changing Images
    // let imageList=[];
    let imgno=1;
    firstButton.addEventListener('click',function(){
        images.src=`./img${imgno}.png`;
        images.style.width = '100px'; // Set width for the image
    images.style.height = '100px'; // Set height for the image
    imgno++;
    if(imgno>5)
        imgno=1;
   
})




    //    CHANING COLOURSSS 
  let colorlist=['black','blue','red','green','orange'];
  let color=0;
    secondButton.addEventListener('click',function()
{
 circle.style.backgroundColor=colorlist[color];
 color++;
 if(color==5)
    color=0;


});
  



    // Append the new div to the body
    document.body.appendChild(newDiv);
    newDiv.appendChild(firstButton);
    newDiv.appendChild(secondButton);
    newDiv.appendChild(circle);
    circle.appendChild(images);
    
    
    
    
    
    


    









});
