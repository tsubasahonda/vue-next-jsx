import classnames from "classnames";
import { Button } from "../../components/Button";
import { defineComponent } from "vue";
import { useMoutainsStateInjection } from "../../compositions/mountains";

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
    const { mountains, updateCountry } = useMoutainsStateInjection();
    return () => (
      <div class="countries">
        <ul>
          <>
            <li>
              <Country
                name="all"
                onClick={updateCountry(undefined)}
                selected={mountains.selectedCountry === undefined}
              />
            </li>
            {mountains.countries.map(country => {
              return (
                <li>
                  <Country
                    name={country}
                    onClick={updateCountry(country)}
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
