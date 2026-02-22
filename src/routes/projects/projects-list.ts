import { Platform, Technology, type Project } from './project.types';

export const projects: Project[] = [
	{
		name: 'Din',
		description: 'A Quran reader with Qibla directions, Adhan times, and more.',
		link: 'https://github.com/themosthigh/din_flutter',
		technologies: [Technology.Dart, Technology.Flutter],
		platforms: [Platform.Android, Platform.Linux],
	},
	{
		name: 'Pat',
		description: 'A simple Rest client',
		link: 'https://github.com/themosthigh/pat',
		technologies: [Technology.JavaScript, Technology.TypeScript],
		platforms: [Platform.Web],
	},
	{
		name: 'darcula.nvim',
		description: 'A dark Neovim theme',
		link: 'https://github.com/themosthigh/darcula.nvim',
		technologies: [Technology.Lua],
		platforms: [Platform.Neovim],
	},
	{
		name: 'imagen',
		description: 'An ascii image rendering cli (soon to be TUI)',
		link: 'https://github.com/themosthigh/imagen',
		technologies: [Technology.Rust],
		platforms: [Platform.Linux],
	},
];
