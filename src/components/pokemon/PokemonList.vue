<template>
    <div class="flex flex-row flex-wrap justify-evenly">
        <pokemon-list-item
            v-for="(pokemon, index) in pokemonList"
            :key="pokemon.name"
            :pokemon="pokemon"
            :number="index + 1"
        />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import pokemonApi from '../../application/api/methods/pokemonApi';

import PokemonListItem from './PokemonListItem.vue';

// interface Pokemon {
//     name: string,
//     url: string,
// }

export default {
    name: 'PokemonList',
    components: { PokemonListItem },
    setup() {
        const pokemonList = ref([]);

        (async () => {
            const { data } = await pokemonApi.search(897, 0);
            pokemonList.value = data.results;
        })();

        return {
            pokemonList,
        };
    },
};
</script>
