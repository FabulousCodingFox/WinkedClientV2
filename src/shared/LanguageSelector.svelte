<script lang="ts">
  import { locale, locales, _ } from "svelte-i18n";

  function setLocale(lang: string) {
    locale.set(lang);
  }
</script>

<div class="language-selector">
  <button>
    <!--Get the current locale and get the string 'path' from it and set it as a svg element-->
    <span>{$locale}</span>
  </button>
  <div class="dropdown">
    {#each $locales as lang}
      <button on:click={() => locale.set(lang)}>
        <span>{lang}</span>
      </button>
    {/each}
  </div>
</div>

<style lang="sass">
.language-selector
  position: absolute
  top: $GAP
  right: $GAP
</style>
