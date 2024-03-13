<template>
	<BlockBgComponent />
	<main class="mx-auto max-w-[1440px] relative">
		<Navbar />
		<Dashboard />
	</main>
</template>
<script setup lang="ts">
	import Navbar from './components/Navbar.vue';
	import Dashboard from './components/Dashboard.vue';
	import { BlockBgComponent } from './components/shared';
</script>
