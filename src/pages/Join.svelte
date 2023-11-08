<script lang="ts">
  import { _ } from "svelte-i18n";
  import logoSrc from "../assets/logo.svg";
  import LanguageSelector from "../shared/LanguageSelector.svelte";
  import WebsiteCredits from "../shared/WebsiteCredits.svelte";

  export let stage: number;
  export let code_enter_callback: (code: string) => string;
  export let name_enter_callback: (name: string) => string;

  let button: HTMLButtonElement;
  let input: HTMLInputElement;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      button.click();
    }
  };

  function onEnterPress(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let error =
      stage == 0
        ? code_enter_callback(input.value)
        : name_enter_callback(input.value);
    if (error.length > 0) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
      if (stage == 0) {
        stage += 1;
        input.value = "";
      }
    }
  }
</script>

<section class="fwh rel flex-center">
  <div class="join-container">
    <img class="noselect nointeract" src={logoSrc} alt="Logo" />
    <div class="form">
      <input
        type="text"
        class={stage == 0 ? "code" : "name"}
        placeholder={$_(stage == 0 ? "page.join.code" : "page.join.name")}
        maxlength={stage == 0 ? 6 : 16}
        minlength={stage == 0 ? 6 : 3}
        on:keydown={handleKeyDown}
        bind:this={input}
      />
      <button class="button" bind:this={button} on:click={onEnterPress}
        >{$_("page.join.button.next")}</button
      >
    </div>
  </div>
  <LanguageSelector />
  <WebsiteCredits />
</section>

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
