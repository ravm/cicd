module.exports = {
	'env': {
		'browser': true,
		'commonjs': false,
		'es2021': true,
		'node': true
	},
	'plugins': [
		'@stylistic/js'
	],
	'extends': 'eslint:recommended',
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'rules': {
		'@stylistic/js/indent': [
			'error',
			'tab'
		],
		'@stylistic/js/linebreak-style': [
			'error',
			'unix'
		],
		'@stylistic/js/quotes': [
			'error',
			'single'
		],
		'@stylistic/js/semi': [
			'error',
			'never'
		],
		'no-unused-vars': ['warn', { varsIgnorePattern: '^(React|App)$' }]
	}
}
