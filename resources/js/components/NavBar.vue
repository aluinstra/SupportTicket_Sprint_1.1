<template>
    <ul class="navBar">
        <li>
            <router-link :to="{ name: 'TicketsOverview' }"
                >Tickets Overview</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'CreateTicket' }"
                >Create Ticket</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'CategoriesOverview' }"
                >Category Overview</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'CreateCategory' }"
                >Create Category</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'UsersOverview' }"
                >Users Overview</router-link
            >
        </li>
        <li>
            <router-link v-if="!authenticated" :to="{ name: 'LogIn' }"
                >Log in</router-link
            >

            <a @click="logout" v-if="authenticated" href="#">Logout</a>
        </li>
    </ul>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "../store/auth";

const store = useAuthStore();
const authenticated = false;
// const authenticated = computed(() => store.state.auth.authenticated);

function login() {
    store.login(credentials);
}

function logout() {
    store.logout();
}
</script>
