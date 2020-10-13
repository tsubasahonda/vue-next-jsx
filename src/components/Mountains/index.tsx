import { MountainType } from "../../api/mountains";
import { DeepReadonly } from "vue";

const Mountain = (props: { mountain: DeepReadonly<MountainType> }) => {
  const { mountain } = props;
  return (
    <div>
      <h3>{mountain.title}</h3>
      <time datetime={mountain.updatedAt}>{mountain.updatedAt}</time>
      <ul>
        {mountain.countries.map(country => {
          return <li>{country}</li>;
        })}
      </ul>
    </div>
  );
};

type Props = {
  mountains: DeepReadonly<MountainType[]>;
};

export const Mountains = (props: Props) => {
  return (
    <div class="mountains">
      <ul>
        {props.mountains.map(mountain => (
          <Mountain mountain={mountain} />
        ))}
      </ul>
    </div>
  );
};
