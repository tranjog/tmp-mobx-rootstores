import "./App.css";

import UserRootStore from "./stores/UserRootStore/UserRootStore";

function App() {
  const accountStore = UserRootStore.getStore("AccountStore");
  console.log(accountStore.accessAppleStore());
  return <div>{accountStore.accessAppleStore()}</div>;
}

export default App;
