<script lang="ts">
	import '../app.css';
	import 'iconify-icon';

	import NavigationBar from '$lib/navigation/navigation-bar.svelte';

	let { children } = $props();
</script>

<div class="bg-background text-foreground relative h-screen w-screen overflow-auto">
	<NavigationBar />
	{@render children()}
</div>
