<script setup>
import { ref } from "vue";

import { useTicketStore } from "../../store/tickets";
import Ticket from "../../components/Ticket.vue";
import { useCategoryStore } from "../../store/categories";

const ticketStore = useTicketStore();
const categoryStore = useCategoryStore();

const categories = categoryStore.getAllfromState();
console.log("1", categories);
const ticket = ref({
    titel: "",
    content: "",
});

const createTicket = () => {
    console.log("create");
    ticketStore.addToState(category.value);
};

await categoryStore.getAllfromDB();
</script>

<template>
    <h1>Create Ticket</h1>
    <Ticket :ticket="ticket" :categories="categories" @submit="createTicket" />
</template>
