<template>
    <div>
        <NavBar />
        <Suspense>
            <router-view></router-view>
        </Suspense>
    </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
.routerLink {
    background: linear-gradient(180deg, #ff6b6b 0%, #ffc153 100%);
    border-radius: 30px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.routerLink:hover {
    background: linear-gradient(180deg, #ffc153 0%, #ff6b6b 100%);
}

.routerLink {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navBar > li {
    display: inline;
    margin: 0px;
    padding: 5px;
    background-color: blue;
}

.navBar > li > a:link {
    text-decoration: none;
}

/* .navBar > li a:visited {
    color: white;
} */

.navBar > li > a:hover {
    color: chartreuse;
}

.navBar > li:hover {
    background-color: black;
}
</style>
