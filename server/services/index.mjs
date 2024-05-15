import fetch from 'node-fetch';

const { VITE_API_URL } = process.env;

export async function fetchGQL(query, variables) {
	const response = await fetch(VITE_API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables })
	});

	return response.json();
}
