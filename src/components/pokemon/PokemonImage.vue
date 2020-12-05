<template>
    <img
        :src="url"
        :alt="name"
        :class="`${useSprite ? 'w-32 h-32' : 'mx-auto'}`"
    >
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
    name: 'PokemonImage',
    props: {
        name: { type: String, required: true },
        useSprite: { type: Boolean, default: false },
    },
    setup(props: any) {
        const baseUrl = 'https://img.pokemondb.net';
        const url = computed(() => {
            if (props.useSprite) return `${baseUrl}/sprites/bank/normal/${props.name}.png`;
            return `${baseUrl}/artwork/${props.name}.jpg`;
        });

        return {
            url,
        };
    },
};
</script>
