<template>
	<div id="app">
		<game />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Game from "./components/Game.vue";

export default Vue.extend({
	name: "App",
	components: {
		Game,
	},
});
</script>

<style lang="scss">
/* You can add global styles to this file, and also import other style files */
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  background: #eee;
  font-family: sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}</style>
