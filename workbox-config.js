module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,jpg,ico,html,json,md,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};