<script lang="ts">
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";
  import NavigationMenu from "./ui/NavigationMenu.svelte";
  import Menu from "@components/ui/svg-svelte/menu.svelte";

  interface Props {
    sections: {
      slug: string;
      title: string;
      items: {
        label: string;
        href: string;
      }[];
    }[];
  }

  let { sections }: Props = $props();
</script>

{#snippet trigger()}
  <div class="flex gap-x-2 text-white">
    <Menu />
    <span class="text-white">Menú</span>
  </div>
{/snippet}

<NavigationMenu
  {trigger}
  arrowColor="white"
  coverWindow
  openOnCLick
  ariaLabel="Menú de navegación"
>
  <section class="flex justify-between p-14 gap-x-2">
    {#each sections as section}
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-primary text-start">
          {section.title}
        </h2>
        <ul class="space-y-2 flex flex-col">
          {#each section.items as item}
            <a
              href={item.href}
              class="text-start text-text-primary text-sm hover:bg-gray-100 py-2 px-4"
              target="_blank">{item.label}</a
            >
          {/each}
        </ul>
      </div>
    {/each}
  </section>
</NavigationMenu>
