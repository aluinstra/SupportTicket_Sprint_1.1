<script setup>
import { ref } from "vue";
import multiSelect from "../components/multi-select.vue";

const label = ref("Categories");

const props = defineProps({
    ticket: Object,
    categories: { required: true, type: Array },
});

const options = [
    { label: "A Option 1", value: "option1" },
    { label: "B Option 2", value: "option2" },
    { label: "C Option 3", value: "option3" },
    { label: "D Option 4", value: "option4" },
];
const selectedOptions = ref([]);
const selectedCategories = ref([]);

const test = (e) => console.log(e);
</script>

<template>
    <div>
        <form name="ticketForm" @submit.prevent="submit">
            <label for="titel">Title</label>
            <input
                type="text"
                id="titel"
                name="titel"
                placeholder=""
                v-model="ticket.titel"
            />

            <label for="details">Details</label>
            <textarea
                type="text"
                id="details"
                placeholder="Type your content here..."
                v-model="ticket.details"
            >
            </textarea>

            <multiSelect
                :options="categories"
                labelKey="category"
                valueKey="id"
                :label="label"
                v-model="selectedOptions"
            />

            <input type="submit" value="Submit" @click="$emit('submit')" />
        </form>
    </div>
</template>

<style>
input[type="text"],
textarea,
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 2px;
}
</style>
