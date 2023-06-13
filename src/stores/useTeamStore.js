import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { ref } from "vue";

export const useTeamStore = defineStore('team', () => {

    const spots = ref(5)
    const name = ref('')
    const members = reactive([]);

    const spotsRemaining = computed(() =>{
        return spots.value - members.length;
    })

    async function init() {
        const resp = await import('../team.json');
       name.value =  resp.default.name;
       spots.value =  resp.default.spots;
       members.push(...resp.default.members);
    }
    async function add(data) {
        members.push(data);
    }

    return { spots, name, members, init, spotsRemaining, add }
})