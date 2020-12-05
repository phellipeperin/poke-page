import { createWebHistory, createRouter } from 'vue-router';

import PokemonListPage from '../../pages/PokemonListPage.vue';
import PokemonEntryPage from '../../pages/PokemonEntryPage.vue';

const routes = [
    { path: '/', name: 'pokemonList', component: PokemonListPage },
    { path: '/pokemon/:number', name: 'pokemonEntry', component: PokemonEntryPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
