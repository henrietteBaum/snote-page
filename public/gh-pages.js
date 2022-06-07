let ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/henrietteBaum/snote-page.git',
		user: {
			name: 'henrietteBaum', // update to use your name
			email: 'henriette@example.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);