<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { Instance, InstancedMesh, OrbitControls } from '@threlte/extras';
	import type { Weeks } from './contributions.types';
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import * as THREE from 'three';

	interface Props {
		weeks: Weeks;
	}

	let { weeks }: Props = $props();
	const { size } = useThrelte();
	let zoom = $derived($size.width / 70);

	const view = new Tween(0, { duration: 2000, easing: cubicInOut });
	const growth = new Tween(0, { duration: 1500, easing: cubicInOut });

	const BASE_HEIGHT = 0.1; // Minimum height for 0-commit days
	const GAP = 0.2;
	const COLUMN_COUNT = weeks.length;
	const totalWidth = COLUMN_COUNT * (1 + GAP);

	const offsetX = totalWidth / 2;

	const handleEnd = () => {
		// We can now just call .set() or .goto() on the tween instance
		growth.set(1);
	};
</script>

<T.OrthographicCamera makeDefault position={[0, 90, 0]} fov={90} {zoom}>
	<OrbitControls enableDamping target={[0, 10, 0]} onend={handleEnd} />
</T.OrthographicCamera>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Group position.x={-offsetX}>
	<InstancedMesh>
		<T.BoxGeometry args={[0.8, 1, 0.8]} />
		<T.MeshStandardMaterial
			transparent
			opacity={0.95}
			roughness={0.1}
			metalness={0.1}
			depthWrite={true}
		/>

		{#each weeks as week, weekIndex}
			{#each week.contributionDays as day, dayIndex}
				{@const finalH = day.contributionCount * 0.4 + BASE_HEIGHT}
				{@const stagger = (weekIndex / 52) * 0.5}
				{@const localProgress = Math.min(1, Math.max(0, (growth.current - stagger) * 2))}
				{@const h = 0.15 + (finalH - 0.15) * localProgress}

				<Instance
					position={[weekIndex * (1 + GAP), h / 2, dayIndex * (1 + GAP)]}
					scale={[1, h, 1]}
					color={day.color}
				/>
			{/each}
		{/each}
	</InstancedMesh>
</T.Group>
