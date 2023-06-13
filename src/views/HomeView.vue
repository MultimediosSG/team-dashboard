<script setup>
//import team from "@/team.json";
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import { useTeamStore } from "../stores/useTeamStore";
import Modal from "../components/Modal.vue";
import { ref } from "vue";

const team = useTeamStore()
team.init();

setTimeout(() => {
  team.spots = 7
}, 3000);
const openModal = ref(false);
const form = ref({
  name: '',
  email: '',
  status: 'active'
})
function addMember(){
  team.add({...form.value});
  form.value.name = '';
  form.value.email = '';
  openModal.value = false
}
</script>

<template>
  <TeamHeader @openModal="openModal = true" />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers /> 
  </div>

  <TeamFooter />
  <Modal :showModal="openModal" @close="openModal = false">
    <form @submit.prevent="addMember">
      <div class="mt-2">
        <label for="">Name</label>
        <input type="text" class="w-full border py-2 px-4" v-model="form.name">
      </div>
      <div class="mt-2">
        <label for="">Email</label>
        <input type="email" class="w-full border py-2 px-4" v-model="form.email">
      </div>
      <div class="mt-2">
        <button class="bg-black text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </form>
    <!-- <template #footer>
      footer
    </template> -->
  </Modal>
</template>