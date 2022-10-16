var image=document.getElementById("img1");
var boxes=document.getElementsByClassName("box");

image.addEventListener('dragstart',dragstart);
image.addEventListener('dragend',dragend);
for(let box of boxes){
    box.addEventListener('dragover',dragOver)
    box.addEventListener('dragenter',dragEnter)
    box.addEventListener('dragleave',dragLeave)
    box.addEventListener('drop',Drop)
}
function dragstart(){
setTimeout(()=>(this.className='invisible'),0)
}


function dragend(){
this.className='image';

}




function dragOver(e){
e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(e){
    e.preventDefault();
}
function Drop(){
  this.className='box';
  this.append(image);
}