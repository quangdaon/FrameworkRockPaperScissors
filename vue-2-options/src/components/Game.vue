<template>
	<div>
		<selector ref="selector" :slow="slow" @select="playerSelected" />
		<div class="result" v-if="!!result">
			<p>{{ result }}</p>
			<button @click="reset">Reset</button>
		</div>
		<history :history="history" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Selector from './Selector.vue';
import HistoryComponent from './History.vue';
import { Player } from '@shared/classes/player/player';
import { randomFromArray } from '@shared/helpers/helpers';
import { History } from '@shared/helpers/history';
import hands, { Hand } from '@shared/helpers/hands';

interface Data {
	player: Player;
	opponent: Player;
	result: string;
	history: History;
	slow: boolean;
}

export default Vue.extend({
	name: 'Game',
	components: { Selector, History: HistoryComponent },
	data(): Data {
		return {
			player: new Player(),
			opponent: new Player(),
			history: [],
			result: '',
			slow: true
		};
	},
	methods: {
		playerSelected(hand: Hand) {
			console.log(hand);
			this.player.select(hand);
			this.opponent.select(randomFromArray(Object.values(hands)));
			this.compareResults();
		},
		reset() {
			this.player = new Player();
			this.opponent = new Player();
			this.opponent.select(randomFromArray(Object.values(hands)));
			this.result = '';
			const selector = this.$refs.selector as InstanceType<typeof Selector>;
			selector.reset();
		},
		compareResults() {
			const result = this.player.compete(this.opponent);
			const selection = `Opponent selected ${this.opponent.selected.emoji}`;

			switch (result) {
				case 'draw':
					this.result = `${selection}. It's a draw!`;
					break;
				case 'win':
					this.result = `${selection}. You win!`;
					break;
				case 'lose':
					this.result = `${selection}. You lose!`;
					break;
				default:
					return;
			}

			this.history.push({
				player: this.player.selected,
				opponent: this.opponent.selected,
				status: result
			});
		}
	}
});
</script>

<style lang="scss">
.result {
	text-align: center;
	font-size: 3em;
	p {
		margin: 0;
	}
}
</style>