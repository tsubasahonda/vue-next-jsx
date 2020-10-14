import { defineComponent } from "vue";
import classnames from "classnames";

export const Button = defineComponent({
  name: "Button",
  setup(props: { onClick(e: MouseEvent): void; class?: string }, { slots }) {
    return () => (
      <button onClick={props.onClick} class={classnames("button", props.class)}>
        {slots.default && slots.default()}
      </button>
    );
  }
});
