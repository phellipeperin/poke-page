<template>
    <div class="block">
        {{ label }}
    </div>
</template>

<script lang="ts">
export default {
    name: 'PokemonStatsItem',
    props: {
        label: { type: String, required: true },
        value: { type: Number, required: true },
        effort: { type: Number, required: true },
    },
};
</script>
