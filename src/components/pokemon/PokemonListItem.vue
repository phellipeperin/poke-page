<template>
    <div
        class="flex w-1/2 sm:w-1/4 lg:w-1/6 pt-4 pb-8 my-4 cursor-pointer rounded-md transition hover:shadow hover:bg-gray-50"
        @click="goToEntryPage"
    >
        <div class="w-32 h-40 mx-auto text-center">
            <img
                :src="`https://img.pokemondb.net/sprites/bank/normal/${pokemonData.name}.png`"
                :alt="pokemonData.name"
                class="w-32 h-32"
            >
            <p class="text-xs text-gray-400">
                #{{ pokemonData.number }}
            </p>
            <p class="text-sm font-semibold">
                {{ pokemonData.formattedName }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { formatPokemonName, formatPokemonNumber } from '../../application/services/pokemonService';

export default {
    name: 'PokemonListItem',
    props: {
        pokemon: { type: Object, required: true },
        number: { type: Number, required: true },
    },
    setup(props: any) {
        const router = useRouter();
        function goToEntryPage() {
            router.push(`/pokemon/${props.number}`);
        }

        const pokemonData = ref({
            ...props.pokemon,
            formattedName: formatPokemonName(props.pokemon.name),
            number: formatPokemonNumber(props.number),
        });
        return {
            pokemonData,
            goToEntryPage,
        };
    },
};
</script>
