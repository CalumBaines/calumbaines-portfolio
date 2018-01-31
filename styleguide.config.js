module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
	},
	showUsage: true,
    showCode: true,
    theme: {
        color: {
          link: 'firebrick',
          linkHover: 'salmon'
        },
        fontFamily: {
          
        }
      },
      styles: {
        Logo: {
          logo: {
            animation: 'blink ease-in-out 300ms infinite'
          },
          '@keyframes blink': {
            to: { opacity: 0 }
          }
        }
      }
};