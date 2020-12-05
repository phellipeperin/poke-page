<template>
    <div class="flex w-1/2 md:w-1/6 mb-8">
        <div class="w-32 h-40 mx-auto text-center">
            <img
                :src="`https://img.pokemondb.net/sprites/bank/normal/${pokemonData.name}.png`"
                :alt="pokemonData.name"
                class="w-32 h-32"
            >
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
    },
    setup(props: any) {
        function formatName(name: string) {
            const splittedName = name.replace('-', ' ').split(' ');
            return splittedName.map((elem) => elem.substring(0, 1).toUpperCase() + elem.substring(1)).join(' ');
        }

        const pokemonData = ref({ ...props.pokemon, formattedName: formatName(props.pokemon.name) });
        return {
            pokemonData,
        };
    },
};
</script>
