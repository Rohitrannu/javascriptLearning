

const noteContainer = document.querySelector('.notes-container');
const creatBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


// notes not remove in refresh btn store in webpage
function ShowNotes(){
    noteContainer.innerHTML=localStorage.getItem('notes');
}
ShowNotes();
function updateStore(){
    localStorage.setItem('notes',noteContainer.innerHTML);

}
// create a note this click btn
creatBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src='images/delete.png'
    noteContainer.appendChild(inputBox).appendChild(img);
})

// this btn click remove note
noteContainer.addEventListener('click',function(e){
    if(e.target.tagName ==='IMG'){
        e.target.parentElement.remove();
        updateStore()
    }
    else if(e.target.tagName==="P"){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStore();
            }
        })
    }
})