//selecting popupbox and popoverlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector(".add-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

// selecting cancel button
var cancelpopup=document.getElementById("cancel-button")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container and add book button,topic,context,description

var container=document.querySelector(".container")
var add_book=document.getElementById("add-book")
var booktitleinput=document.getElementById("add-t-input")
var bookauthorinput=document.getElementById("add-c-input")
var bookdescriptioninput=document.getElementById("description")

add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <br>
        
            <h8>${bookauthorinput.value}</h8><br>
            <br>
            <p>${bookdescriptioninput.value}</p>
            <br>
            <button onclick="delm(event)">DELETE</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function delm(event){
  event.target.parentElement.remove()
}