import Home from "./pages/home/Home"
import Datacenter from "./pages/datacenter/Datacenter"
import Rack from "./pages/rack/Rack"


let routes = [
    {path: '/', element: <Home />},
    {path: '/datacenter', element: <Datacenter />},
    {path: '/rack', element: <Rack />}
]

export default routes