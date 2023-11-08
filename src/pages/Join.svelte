<script lang="ts">
  import { _ } from "svelte-i18n";
  import logoSrc from "../assets/logo.svg";
  import LanguageSelector from "../shared/LanguageSelector.svelte";

  let button: HTMLButtonElement;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      button.click();
    }
  };
</script>

<section class="fwh rel flex-center">
  <div class="join-container">
    <img class="noselect nointeract" src={logoSrc} alt="Logo" />
    <div class="form">
      <input
        type="text"
        placeholder={$_("page.join.code")}
        maxlength="6"
        on:keydown={handleKeyDown}
      />
      <button class="button" bind:this={button}
        >{$_("page.join.button.next")}</button
      >
    </div>
  </div>
</section>

<LanguageSelector />

<style lang="sass">
.join-container
  width: calc(100% - #{$GAP})
  max-width: 540px
  >img
    width: 100%
    height: auto
  >div
    margin-top: $GAP
</style>
