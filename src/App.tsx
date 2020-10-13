import { Mountains } from "./components/Mountains";
import { Countries } from "./components/Countries";
import { defineComponent, reactive, readonly, watchEffect, provide } from "vue";
import { MountainType } from "./api/mountains";
import { getCountries, getMoutians } from "./api/mountains";
import { MountainsKey, UpdateCountryKey } from "./compositions/mountains";
export const App = defineComponent({
  setup() {
    const state: {
      mountains: MountainType[];
      countries: string[];
      selectedCountry?: string;
      selectedMountains: MountainType[];
    } = reactive({
      mountains: [],
      countries: [],
      selectedCountry: undefined,
      selectedMountains: []
    });

    const readonlyState = readonly(state);

    watchEffect(async cleanup => {
      cleanup(() => {
        console.log("bye");
      });
      const mountains = await getMoutians();
      state.mountains = mountains;
    });

    watchEffect(cleanup => {
      cleanup(() => {
        console.log("clean countries");
      });

      const countries = getCountries(state.mountains);
      state.countries = countries;
    });

    watchEffect(() => {
      if (state.selectedCountry === undefined) {
        state.selectedMountains = state.mountains;
        return;
      }
      const selectedMountains = state.mountains.filter(mountain =>
        mountain.countries.some(country => country === state.selectedCountry)
      );
      state.selectedMountains = selectedMountains;
    });

    const onSelectCountry = (selected?: string) => {
      return (e: MouseEvent) => {
        e.preventDefault();
        state.selectedCountry = selected;
      };
    };

    provide(MountainsKey, readonlyState);
    provide(UpdateCountryKey, onSelectCountry);

    return () => (
      <div class="body">
        <img alt="Vue logo" src="/logo.png" />
        <Countries />
        <Mountains />
      </div>
    );
  }
});
