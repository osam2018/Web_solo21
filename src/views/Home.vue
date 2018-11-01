<template>
	<TopNav></TopNav>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "../layouts/Default.vue"
import TopNav from "../components/TopNav/TopNav.vue"
export default {
  name: "home",
  components: {
    DefaultLayout,
	TopNav
  }
};
</script>
