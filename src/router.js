import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import PrayerTimesView from '@/views/PrayerTimesView.vue';
import QiblaDirectionView from '@/views/QiblaDirectionView.vue';

const routes = [
    { path: '/', name: 'login', component: LoginView },
    { path: '/prayer-times', name: 'prayer-times', component: PrayerTimesView },
    { path: '/qibla-direction', name: 'qibla-direction', component: QiblaDirectionView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;