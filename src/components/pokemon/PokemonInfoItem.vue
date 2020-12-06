<template>
    <tr>
        <td>
            {{ label }}
        </td>
        <td>
            {{ value }}
        </td>
    </tr>
</template>

<script lang="ts">
export default {
    name: 'PokemonInfoItem',
    props: {
        label: { type: String, required: true },
        value: { type: String, required: true },
    },
};
</script>
