import routes from "./routes";
import { useRoutes } from 'react-router'
import TopbarAndSidebar from "./components/topbarAndSidebar/TopbarAndSidebar";

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopbarAndSidebar />
      {router}
    </>
  );
}

export default App;
