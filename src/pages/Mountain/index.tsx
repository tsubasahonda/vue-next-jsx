import { defineComponent, computed, reactive, watchEffect } from "vue";
import { Header } from "@/components/Header";
import { useRoute } from "vue-router";
import styles from "./index.module.css";
import { useMountainState } from "@/compositions/mountains";

export const Mountain = defineComponent({
  name: "MountainPage",

  setup() {
    const route = useRoute();
    const state = reactive({
      slug: computed(() =>
        Array.isArray(route.params.slug)
          ? route.params.slug[0]
          : route.params.slug
      ),
    });

    const { mountain } = useMountainState(state.slug);

    if (mountain == undefined) {
      return () => <div>loading..</div>;
    }

    return () => (
      <>
        <Header />
        <main class={styles.mountain}>
          <h1 class={styles["mountain__title"]}>{mountain.value.title}</h1>
          <article class={styles["mountain__description"]}>
            {mountain.value.description}
          </article>
        </main>
      </>
    );
  },
});
