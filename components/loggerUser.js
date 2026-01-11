import { user } from "./welcomeComp.js";

document.addEventListener("HTMLLoaded",()=>{
    
    const comp = `  <div class="ds-usr">
                        <div class="pp-holder">
                            <img src="../f6ec44fc-2e7a-4659-992a-386d4b6a93d0.jpg" alt="">
                        </div>
                        <div class="usr-detail">
                            <span>${user.username}</span>
                            <span>${user.role}</span>
                        </div>
                    </div>`
    console.log("logger JS File working");
    
    try {
        let loggerPlaceHolder = document.querySelector(".user-header")            
        
        loggerPlaceHolder.innerHTML=comp
        
    } catch (error) {
        console.log("logger file: placeholder element not found!");
        
    }
})
                

