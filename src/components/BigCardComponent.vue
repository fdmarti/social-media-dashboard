<template>
	<div
		class="py-10 px-20 bg-slate-300 dark:bg-slate-900 rounded-md border-t-[3px] shadow-md"
		:class="color"
	>
		<section class="flex p-2 justify-center gap-3 items-center">
			<img :src="`/images/${icon}`" :alt="`${icon} icon`" />
			<span class="font-semibold text-slate-800 dark:text-slate-300">{{
				user
			}}</span>
		</section>
		<FollowersNumber :followers="followers"/>
		<section class="flex justify-center items-center mt-5 gap-1">
			<AverageFollowersComponent
				:average="average"
				:averageFollowers="averageFollowers"
			/>
		</section>
	</div>
</template>

<script setup lang="ts">
	import type { BigCard } from '../interfaces/BigCard';
	import { AverageFollowersComponent, FollowersNumber } from './shared';

	const socialMediaData = defineProps<{ socialData: BigCard }>();
	const { socialData } = socialMediaData;
	const { average, averageFollowers, followers, icon, user, color } =
		socialData;
</script>

<style scoped>
	.facebook {
		border-color: hsl(208, 92%, 53%);
	}

	.twitter {
		border-color: hsl(203, 89%, 53%);
	}

	.instagram {
		border-color: rgba(253, 196, 104, 1);
	}

	.youtube {
		border-color: hsl(348, 97%, 39%);
	}
</style>
