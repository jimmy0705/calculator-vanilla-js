//console.log("connected");

let screen = document.querySelector('.screen');

let buttons = document.querySelectorAll('button');

//console.log(buttons);

//console.log(Array.from(buttons));
let screenInput = '';

buttons.forEach(btn =>{
 //   console.log(btn);
 btn.addEventListener('click',(event)=>{
    //console.log(event.target.innerText);
    let btnTxt = event.target.innerText;
    
   
    if(btnTxt == 'CE'){
    
        screenInput ='';
        screen.innerText = screenInput ;
        

    }else if(btnTxt =='C'){
       screenInput= screenInput.slice(0,-1);
       screen.innerText = screenInput;
    }
    else if(btnTxt == '='){
       
        let result = eval(screenInput);
        screenInput = result;
        screen.innerText = screenInput;

        console.log(result);
    }else{
    
        screenInput += btnTxt;
        screen.innerText = screenInput ;
        console.log(screenInput);
    
     
    }
 });
})