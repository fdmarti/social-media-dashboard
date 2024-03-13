<template>
	<section class="flex flex-col gap-3 items-center mt-5">
		<span class="text-6xl font-bold dark:text-slate-200">{{ followers }}</span>
		<span class="text-sm uppercase tracking-wider text-slate-500"
			>Followers</span
		>
	</section>
</template>

<script setup lang="ts">
	interface Props {
		followers: string;
	}

	const { followers } = withDefaults(defineProps<Props>(), {
		followers: '1000',
	});
</script>
