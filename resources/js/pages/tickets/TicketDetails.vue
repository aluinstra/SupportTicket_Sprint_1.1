<template>
    <div>
        <h1>Show ticket {{ ticket.id }}</h1>
        <p>{{ ticket.details }}</p>
        <br />
        <router-link
            class="routerLink"
            :to="{
                name: 'EditTicket',
                params: { id: ticket.id },
            }"
            >Edit</router-link
        >
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useTicketStore } from "../../store/tickets";

const ticketStore = useTicketStore();

const route = useRoute();

const ticket = ref(await ticketStore.getByID(route.params.id));

const submitEditing = () => {
    console.log("submit");
    console.log(ticket.id);
    console.log(ticket.details);
};
</script>

<style>
#textbox {
    min-width: 300px;
    min-height: 200px;
}
</style>
