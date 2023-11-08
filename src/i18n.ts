import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import de from './lang/de.json';

addMessages('de', de);

init({
  fallbackLocale: 'de',
  initialLocale: getLocaleFromNavigator(),
});