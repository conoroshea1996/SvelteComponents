<script lang="ts">
  import Tailwind from "./Tailwind.svelte";

  import Router from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  import { routes } from "./routes";
  const components = [
    {
      ComponentName: "Modal",
      Route: "/",
    },
  ];
</script>

<Tailwind />

<div class="" style="">
  <div class="h-screen flex bg-gray-100" style="min-height: 640px;">
    <div class="flex flex-col w-64">
      <div
        class="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto"
      >
        <div class="bg-purple-700">
          <h1 class="font-bold text-white text-center py-4">
            Svelte Typed Components
          </h1>
        </div>
        <div class="flex-grow flex flex-col">
          <nav class="flex-1 bg-white space-y-1" aria-label="Sidebar">
            {#each components as component}
              <a
                use:active={{ className: "bg-purple-400 border-purple-600" }}
                href={component.Route}
                class="border-transparent text-white group flex items-center px-3 py-2 text-sm font-medium border-l-4"
              >
                <svg
                  class="text-white 0 mr-3 h-6 w-6"
                  x-description="Heroicon name: folder"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                {component.ComponentName}
              </a>
            {/each}
          </nav>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-center">
      <Router {routes} />
    </div>
  </div>
</div>
