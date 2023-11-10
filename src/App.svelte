<script lang="ts">
  import Join from "./pages/Join.svelte";
  import TileBackground from "./shared/TileBackground.svelte";

  $: pageJoinStage = 0;

  function pageJoinGameJoinCallback(code: string, name: string | null) {}
</script>

<div id="bg" class="fwh">
  <TileBackground />
</div>

<main class="fwh">
  <Join stage={pageJoinStage} game_join_callback={pageJoinGameJoinCallback} />
</main>
