import { Platform, Technology } from './project.types';

export type ProjectIcons = Record<Technology | Platform, string>;

export const projectIcons: ProjectIcons = {
	[Platform.Android]: 'devicon:android',
	[Platform.Linux]: 'devicon:linux',
	[Platform.MacOS]: 'devicon:apple',
	[Platform.Neovim]: 'devicon:neovim',
	[Platform.Web]: 'devicon:chrome',
	[Platform.Windows]: 'devicon:windows',
	[Platform.iOS]: 'devicon:apple',

	[Technology.Dart]: 'devicon:dart',
	[Technology.Flutter]: 'devicon:flutter',
	[Technology.JavaScript]: 'devicon:javascript',
	[Technology.Lua]: 'devicon:lua',
	[Technology.ReactNative]: 'devicon:react',
	[Technology.React]: 'devicon:react',
	[Technology.Svelte]: 'devicon:svelte',
	[Technology.TypeScript]: 'devicon:typescript',
	[Technology.Vue]: 'devicon:vue',
};
