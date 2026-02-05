//select all accordian headers
const headers = document.querySelectorAll(".accordion-header");

// function to close all
function closeAll() {
  document.querySelectorAll(".accordion-item").forEach(accItem => {
    accItem.classList.remove("active");
  });
}

// function to open all
function openAll() {
  document.querySelectorAll(".accordion-item").forEach(accItem => {
    accItem.classList.add("active");
  });
}

headers.forEach(header => {

  // MOUSE CLICK
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    closeAll();

    if (!isActive) {
      item.classList.add("active");
    }
  });

  // KEYBOARD (Enter / Space)
  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // prevent page scroll on space

      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      closeAll();

      if (!isActive) {
        item.classList.add("active");
      }
    }
  });

});

// Expand All button
document.getElementById("expandAll").addEventListener("click", () => {
  openAll();
});

// Collapse All button
document.getElementById("collapseAll").addEventListener("click", () => {
  closeAll();
});




// //simpler version: allow multiple open items

// headers.forEach(header =>{
//     header.addEventListener("click",()=>{
//         //just toggle this item 
//         this.parentElement.classList.toggle("active");
//     })
// })

//using nextElememtSibling to toggle content
//directly target the content

// headers.addEventListener("click",()=>{
//     // get the next sibling element which is the content
//     const content = this.nextElementSibling;

//     //toggle a class or directly manipulate styles
//     if(content.style.maxHeight){
//         content.style.maxHeight = null; // close
//     }else{
//         content.style.maxHeight = content.scrollHeight + "px"; // open
//     }
// })