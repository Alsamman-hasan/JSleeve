const path = require('path');
const fs = require('fs');

function deleteCache() {
	const cacheFolder = path.resolve(__dirname, '..', 'node_modules', '.cache');
	if (cacheFolder) {
		fs.rmSync(cacheFolder, { recursive: true });
	} else {
		log('there is no folder to delete');
	}
}

deleteCache();
