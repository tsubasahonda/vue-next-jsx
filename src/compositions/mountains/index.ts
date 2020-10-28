import { MountainType, getMoutians, getCountries } from "@/api/mountains";
import {
  reactive,
  watchEffect,
  readonly,
  provide,
  inject,
  InjectionKey,
  toRefs,
  ToRefs,
  toRef,
  computed,
} from "vue";

type MoutainsState = {
  mountains: MountainType[];
  countries: string[];
  selectedCountry?: string;
  selectedMountains: MountainType[];
};
type UpdateCountryState = (country?: string) => (e: MouseEvent) => void;

export const MountainsKey: InjectionKey<ToRefs<MoutainsState>> = Symbol(
  "MountainsKey"
);
export const UpdateCountryKey: InjectionKey<UpdateCountryState> = Symbol(
  "UpdateCountryKey"
);

export const initialMountainsState: MoutainsState = {
  mountains: [],
  countries: [],
  selectedCountry: undefined,
  selectedMountains: [],
};

export const initialUpdateCountry: UpdateCountryState = () => () => {
  throw new Error("UpdateCountry is not provided");
};

export const useMoutainsStateProvide = () => {
  const state: MoutainsState = reactive(initialMountainsState);

  const readonlyState = readonly(state);
  // const stateRef = toRefs(state);

  watchEffect(async (cleanup) => {
    cleanup(() => {
      console.log("bye");
    });
    const mountains = await getMoutians();
    state.mountains = mountains;
  });

  watchEffect((cleanup) => {
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
    const selectedMountains = state.mountains.filter((mountain) =>
      mountain.countries.some((country) => country === state.selectedCountry)
    );
    state.selectedMountains = selectedMountains;
  });

  const onSelectCountry = (selected?: string) => {
    return (e: MouseEvent) => {
      e.preventDefault();
      state.selectedCountry = selected;
    };
  };

  provide(MountainsKey, toRefs(state));
  provide(UpdateCountryKey, onSelectCountry);
};

export const useMoutainsStateInjection = () => {
  const mountainsState = inject(MountainsKey, toRefs(initialMountainsState));
  const updateCountry = inject(UpdateCountryKey, initialUpdateCountry);

  return {
    mountainsState,
    updateCountry,
  };
};

export const useMountainState = (slug: string) => {
  const { mountainsState } = useMoutainsStateInjection();

  const state = reactive({
    mountain: computed(() => {
      return mountainsState.mountains.value.filter((mountain) => {
        return mountain.slug === slug;
      })[0];
    }),
  });

  watchEffect(() => {
    console.log(state.mountain);
  });

  return toRefs(state);
};
