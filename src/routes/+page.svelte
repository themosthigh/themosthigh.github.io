<script>
	import Grid from '$lib/containers/grid.svelte';
	import Section from '$lib/containers/section.svelte';
	import Contributions from '$lib/contributions/contributions.svelte';
	import Heading from '$lib/custom/heading.svelte';
</script>

<Section>
	<Grid>
		<Heading
			size="h1"
			class="grafitti col-span-12 text-white text-shadow-[4px_8px_0] text-shadow-white/20"
		>
			{'!Raging_nerd#'}
		</Heading>
		<Heading size="h6" class="col-span-12 font-mono">
			I'm Marvin. I want think of myself as somewhat of a software developer.
		</Heading>
	</Grid>
</Section>

<div class="absolute right-0 bottom-0 left-0">
	<Contributions />
</div>
