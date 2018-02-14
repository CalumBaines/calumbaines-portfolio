module.exports = {
	title: 'Quba Front-end Styleguide',
	navigation: true,
	sections: [
		{
			name: 'Getting Started',
			content: 'docs/Documentation.md',
			sections: [
				{
					name: 'Designers',
					content: 'docs/One.md',
					description: 'This is the first section description',
				},
				{
					name: 'Developers',
					content: 'docs/Two.md',
				},
			],
		},
		{
			name: 'Whats New',
			content: 'docs/Documentation.md',
		},
		{
			name: 'Guidelines',
			content: 'docs/Documentation.md',
		},
		{
			name: 'Resources',
			content: 'docs/Documentation.md',
		},
		{
			name: 'Styles',
			content: 'docs/Documentation.md',
			sections: [
				{
					name: 'Colours',
					content: 'docs/One.md',
					description: 'This is the first section description',
				},
				{
					name: 'Grid',
					content: 'docs/Two.md',
				},
				{
					name: 'Typography',
					content: 'docs/Two.md',
				},
			],
		},
		{
			name: 'Components',
			components: 'src/components/**/[A-Z]*.vue',
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