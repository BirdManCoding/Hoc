import User from "./components/User";
import withUserId from "./hoc/withUserId";

function App() {
  const SpecificUser = withUserId(User);
  return (
    <div className='App'>
      <h1>Welcome to the Jungle</h1>
      <SpecificUser id={1} />
      <SpecificUser id={5} />
    </div>
  );
}

export default App;
