// input which is the task and it is going to be a string
// A button that adds the input
// a list that show the inputs 
// a function next to it a delete a task and a check mark
document.getElementById("add-button").onclick=addTask;

var array=[]
function addTask(cadena)
{
	cadena=document.getElementById('task').value;
	if(cadena!=='')
	{
		array.push(cadena);
		document.querySelector('#task').value=" ";
		listTask(array);
	}else{
		alert('You should have a string')
	}
	
}
function listTask(array)
{
	let html='';
	for(let i=0;i<array.length;i++)
	{
		html +=`<section class="task-row">
				<input type="checkbox" id="mycheck${i}" onclick="underlineText(${i})" name="task-in-list"/>
      			<label class="text-task" for="task-in-list">${array[i]}</label>
				<span class="material-symbols-outlined delete-icon" onclick="deleteTask(${i})">delete</span>
    			</section>`
	}
	document.querySelector('.task-list').innerHTML = html;
}


function deleteTask(index)
{
	
	array.splice(index,1)
	listTask(array)
	//console.log(array)
	//return console.log('hh');
	
}
function underlineText(index)
{
	let valores=document.querySelectorAll('.task-row')[index]
	let verifyCheck=valores.querySelector('input[type="checkbox"]')
	console.log(valores)
	if(verifyCheck.checked)
	{
		let text=valores.querySelector('label[class="text-task"]')
		text.style.underlineText='line-through'
	}

}