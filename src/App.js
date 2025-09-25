import routes from "./routes";
import { useRoutes } from 'react-router'
import TopbarAndSidebar from "./components/topbarAndSidebar/TopbarAndSidebar";

function App() {

  let router = useRoutes(routes)

  return (
    <div style={{display:'flex', marginTop:'70px', padding: '30px'}}>
      <TopbarAndSidebar />
      {router}
    </div>
  );
}

export default App;
