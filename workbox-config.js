module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,mp3,jpeg,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};