import { defineComponent, reactive, watchEffect } from "vue";
import { MountainType, getMoutians } from "../../api/mountains";

const Mountain = (props: { mountain: Readonly<MountainType> }) => {
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
    const state: { mountains: Readonly<MountainType>[] } = reactive({
      mountains: []
    });

    watchEffect(async cleanup => {
      cleanup(() => {
        console.log("bye");
      });
      const mountains = await getMoutians();
      state.mountains = mountains;
    });

    watchEffect(() => {
      console.log(state.mountains);
    });

    return () => (
      <div class="mountains">
        <ul>
          {state.mountains.map(mountain => (
            <Mountain mountain={mountain} />
          ))}
        </ul>
      </div>
    );
  }
});
