<template>
    <div class="flex w-1/2 sm:w-1/4 lg:w-1/6 pt-4 pb-8 my-4 cursor-pointer rounded-md transition hover:shadow hover:bg-gray-50">
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

export default {
    name: 'PokemonListItem',
    props: {
        pokemon: { type: Object, required: true },
        number: { type: Number, required: true },
    },
    setup(props: any) {
        function formatName(name: string) {
            const splittedName = name.replace('-', ' ').split(' ');
            return splittedName.map((elem) => elem.substring(0, 1).toUpperCase() + elem.substring(1)).join(' ');
        }

        function formatNumber(number: number) {
            if (number < 10) return `00${number}`;
            if (number < 100) return `0${number}`;
            return number;
        }

        const pokemonData = ref({ ...props.pokemon, formattedName: formatName(props.pokemon.name), number: formatNumber(props.number) });
        return {
            pokemonData,
        };
    },
};
</script>
