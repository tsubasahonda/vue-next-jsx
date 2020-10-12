import { defineComponent, reactive, watch, watchEffect } from "vue";
import classnames from "classnames";
import { getCountries } from "../../api/mountains";

const Country = (props: {
  name: string;
  selected: boolean;
  onClick(e: MouseEvent): void;
}) => {
  return (
    <button
      onClick={props.onClick}
      class={classnames("button", { "button--selected": props.selected })}
    >
      {props.name}
    </button>
  );
};

export const Countries = defineComponent({
  setup() {
    const state: {
      countries: Readonly<string[]>;
      selected: Readonly<string>;
    } = reactive({
      countries: [],
      selected: ""
    });

    watchEffect(async cleanup => {
      cleanup(() => {
        console.log("clean countries");
      });

      const countries = await getCountries();
      state.countries = countries;
    });

    watchEffect(() => {
      console.log(state.selected);
    });

    const onSelectCountry = (selected: string) => {
      return (e: MouseEvent) => {
        e.preventDefault();
        state.selected = selected;
      };
    };

    return () => (
      <div class="countries">
        <ul>
          {state.countries.map(country => {
            return (
              <li>
                <Country
                  name={country}
                  onClick={onSelectCountry(country)}
                  selected={state.selected === country}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});