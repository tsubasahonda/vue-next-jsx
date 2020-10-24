import styles from "./index.module.css";

export const Description = () => {
  return (
    <section class={styles.about}>
      <p>
        {`(Note: The CLI helper tool considers {allowParens: true} to be the default, which is the case since ESLint 6.0.0. The tool will produce a warning if you use the default even if you use an older version of ESLint. It doesn’t hurt to explicitly set {allowParens: false} even though it is technically redundant. This way you are prepared for a future ESLint upgrade and the CLI tool can be kept simple.)`}
      </p>
    </section>
  );
};
