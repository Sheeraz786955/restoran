import Image from 'next/image'
import Servicesbox from './components/Servicesbox'
import Reservation from './components/Reservation'
import Chefs from './components/Chefs'
import Welcome from './components/Welcome'
import Foodmanu from './components/Foodmanu'
import Mainheading from './components/Mainheading'


export default function Home() {
  return (
    <main className=' bg-gray-100' >
     <Mainheading/>
     <Servicesbox/>
     <Welcome/>
     <Foodmanu/>
     <Reservation/>
     <div className='mt-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Our Master Chefs</h1></div>
     <Chefs/>

    </main>
  )
}
