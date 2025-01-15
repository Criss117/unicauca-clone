<script lang="ts">
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";
  import NavigationMenu from "./ui/NavigationMenu.svelte";

  import Profile from "@components/ui/svg-svelte/Profile.svelte";

  const NAV = [
    {
      label: "Estudiantes",
      href: PUBLIC_UNICAUCA_BASE_URL + "/estudiantes",
    },
    {
      label: "Aspirantes",
      href: PUBLIC_UNICAUCA_BASE_URL + "/aspirantes",
    },
    {
      label: "Egresados",
      href: PUBLIC_UNICAUCA_BASE_URL + "/egresados",
    },
    {
      label: "Profesores",
      href: PUBLIC_UNICAUCA_BASE_URL + "/profesores",
    },
    {
      label: "Administrativos",
      href: PUBLIC_UNICAUCA_BASE_URL + "/administrativos",
    },
  ];
</script>

{#snippet trigger()}
  <Profile />
{/snippet}

<NavigationMenu {trigger}>
  <div class="flex flex-col gap-y-2 p-2">
    {#each NAV as { label, href }}
      <a
        {href}
        class="p-2 hover:bg-gray-100 w-full text-start transition-colors"
        target="_blank">{label}</a
      >
    {/each}
  </div>
</NavigationMenu>
