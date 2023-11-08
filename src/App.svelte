<script lang="ts">
  import Join from "./pages/Join.svelte";
  import TileBackground from "./shared/TileBackground.svelte";

  $: pageJoinStage = 0;

  function onPageJoinCodeEnter(code: string): string {
    return "";
  }

  function onPageJoinNameEnter(code: string): string {
    return "";
  }
</script>

<div id="bg" class="fwh">
  <TileBackground />
</div>

<main class="fwh">
  <Join
    stage={pageJoinStage}
    code_enter_callback={onPageJoinCodeEnter}
    name_enter_callback={onPageJoinNameEnter}
  />
</main>
