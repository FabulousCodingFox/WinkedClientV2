<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<footer class="website-credits flex-column center">
  <p><a href="#a">{$_("footer.create-quiz")}</a></p>
  <p>
    <a href="#a">{$_("footer.github")}</a> |
    <a href="#a">{$_("footer.data-protection")}</a>
  </p>
</footer>

<style lang="scss">
  @import "../_globals.scss";

  .website-credits {
    position: absolute;
    bottom: $GAP;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: $GAP;
    p {
      margin: 0;
      a {
        color: $THEME_FOOTER_COLOR;
      }
    }
  }
</style>
