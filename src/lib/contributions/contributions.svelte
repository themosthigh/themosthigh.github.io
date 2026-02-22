<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { Weeks } from './contributions.types';

	import Scene from './scene.svelte';

	let weeks: Weeks = $state([]);

	const initData = async () => {
		weeks = await fetch('/api/contributions').then((res) => res.json());
	};

	$effect(() => {
		initData();
	});

	// Function to dynamically import the Threlte scene
	const loadScene = async () => {
		const module = await import('$lib/contributions/scene.svelte');
		return module.default;
	};
</script>

<div class="h-full w-full">
	<Canvas>
		{#if weeks.length}
			<Scene {weeks} />
		{/if}
	</Canvas>
</div>
