import { createWebHistory, createRouter } from 'vue-router';

import PokemonListPage from '../../pages/PokemonListPage.vue';

const routes = [
    { path: '/', name: 'pokemonList', component: PokemonListPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
