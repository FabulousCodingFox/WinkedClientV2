<script lang="ts">
  import logoSrc from "../assets/logo.svg";
</script>

<section class="fwh rel flex-center">
  <div class="join-container">
    <img src={logoSrc} alt="Logo" />
    <form>
      <input type="text" placeholder="Code" />
      <button>Weiter</button>
    </form>
  </div>
</section>

<style lang="sass">
.join-container
  width: calc(100% - var(--gap))
  max-width: 540px
</style>
