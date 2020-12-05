<template>
    <div>
        <pokemon-image :name="pokemon.species.name" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { get as getPokemon } from '../application/api/methods/pokemonApi';
import { formatPokemonName, formatPokemonNumber } from '../application/services/pokemonService';
import PokemonImage from '../components/pokemon/PokemonImage.vue';

export default {
    name: 'PokemonEntryPage',
    components: { PokemonImage },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const pokemon = ref({});

        (async () => {
            const { data } = await getPokemon(Number(route.params.number));
            pokemon.value = {
                ...data,
                formattedName: formatPokemonName(data.species.name),
                number: formatPokemonNumber(Number(route.params.number)),
            };
        })();

        function goToListPage() {
            router.push('/');
        }

        return {
            pokemon,
            goToListPage,
        };
    },
};
</script>
