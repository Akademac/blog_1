window.addEventListener('load', () => {
	fetch('https://akademac.github.io/testJSON_2/testJson_2.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
	console.log(data);
});

});
