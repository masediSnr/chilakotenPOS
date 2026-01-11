import { user } from "../components/welcomeComp.js";
import { productList } from "../model/productsModel.js";
import { navigateTo } from "./userHeadline.js";

export function popPageModal(link,data,modals){
    try{
        let [modal1, modal2] = modals
        modal1.innerHTML = modal2.innerHTML = ""
        showElement([modal1, modal2], false)
        link == "/product" &&
        (showElement("#p-display"),modal2.append(data))
        link == "/products/checkout" &&
        (showElement("#p-checkout"),modal1.append(data));}
    catch(err){
        console.log("popPageModal: modals is not iterable.");
    }
}

export function showElement(element,bool=true,displayType="block"){
    if(Array.isArray(element)){
        element.forEach(elem=>{
            !bool? elem.style.display="none": elem.style.display=displayType;
        })
    }
    else{
        bool? document.querySelector(element).style.display=displayType:
        document.querySelector(element).style.display = "none";
    }
}
let cart = []
function manageCart(product_id, add=true){
    for (let [key, _product ]of Object.entries(productList)){
        for (let product of _product) {
            if (product.id == product_id){
                add? cart.push(product): cart = cart.filter(x=> x.id != product_id);
            }
        }
    }
    let cartItems = document.getElementById("cart-items")
    let index =1
    cartItems.innerHTML=""
    let tempt=[]
    for (let prod of cart){
        if(!tempt.includes(prod.id)){
            tempt.push(prod.id)
            let itemSelected = `<div class="item" itemid="${prod.id}">
                    <h4><span class="item-no">${index}</span><span>&times;</span><span>${prod.name}</span></h4>
                    <span>size: ${prod.content.size}</span>
                    <span>price: R${prod.content.price.toString()}</span>
                </div>`
            cartItems.innerHTML += itemSelected
            
        }else{
            let itm = document.querySelectorAll(".cart-items .item")
            itm.forEach(x=>{
                if(x.getAttribute("itemid")==prod.id){
                    console.log(x.firstChild.nextSibling.firstChild.innerHTML ++);
                }
            })
            // const countOccurances = (array, item) =>{
            //     return array.flat(Infinity).filter(curr=>curr.id===item).length;
            // }
            // console.log();
            
                // write a function that checks how many times an object repeats in an array
                
        }
        
    }

}
document.addEventListener("HTMLLoaded",()=>{
    let showCategoryCards = true
    let ProductListHolder = document.querySelector(".itms-ds-scr")
    listProducts()

    let cashMode = document.getElementById("cash")
    let cardMode = document.getElementById("card")
    let itemBtns = document.querySelectorAll(".itms-ds-scr .cat-card img")
    let catBtns = document.querySelectorAll(".c-cat .cat-card")
    
    let mod1 =document.getElementById("p-checkout")
    let mod2 =document.getElementById("p-display")
    
    
    popPageModal([mod1,mod2])
    
    let clickBtn =(button)=>{
        button.onclick = async (event)=>{
            switch (button.value) {
                case "cash-c":
                    cashMode.checked = true 
                    break;
                case "card-c":
                    cardMode.checked = true 
                    break;
                case "addExtras":
                    showElement(".item-extras")
                    break;
                case "markedExtras":
                    showElement(".item-extras",false)
                    break;
                case "checkout":
                    if(user.role=="customer"){
                        // showElement(".collection-method",true,"flex")
                        history.pushState({},"","/products/cart")
                        await navigateTo(location.pathname)
                        

                    }
                    showElement(".collection-method",true,"flex")
                    break;
                case "close":
                    showElement([event.target.offsetParent],false)
                    
                    break;
                case "paying":
                    history.pushState({},"","/boh/process-orders")
                    
                    let pop =setTimeout(async ()=>{
                        await navigateTo(location.pathname)
                        clearTimeout(pop)
                    },1500)
                    break;
                case "addToCart":
                    
                    manageCart(button.id)
                    console.log("cart:",cart);
                    break;
            
                default:
                    if(button.classList.contains("cmBtns")){
                        console.log("button clicked is of collection method");
                        history.pushState({},"","/products/checkout")
                        let pop =setTimeout(async ()=>{
                            showElement(".collection-method",false)
                            await navigateTo(location.pathname)
                            clearTimeout(pop)
                        },700)
                    }
                    console.log("button value:",button.value,"not found");
                    
                    break;
            }
        }
    }

    

    function accessButtons() {
        let allButtons = document.querySelectorAll("button")
        allButtons.forEach(button=>{
            clickBtn(button)
        })
    }
    itemBtns.forEach(btn =>{
        btn.onclick =()=>{
            accessButtons()
        }
    })
    catBtns.forEach(selected=>{
        categoryProducts("all")
        selected.onclick=()=>{
            let userCat = selected.children.item(1).innerHTML.toLowerCase()

            catBtns.forEach(selected=>{selected.classList.remove("selectedCat")})
            selected.classList.add("selectedCat")
            categoryProducts(userCat)
        }
    })
    accessButtons()
    function categoryProducts(category){
        ProductListHolder.innerHTML =""
        for (let [key, product ]of Object.entries(productList)){
            category=="all" &&
            depopulateProduct(key);
        }
        category!="all" && depopulateProduct(category);
        
        
        function depopulateProduct(category) {
            for (let product of productList[category.toLowerCase()]) {
                let prodCard =`<div title="click on the Picture to view" class="cat-card">
                                <ul>
                                    <li><h2>${product.name}</h2></li>
                                    <li>${product.content.description}</li>
                                </ul>
                                <a href="/product"><img src="../f6ec44fc-2e7a-4659-992a-386d4b6a93d0.jpg" alt=""></a>
                                <button value="addToCart" id="${product.id}">Add to cart</button>
                                <h3>R${product.content.price.toString()}</h3>
                            </div>`  
                ProductListHolder.innerHTML += prodCard         
            }
            
        }

    }
    function listProducts(selected){
        let categoryList = document.querySelector(".c-cat");
        let listLength = Object.keys(productList).length
        let count =0
        for (let [key, cat]  of Object.entries(productList)) {
            let category =`<div class="cat-card">
            <img src="../f6ec44fc-2e7a-4659-992a-386d4b6a93d0.jpg" alt="">
            <h3>${key.charAt(0).toUpperCase() + key.substring(1)}</h3>
            </div>`
            
            showCategoryCards && (categoryList.innerHTML +=category);
            count++,count == listLength && (showCategoryCards = false);
        }

        console.log("DEBBUGING--------","\n");
        console.log("Continue to add cat-card:",showCategoryCards);
        console.log("Number of count:",count);
        console.log();
        

    }
    // listProducts()
})