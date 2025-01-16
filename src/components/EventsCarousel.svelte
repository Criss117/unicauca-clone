<script lang="ts">
  import { cn } from "@lib/utils";
  import { PUBLIC_UNICAUCA_BASE_URL } from "astro:env/client";

  type CurrentImage = {
    src: string;
    alt: string;
  };

  type Event = {
    id: number;
    name: string;
    short_date: string;
    hour: string;
    location: string;
    image: string;
  };

  interface Props {
    events: Event[][];
  }

  let { events }: Props = $props();

  let curretImage: CurrentImage = $state({
    src: events[0][0].image,
    alt: events[0][0].name,
  });

  let curretEvent: Event[] = $state(events[0]);
  let curretEventIndex: number = $state(0);

  let navElements = $derived.by(() => {
    if (curretEventIndex === events.length - 1 && events.length > 5) {
      return Array.from({ length: 5 }, (_, i) => i + curretEventIndex - 4);
    }

    if (curretEventIndex >= 4 && curretEventIndex < events.length) {
      return Array.from({ length: 5 }, (_, i) => i + curretEventIndex - 3);
    }

    return Array.from({ length: events.length }, (_, i) => i);
  });

  function changeCurrentImage(newImage: CurrentImage) {
    curretImage = newImage;
  }

  $effect(() => {
    if (curretEventIndex < events.length) {
      curretEvent = events[curretEventIndex];
      curretImage = {
        src: curretEvent[0].image,
        alt: curretEvent[0].name,
      };
    }
  });
</script>

<section id="listado-eventos" class=" max-w-[70%] mx-auto mt-32 min-h-screen">
  <div class="flex gap-x-36">
    <div class="w-1/2">
      <img
        src={curretImage.src}
        alt={curretImage.alt}
        class="aspect-square"
        loading="lazy"
      />
    </div>
    <div class="space-y-5 w-1/2 min-h-[800px]">
      <h2 class="text-4xl font-bold text-gray-400">Eventos</h2>
      <ul class="space-y-10">
        {#each curretEvent as event}
          <li
            onmouseenter={() =>
              changeCurrentImage({
                src: event.image,
                alt: event.name,
              })}
            class="hover:bg-bg-secondary border-b border-gray-300"
          >
            <a
              href={`${PUBLIC_UNICAUCA_BASE_URL}/evento-detalle/?idEvento=${event.id}`}
              class="flex gap-x-10 px-2 py-5"
            >
              <span
                class="bg-primary p-5 w-16 h-16 aspect-square text-white flex justify-center items-center flex-col"
              >
                <span class="font-bold text-xl"> 28 </span>
                <span> MAR </span>
              </span>
              <div>
                <h3 class="font-bold">
                  {event.name}
                </h3>
                <p>Lugar: {event.location}</p>
                <p>Hora: {event.hour}</p>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="flex justify-center w-1/2 ml-auto gap-x-2">
    {#if curretEventIndex >= 4 && events.length > 5}
      <span> ... </span>
    {/if}
    {#each navElements as navElement}
      <button
        class={cn(
          "relative text-primary font-semibold w-3",
          curretEventIndex === navElement && "events-pagination"
        )}
        onclick={() => (curretEventIndex = navElement)}
      >
        {navElement + 1}
      </button>
    {/each}
    {#if events.length > 5 && curretEventIndex < events.length - 1 && navElements.at(-1) !== events.length - 1}
      <span> ... </span>
    {/if}
  </div>
</section>

<style>
  .events-pagination::after {
    position: absolute;
    content: "";
    height: 3px;
    background-color: #db141c;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>
