let inputs = document.querySelector("#inp");
let txt = document.querySelector(".text");

function Add(){
    if(inputs.value ==""){
        alert("please enter the text");
    }
    else{
           let newEle = document.createElement('ul');
           newEle.innerHTML = `${inputs.value} <i class="bi bi-archive" id="del"></i>  <i class="bi bi-pencil-square" id="edit"></i>`;
           inputs.value ="";
           txt.appendChild(newEle);
            newEle.querySelector( '#del').addEventListener('click',Delete);
           function Delete(){
              newEle.remove()
           }
          newEle.querySelector('#edit').addEventListener('click',edt);
           function edt(){
             let edlist = prompt("edit the list");
             alert('List Updated Successfully')
             newEle.innerHTML = `${edlist}`;

           }
    }
}