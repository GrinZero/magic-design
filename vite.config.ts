// @ts-nocheck
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import dts from 'vite-plugin-dts';
import viteImagemin from 'vite-plugin-imagemin';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'path';

// import { visualizer } from 'rollup-plugin-visualizer';
// import typescript from '@rollup/plugin-typescript';
// import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

const shouldAnalyze = process.env.ANALYZE ?? false;
const isHttps = process.env.HTTPS ?? false;

// https://vitejs.dev/config/
export default defineConfig((ctx) => {
	return {
		entry: {
			components: resolve(__dirname, 'src/components/index.tsx'),
		},
		plugins: [
			react({
				// Removes React Devtools in production build
				removeDevtoolsInProd: true,

				// Exclude storybook stories
				exclude: /\.stories\.(t|j)sx?$/,
			}),

			// legacy(),

			svgr(),

			mkcert({
				source: 'coding',
			}),

			viteImagemin({
				disable: ctx.mode === 'development',
				mozjpeg: {
					progressive: true,
					quality: 80,
				},
				optipng: {
					enabled: true,
					optimizationLevel: 3,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 7,
				},
				webp: {
					quality: 80,
				},
				gifsicle: {
					optimizationLevel: 8,
					interlaced: false,
				},
			}),
			chunkSplitPlugin({
				strategy: 'all-in-one',
				customSplitting: {
					'react-vendor': ['react', 'react-dom', 'react-router-dom'],
				},
			}),
			dts({
				tsConfigFilePath: './tsconfig.json',
			}),
		],
		build: {
			target: 'es2018',
			outDir: 'dist',
			cssCodeSplit: true,
			rollupOptions: {
				external: ['react', 'react-dom', 'react-router-dom', 'ahooks'],
				output: [
					{
						format: 'umd',
						entryFileNames: '[name].js',
						dir: 'dist/umd',
						globals: {
							'react': 'React',
							'ahooks': 'ahooks',
							'react-dom': 'ReactDOM',
							'react-router-dom': 'ReactRouterDOM',
						},
					},
					{
						format: 'es',
						entryFileNames: '[name].js',
						preserveModules: true,
						dir: 'dist/es',
						preserveModulesRoot: 'src/components',
					},
					{
						format: 'cjs',
						entryFileNames: '[name].js',
						preserveModules: true,
						dir: 'dist/lib',
						preserveModulesRoot: 'src/components',
					},
				],
			},
			lib: {
				entry: resolve(__dirname, 'src/components/index.tsx'),
				name: 'magicDesign',
				filename: 'magic-design',
				formats: ['umd', 'es', 'esm', 'cjs'],
			},
			sourcemap: !!shouldAnalyze,
		},
		css: {
			modules: {
				hashPrefix: 'mg-',
				localsConvention: 'dashes',
			},
			devSourcemap: true,
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
				sass: {
					javascriptEnabled: true,
				},
			},
		},
		cacheDir: './.vite-cache',

		/**
		 * defining aliases
		 */
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		envDir: resolve(__dirname, 'src', 'env'),
		envPrefix: 'GB_',
		server: {
			https: !!isHttps,
			proxy: {
				/**
				 * When we use proxy API requests, we can get data from an external website that throws an error by default (if we don't use a proxy)
				 * https://localhost:3000/api/**  ->  https://jsonplaceholder.typicode.com/**
				 *
				 * @example
				 * 	https://localhost:3000/api/todos/1  ->  https://jsonplaceholder.typicode.com/todos/1
				 **/
				'/api/': {
					target: 'https://jsonplaceholder.typicode.com/',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
	};
});
