import {Routes , Route} from 'react-router-dom';
import {Home} from '../Components/Home';
import {ButtonAppBar} from '../Components/Nav';
import {Resident} from '../Components/Resident'

export const AllRoutes = () =>{
    return (
        <>
          <ButtonAppBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resident-detail/:id" element={<Resident />} />
          </Routes>        
        </>
    )
}