import { Platform, Technology } from './project.types';

export type ProjectIcons = Record<Technology | Platform, string>;

export const projectIcons: ProjectIcons = {
	[Platform.Android]: 'devicon-plain:android',
	[Platform.Linux]: 'devicon-plain:linux',
	[Platform.MacOS]: 'devicon-plain:apple',
	[Platform.Neovim]: 'devicon-plain:neovim',
	[Platform.Web]: 'devicon-plain:chrome',
	[Platform.Windows]: 'devicon-plain:windows',
	[Platform.iOS]: 'devicon-plain:apple',

	[Technology.Dart]: 'devicon-plain:dart',
	[Technology.Flutter]: 'devicon-plain:flutter',
	[Technology.JavaScript]: 'devicon-plain:javascript',
	[Technology.Lua]: 'devicon-plain:lua',
	[Technology.ReactNative]: 'devicon-plain:react',
	[Technology.React]: 'devicon-plain:react',
	[Technology.Rust]: 'devicon-plain:rust',
	[Technology.Svelte]: 'devicon-plain:svelte',
	[Technology.TypeScript]: 'devicon-plain:typescript',
	[Technology.Vue]: 'devicon-plain:vue',
};
