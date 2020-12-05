<template>
    <div>
        oi
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { get as getPokemon } from '../application/api/methods/pokemonApi';

export default {
    name: 'PokemonEntryPage',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const pokemon = ref({});

        (async () => {
            const { data } = await getPokemon(Number(route.params.number));
            pokemon.value = data;
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
