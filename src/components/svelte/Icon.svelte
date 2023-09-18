<script>
	import { twMerge } from "tailwind-merge";

	import Icon from "@iconify/svelte";
	export let icon = "mdi:file-question-outline";
	export let name = "mdi:file-question-outline";

	let className;
	export { className as class };
</script>

<Icon icon={name} class={twMerge("text-[1.5rem] text-white", className)} />
