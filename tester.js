import { routeLink } from "./app.js";



// console.log("him");
document.addEventListener("HTMLLoaded",()=>{
    // document.querySelector(".notes").addEventListener("dragstart",(e)=>{
    //     console.log(e.dataTransfer);

    //     document.querySelector(".notes").style.left=e.offsetX
    //     document.querySelector(".notes").style.top=e.offsetY
    // })    
    
    routeLink()
    try{
        document.getElementById("note").onclick = ()=>{
            document.querySelector(".notes").style.display ="flex"
        }

    }catch(err){
        console.log("tester file: note element not found!");
        
    }
    document.querySelectorAll(".close").forEach(button=>{
        button.onclick =(event)=>{
            console.log(event.target.offsetParent.style.display="none");
        }
    })
    // console.log(document.querySelectorAll(".tab"));
    document.querySelectorAll(".tab").forEach(button=>{
        button.onclick =(event)=>{
            console.log("Button clicked");
            
            console.log(button);
            
            try {
                let element =  event.target.lastElementChild
                // element.style.width = `${event.target.clientWidth}px`
                if (element.style.display === "grid"){
                    element.style.left =`-150px`
                    element.style.display ="none"
                    
                }else{
                    rollTabsBack()
                    element.style.display ="grid"
                    element.style.left =`-${event.target.clientWidth + 35}px`
                }
            } catch (error) {
                display(button.ariaValueText);
                
            } 
        }
    })
})

let display =(element)=>{
    let elem = {
        "addProduct":".view",
        "products":".view",
        "discount":".sales",
    }
    element = elem[element]
    console.log("here:",element);
    
    try{
        document.querySelector(element).
        style.display = "grid"
    }catch (err) {

    }
}


let rollTabsBack=()=>{
    let tabCats = document.querySelectorAll(".tab-cat")
    tabCats.forEach(element=>{
        element.style.display="none"
        element.style.left =`-150px`           
    })
    
}