let b= document.getElementById("btn");
        let a=document.getElementById("mydiv");
       b.addEventListener('click',btnClicked);
       a.addEventListener('click',divClicked);
       document.body.addEventListener('click',bodyClicked);
         function btnClicked(){
           console.log('button...');
         }
         function divClicked(){
           console.log('Div....');
         }
         function bodyClicked(){
           console.log('body.....');
         } 

         