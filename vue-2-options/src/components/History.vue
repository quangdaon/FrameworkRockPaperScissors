<template>
	<div class="history" v-if="history.length">
		<div class="history-grid">
			<div class="history-header">
				<h2 class="history-header-label">You</h2>
				<div class="history-header-score">{{ getScore('win') }}</div>
			</div>
			<div class="history-header-vs"></div>
			<div class="history-header">
				<h2 class="history-header-label">Opponent</h2>
				<div class="history-header-score">{{ getScore('lose') }}</div>
			</div>
			<template v-for="(item, i) in getVisibleItems()">
				<div :class="getHandClasses(item)" :key="i">
					{{ item.player.emoji }}
				</div>
				<div class="history-round" :key="i">Round {{ history.length - i }}</div>
				<div :class="getHandClasses(item, true)" :key="i">
					{{ item.opponent.emoji }}
				</div>
			</template>
		</div>
		<button
			class="history-more"
			title="Show More"
			@click="increaseVisibleCount"
			v-if="visibleItemsCount < history.length"
		>
			...
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { History, HistoryItem } from '@shared/helpers/history';
import { WinStatus } from '@shared/classes/player/player';

interface Data {
  visibleItemsCount: number;
}

export default Vue.extend({
	name: 'History',
	data(): Data {
    return { visibleItemsCount: 5 };
  },
	props: ['history'],
	methods: {
		getHandClasses(item: HistoryItem, isOpponent = false) {
			const classes = {
				'history-hand': true,
				'history-player': !isOpponent,
				'history-opponent': isOpponent,
				'history-winner':
					(!isOpponent && item.status === 'win') ||
					(isOpponent && item.status === 'lose')
			};

			return classes;
		},

		getScore(status: WinStatus): number {
			return this.history.filter((h: HistoryItem) => h.status === status).length;
		},

		getVisibleItems(): History {
			return this.history.reverse().slice(0, this.visibleItemsCount);
		},

		increaseVisibleCount(): void {
			this.visibleItemsCount += 5;
		}
	}
});
</script>

<style lang="scss">
.history {
	text-align: center;
	margin-bottom: 2em;

	&-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		align-items: center;
		width: 600px;
		max-width: 100%;
		margin: auto;
	}

	&-header {
		&-label {
			display: inline-block;
		}
		&-score {
			display: inline-block;
			margin-left: 0.5em;
		}
	}

	&-hand {
		font-size: 3em;
		opacity: 0.25;
		&.history-winner {
			opacity: 1;
		}
	}

	&-more {
		font-size: 4em;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}
}
</style>