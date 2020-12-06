<template>
    <table class="w-full table-fixed">
        <tbody class="w-full">
            <slot />
        </tbody>
    </table>
</template>

<script lang="ts">
export default {
    name: 'BaseTable',
};
</script>
