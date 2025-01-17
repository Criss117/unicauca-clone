<script lang="ts">
  import { cn } from "@lib/utils";

  type Document = {
    content: {
      title: string;
      href: string;
      published: string;
      emited: string;
      resolution?: string;
    }[];
    slug: string;
    title: string;
  };

  interface Props {
    documents: Document[];
  }

  let { documents }: Props = $props();

  let currentDocument: Document = $state(documents[0]);

  function changeDocument(slug: string) {
    currentDocument = documents.find((d) => d.slug === slug) || documents[0];
  }
</script>

<section class="w-full h-full relative pb-32 lg:pb-0">
  <header
    class="flex gap-5 lg:gap-x-5 flex-wrap lg:flex-nowrap w-full justify-center"
  >
    {#each documents as document}
      <button
        onclick={() => changeDocument(document.slug)}
        class={cn(
          "px-4 py-2 rounded-xl text-white lg:w-96 transition-all font-semibold",
          currentDocument.slug === document.slug &&
            "bg-accent-primary text-primary"
        )}>{document.title}</button
      >
    {/each}
  </header>
  <ul class="pt-16 px-10 space-y-10">
    {#each currentDocument.content as document}
      <li class="border-b border-white pb-2 li-document relative">
        <a href="/#">
          <h3 class="text-white font-bold text-sm">{document.title}</h3>
          <p class="text-white text-xs font-semibold">
            Publicado: <span class="font-normal">{document.published}</span>
          </p>
          <p class="text-white text-xs font-semibold">
            Emitido por: <span class="font-normal">{document.emited}</span>
          </p>
          {#if document.resolution}
            <p class="text-white text-xs font-semibold">
              Resolución: <span class="font-normal">{document.resolution}</span>
            </p>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
  <a
    href={`https://www.unicauca.edu.co/documentos-publicos?tipoDoc=${currentDocument.title}`}
    class="absolute bottom-0 bg-accent-secondary text-white rounded-full py-2 px-4 uppercase mx-10 border-2 border-accent-secondary hover:bg-transparent transition-all"
  >
    {#if currentDocument.slug === "convocatorias"}
      Ver todas las convocatorias
    {:else}
      ver todos los {currentDocument.title}
    {/if}
  </a>
</section>

<style>
  .li-document::before {
    content: "";
    width: 2px;
    height: 0;
    background-color: #fff;
    position: absolute;
    left: -30px;
  }

  .li-document:hover::before {
    height: 120%;
  }
</style>
