<template>
	<div :class="classes">
		<button class="selector-hand-button" @click="selectHand">
			<div class="selector-hand-emoji">{{ hand.emoji }}</div>
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hand } from '@shared/helpers/hands';

export default Vue.extend({
	name: 'SelectorHand',
	props: {
		hand: Object as () => Hand,
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
	},
	computed: {
		classes() {
      const hand: Hand = this.hand;
			const obj: any = {
				'selector-hand': true,
				disabled: this.disabled,
				selected: this.selected
			};

			obj[`selector-hand-${hand.name}`] = true;

			return obj;
		}
	},
  methods: {
    selectHand() {
      if (this.disabled || this.selected) return;
      this.$emit('select', this.hand);
    }
  }
});
</script>

<style lang="scss">
%highlighted-hand {
	opacity: 1;
	transform: scale(1, 1);
}

.selector-hand {
	position: relative;
	transition: 300ms;
	width: 12em;
	text-align: center;

	&-emoji {
		opacity: 0.5;
		transform: scale(0.9, 0.9);
		transform-origin: center center;
		transition: transform 200ms;
	}

	&-button {
		padding: 0;
		font-size: 12em;
		cursor: pointer;
		border: none;
		background: transparent;
		outline: none;
		&:hover {
			.selector-hand-emoji {
				@extend %highlighted-hand;
			}
		}
	}

	&.disabled {
		opacity: 0;
		pointer-events: none;
	}

	&.selected {
		z-index: 20;
		.selector-hand-emoji {
			@extend %highlighted-hand;
		}
	}

	&-rock,
	&-scissors {
		position: absolute;
		top: 0;
		left: 0;
	}

	&-rock {
		transform: translateX(-100%);
		&.disabled,
		&.selected {
			transform: translateX(0);
		}
	}

	&-scissors {
		transform: translateX(100%);
		&.disabled,
		&.selected {
			transform: translateX(0);
		}
	}
}
</style>