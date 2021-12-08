let addBtns=document.querySelectorAll(".btn-primary")
function Basketstorage() {
    if(!localStorage.getItem("basket")){
        localStorage.setItem("basket",JSON.stringify([]));
    }
    
}
Basketstorage();
function productcount() {
    document.querySelector("sup").innerText=JSON.parse(localStorage.getItem("basket")).length;
}
productcount()
addBtns.forEach(btn => {
    btn.addEventListener("click",function(evnt){
        evnt.preventDefault();
        let Id = this.parentElement.parentElement.getAttribute("data-id");
        let Price= this.previousElementSibling.innerText;
        let Tytle=this.parentElement.firstElementChild.innerText;
        let Image=this.parentElement.previousElementSibling.src;
        Basketstorage()
        let basket=getBasket(Id,Price,Tytle,Image);
       
        localStorage.setItem("basket",JSON.stringify(basket))
        productcount();
    })
});
function getBasket(Id,Price,Tytle,Image){
    let basket=JSON.parse(localStorage.getItem("basket"));
    let Sameproduct=basket.find(item=>item.id==Id)
    if(Sameproduct==undefined){
        basket.push({
            id:Id,
            image:Image,
            tytle:Tytle,
            price:Price,
            count:1
        })
    }
    else{
        Sameproduct.count++
    }
    return basket;
}