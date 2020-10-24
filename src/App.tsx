import { Mountains } from "./components/Mountains";
import { Countries } from "./components/Countries";
import { About } from "@/components/About";
import { Description } from "@/components/Description";
import { defineComponent } from "vue";
import { useMoutainsStateProvide } from "./compositions/mountains";
export const App = defineComponent({
  setup() {
    useMoutainsStateProvide();

    return () => (
      <div class="body">
        <img alt="Vue logo" src="/logo.png" />
        <About />
        <Description />
        <Countries />
        <Mountains />
      </div>
    );
  },
});
