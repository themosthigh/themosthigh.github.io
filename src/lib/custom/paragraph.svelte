<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: string;
	}
	let props: Props = $props();
</script>

<p class={twMerge(props.class)}>{@render props.children()}</p>
