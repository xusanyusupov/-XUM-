import Layout from '@/layout/Layout'
import NotFound from '@/pages/not_found/NotFound'
import { Route, Routes } from 'react-router-dom'

import Lunch from '@/pages/lunch/Lunch'
import Dinner from '@/pages/dinner/Dinner'
import CallCenter from '@/pages/call_center/CallCenter'
import Home from '@/pages/home/Home'
import CategoryDetail from '@/pages/detail/CategoryDetail'
import ProductDetail from '@/pages/product_detail/ProductDetail'
import Registration from '@/pages/account/Registration'
import Login from '@/pages/account/Login'
import Index from '@/pages/account/Index' // <-- bu PrivateRoute

const Router = () => {
  return (
    <Routes>
      {/* Ochiq sahifalar */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

        <Route
          path="/account"
          element={
            <Index>
              <h1>Account</h1>
            </Index>
          }/>
          
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/call_center" element={<CallCenter />} />
        <Route path="/detail/:name" element={<CategoryDetail />} />
        <Route path="/meal/:id" element={<ProductDetail />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
