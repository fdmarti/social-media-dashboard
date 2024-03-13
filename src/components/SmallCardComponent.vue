<template>
	<div
		class="bg-slate-300 dark:bg-slate-900 rounded-md shadow-md p-10 flex flex-col gap-3 hover:opacity-75 hover:cursor-pointer"
	>
		<section class="flex justify-between items-center">
			<span class="font-semibold text-slate-800 dark:text-slate-400">{{
				title
			}}</span>
			<img :src="`/images/${icon}`" :alt="`${icon} icon`" />
		</section>
		<section class="flex justify-between items-center">
			<span class="text-4xl font-bold dark:text-slate-200">{{
				followers
			}}</span>
			<section class="flex gap-2 items-center">
				<AverageFollowersComponent :average="average" :averageFollowers="averageFollowers"/>
			</section>
		</section>
	</div>
</template>

<script setup lang="ts">
	import type { SmallCard } from '../interfaces/SmallCard';
	import { AverageFollowersComponent } from './shared';

	const props = defineProps<{ overviewData: SmallCard }>();
	const { average, averageFollowers, followers, icon, title } =
		props.overviewData;
</script>
