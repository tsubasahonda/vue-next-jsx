import { defineComponent, computed, reactive } from "vue";
import { Header } from "@/components/Header";
import { useRoute } from "vue-router";
import styles from "./index.module.css";
import { useMoutainsStateInjection } from "@/compositions/mountains";
import { MountainType } from "@/api/mountains";

export const Mountain = defineComponent({
  name: "MountainPage",

  setup() {
    const route = useRoute();
    const { mountainsState } = useMoutainsStateInjection();
    const state: {
      slug: string;
      mountain: MountainType;
    } = reactive({
      slug: computed(() =>
        Array.isArray(route.params.slug)
          ? route.params.slug[0]
          : route.params.slug
      ),
      mountain: computed(
        () =>
          mountainsState.mountains.value.filter(
            (mountain) => mountain.slug === state.slug
          )[0]
      ),
    });

    return () => (
      <>
        <Header />
        {state.mountain == undefined ? (
          <div>loading..</div>
        ) : (
          <main class={styles.mountain}>
            <h1 class={styles["mountain__title"]}>{state.mountain.title}</h1>
            <article class={styles["mountain__description"]}>
              {state.mountain.description}
            </article>
          </main>
        )}
      </>
    );
  },
});
