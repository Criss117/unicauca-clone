<script lang="ts">
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";
  import Language from "@components/ui/svg-svelte/Language.svelte";
  import NavigationMenu from "./ui/NavigationMenu.svelte";
</script>

{#snippet trigger()}
  <Language />
{/snippet}

<NavigationMenu {trigger} ariaLabel="Menú de idioma">
  <div class="flex flex-col gap-y-2 p-2">
    <a
      href={PUBLIC_UNICAUCA_BASE_URL + "/portaleningles"}
      class="p-2 hover:bg-gray-100 w-full text-start transition-colors"
      target="_blank">En - English</a
    >
  </div>
</NavigationMenu>
