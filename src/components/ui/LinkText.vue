<template>
    <a
        class="text-sm cursor-pointer hover:text-primary"
        @click="goTo"
    >
        {{ text }}
    </a>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
    name: 'LinkText',
    props: {
        text: { type: String, required: true },
        url: { type: String, required: true },
    },
    setup(props: any) {
        const router = useRouter();
        function goTo() {
            router.push(props.url);
        }

        return {
            goTo,
        };
    },
};
</script>
