const postcss = require('rollup-plugin-postcss');
const postcssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			postcss({
				plugins: [
					postcssImport(),
					tailwind(),
					autoprefixer(),
					//   cssnano({
					//     preset: 'default',
					//   }),
				],
				inject: true,
				// only write out CSS for the first bundle (avoids pointless extra files):
				// extract: !!options.writeMeta,
				extract: false,
			})
		);

		return config;
	},
};
