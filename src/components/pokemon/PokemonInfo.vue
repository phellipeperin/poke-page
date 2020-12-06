<template>
    <base-table>
        <pokemon-info-item
            label="Height"
            :value="`${(pokemon.height / 10).toFixed(1)} m`"
        />
        <pokemon-info-item
            label="Weight"
            :value="`${(pokemon.weight / 10).toFixed(1)} kg`"
        />
    </base-table>
</template>

<script lang="ts">
import BaseTable from '../ui/BaseTable.vue';

import PokemonInfoItem from './PokemonInfoItem.vue';

export default {
    name: 'PokemonInfo',
    components: { BaseTable, PokemonInfoItem },
    props: {
        pokemon: { type: Object, required: true },
    },
};
</script>
