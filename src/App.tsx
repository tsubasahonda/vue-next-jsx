import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { useMoutainsStateProvide } from "@/compositions/mountains";

export const App = defineComponent({
  setup() {
    useMoutainsStateProvide();
    return () => <RouterView />;
  },
});
