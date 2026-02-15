<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-background text-foreground h-screen w-screen">
	{@render children()}
</div>
