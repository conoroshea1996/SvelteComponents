<script lang="ts">
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];

  let results: Array<string> = [];

  let searchText: string = "";
  let inputBox: HTMLInputElement | undefined;
  $: {
    if (searchText.length >= 1) {
      searchText = searchText.toLowerCase();
      results = availableTags.filter((d) =>
        d.toLowerCase().startsWith(searchText)
      );
    } else {
      results = [];
    }
  }

  const optionSelected = (selectedValue: string) => {
    searchText = selectedValue;
    alert(selectedValue);
  };
</script>

<div>
  <div class="">
    <label for="" class="text-xs font-semibold px-1">First name</label>
    <input
      bind:this={inputBox}
      type="text"
      class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
      bind:value={searchText}
    />
  </div>
  <ul class="overflow-y-scroll h-32">
    {#if inputBox === document.activeElement}
      {#each results as result}
        <li class="bg-white" on:click={() => optionSelected(result)}>
          <div
            class="w-fill flex p-2 pl-4 bg-white hover:bg-gray-200 rounded-lg"
          >
            {result}
          </div>
        </li>
      {/each}
    {/if}
  </ul>
</div>
