<template>
    <pokemon-stats-item
        v-for="statItem in stats"
        :key="statItem.stat.name"
        :label="statItem.stat.name"
        :value="statItem.base_stat"
        :effort="statItem.effort"
    />
</template>

<script lang="ts">
import PokemonStatsItem from './PokemonStatsItem.vue';

export default {
    name: 'PokemonStats',
    components: { PokemonStatsItem },
    props: {
        stats: { type: Array, required: true },
    },
};
</script>
