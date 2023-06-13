<script setup>
defineProps({
    showModal: Boolean
})
defineEmits(['close']);
</script>
<template>
    <div class="modal grid place-content-center" v-show="showModal">
        <div class="modal-container bg-white w-[80vw] max-w-[500px] p-4 rounded">
            <div class="px-2 py-4">
                <slot />
            </div>
           
            <div class="border-t border-red-500 p-2">
                <slot name="footer">
                    <button @click="$emit('close')">Cerrar</button>
                </slot>
            </div>
        </div>

    </div>
</template>
<style>
.modal{
    position: fixed;
    background: rgba(0,0,0,.5);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
</style>
