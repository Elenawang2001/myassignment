var addbtn=document.getElementById('addbtn');
var newtask=document.getElementById('new-task');
var upcomingtask=document.getElementById('upcoming-task');
var duetask=document.getElementById('due-task');
var priority=document.getElementById('priority');
var span=document.getElementById('newtask-span')
addbtn.onclick=additem;

function additem(){
    if(newtask.value.length>0){
        var tasknew=newtask.value;
        var today=new Date();
        var datedvalue=new Date(dated.value);
        var dating=(datedvalue-today)/86400000;
        var deadline=dating.toFixed(0);
        var expried=(today-datedvalue)/86400000;
        var expriedday=expried.toFixed(0);
    // console.log(today);
    // console.log(datedvalue);
    console.log(dating);
    console.log(deadline)
    var valuedate=dating.value
    var li=document.createElement("li");
    var datespan=document.createElement("span");
    var checkbox=document.createElement("input");
    var label=document.createElement("label");
   // li.innerHTML=newtask.value;
        checkbox.innerHTML=newtask.value;
        checkbox.type="checkbox";
        checkbox.onchange=change;
        checkbox.innerHTML=newtask.value;
        label.innerHTML=newtask.value;
        var deletebtn=document.createElement('button');
        deletebtn.innerText='Delete';
        deletebtn.classList.add('delete');
        deletebtn.onclick=deleteTask;
        
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deletebtn);
        li.appendChild(datespan);

        newtask.value="";
        dated.value="";
    if(dating>0 && dating<1){
        console.log('w')
        datespan.classList.add('text-danger');
        datespan.innerText="due is tommorrow";
        
    }
    else if(deadline>2){
        datespan.classList.add('text-danger');
        datespan.innerHTML="due is "+deadline+"days to go"
    }
    else if(dating<0){
        datespan.classList.add('text-danger')
        datespan.innerHTML="due was"+expriedday+"days ago"
    }
    if(datedvalue>today){
        console.log(0);
        //span.innerHTML="";
        upcomingtask.appendChild(li);
    
    }
    else{
        console.log(2)
        duetask.appendChild(li);
        
    }
    function deleteTask(){
        var ul=this.parentNode.parentNode;
        var li=this.parentNode;
        console.log('delete');
        ul.removeChild(li);
    }
    function change(){
        if(this.checked){
            var li=this.parentNode;
            var ul=li.parentNode;
            ul.removeChild(li);
            priority.appendChild(li);
        }
        else{
            var li=this.parentNode;
            var ul=li.parentNode;
            ul.removeChild(li);
            upcomingtask.appendChild(li)
        }

    }
    }
    else{
        span.innerHTML="add your task!";
    }
    
}
