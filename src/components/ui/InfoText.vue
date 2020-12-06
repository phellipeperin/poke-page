<template>
    <p
        class="text-sm font-semibold text-gray-400"
        :class="extraClasses"
    >
        {{ text }}
    </p>
</template>

<script lang="ts">
export default {
    name: 'InfoText',
    props: {
        text: { type: String, required: true },
        extraClasses: { type: String, default: '' },
    },
};
</script>
