const numberOfPeoples = document.querySelectorAll(".drum");

for(let i = 0; i < numberOfPeoples.length; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", function () {
    
      let buttonPress = this.innerHTML;
    makeSound(buttonPress);

    buttonAnimation(buttonPress)
    
   })
}

  document.addEventListener("keydown", function (event) {
   makeSound(event.key)
   buttonAnimation(event.key)

  })

  function makeSound(key) {

   switch (key) {
      case "w":
         let audio1 = new Audio("sounds/crash.mp3");
         audio1.play()
         break;

         case "k":
            let audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play()
            break;

            case "a":
               let audio3 = new Audio("sounds/snare.mp3");
               audio3.play()
               break;

               case "s":
                  let audio4 = new Audio("sounds/tom-1.mp3");
                  audio4.play()
                  break;

                  case "d":
                     let audio5 = new Audio("sounds/tom-2.mp3");
                     audio5.play()
                     break;

                     case "j":
                        let audio6 = new Audio("sounds/tom-3.mp3");
                        audio6.play()
                        break;

                        case "p":
                           let audio7 = new Audio("sounds/tom-4.mp3");
                           audio7.play()
                           break;
         
     }

  }

  function buttonAnimation(currentKey) {
   let activeBtn = document.querySelector("." + currentKey);
   activeBtn.classList.add("pressed")

   setTimeout ( function () {
      activeBtn.classList.remove("pressed")
   }, 200)
  }
