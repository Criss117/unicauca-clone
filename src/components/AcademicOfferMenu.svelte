<script lang="ts">
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";
  import NavigationMenu from "./ui/NavigationMenu.svelte";
</script>

{#snippet trigger()}
  <p class="text-white font-semibold">Oferta académica</p>
{/snippet}

<NavigationMenu
  {trigger}
  arrowColor="white"
  ariaLabel="Menú de oferta académica"
>
  <div class="flex flex-col gap-y-2 p-2">
    <a
      href={PUBLIC_UNICAUCA_BASE_URL + "portaleningles"}
      class="p-2 hover:bg-gray-100 w-full text-start transition-colors"
      target="_blank">En - English</a
    >
  </div>
</NavigationMenu>
