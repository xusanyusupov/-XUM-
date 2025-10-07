import Layout from '@/layout/Layout'
import NotFound from '@/pages/not_found/NotFound'
import {Route,Routes} from 'react-router-dom'

import Breakfast from '@/pages/breakfast/Breakfast'
import Lunch from '@/pages/lunch/Lunch'
import Dinner from '@/pages/dinner/Dinner'
import CallCenter from '@/pages/call_center/CallCenter'
import Home from '@/pages/home/Home'

const index = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/break_fast' element={<Breakfast/>}/>
              <Route path='/lunch' element={<Lunch/>}/>
              <Route path='/dinner' element={<Dinner/>}/>
              <Route path='/call_center' element={<CallCenter/>}/>
            </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default index