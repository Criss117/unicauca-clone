<script lang="ts">
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";
  import NavigationMenu from "./ui/NavigationMenu.svelte";
</script>

{#snippet trigger()}
  <p class="text-white font-semibold">Admisiones</p>
{/snippet}

<NavigationMenu {trigger} arrowColor="white" ariaLabel="Menú de admisiones">
  <div class="flex flex-col gap-y-2 p-2">
    <a
      href={PUBLIC_UNICAUCA_BASE_URL + "/darca/matricula-academica/"}
      class="p-2 hover:bg-gray-100 w-full text-start transition-colors text-sm"
      target="_blank">Programas de Pregrado</a
    >
    <a
      href={PUBLIC_UNICAUCA_BASE_URL +
        "/vicerrectoria-academica/centro-de-posgrados/inscripciones/"}
      class="p-2 hover:bg-gray-100 w-full text-start transition-colors text-sm"
      target="_blank">Programas de Postgrado</a
    >
  </div>
</NavigationMenu>
