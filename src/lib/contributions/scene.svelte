<script lang="ts">
	import { T } from '@threlte/core';
	import { Instance, InstancedMesh } from '@threlte/extras';
	import type { Weeks } from './contributions.types';
	import { spring, tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		weeks: Weeks;
	}

	let { weeks }: Props = $props();

	const GAP = 0.15; // Spacing between the "cubes"
	const BASE_HEIGHT = 0.1; // Minimum height for 0-commit days

	const masterProgress = tweened(0, {
		duration: 50000, // Total time for the wave to finish
		delay: 5000,
		easing: cubicOut,
	});

	$effect(() => {
		masterProgress.set(1);
	});
</script>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Group position={[-25, -15, -25]}>
	<InstancedMesh>
		<T.BoxGeometry args={[0.8, 1, 0.8]} />
		<T.MeshStandardMaterial
			transparent
			opacity={0.95}
			roughness={0.1}
			metalness={0.1}
			depthWrite={false}
		/>

		{#each weeks as week, weekIndex}
			{#each week.contributionDays as day, dayIndex}
				{@const commitHeight = day.contributionCount * 0.4}
				{@const staggerDelay = (weekIndex / weeks.length) * 0.8}
				{@const localProgress = Math.min(1, Math.max(0, ($masterProgress - staggerDelay) * 5))}
				{@const currentHeight = BASE_HEIGHT + commitHeight * localProgress}

				<Instance
					position={[
						weekIndex * (1 + GAP),
						currentHeight / 2, // Keeps the bottom of the cube at y=0
						dayIndex * (1 + GAP),
					]}
					scale={[1, currentHeight, 1]}
					color={day.color}
				/>
			{/each}
		{/each}
	</InstancedMesh>
</T.Group>
