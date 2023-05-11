<template>
    <h1>Tickets</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>titel</th>
                <th>created by</th>
                <th>ticket details</th>
                <th>appointed to</th>
                <th>date created</th>
                <th>date updated</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="ticket in tickets" key="id">
                <td>{{ ticket.id }}</td>
                <td>{{ ticket.titel }}</td>
                <td>{{ getUser(ticket.created_by) }}</td>
                <td>
                    <router-link
                        :to="{
                            name: 'ShowTicket',
                            params: { id: ticket.id },
                        }"
                        >{{ getDetails(ticket.details) }}</router-link
                    >
                </td>
                <td>{{ getUser(ticket.appointed_to) }}</td>
                <td>{{ date(ticket.created_at) }}</td>
                <td>{{ date(ticket.updated_at) }}</td>
                <td>
                    <a class="routerLink" @click="deleteFromDB(category.id)"
                        >Delete</a
                    >
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    tickets: Array,
    users: Array,
});

const date = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const getUser = (id) => {
    console.log(props.users[id]);
    const user = props.users.find((user) => user.id == id);
    return user?.name;
};

const getDetails = (str) => {
    const details = str.split(" ").slice(0, 10).join(" ") + "...";
    return details;
};
</script>
