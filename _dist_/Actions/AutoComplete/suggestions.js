import autocomplete from "../../../_snowpack/pkg/autocompleter.js";
export const suggestions = (node) => {
  var countries = [
    {label: "United Kingdom", value: "UK"},
    {label: "United States", value: "US"}
  ];
  autocomplete({
    fetch: (text, update) => {
      text = text.toLowerCase();
      var suggestions2 = countries.filter((n) => n.label.toLowerCase().startsWith(text));
      update(suggestions2);
    },
    input: node,
    onSelect: (item) => {
      alert(item);
    }
  });
  return {
    update() {
    },
    destory() {
    }
  };
};
