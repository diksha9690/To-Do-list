document.querySelector(".btn").addEventListener("click", () => {
    var value = document.querySelector(".head input").value;
    console.log(value)
    var list =  document.createElement("li");
 
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    var span = document.createElement("span");
var del = document.createElement("i")
del.setAttribute("class","fa-sharp fa-regular fa-trash close")
list.append(del)
list.append(input);
list.append(span);
span.innerHTML = value;
var note = document.querySelector(".note");
note.appendChild(list);

document.querySelector(".close").addEventListener("click",()=>{
     document.querySelector(".note li").remove();
})

})

