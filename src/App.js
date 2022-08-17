import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Fragment } from "react";
import { publicRoutes } from "./routers";
import { DefaultLayout } from "./components/layout";
function App() {
  return (
    <Router>
      <div className='w-ull h-full'>
        <Routes>
          {
            publicRoutes.map((route,index) => {
              // layout mặc định khi vào
              const Layout = route.layout === null ? Fragment : DefaultLayout
              const Page = route.component
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
