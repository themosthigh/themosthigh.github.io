<script>
	import Grid from '$lib/containers/grid.svelte';
	import Section from '$lib/containers/section.svelte';
	import Contributions from '$lib/contributions/contributions.svelte';
	import Heading from '$lib/custom/heading.svelte';
	import Paragraph from '$lib/custom/paragraph.svelte';
</script>

<Section>
	<Grid>
		<Heading size="h1" class="col-span-12">Hi, I'm Marvin</Heading>
		<Paragraph class="col-span-12">
			I want think of myself as somewhat of a software developer.
		</Paragraph>
	</Grid>
</Section>

<div class="absolute right-0 bottom-0 left-0">
	<Contributions />
</div>
