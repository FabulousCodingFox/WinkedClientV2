<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { locale, locales, _, dictionary } from "svelte-i18n";

  $: menuOpen = false;

  function toggleLanguageMenu(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    menuOpen = !menuOpen;
  }

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && event.target.parentElement?.classList.contains("language-selector")) return;
      menuOpen = false;
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<div class="language-selector flex-column">
  <button on:click={toggleLanguageMenu} class="flex-row subtle-shadow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="nointeract">{@html String($dictionary[$locale ?? ""]["logo"])}</svg>
    &nbsp;
    <span class="locale nointeract">{$locale?.toUpperCase()}</span>
  </button>
  <div class="language-select flex-column subtle-shadow {menuOpen ? 'visible' : ''}">
    {#each $locales as lang}
      <button
        on:click={(e) => {
          locale.set(lang);
          toggleLanguageMenu(e);
        }}
        class="flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">{@html String($dictionary[lang]["logo"])}</svg>
        &nbsp;
        <span class="locale">{$dictionary[lang]["name"]}</span>
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .language-selector {
    position: absolute;
    top: $GAP;
    right: $GAP;
    align-items: flex-end;
    gap: 0.5rem;

    button {
      font-weight: bold;
      align-items: center;
      font-size: 1rem;
      border-radius: $GAP;
      svg {
        height: 1.5rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }
    > * {
      background-color: $THEME_LANGUAGE_SELECTOR_BG;
      color: $THEME_LANGUAGE_SELECTOR_FG;
      padding: 0.5rem;
      border-radius: $GAP;
    }
    .language-select {
      opacity: 0;
      transition: opacity $TRANSITION_FAST ease-in-out;
      pointer-events: none;
      &.visible {
        opacity: 1;
        pointer-events: all;
      }
      button {
        padding: 0.75rem;
        &:hover {
          background-color: $THEME_LANGUAGE_SELECTOR_BG_HOVER;
        }
      }
    }
  }
</style>
