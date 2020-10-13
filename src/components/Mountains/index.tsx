import { MountainType } from "../../api/mountains";
import { DeepReadonly, inject } from "vue";
import { defineComponent } from "vue";
import { initialMountainsState, MountainsKey } from "@/compositions/mountains";

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
    const mountains = inject(MountainsKey, initialMountainsState);
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
