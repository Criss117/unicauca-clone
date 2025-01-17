<script lang="ts">
  import NumberFlow from "@number-flow/svelte";
  import { onMount } from "svelte";

  interface Props {
    value: number;
  }

  const { value: newValue }: Props = $props();

  let value = $state(Math.floor(Math.random() * 1000));

  onMount(() => {
    value = newValue;
  });
</script>

<NumberFlow {value} format={{ notation: "standard" }} />
