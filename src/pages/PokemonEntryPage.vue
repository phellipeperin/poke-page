<template>
    <div
        v-if="pokemon && pokemon.species"
        class="text-center"
    >
        <div class="text-left pl-4">
            <base-link-text
                text="back"
                url="/"
            />
        </div>
        <pokemon-image :name="pokemon.species.name" />
        <base-info-text
            :text="`#${pokemon.number}`"
            extra-classes="mt-8"
        />
        <p class="text-3xl font-light tracking-wide uppercase">
            {{ pokemon.formattedName }}
        </p>

        <div class="flex flex-row flex-wrap justify-evenly mt-20">
            <div class="w-full md:w-5/12">
                <base-info-text
                    text="Info"
                    extra-classes="mb-2"
                />
                <pokemon-info :pokemon="pokemon" />
            </div>
            <div class="w-full md:w-5/12">
                <base-info-text
                    text="Stats"
                    extra-classes="mb-2"
                />
                <pokemon-stats :stats="pokemon.stats" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { get as getPokemon } from '../application/api/methods/pokemonApi';
import { formatPokemonName, formatPokemonNumber } from '../application/services/pokemonService';

import BaseLinkText from '../components/ui/BaseLinkText.vue';
import BaseInfoText from '../components/ui/BaseInfoText.vue';

import PokemonImage from '../components/pokemon/PokemonImage.vue';
import PokemonInfo from '../components/pokemon/PokemonInfo.vue';
import PokemonStats from '../components/pokemon/PokemonStats.vue';

export default {
    name: 'PokemonEntryPage',
    components: { BaseLinkText, BaseInfoText, PokemonImage, PokemonInfo, PokemonStats },
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
