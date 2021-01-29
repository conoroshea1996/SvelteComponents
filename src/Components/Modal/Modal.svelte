<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ModalOptions } from "./Modal";

  export let isOpen: boolean;
  export let options: ModalOptions;

  const closeModal = () => {
    isOpen = false;
  };

  const handleEscapeKey = ({ key }: KeyboardEvent) => {
    if (key == "Escape") {
      isOpen = false;
    }
  };
</script>

<svelte:window
  on:keyup={(e) => (options.closeOnEscapeKey ? handleEscapeKey(e) : null)}
/>
{#if isOpen}
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    transition:scale={{ duration: 200 }}
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div
          class="absolute inset-0 bg-gray-500 opacity-75"
          on:click={() =>
            options.closeOnBackgroundPress ? closeModal() : null}
        />
        {#if options.closeOnEscapeKey}
          <span
            class="absolute top-0 right-0 text-white p-4"
            on:click={closeModal}>Esc Key</span
          >
        {/if}
      </div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true">&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg pt-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="px-4">
          <slot name="modal_content">
            <h1 class="text-center">Slot for your content</h1>
          </slot>
        </div>
        <div class="mt-5 sm:mt-6 flex justify-around">
          <button
            type="button"
            class="w-6/12 inline-flex justify-center rounded-md border border-transparent shadow-sm  py-2  text-base font-medium text-gray "
            on:click={closeModal}
          >
            Cancel
          </button>

          <button
            type="button"
            class="w-6/12 inline-flex justify-center rounded-md border border-transparent shadow-sm  py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
