<script lang="ts">
  import NumberFlow from "@number-flow/svelte";
  import { onMount } from "svelte";

  interface Props {
    value: number;
  }

  const { value: newValue }: Props = $props();

  let value = $state(0);

  onMount(() => {
    value = newValue;
  });
</script>

<NumberFlow {value} format={{ notation: "standard" }} />

<style>
  :global(number-flow-svelte) {
    --number-flow-char-height: 0.85em;
    font-size: 4rem;
    font-weight: 500;
    color: white;
  }
</style>
