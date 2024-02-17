import UserRootStore from "./stores/UserRootStore/UserRootStore";

function App() {
  const accountStore = UserRootStore.getAccountStore();
  return <div>{accountStore?.accessAppleStore()}</div>;
}

export default App;
