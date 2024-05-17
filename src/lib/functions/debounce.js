import Api from '$lib/api/api';

let updateTimer;

function save(url, payload, action = '') {
	return new Promise((resolve, reject) => {
		clearTimeout(updateTimer);
		updateTimer = setTimeout(async () => {
			try {
				let response;
				if (action === 'post') {
					response = await Api.post(url + '.json', payload);
				} else {
					response = await Api.put(url + '.json', payload);
				}
				// let response = await Api.get("/abstractions/"+abstraction.id+".json")
				console.log('response', response);
				resolve(response);
			} catch (error) {
				console.error('Error:', error);
				reject(error);
			}
		}, 1000);
	});
}

export default save;
