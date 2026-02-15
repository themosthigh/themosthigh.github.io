<script lang="ts">
	import { isActive, routes } from './navigation-routes.svelte';
	import { twMerge } from 'tailwind-merge';
</script>

<header class="bg-background sticky top-0 z-50 w-full text-white">
	<nav class="mx-auto flex h-[56px] max-w-7xl grid-cols-12 items-center gap-8 px-4">
		{#each routes as route (route.path)}
			<a
				class={twMerge(
					'hover:bg-primary hover:text-background h-fit rounded-xs border border-transparent px-4 py-1 text-xl font-bold',
					'col-span-2',
					isActive(route.path) ? 'text-primary border-primary' : '',
				)}
				href={route.path}
			>
				{route.name}
			</a>
		{/each}
	</nav>
</header>
