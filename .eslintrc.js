module.exports = {
	parser: '@typescript-eslint/parser',
	root: true,
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	plugins: ['github', 'regexp'],
	extends: [
		'eslint:recommended',
		'plugin:listeners/recommended',
		'plugin:github/recommended',
		'plugin:regexp/recommended',
		'plugin:security/recommended',
		'@fullstacksjs',
		'@fullstacksjs/eslint-config/typecheck',
		'plugin:storybook/recommended',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true,
			},
		],
		'filenames/match-regex': 'off',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				caughtErrors: 'none',
			},
		],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
	},
};
