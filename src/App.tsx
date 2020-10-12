import { Counter } from "./components/Counter";
import { Mountains } from "./components/Mountains";
import { Countries } from "./components/Countries";
export const App = () => {
  return (
    <div class="body">
      <img alt="Vue logo" src="/logo.png" />
      <div class="counter__wrapper">
        <Counter />
      </div>
      <Countries />
      <Mountains />
    </div>
  );
};
