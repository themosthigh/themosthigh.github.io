<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Instance, InstancedMesh, interactivity, OrbitControls } from '@threlte/extras';
	import type { Weeks } from './contributions.types';
	import { Spring } from 'svelte/motion';

	interface Props {
		weeks: Weeks;
	}

	let { weeks }: Props = $props();

	const GAP = 0.15; // Spacing between the "cubes"
	const BASE_HEIGHT = 0.1; // Minimum height for 0-commit days

	interactivity();

	const scale = new Spring(1);

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.PerspectiveCamera
	position={[10, 10, 10]}
	fov={50}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<OrbitControls enableDamping target={[0, 0, 0]} />
</T.PerspectiveCamera>

<T.Group position={[-25, -15, -25]}>
	<InstancedMesh>
		<T.BoxGeometry args={[0.8, 1, 0.8]} />
		<T.MeshStandardMaterial />

		{#each weeks as week, weekIndex}
			{#each week.contributionDays as day, dayIndex}
				{@const height = day.contributionCount > 0 ? day.contributionCount * 0.4 : BASE_HEIGHT}

				<Instance
					position={[
						weekIndex * (1 + GAP),
						height / 2, // Keeps the bottom of the cube at y=0
						dayIndex * (1 + GAP),
					]}
					scale={[1, height, 1]}
					color={day.color}
					castShadow
				/>
			{/each}
		{/each}
	</InstancedMesh>
</T.Group>
