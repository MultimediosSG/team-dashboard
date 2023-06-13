<script setup>
//import team from "@/team.json";
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import { useTeamStore } from "../stores/useTeamStore";

const team = useTeamStore()
team.init();

// setTimeout(() => {
//   team.spots = 10
// }, 3000);

</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers /> 
  </div>

  <TeamFooter />
</template>