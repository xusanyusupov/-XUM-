import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <div className='flex flex-col min-h-screen'>
        <Header/>
        <main className='flex-1'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    </>
  )
}

export default Layout