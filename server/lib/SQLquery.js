

export function SQLquery(string, options = {}) {
	return new Promise((resolve, reject) => {
		connection.query(string, options, (err, response) => {
			if (err) {
				reject(err);
			} else {
				resolve(response);
			}
		});
	});
}