<script lang="ts">
  import Modal from "../Components/Modal/Modal.svelte";

  let open = false;
</script>

<div>
  {#if open}
    <Modal
      bind:isOpen={open}
      options={{ closeOnBackgroundPress: true, closeOnEscapeKey: true }}
    >
      <div class="text-center" slot="modal_content">
        <h1 class="text-4xl">🎉 Svelte Modal 🍾</h1>
        <p class="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Modal>
  {/if}

  <button
    on:click={() => (open = true)}
    class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
    >Open Modal</button
  >
</div>
