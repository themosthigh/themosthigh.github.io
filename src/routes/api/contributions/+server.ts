import { json, error } from '@sveltejs/kit';
import { GH_TOKEN } from '$env/static/private';

export async function GET() {
	const query = `query($user: String!) {
    user(login: $user) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { contributionCount, color } }
        }
      }
    }
  }`;

	try {
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: { Authorization: `Bearer ${GH_TOKEN}` },
			body: JSON.stringify({ query, variables: { user: 'themosthigh' } }),
		});

		const { data } = await response.json();
		return json(data.user.contributionsCollection.contributionCalendar.weeks);
	} catch (e) {
		throw error(500, 'Failed to fetch GitHub data');
	}
}
