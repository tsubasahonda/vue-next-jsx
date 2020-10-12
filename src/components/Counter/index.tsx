import { withModifiers, defineComponent, ref } from "vue";

const CounterComponent = (props: {
  count: number;
  onClick: (e: MouseEvent) => void;
}) => {
  const { count, onClick } = props;
  return (
    <button class="button" onClick={onClick}>
      {count}
    </button>
  );
};

export const Counter = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <CounterComponent
        onClick={withModifiers(inc, ["self"])}
        count={count.value}
      />
    );
  }
});
