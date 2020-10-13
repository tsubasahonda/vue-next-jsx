import { MountainType } from "../../api/mountains";
import { DeepReadonly } from "vue";
import { defineComponent } from "vue";
import { useMoutainsStateInjection } from "@/compositions/mountains";

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

export const Mountains = defineComponent({
  setup() {
    const { mountains } = useMoutainsStateInjection();
    return () => (
      <div class="mountains">
        <ul>
          {mountains.selectedMountains.map(mountain => (
            <Mountain mountain={mountain} />
          ))}
        </ul>
      </div>
    );
  }
});
