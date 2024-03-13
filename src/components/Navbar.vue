<template>
	<nav class="flex justify-between p-10">
		<section>
			<h2 class="text-3xl font-semibold text-slate-800 dark:text-slate-200">
				Social Media Dashboard
			</h2>
			<h4 class="text-sm font-semibold text-gray-500 dark:text-gray-300">
				Total Followers : 23,004
			</h4>
		</section>
		<section>
			<button @click="changeTheme">
				<SunIcon v-if="dark" />
				<MoonIcon v-else />
			</button>
		</section>
	</nav>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import { useDark } from '../composables/useDark';
	import { MoonIcon, SunIcon } from './Images';

	const { changeTheme, loadDarkMode, dark } = useDark();

	onMounted(() => {
		loadDarkMode();
	});
</script>
