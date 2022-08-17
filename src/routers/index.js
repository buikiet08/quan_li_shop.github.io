import Home from "../screens/Home"
import Login from "../screens/Login"
import ProductPage from "../screens/ProductPage"
import Transaction from "../screens/Transaction"
import Debt from "../screens/Debt"
import Report from "../screens/Report"
import Statistical from "../screens/Statistical"

const publicRoutes = [
  {path: '/' , component: Home },
  { path: '/login', component: Login, layout : null },
  { path: '/hanghoa', component: ProductPage },
  { path: '/giaodich', component: Transaction },
  { path: '/congno', component: Debt },
  { path: '/baocao', component: Report },
  { path: '/thongke', component: Statistical },
]

const priveRoutes = [

]

export { publicRoutes, priveRoutes }