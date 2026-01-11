import { routes} from "../routes/productRoute.js"
import { popPageModal, showElement } from "./sellpoint.js"

/**
 * converts a string to an HTML Element
 * 
 * @param { string } string_html user's custom html structure
 * @param { string } className class name of the element
 * @returns The string_html as an actual HTML element with a class name if specified
 */
export default function stringToHTML(string_html, className){
    let element = document.createElement("div")
    element.innerHTML = string_html
    className!=undefined && (element.firstChild.className = className)
    return element.firstChild
}

async function navigateTo(link){    
    let route 
    routes.forEach(routeObj =>{
        routeObj[link] != undefined && (route = routeObj[link]);
    })
    route = route==undefined? routes[10]["/chilla-koten/error"] : route;
    
    let app =document.getElementById("root")
    let loadedHTML = stringToHTML(await fetch(route.pageDir).then(r=>r.text()))
    
    document.title = route.title
    console.log(link);
    
    
    let mod1 =document.getElementById("p-checkout")
    let mod2 =document.getElementById("p-display")
    showElement([])
    if(link=="/products/checkout" || link== "/product"){
        popPageModal(link,loadedHTML,[mod1,mod2])
        
    }else{
        popPageModal(link,loadedHTML,[mod1,mod2])
        app.innerHTML =""
        app.append(loadedHTML)
    }
    let loadedHTMLEvent = new CustomEvent("HTMLLoaded")
    document.dispatchEvent(loadedHTMLEvent)
    
    
    
    return true
}
export { navigateTo }

