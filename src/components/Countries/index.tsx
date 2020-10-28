import classnames from "classnames";
import { Button } from "../../components/Button";
import { defineComponent } from "vue";
import { useMoutainsStateInjection } from "../../compositions/mountains";

const Country = (props: {
  name: string;
  selected: boolean;
  onClick(e: MouseEvent): void;
}) => {
  const { onClick, selected, name } = props;
  return (
    <Button
      onClick={onClick}
      class={classnames({ "button--selected": selected })}
    >
      {name}
    </Button>
  );
};

const useCountriesState = () => {
  const { mountainsState, updateCountry } = useMoutainsStateInjection();
  return {
    countries: mountainsState.countries,
    selectedCountry: mountainsState.selectedCountry,
    updateCountry,
  };
};

export const Countries = defineComponent({
  name: "Countries",
  setup() {
    const { countries, selectedCountry, updateCountry } = useCountriesState();
    return () => (
      <div class="countries">
        <ul>
          <>
            <li>
              <Country
                name="all"
                onClick={updateCountry(undefined)}
                selected={
                  selectedCountry == undefined
                    ? false
                    : selectedCountry.value === undefined
                }
              />
            </li>
            {countries.value.map((country) => {
              return (
                <li>
                  <Country
                    name={country}
                    onClick={updateCountry(country)}
                    selected={
                      selectedCountry == undefined
                        ? false
                        : selectedCountry.value === country
                    }
                  />
                </li>
              );
            })}
          </>
        </ul>
      </div>
    );
  },
});
