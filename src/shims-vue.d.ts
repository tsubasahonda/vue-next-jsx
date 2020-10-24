declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
