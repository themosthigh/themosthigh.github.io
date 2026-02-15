import { page } from '$app/state';

export const routes = [
	{ path: '/', name: 'Home' },
	{ path: '/projects', name: 'Projects' },
	{ path: '/blog', name: 'Blog' }
];

export const isActive = (path: string) => {
	if (path === '/') {
		return page.url.pathname === '/';
	} else {
		return page.url.pathname.startsWith(path);
	}
};
