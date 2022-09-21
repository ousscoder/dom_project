var total=Number(document.getElementById("totalPrice").innerHTML)
console.log(total)
var plus=document.querySelectorAll(".plusbutton")
var minus=document.querySelectorAll(".minusbutton")


//plus items 

for (let btn of plus) {

    btn.addEventListener("click",function(){

        var qty=btn.nextElementSibling.innerHTML
        qty++
        btn.nextElementSibling.innerHTML=qty
        var price =Number(btn.previousElementSibling.children[0].innerHTML)
        total=total+price
        document.getElementById("totalPrice").innerHTML=total
        var i=Number(document.getElementById("panier").innerHTML)
            i++
            document.getElementById("panier").innerHTML=i++
        })
}

//minus items

for (let btn of minus) {

    btn.addEventListener("click",function() {

        var qty=btn.previousElementSibling.innerHTML
        if (qty>0) {
        qty--
        
        btn.previousElementSibling.innerHTML=qty--
        var price =Number(btn.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML)
        total=total-price
        document.getElementById("totalPrice").innerHTML=total
    }

        var i=Number(document.getElementById("panier").innerHTML)
        if (i>0) {
            i--
        }
            document.getElementById("panier").innerHTML=i--
        
                    
    })
    }
    

    // like button 

    var like=document.querySelectorAll(".like")

    // console.log(l)
    for (let l of like) {
console.log(l)
        l.addEventListener("click",function() {
if(l.style.backgroundColor!="pink")
            {l.style.backgroundColor="pink"}
            else {
                l.style.backgroundColor="gray"
            }

        })
    }

    










    




    