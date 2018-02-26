module.exports = {
	title: 'Quba Front-end Styleguide',
	navigation: true,
	sections: [
		{
			name: 'Getting Started',
			content: 'docs/GettingStarted/GettingStarted.md',
			sections: [
				{
					name: 'Designers',
					content: 'docs/GettingStarted/Designers/Designers.md',
					description: 'This is the first section description',
				},
				{
					name: 'Developers',
					content: 'docs/GettingStarted/Developers/Developers.md',
				},
			],
		},
		{
			name: 'Styles',
			content: 'docs/Styles/Styles.md',
			sections: [
				{
					name: 'Colours',
					content: 'docs/Styles/Colours/Colours.md',
				},
				{
					name: 'Grid',
					content: 'docs/Styles/Grid/Grid.md',
				},
				{
					name: 'Typography',
					content: 'docs/Styles/Typography/Typography.md',
				},
			],
		},
		{
			name: 'Components',
			components: 'src/components/**/[A-Z]*.vue',
		},
		{
			name: 'Updates',
			content: 'docs/Updates/Updates.md',
		},
		{
			name: 'Resources',
			content: 'docs/Resources/Resources.md',
		},
	],
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
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
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
            
          }
        }
      }
};