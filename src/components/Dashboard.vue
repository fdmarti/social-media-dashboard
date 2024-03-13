<template>
	<div class="px-10 pb-10">
		<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
			<BigCardComponent
				v-for="socialData in socialMedia"
				:socialData="socialData"
			/>
		</div>
		<h2 class="my-10 text-3xl font-bold dark:text-gray-400">
			Overview - Today
		</h2>
		<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
			<SmallCardComponent
				v-for="overviewData in overview"
				:overviewData="overviewData"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { overview } from '../data/OverviewData';
	import { socialMedia } from '../data/SocialMediaData';
	import BigCardComponent from './BigCardComponent.vue';
	import SmallCardComponent from './SmallCardComponent.vue';
</script>
