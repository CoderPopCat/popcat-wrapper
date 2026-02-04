const fetch = require('axios');
const baseurl = 'https://api.popcat.xyz/';

function request(endpoint, input = '') {
	const res = `${baseurl}v2/${endpoint}?${input}`;
	return res;
}

module.exports = { fetch, baseurl, request };
