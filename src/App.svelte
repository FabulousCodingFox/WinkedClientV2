<script lang="ts">
  import Join from "./pages/Join.svelte";
  import TileBackground from "./shared/TileBackground.svelte";

  $: pageJoinStage = 0;

  function onPageJoinCodeEnter(code: string): string {
    if (code.length == 0) return "page.join.error.code-required";
    if (code.length < 6) return "page.join.error.code-to-short";
    if (code.length > 6) return "page.join.error.code-to-long";
    if (!/^[a-zA-Z0-9]+$/.test(code)) return "page.join.error.code-invalid";
    return "";
  }

  function onPageJoinNameEnter(code: string): string {
    if (code.length == 0) return "page.join.error.name-required";
    if (code.length < 3) return "page.join.error.name-to-short";
    if (code.length > 16) return "page.join.error.name-to-long";
    if (!/^[a-zA-Z0-9]+$/.test(code)) return "page.join.error.name-invalid";
    return "";
  }
</script>

<div id="bg" class="fwh">
  <TileBackground />
</div>

<main class="fwh">
  <Join stage={pageJoinStage} code_enter_callback={onPageJoinCodeEnter} name_enter_callback={onPageJoinNameEnter} />
</main>
