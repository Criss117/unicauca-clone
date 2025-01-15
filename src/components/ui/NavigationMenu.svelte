<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  import { cn } from "@lib/utils";

  type ArrowColor = "black" | "white";

  interface Props {
    children: Snippet;
    trigger: Snippet;
    coverWindow?: boolean;
    arrowColor?: ArrowColor;
    openOnCLick?: boolean;
    ariaLabel?: string;
  }

  let {
    children,
    trigger,
    arrowColor = "black",
    coverWindow = false,
    openOnCLick = false,
    ariaLabel = "Menú",
  }: Props = $props();

  let isOpen = $state(false);
  let alignRight = $state(false);
  let alingLeft = $state(false);
  let buttonRef: HTMLButtonElement | undefined;

  function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }

  function checkPosition() {
    if (!buttonRef) return;

    const rect = buttonRef.getBoundingClientRect();
    const spaceOnRight = window.innerWidth - rect.right;
    const spaceOnLeft = rect.left;
    alignRight = spaceOnRight < 240; // 240px = w-60 (ancho del menú)
    alingLeft = spaceOnLeft < 240;
  }

  onMount(() => {
    checkPosition();
    window.addEventListener("resize", checkPosition);
    return () => window.removeEventListener("resize", checkPosition);
  });
</script>

<button
  aria-label={ariaLabel}
  bind:this={buttonRef}
  onmouseenter={() => {
    if (openOnCLick) return;
    open();
  }}
  onmouseleave={() => {
    if (openOnCLick) return;
    close();
  }}
  onclick={() => {
    if (!openOnCLick) return;
    isOpen ? close() : open();
  }}
>
  <div class="flex items-center gap-x-2">
    {@render trigger()}
    <span
      class={cn(
        "arrow transition-transform",
        `arrow-${arrowColor}`,
        isOpen && "rotate-180"
      )}
    >
    </span>
  </div>

  <div
    role="menu"
    tabindex="-1"
    class={cn(
      "hover:cursor-default pt-2 transition-all absolute",
      coverWindow ? "w-full left-0" : "w-60",
      alignRight && !coverWindow && "right-0",
      isOpen ? "opacity-100 visible z-50" : "opacity-0 invisible"
    )}
    onmouseenter={() => {
      if (openOnCLick) return;
      open();
    }}
    onmouseleave={() => {
      if (openOnCLick) return;
      close();
    }}
  >
    <div
      class="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full"
    >
      {@render children()}
    </div>
  </div>
</button>

<style>
  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .arrow-black {
    border-top: 8px solid #000066;
  }

  .arrow-white {
    border-top: 8px solid white;
  }
</style>
