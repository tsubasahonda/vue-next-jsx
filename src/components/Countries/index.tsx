import classnames from "classnames";
import { Button } from "../../components/Button";

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

type Props = {
  readonly countries: string[];
  readonly selected?: string;
  readonly onSelectCountry: (country?: string) => (e: MouseEvent) => void;
};

export const Countries = (props: Props) => {
  return (
    <div class="countries">
      <ul>
        <>
          <li>
            <Country
              name="all"
              onClick={props.onSelectCountry(undefined)}
              selected={props.selected === undefined}
            />
          </li>
          {props.countries.map(country => {
            return (
              <li>
                <Country
                  name={country}
                  onClick={props.onSelectCountry(country)}
                  selected={props.selected === country}
                />
              </li>
            );
          })}
        </>
      </ul>
    </div>
  );
};
