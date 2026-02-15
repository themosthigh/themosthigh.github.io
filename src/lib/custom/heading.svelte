<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		class?: string;
	}

	let props: Props = $props();
</script>

<svelte:element this={props.size} class={twMerge(props.class)}>
	{@render props.children()}
</svelte:element>
