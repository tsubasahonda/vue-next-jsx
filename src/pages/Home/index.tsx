import { Mountains } from "@/components/Mountains";
import { Countries } from "@/components/Countries";
import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Description } from "@/components/Description";
import { defineComponent } from "vue";

export const Home = defineComponent({
  name: "HomePage",
  setup() {
    return () => (
      <div class="body">
        <Header />
        <img alt="Vue logo" src="/logo.png" />
        <About />
        <Description />
        <Countries />
        <Mountains />
      </div>
    );
  },
});
