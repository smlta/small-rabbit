<script setup>
 import RFooter from "./Components/RFooter.vue";
import RHeader from "./Components/RHeader.vue";
import RNav from "./Components/RNav.vue";
</script>

<template>
<RHeader> </RHeader>
<RNav> </RNav>
<router-view> </router-view> <!--二级路由出口-->
<RFooter></RFooter>
 
</template>

<style scoped>

</style>