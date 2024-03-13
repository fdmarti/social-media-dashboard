<template>
	<template v-if="average">
		<img src="/images/icon-up.svg" alt="icon up green arrow" />
		<span class="text-sm font-bold text-green-600">{{ averageFollowers }}</span>
	</template>
	<template v-else>
		<img src="/images/icon-down.svg" alt="icon down red" />
		<span class="text-sm font-bold text-red-500">{{ averageFollowers }}</span>
	</template>
</template>

<script setup lang="ts">
	interface Props {
		average: boolean;
		averageFollowers: string;
	}

	const { average, averageFollowers } = withDefaults(defineProps<Props>(), {
		average: true,
		averageFollowers: '200k',
	});
</script>
