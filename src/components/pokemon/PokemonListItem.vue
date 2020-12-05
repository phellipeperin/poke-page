<template>
    <div class="flex w-1/2 md:w-1/6">
        <img
            :src="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`"
            :alt="pokemon.name"
            class="max-w-xs"
        >
        <p>
            {{ pokemon.name }}
        </p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PokemonListItem',
    props: {
        pokemon: { type: Object, required: true },
    },
};
</script>
