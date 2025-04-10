<template>
    <div class="baklava-num-input">
        <div class="__button --dec" @click="decrement">
            <i-arrow />
        </div>
        <div v-if="!editMode" class="__content" @click="enterEditMode">
            <div class="__label" :title="intf.name">
                {{ intf.name }}
            </div>
            <div class="__value">
                {{ stringRepresentation }}
            </div>
        </div>
        <div v-else class="__content">
            <input
                ref="inputEl"
                v-model="tempValue"
                type="number"
                class="baklava-input"
                :class="{ '--invalid': invalid }"
                style="text-align: right"
                @blur="leaveEditMode"
                @keydown.enter="leaveEditMode"
                :disabled="intf.options?.disabled || false"
            />
            <div v-if="invalid" class="error-tooltip">
                Out of range. Min: {{ intf.options?.min || "0" }}, Max: {{ intf.options?.max || "∞" }}
            </div>
        </div>
        <div class="__button --inc" @click="increment">
            <i-arrow />
        </div>
    </div>
</template>
<style scoped>
.baklava-input.--invalid:hover + .error-tooltip,
.baklava-input.--invalid:focus + .error-tooltip {
    visibility: visible;
    opacity: 1;
    border: none;
}
.baklava-input.--invalid:focus-visible {
    outline: none;
}
</style>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import IconArrow from "../../icons/ChevronDown.vue";
import { useBaseNumericInterface } from "../baseNumericInterface";
import type { NumberInterface } from "./NumberInterface";

export default defineComponent({
    components: {
        "i-arrow": IconArrow,
    },
    props: {
        intf: {
            type: Object as () => NumberInterface,
            required: true,
        },
    },
    setup(props) {
        const baseNumericInterface = useBaseNumericInterface(toRef(props, "intf"));

        const increment = () => {
            baseNumericInterface.setValue(Math.round((props.intf.value + 0.1) * 100) / 100);
        };

        const decrement = () => {
            baseNumericInterface.setValue(Math.round((props.intf.value - 0.1) * 100) / 100);
        };

        return { ...baseNumericInterface, increment, decrement };
    },
});
</script>
