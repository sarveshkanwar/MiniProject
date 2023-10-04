

var fish=document.querySelectorAll(".drum").length;

for(var i=0;i<fish;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}


// for(var i=0;i<fish;i++){
//     document.quesrySelectorAll(.drum)[i].addEventListener("keydown,handleKeyboard");
// }

function handleClick(){
    
}



function handleClick(){


var buttonInnerHTMl=this.innerHTML;
switch (buttonInnerHTMl) {
    case "w" :
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

    case  "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    case "d":
      var audio=new Audio("sounds/crash.mp3");
        audio.play();
     case "s":
        
     var audio=new Audio("sounds/tom-4.mp3");
     audio.play();
     break;


     case "j":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

    case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
         
    case "l":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();    
    break;

    default:
        break;
}
}
document.addEventListener("keydown",e=>{

    if(e.key==="w"){
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
    }
    
    else if(e.key=="a"){
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(e.key=="d"){
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(e.key=="s"){
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
    } else if(e.key=="j"){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if(e.key=="k"){
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if(e.key=="l"){
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    }

});




