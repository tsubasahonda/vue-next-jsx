import classnames from "classnames";
import { Button } from "../../components/Button";
import { defineComponent, inject } from "vue";
import {
  MountainsKey,
  UpdateCountryKey,
  initialMountainsState,
  initialUpdateCountry
} from "../../compositions/mountains";

const Country = (props: {
  name: string;
  selected: boolean;
  onClick(e: MouseEvent): void;
}) => {
  return (
    <Button
      onClick={props.onClick}
      class={classnames({ "button--selected": props.selected })}
    >
      {props.name}
    </Button>
  );
};

export const Countries = defineComponent({
  setup() {
    const mountains = inject(MountainsKey, initialMountainsState);
    const updateMountains = inject(UpdateCountryKey, initialUpdateCountry);
    return () => (
      <div class="countries">
        <ul>
          <>
            <li>
              <Country
                name="all"
                onClick={updateMountains(undefined)}
                selected={mountains.selectedCountry === undefined}
              />
            </li>
            {mountains.countries.map(country => {
              return (
                <li>
                  <Country
                    name={country}
                    onClick={updateMountains(country)}
                    selected={mountains.selectedCountry === country}
                  />
                </li>
              );
            })}
          </>
        </ul>
      </div>
    );
  }
});
