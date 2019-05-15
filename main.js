let newest_title = document.querySelectorAll('.newest_title');
let newest_text = document.querySelectorAll('.newest_text');
let newest_likes = document.querySelectorAll('.newest_likes');
let newest_views = document.querySelectorAll('.newest_views');



window.addEventListener('load', () => {
	fetch('https://akademac.github.io/testJson_3/test_josn_3.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
		let new_posts = document.querySelectorAll('.new_posts');

		let x = 0;

		new_posts.forEach(e => {
			e.style.backgroundImage = `url(${data[x].img})`;
			x++;
		});

		class Newest {
			constructor(title, text, likes, views) {
				this.title = title;
				this.text = text;
				this.likes = likes;
				this.views =views;
			};

			add(z) {
				this.title.innerHTML = data[z].title;
				let shortText = data[z].text.slice(0, 200);
				this.text.innerHTML = shortText + `...`;
				this.likes.innerHTML += data[z].likes;
				this.views.innerHTML += data[z].views;
			};
		};
		let iter = 0;
		for(let i=0; i<new_posts.length; i++) {
			let y = new Newest(newest_title[i], newest_text[i], newest_views[i], newest_likes[i]);
			y.add(iter);
			iter++;
		}

	});
})