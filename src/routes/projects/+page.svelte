<script lang="ts">
	import Grid from '$lib/containers/grid.svelte';
	import Section from '$lib/containers/section.svelte';
	import Heading from '$lib/custom/heading.svelte';
	import Paragraph from '$lib/custom/paragraph.svelte';
	import { projectIcons } from './project-icons';
	import { projects } from './projects-list';
</script>

<Section>
	<Grid>
		{#each projects as project, index (project.name)}
			<a href={project.link} class="col-span-8 col-start-3 flex flex-col gap-2" target="_blank">
				<Heading size="h6">
					{project.name}
				</Heading>

				<Paragraph>
					{project.description}
				</Paragraph>

				<div class="flex items-center gap-2">
					{#each project.platforms as platform (platform)}
						<iconify-icon icon={projectIcons[platform]} class="h-6 w-6"></iconify-icon>
					{/each}

					{#each project.technologies as technology (technology)}
						<iconify-icon icon={projectIcons[technology]} class="h-6 w-6"></iconify-icon>
					{/each}
				</div>
			</a>
			{#if index < projects.length - 1}
				<hr class="col-span-10 col-start-2" />
			{/if}
		{/each}
	</Grid>
</Section>
