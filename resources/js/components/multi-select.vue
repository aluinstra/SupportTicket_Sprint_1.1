<template>
    <div id="label" ref="label" style="width: 25%">
        <div
            id="my-select"
            v-if="!isSearching"
            @click="isSearching = !isSearching"
        >
            {{ label }}
        </div>
        <div id="search" v-else>
            <input
                type="text"
                v-model="searchQuery"
                @keyup.enter="completeSearch"
            />
            <div v-for="option in filteredOptions" :key="option.value">
                <input
                    type="checkbox"
                    :id="option.value"
                    :value="option.value"
                    @change="emitSelectedOptions"
                    v-model="selectedOptions"
                    hidden
                    :class="{
                        selected: selectedOptions.includes(option[valueKey]),
                    }"
                />
                <label
                    :for="option.value"
                    :class="{
                        highLightActive: option[valueKey] === highLightOption,
                    }"
                    @mouseover="mouseOver(option[valueKey])"
                >
                    {{ option[labelKey] }}</label
                >
            </div>
            <!-- <button @click="emitSelectedOptions">Confirm</button> -->
        </div>
        <p>Selected options: {{ selectedOptions }}</p>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { stringifyQuery } from "vue-router";

const test = (event) => console.log(event);

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    labelKey: {
        type: String,
        required: true,
    },
    valueKey: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: Array,
        required: true,
    },
});

const emits = defineEmits(["update:modelValue"]);

const selectedOptions = ref([]);
const isSearching = ref(false);
const searchQuery = ref("");
const highLightOption = ref("");

let labelText = "Select options:";
let selectId = "my-select";

function emitSelectedOptions() {
    emits("update:modelValue", selectedOptions.value);
}

function mouseOver(option) {
    highLightOption.value = option;
}

const keyHandler = (event) => {
    const highLightedOption = props.options.findIndex(
        (obj) => obj[props.valueKey] === highLightOption.value
    );
    if (event.keyCode == 40) {
        if (highLightedOption < props.options.length - 1)
            highLightOption.value =
                props.options[highLightedOption + 1][props.valueKey];
    } else if (event.keyCode == 38) {
        if (highLightedOption > 0)
            highLightOption.value =
                props.options[highLightedOption - 1][props.valueKey];
    } else if (event.keyCode == 13) {
        pressedEnter();
    }
};

const pressedEnter = () => {
    // console.log(highLightOption);
    if (!highLightOption.value) return;

    if (!selectedOptions.value.includes(highLightOption.value)) {
        selectedOptions.value.push(highLightOption.value);
    } else if (selectedOptions.value.includes(highLightOption.value)) {
        const index = selectedOptions.value.indexOf(highLightOption.value);

        if (index !== -1) {
            selectedOptions.value.splice(index, 1);
        }
    }
    emitSelectedOptions();
};

// const completeSearch = (event) => {
//     if (searchQuery.value) {
//         isSearching.value = false;
//         selectedOptions.value.push(filteredOptions.value[0][props.valueKey]);
//         emitSelectedOptions();
//     }
// };

const filteredOptions = computed(() => {
    if (!searchQuery.value) {
        return props.options;
    }
    return props.options.filter((option) =>
        option[props.labelKey]
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
    );
});

// handle clicks outside of the component
const handleClickOutside = (event) => {
    if (!event.target.closest("#label")) {
        isSearching.value = false;
    }
};

// register the click event listener
watch(isSearching, (newValue) => {
    if (newValue) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keyup", keyHandler);
    } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.addEventListener("keyup", keyHandler);
    }
});
</script>

<style scoped>
.selected + label {
    background-color: blue;
    color: white;
}

.highLightActive {
    background-color: rgb(0, 255, 30);
    color: white;
}

.selected + .highLightActive {
    background-color: black;
    color: red;
}
</style>

<!-- // zoeken "enter" functie // hightlight hover select -->
