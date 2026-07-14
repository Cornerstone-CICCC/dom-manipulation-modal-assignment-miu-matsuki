console.log("here");

// select button element
const button = document.getElementById("openModal");
const modal = document.getElementById("modal");

// add event listener on click to button
button.addEventListener("click",()=>{

  // remove class invisible from div modal
  modal.classList.remove("invisible");
  // modal.removeAttribute("invisible");

  setTimeout(()=>{
    modal.classList.add("invisible");
  }, 5000);

})

  // add event listener on key press Escape
  document.addEventListener("keyup", (event)=>{
    if(event.key === "Escape"){      
      // add class invisible to div modal
      modal.classList.add("invisible");
    }
  })

