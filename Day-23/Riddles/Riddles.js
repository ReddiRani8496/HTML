const url = 'https://api.api-ninjas.com/v1/riddles';
let options ={
	method:'GET',
	headers : {
		'Content-Type': "application/json",
		'X-Api-Key': '2yNYsi9tYt6xBcBa67Xsfw==euKWXn0OnUHpBnqf',
	},
};

let heading = document.querySelector('h1');
let para = document.querySelector('p');
let ans = document.querySelector('h4');
let ans1;

async function getRiddles() {
	ans.innerText="";
	correct.innerText="";
	wrong.innerText="";
	inputAns.value ="";
	const response = await fetch(url,options);
	const result = await response.json();
	heading.innerText="Title: "+result[0].title;
	para.innerText = "Question: "+result[0].question;
	ans1 = "Answer: "+result[0].answer;
	
}
let heading5 = document.querySelector('h5');
async function showAnswer() {
	ans.innerText = ans1;
}
let inputAns = document.querySelector('input');
let correct = document.querySelector('h3');
let wrong = document.querySelector('h2');
async function submit(){
	if(ans1===inputAns)
	   correct.innerText = "Correct Answer";
	else
		wrong.innerText = "Wrong Answer";

}

