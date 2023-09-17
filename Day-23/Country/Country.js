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

async function getMovies() {
	const response = await fetch(url,options);
	const result = await response.json();
	heading.innerText="Title: "+result[0].title;
	para.innerText = "Question: "+result[0].question;
	ans.innerText = "Answer: "+result[0].answer;
	
}

