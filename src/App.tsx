import FruitRootStore from "./stores/FruitRootStore/FruitRootStore";
import UserRootStore from "./stores/UserRootStore/UserRootStore";

import { observer } from "mobx-react";

function App() {
  const accountStore = UserRootStore.getAccountStore();
  const appleStore = FruitRootStore.getAppleStore();
  return (
    <div>
      <p>{accountStore?.accessAppleStore()}</p>
      <button
        style={{ background: appleStore.color, padding: 8, color: "white" }}
        onClick={() => {
          const newColor = appleStore.color === "blue" ? "red" : "blue";
          appleStore.setColor(newColor);
        }}
      >
        Set color
      </button>
    </div>
  );
}

export default observer(App);
