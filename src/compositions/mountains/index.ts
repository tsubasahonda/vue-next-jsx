import { InjectionKey } from "vue";
import { MountainType } from "../../api/mountains";

type MoutainsState = {
  mountains: MountainType[];
  countries: string[];
  selectedCountry?: string;
  selectedMountains: MountainType[];
};
type UpdateCountryState = (country?: string) => (e: MouseEvent) => void;

export const MountainsKey: InjectionKey<MoutainsState> = Symbol("MountainsKey");
export const UpdateCountryKey: InjectionKey<UpdateCountryState> = Symbol(
  "UpdateCountryKey"
);

export const initialMountainsState: MoutainsState = {
  mountains: [],
  countries: [],
  selectedCountry: undefined,
  selectedMountains: []
};

export const initialUpdateCountry: UpdateCountryState = () => () => {
  throw new Error("UpdateCountry is not provided");
};
