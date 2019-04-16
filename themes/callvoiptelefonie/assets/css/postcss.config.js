class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ["themes/callvoiptelefonie/assets/css"],
    }),
    require('tailwindcss')('./themes/callvoiptelefonie/assets/css/tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./themes/callvoiptelefonie/layouts/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }],
      fontFace: true,
      whitelist: ['underline-red', 'class2']
    }),
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),
  ]
}