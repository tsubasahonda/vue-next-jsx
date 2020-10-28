import { RouterLink } from "vue-router";
import { MountainType } from "@/api/mountains";
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
        {mountain.countries.map((country) => {
          return <li>{country}</li>;
        })}
      </ul>
    </div>
  );
};

export const Mountains = defineComponent({
  name: "Mountains",
  setup() {
    const { mountainsState } = useMoutainsStateInjection();

    return () => (
      <>
        {mountainsState.selectedMountains.value.length > 0 ? (
          <div class="mountains">
            <ul>
              {mountainsState.selectedMountains.value.map((mountain) => (
                <li>
                  <RouterLink to={`/mountains/${mountain.slug}`}>
                    <Mountain mountain={mountain} />
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>loading..</div>
        )}
      </>
    );
  },
});
