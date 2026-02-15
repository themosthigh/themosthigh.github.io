export enum Platform {
	Android = 'Android',
	iOS = 'iOS',
	Web = 'Web',
	Neovim = 'Neovim',
	Linux = 'Linux',
	Windows = 'Windows',
	MacOS = 'MacOS'
}

export enum Technology {
	Flutter = 'Flutter',
	Dart = 'Dart',
	JavaScript = 'JavaScript',
	TypeScript = 'TypeScript',
	Svelte = 'Svelte',
	React = 'React',
	Vue = 'Vue',
	ReactNative = 'React Native',
	Lua = 'Lua'
}

export type Project = {
	name: string;
	description: string;
	link: string;
	technologies: Technology[];
	platforms: Platform[];
};
