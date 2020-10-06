import { Hello } from "./components/Hello";
import { Counter } from "./components/Counter";
export const App = () => {
  return (
    <>
      <img alt="Vue logo" src="/logo.png" />
      <Hello msg="Welcome to Your Vue.js + TypeScript App" />
      <Counter />
    </>
  );
};
