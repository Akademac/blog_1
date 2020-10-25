let x = window.location.href;

let y = x.indexOf('#');

let z = x.slice(y, x.length);


let blog_title = document.querySelector('#blog_title');

let blog_text = document.querySelector('#text1');

let blog_img1 = document.querySelector('#img1');
let blog_img2 = document.querySelector('#img2');
let blog_img3 = document.querySelector('#img3');

let blog_video = document.querySelector('#video');

let play = document.querySelector('#play');

let pause = document.querySelector('#pause');

let a = 1;

fetch('https://akademac.github.io/testJson_3/test_josn_3.json')
.then(response => {
	return response.json();
})
.then(data => {

	for(let i=0; i<12; i++) {
		if(z == `#${a}`) {
			blog_title.innerHTML = data[i].title;
			blog_text.innerHTML = data[i].text;
			blog_img1.style.backgroundImage = `url(${data[i].img2})`;
			blog_img2.style.backgroundImage = `url(${data[i].img3})`;
			blog_img3.style.backgroundImage = `url(${data[i].img4})`;
			blog_video.src = `${data[i].video}`;
		}
		a++;
	}
});


let username_input = document.querySelector('#username_input');

let comment_input = document.querySelector('#comment_input');

let submit = document.querySelector('#submit');

let comments = document.querySelector('.comments');


localStore = new Array;

class Person {
	constructor(name, comment) {
		this.name = name;
		this.comment = comment;
	}
}

submit.addEventListener('click', store);

function store() {
	let isEmpty = username_input.value != '' && comment_input.value != '';

	if(isEmpty === true) {
		let p = new Person(username_input.value, comment_input.value);
		localStore.push(p);
		localStorage['newKey'] = JSON.stringify(localStore);
		clearAll();
		addComments();
	}	
};


function clearAll() {
	username_input.value = '';
	comment_input.value = '';
};

let num = 0;

function addComments() {
let div = document.createElement('DIV');
let p =document.createElement('P');
let p_1 =document.createElement('P');

	comments.appendChild(div);

	div.appendChild(p);

	div.appendChild(p_1);

	div.style.width = '400px';
	div.style.borderRadius = '5px';
	div.style.backgroundColor = 'white';
	div.style.marginTop = '2px';
	div.style.height = '100px';
	p.style.padding = '.2rem';
	p.style.fontWeight = 'bold';
	p_1.style.padding = '.5rem';
	p_1.style.fontSize = '.8rem';
	p_1.style.whiteSpace = 'pre-wrap';
	p_1.style.marginTop = '-10px';

	storeArray = JSON.parse(localStorage['newKey']);

	p.innerHTML = storeArray[num].name;
	
	p_1.innerHTML = storeArray[num].comment;


	num++;
};

play.addEventListener('click', () => {
	blog_video.play();
	play.style.display = 'none';
	pause.style.display = 'block';
});

pause.addEventListener('click', () => {
	blog_video.pause();
	play.style.display = 'block';
	pause.style.display = 'none';
});
