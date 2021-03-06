'use strict';

const config = require('config');
const utils = require('../lib/utils');
const compression = require('compression');

module.exports = () => {
	return () => {
		if (config.get('nitro.mode.livereload')) {
			const browserSync = utils.getBrowserSyncInstance();
			browserSync.init({
				proxy: {
					target: `127.0.0.1:${config.get('server.port')}`,
					middleware: [compression()],
				},
				port: Number(config.get('server.proxy')),
				online: !config.get('nitro.mode.offline'),
			}, (e) => {
				if (!e) {
					browserSync.notify('Compiling your assets, please wait!');
				}
			});
		}
	};
};
