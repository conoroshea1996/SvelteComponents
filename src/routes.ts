import ModalView from "./Views/ModalView.svelte"
import AutoCompleteView from "./Views/AutoCompleteteView.svelte"
export const routes = {
    // Exact path
    '/': ModalView,
    "/AutoComplete": AutoCompleteView
}