<template>
    <tr class="w-full">
        <td class="w-3/12 text-right py-3 pr-2">
            <base-info-text
                :text="label.replace('-', ' ')"
                extra-classes="uppercase"
            />
        </td>
        <td class="w-1/12 text-center px-1">
            <p class="text-sm">
                {{ value }}
            </p>
        </td>
        <td class="w-8/12 text-left px-1">
            <div
                class="h-6 bg-primary bg-opacity-85 rounded-md"
                :style="{ width: `${value * 100 / maxValue}%` }"
            >
                &nbsp;
            </div>
        </td>
        <td class="w-1/12 text-center px-1">
            <div
                v-if="effort"
                class="w-8 h-8 rounded-full border border-primary"
            >
                <p class="text-sm mt-1">
                    {{ effort }}
                </p>
            </div>
        </td>
    </tr>
</template>

<script lang="ts">
import BaseInfoText from '../ui/BaseInfoText.vue';

export default {
    name: 'PokemonStatsItem',
    components: { BaseInfoText },
    props: {
        label: { type: String, required: true },
        value: { type: Number, required: true },
        effort: { type: Number, required: true },
    },
    data() {
        return {
            maxValue: 255,
        };
    },
};
</script>
