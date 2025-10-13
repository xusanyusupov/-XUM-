import Layout from '@/layout/Layout'
import NotFound from '@/pages/not_found/NotFound'
import {Route,Routes} from 'react-router-dom'


import Lunch from '@/pages/lunch/Lunch'
import Dinner from '@/pages/dinner/Dinner'
import CallCenter from '@/pages/call_center/CallCenter'
import Home from '@/pages/home/Home'
import CategoryDetail from '@/pages/detail/CategoryDetail'
import ProductDetail from '@/pages/product_detail/ProductDetail'
import Index from '@/pages/account/Index'

const index = () => {
  return (
    <>
        <Routes>
          <Route path='/account' element={<Index/>}/>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/lunch' element={<Lunch/>}/>
              <Route path='/dinner' element={<Dinner/>}/>
              <Route path='/call_center' element={<CallCenter/>}/>
              <Route path='/detail/:name' element={<CategoryDetail/>}/>
              <Route path='/meal/:id' element={<ProductDetail/>}/>
            </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default index