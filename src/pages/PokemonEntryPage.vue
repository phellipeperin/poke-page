<template>
    <div
        v-if="pokemon && pokemon.species"
        class="text-center"
    >
        <div class="text-left pl-4">
            <link-text
                text="back"
                url="/"
            />
        </div>
        <pokemon-image :name="pokemon.species.name" />
        <info-text
            :text="`#${pokemon.number}`"
            extra-classes="mt-8"
        />
        <p class="text-3xl font-light tracking-wide uppercase">
            {{ pokemon.formattedName }}
        </p>

        <div class="flex flex-row flex-wrap justify-evenly mt-20">
            <div class="flex">
                <info-text text="Info" />
                <pokemon-info :pokemon="pokemon" />
            </div>
            <div class="flex">
                <info-text text="Stats" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { get as getPokemon } from '../application/api/methods/pokemonApi';
import { formatPokemonName, formatPokemonNumber } from '../application/services/pokemonService';

import LinkText from '../components/ui/LinkText.vue';
import InfoText from '../components/ui/InfoText.vue';

import PokemonImage from '../components/pokemon/PokemonImage.vue';
import PokemonInfo from '../components/pokemon/PokemonInfo.vue';

export default {
    name: 'PokemonEntryPage',
    components: { LinkText, InfoText, PokemonImage, PokemonInfo },
    setup() {
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

        return {
            pokemon,
        };
    },
};
</script>
