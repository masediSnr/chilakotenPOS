import { navigateTo } from "../utils/userHeadline.js";

export let routes = [
    {"/": {
        pageDir:"../containers/welcome.html",
        title:"Home | ChilaKoten"
    }},
    {"/dashboard": {
        pageDir:"../containers/dashboard.html",
        title:"Dashboard | ChilaKoten"
    }},
    {"/welcome": {
        pageDir:"../containers/welcome.html",
        title:"Home | ChilaKoten"
    }},
    {"/login": {
        pageDir:"../containers/login.html",
        title:"Login | ChilaKoten"
    }},
    {"/products/views": {
        pageDir:"../containers/sellingPoint.html",
        title:"Customer-Menu | ChilaKoten"
    }},
    {"/products/orders": {
        pageDir:"../containers/orders.html",
        title:"Orders | ChilaKoten"
    }},
    {"/product": {
        pageDir:"../containers/product.html",
        title:"Product | ChilaKoten"
    }},
    {"/boh/process-orders": {
        pageDir:"../containers/bohOrders.html",
        title:"Back-Of-House | ChilaKoten"
    }},
    {"/products/cart": {
        pageDir:"../containers/cart.html",
        title:"Cart | ChilaKoten"
    }},
    {"/products/checkout": {
        pageDir:"../containers/checkout.html",
        title:"Checkout | ChilaKoten"
    }
    },
    {"/chilla-koten/error": {
        pageDir:"../containers/notFound.html",
        title:"Page Not Found | ChilaKoten"
    }
}]

// export function routeLink(anchors) {
//     anchors = document.querySelectorAll(".logo-side a")
//     anchors.forEach(link => {
//         link.addEventListener("click",async (e)=>{
//             e.preventDefault()
//             await navigateTo(location.pathname)
            
//         })
//     });
// }




