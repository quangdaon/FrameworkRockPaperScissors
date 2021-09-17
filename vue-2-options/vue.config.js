const path = require('path');

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
        '@': path.resolve(__dirname, 'src'),
				'@shared': path.resolve(__dirname, '../shared'),
			}
		}
	}
};
