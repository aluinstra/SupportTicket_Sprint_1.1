import { computed, ref } from "vue";
import axios from "axios";
import { router } from "@/router";

const authenticated = ref(false);
const user = ref({});

export const useAuthStore = () => {
    const login = async (credentials) => {
        try {
            const { data } = await axios.post("login", credentials);
            user.value = data;
            authenticated.value = true;
            router.push({ name: "dashboard" });
        } catch (error) {
            user.value = {};
            authenticated.value = false;
        }
    };

    const logout = () => {
        user.value = {};
        authenticated.value = false;
    };
    return {
        login,
        logout,
    };
};
