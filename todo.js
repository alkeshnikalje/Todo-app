
let butn = document.getElementById('btn');
let todolist = document.getElementById('list');


function Addtodo(){
    let input = document.getElementById('inp-ele')
    if(input.value===''){
        alert("cannot add empty todo!")
    }else{
       let li = document.createElement('li')
        li.innerHTML = input.value
        todolist.appendChild(li)
        input.value = ''
        let dlbtn = document.createElement('button')
        dlbtn.id = 'delbtn'
        dlbtn.onclick = ''
        dlbtn.innerText = 'delete'
        li.appendChild(dlbtn)
        dlbtn.addEventListener('click',function(){
            todolist.removeChild(li)
        })
    }
 

    

}


