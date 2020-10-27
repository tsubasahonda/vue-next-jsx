import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import styles from "./index.module.css";

export const Header = defineComponent({
  name: "Header",
  setup() {
    return () => (
      <header class={styles.header}>
        <ul class={styles.navigation}>
          <li class={styles["navigation__item"]}>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </header>
    );
  },
});
