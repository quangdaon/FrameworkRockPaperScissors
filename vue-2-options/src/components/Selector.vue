<template>
	<div class="selector">
		<selector-hand 
      v-for="hand in options"
      :key="hand.name"
      :hand="hand"
      :disabled="isDisabled(hand)"
      :selected="isSelected(hand)"
      @select="selectHand" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SelectorHand from './SelectorHand.vue';
import hands, { Hand } from '@shared/helpers/hands';

interface Data {
  options: Hand[];
  selected: Hand | null;
}

export default Vue.extend({
	name: 'Selector',
	components: {
		SelectorHand
	},
  props: {
    slow: {
      type: Boolean,
      default: false
    }
  },
	data(): Data {
		return {
			options: Object.values(hands),
			selected: null
		};
	},
	methods: {
		reset() {
			this.selected = null;
		},
		selectHand(hand: Hand): void {
			console.log(hand);
			this.selected = hand;
			this.$emit('select', hand);
		},
		isSelected(hand: Hand) {
			return this.slow && !!this.selected && this.selected === hand;
		},
		isDisabled(hand: Hand) {
			return this.slow && !!this.selected && this.selected !== hand;
		}
	}
});
</script>

<style lang="scss">
.selector {
	display: block;
	width: max-content;
	margin: auto;
	position: relative;
}
</style>