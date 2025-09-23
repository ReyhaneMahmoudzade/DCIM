import Home from "./pages/home/Home"
import AddDatacenter from "./pages/addDatacenter/AddDatacenter"
import Datacenter from "./pages/datacenter/Datacenter"
import AddRack from "./pages/addRack/AddRack"
import Rack from "./pages/rack/Rack"


let routes = [
    {path: '/', element: <Home />},
    {path: '/add-datacenter', element: <AddDatacenter />},
    {path: '/datacenter', element: <Datacenter />},
    {path: '/add-rack', element: <AddRack />},
    {path: '/rack', element: <Rack />}
]

export default routes