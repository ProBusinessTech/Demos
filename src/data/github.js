const fetch = require('node-fetch');
module.exports = function () {
	console.log("Fetching github data");
	return fetch('https://api.github.com/repos/11ty/eleventy')
		.then(res => res.json())
		.then(json => {
			return json;
		});
}