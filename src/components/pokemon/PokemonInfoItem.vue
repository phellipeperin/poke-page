<template>
    <tr class="w-full border-b-2">
        <td class="w-3/12 text-right py-3 pr-2">
            <base-info-text :text="label" />
        </td>
        <td class="w-9/12 text-left pl-2">
            <p>{{ value }}</p>
        </td>
    </tr>
</template>

<script lang="ts">
import BaseInfoText from '../ui/BaseInfoText.vue';

export default {
    name: 'PokemonInfoItem',
    components: { BaseInfoText },
    props: {
        label: { type: String, required: true },
        value: { type: String, required: true },
    },
};
</script>
