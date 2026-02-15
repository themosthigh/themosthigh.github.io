<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: string;
	}
	let props: Props = $props();
</script>

<div class={twMerge('mx-auto grid w-full max-w-7xl grid-cols-12 gap-4', props.class)}>
	{@render props.children()}
</div>
