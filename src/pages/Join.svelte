<script lang="ts">
  import { _ } from 'svelte-i18n'
  import logoSrc from "../assets/logo.svg";
</script>

<section class="fwh rel flex-center">
  <div class="join-container">
    <img class="noselect nointeract" src={logoSrc} alt="Logo" />
    <div class="form">
      <input type="text" placeholder={$_('page.join.code')} />
      <button>{$_('page.join.button.next')}</button>
    </div>
  </div>
</section>

<style lang="sass">
.join-container
  width: calc(100% - var(--gap))
  max-width: 540px
  >img
    width: 100%
    height: auto
  >div
    margin-top: $GAP
</style>
