import routes from "./routes";
import { useRoutes } from 'react-router'
import Topbar from "./components/topbar/Topbar";

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Topbar />
      {router}
    </>
  );
}

export default App;
