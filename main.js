let newest_title = document.querySelectorAll('.newest_title');
let newest_text = document.querySelectorAll('.newest_text');
let newest_likes = document.querySelectorAll('.newest_likes');
let newest_views = document.querySelectorAll('.newest_views');
let new_posts = document.querySelectorAll('.new_posts');
let new_date_day = document.querySelectorAll('.date_day');
let new_date_month = document.querySelectorAll('.date_month');


let most_popular = document.querySelector('#lg_m_p');

let mp_title = document.querySelector('.mp_title');
let mp_text = document.querySelector('.mp_text');
let mp_likes = document.querySelector('.mp_likes');
let mp_views = document.querySelector('.mp_views');
let mp_date_day = document.querySelector('.mp_date_day');
let mp_date_month = document.querySelector('.mp_date_month');


let smp_title = document.querySelectorAll('.smp_title');
let smp_text = document.querySelectorAll('.smp_text');
let smp_likes = document.querySelectorAll('.smp_likes');
let smp_views = document.querySelectorAll('.smp_views');
let sm_m_p = document.querySelectorAll('.sm_m_p');
let smp_date_day = document.querySelectorAll('.smp_date_day');
let smp_date_month = document.querySelectorAll('.smp_date_month');

let orderOldest = document.querySelector('#oldest');

let newest_h  = document.querySelector('#newest_h');



	console.log('first');
	fetch('https://akademac.github.io/testJson_3/test_josn_3.json')
	.then(response => {
		return response.json();
	})
	.then(data => {

		class Newest {
			constructor(title, text, likes, views, img, date_day, date_month) {
				this.title = title;
				this.text = text;
				this.likes = likes;
				this.views = views;
				this.img = img;
				this.date_day = date_day;
				this.date_month = date_month;
			};

			add(z) {
				this.title.innerHTML = data[z].title;
				let shortText = data[z].text.slice(0, 200);
				this.text.innerHTML = shortText + `...`;
				this.likes.innerHTML += data[z].likes;
				this.views.innerHTML += data[z].views;
				this.img.style.backgroundImage = `url(${data[z].img})`;
				this.date_day.innerHTML = data[z].date_day;
				this.date_month.innerHTML = data[z].date_month;

			};

			findMax(z) {
				console.log(data[z].views)
			}
		};

		for(let i=0; i<new_posts.length; i++) {
			let np = new Newest(newest_title[i], newest_text[i], newest_views[i], newest_likes[i], new_posts[i], new_date_day[i], new_date_month[i]);
			np.add(i);
		};

		let mp = new Newest(mp_title, mp_text, mp_views, mp_likes, most_popular, mp_date_day, mp_date_month);
		mp.add(9);

		for(let i=0; i<smp_title.length; i++) {
			let smp = new Newest(smp_title[i], smp_text[i], smp_views[i], smp_likes[i], sm_m_p[i], smp_date_day[i], smp_date_month[i]);
			smp.add(i);
		}
		
		let x = 0;


		function oldest(e) {
			e.target.removeEventListener(e.type, arguments.callee);

			for(let i=new_posts.length-1; i>=0; i--) {
				newest_likes[x].innerHTML = '';
				newest_views[x].innerHTML = '';
		 		let np = new Newest(newest_title[x], newest_text[x], newest_views[x], newest_likes[x], new_posts[x], new_date_day[x], new_date_month[x]);
		 		np.add(i);
		 		x++;		 				
		 	};

		 	newest_h.innerHTML = 'Oldest';	
		 };

		orderOldest.addEventListener('click', oldest);		
	});

	new_posts.forEach(e => {
		e.addEventListener('click', ee => {
			let post = ee.target.dataset.every;
			console.log(post);
			if(post == 1) {
				window.open('blogs.html#1', '_self');
			}
			else if(post == 2) {
				window.open('blogs.html#2', '_self');
			}
			else if(post == 3) {
				window.open('blogs.html#3', '_self');
			}
			else if(post == 4) {
				window.open('blogs.html#4', '_self');
			}
			else if(post == 5) {
				window.open('blogs.html#5', '_self');
			}
			else if(post == 6) {
				window.open('blogs.html#6', '_self');
			}
			else if(post == 7) {
				window.open('blogs.html#7', '_self');
			}
			else if(post == 8) {
				window.open('blogs.html#8', '_self');
			}
			else if(post == 9) {
				window.open('blogs.html#9', '_self');
			}			
			else if(post == 10) {
				window.open('blogs.html#10', '_self');
			}
		});
	});


