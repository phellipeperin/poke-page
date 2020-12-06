<template>
    <table>
        <tbody>
            <pokemon-info-item
                label="Height"
                :value="`${(pokemon.height / 10).toFixed(1)} m`"
            />
            <pokemon-info-item
                label="Weight"
                :value="`${(pokemon.weight / 10).toFixed(1)} kg`"
            />
        </tbody>
    </table>
</template>

<script lang="ts">
import PokemonInfoItem from './PokemonInfoItem.vue';

export default {
    name: 'PokemonInfo',
    components: { PokemonInfoItem },
    props: {
        pokemon: { type: Object, required: true },
    },
};
</script>
