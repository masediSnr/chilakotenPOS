import { navigateTo } from "./utils/userHeadline.js";
import "./utils/registry.js";


routeLink()
await navigateTo(location.pathname)


export function routeLink() {
    let anchors = document.querySelectorAll("a")
    anchors.forEach(link => {
        link.addEventListener("click",async (e)=>{
            e.preventDefault()
            history.pushState({},"",link.href)
            await navigateTo(location.pathname)
            
        })
    });
}
window.onpopstate =async (e)=>{
    e.preventDefault()
    console.log("pop state happened");
    await navigateTo(location.pathname)
}
