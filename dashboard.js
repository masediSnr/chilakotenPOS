document.addEventListener("HTMLLoaded",()=>{
    console.log("dashboard content loaded");
    let bk = document.querySelector(".back-btn")
    let buttons = document.querySelectorAll(".btn-link")
    
    click(bk)
    buttons.forEach(btn=>{
        click(btn)
    })
})
let subTabControl = (event, element)=>{
    let rollTabsBack=()=>{
        let tabCats = document.querySelectorAll(".tab-cat")
        tabCats.forEach(element=>{
            element.style = {display: "none", left : `-160px` }          
        })
    }
    
    if (element.style.display=="grid") {rollTabsBack();}
    else{
        rollTabsBack()
        element.style.display="grid"
        element.style.left =`-${event.target.clientWidth + 48}px`
    }
    
}
let swapSideBars = ()=>{
    const dsWBtns = document.querySelector(".ds-w-btns")
    const sideMenu = document.querySelector(".ds-navs")
    const overviewDash = document.querySelector(".default")
    const sideMenuContents = document.querySelectorAll(".ds-navs .sm")
    const cashierCart = document.querySelector(".cs-min-cart")

    if (sideMenu.style.width === "0px") {
        let motion = setTimeout(()=>{
            sideMenu.style.width = "220px"
            sideMenu.style.padding = "10px";
            sideMenuContents.forEach(s=>s.style.display = "flex")
            clearTimeout(motion)
        },150)

        let overvw = setTimeout(()=>{
            componentViewer("overview","grid")
            clearTimeout(overvw)
        },1200)
        cashierCart.style.width = "0px"
    }else{
        overviewDash.style.display = "none"
        sideMenuContents.forEach(s=>s.style.display = "none")
        sideMenu.style.width = "0px";
        sideMenu.style.padding = "0px";
        dsWBtns.style.display = "none"
        cashierCart.style.width = "280px";
    }
}
let  componentViewer = (view,display="flex")=>{
    let comps = document.querySelectorAll(".comps")
    comps.forEach((c)=>{
        c.style.display = "none"
        c.ariaValueText == view && (c.style.display = display)
    })
}

export let click=(btn)=>{
    btn && (btn.onclick = (e)=>{
        switch (btn.ariaValueText){
            case "cashier": case "ds-back":
                swapSideBars()
                break;
            default:
                try {
                    btn.firstElementChild.className=="tab-cat"&&
                    subTabControl(e,btn.firstElementChild)
                } catch (error) {
                    console.log(btn.ariaValueText);
                    componentViewer(btn.ariaValueText)
                }
                
        }        
    })
}




