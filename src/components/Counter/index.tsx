import { withModifiers, defineComponent, ref } from "vue";
import { Button } from "../Button";

export const Counter = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <Button onClick={withModifiers(inc, ["self"])}>{count.value}</Button>
    );
  }
});
