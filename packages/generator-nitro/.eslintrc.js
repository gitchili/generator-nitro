module.exports = {
	extends: [
		'@namics/eslint-config/configurations/es8-node.js',
		'@namics/eslint-config/configurations/es8-node-disable-styles.js',
	].map(require.resolve),
	globals: {
		__dirname: true,
	},
	rules: {
		'require-jsdoc': 'off',
	},
};
