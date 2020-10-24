import styles from "./index.module.css";

export const About = () => {
  return (
    <section class={styles.about}>
      <h2>Hi! This is informations about mountains</h2>
      <p>
        Turns off all rules that are unnecessary or might conflict with
        Prettier. This lets you use your favorite shareable config without
        letting its stylistic choices get in the way when using Prettier. Note
        that this config only turns rules off, so it only makes sense using it
        together with some other config.
      </p>
    </section>
  );
};
