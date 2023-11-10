<script lang="ts">
  import { _ } from "svelte-i18n";
  import logoSrc from "../assets/logo.svg";
  import LanguageSelector from "../shared/LanguageSelector.svelte";
  import WebsiteCredits from "../shared/WebsiteCredits.svelte";

  export let stage: number;
  export let game_join_callback: (code: string, name: string | null) => void;

  let button: HTMLButtonElement;
  let input: HTMLInputElement;

  let sessionCode = "";
  let sessionName: string | null = null;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      button.click();
    }
  };

  function checkCode(code: string): string {
    if (code.length == 0) return "page.join.error.code-required";
    if (code.length < 6) return "page.join.error.code-to-short";
    if (code.length > 6) return "page.join.error.code-to-long";
    if (!/^[a-zA-Z0-9]+$/.test(code)) return "page.join.error.code-invalid";
    return "";
  }

  function checkName(name: string): string {
    if (name.length == 0) return "page.join.error.name-required";
    if (name.length < 3) return "page.join.error.name-to-short";
    if (name.length > 16) return "page.join.error.name-to-long";
    if (!/^[a-zA-Z0-9]+$/.test(name)) return "page.join.error.name-invalid";
    return "";
  }

  function onEnterPress(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    let error = stage == 0 ? checkCode(input.value) : checkName(input.value);

    if (error.length > 0) {
      console.log(error);
      if (input.classList.contains("error")) {
        input.classList.remove("error");
        input.offsetWidth;
      }
      input.classList.add("error");
    } else {
      input.classList.remove("error");
      if (stage == 0) {
        sessionCode = input.value;
        stage += 1;
        input.value = "";
      } else {
        sessionName = input.value;
        game_join_callback(input.value, null);
      }
    }
  }
</script>

<section class="fwh rel flex-center">
  <div class="join-container">
    <img class="noselect nointeract" src={logoSrc} alt="Logo" />
    <div class="form">
      <input type="text" class={stage == 0 ? "code" : "name"} placeholder={$_(stage == 0 ? "page.join.code" : "page.join.name")} maxlength={stage == 0 ? 6 : 16} minlength={stage == 0 ? 6 : 3} on:keydown={handleKeyDown} bind:this={input} />
      <button class="button" bind:this={button} on:click={onEnterPress}>{$_("page.join.button.next")}</button>
    </div>
  </div>
  <LanguageSelector />
  <WebsiteCredits />
</section>

<style lang="scss">
  @import "../_globals.scss";

  .join-container {
    width: calc(100% - #{$GAP});
    max-width: 540px;
    > img {
      width: 100%;
      height: auto;
    }
    > div {
      margin-top: $GAP;
    }
  }
</style>
