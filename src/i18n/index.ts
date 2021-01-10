import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

export function setupI18n() {
    register('en', () => import('./en.json'));
    register('ru', () => import('./ru.json'));

    init({
        fallbackLocale: 'en',
        initialLocale: "ru",
        // initialLocale: getLocaleFromNavigator(),
    });
}