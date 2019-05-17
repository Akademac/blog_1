let x = window.location.href;

let y = x.indexOf('#');

let z = x.slice(y, x.length);

console.log(z);

let blog_title = document.querySelector('#blog_title');

let blog_text = document.querySelector('#text1');

let blog_img1 = document.querySelector('#img1');
let blog_img2 = document.querySelector('#img2');
let blog_img3 = document.querySelector('#img3');

let a = 2;



fetch('https://akademac.github.io/testJson_3/test_josn_3.json')
.then(response => {
	return response.json();
})
.then(data => {
	if(z == '#1') {
		blog_title.innerHTML = data[0].title;
		blog_text.innerHTML = data[0].text;
		blog_img1.style.backgroundImage = `url(${data[0].img2})`;
		blog_img2.style.backgroundImage = `url(${data[0].img2})`;
		blog_img3.style.backgroundImage = `url(${data[0].img2})`;
	}
	if(z == '#2') {
		blog_title.innerHTML = data[1].title;
		blog_text.innerHTML = data[1].text;
		blog_img1.style.backgroundImage = `url(${data[1].img2})`;
		blog_img2.style.backgroundImage = `url(${data[1].img2})`;
		blog_img3.style.backgroundImage = `url(${data[1].img2})`;
	}	if(z == '#3') {
		blog_title.innerHTML = data[2].title;
		blog_text.innerHTML = data[2].text;
		blog_img1.style.backgroundImage = `url(${data[2].img2})`;
		blog_img2.style.backgroundImage = `url(${data[2].img2})`;
		blog_img3.style.backgroundImage = `url(${data[2].img2})`;
	}	if(z == '#4') {
		blog_title.innerHTML = data[3].title;
		blog_text.innerHTML = data[3].text;
		blog_img1.style.backgroundImage = `url(${data[3].img2})`;
		blog_img2.style.backgroundImage = `url(${data[3].img2})`;
		blog_img3.style.backgroundImage = `url(${data[3].img2})`;
	}	if(z == '#5') {
		blog_title.innerHTML = data[4].title;
		blog_text.innerHTML = data[4].text;
		blog_img1.style.backgroundImage = `url(${data[4].img2})`;
		blog_img2.style.backgroundImage = `url(${data[4].img2})`;
		blog_img3.style.backgroundImage = `url(${data[4].img2})`;
	}	if(z == '#6') {
		blog_title.innerHTML = data[5].title;
		blog_text.innerHTML = data[5].text;
		blog_img1.style.backgroundImage = `url(${data[5].img2})`;
		blog_img2.style.backgroundImage = `url(${data[5].img2})`;
		blog_img3.style.backgroundImage = `url(${data[5].img2})`;
	}	if(z == '#7') {
		blog_title.innerHTML = data[6].title;
		blog_text.innerHTML = data[6].text;
		blog_img1.style.backgroundImage = `url(${data[6].img2})`;
		blog_img2.style.backgroundImage = `url(${data[6].img2})`;
		blog_img3.style.backgroundImage = `url(${data[6].img2})`;
	}	if(z == '#8') {
		blog_title.innerHTML = data[7].title;
		blog_text.innerHTML = data[7].text;
		blog_img1.style.backgroundImage = `url(${data[7].img2})`;
		blog_img2.style.backgroundImage = `url(${data[7].img2})`;
		blog_img3.style.backgroundImage = `url(${data[7].img2})`;
	}	if(z == '#9') {
		blog_title.innerHTML = data[8].title;
		blog_text.innerHTML = data[8].text;
		blog_img1.style.backgroundImage = `url(${data[8].img2})`;
		blog_img2.style.backgroundImage = `url(${data[8].img2})`;
		blog_img3.style.backgroundImage = `url(${data[8].img2})`;
	}	if(z == '#10') {
		blog_title.innerHTML = data[9].title;
		blog_text.innerHTML = data[9].text;
		blog_img1.style.backgroundImage = `url(${data[9].img2})`;
		blog_img2.style.backgroundImage = `url(${data[9].img2})`;
		blog_img3.style.backgroundImage = `url(${data[9].img2})`;
	}
})