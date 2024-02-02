import './App.css'
import Hader from "./Hader"
import Futtor from './Futtor';
import Slider from './Slider';
import Icard from './Icard';
import Detail from './Detail';
import Detailtwo from './Detailtwo';
import Scard from './Scard';
import Bcard from './Bcard';
import Acco from './Acco';
import Sliderowl from './Sliderowl';



function Home() {
    
    return(
        <>

        {/* <Hader/> */}
        <Slider/>
       
        <Icard/>
        <Detail/>
        <Detailtwo/>
        <Scard/>
        <Acco/>
        <Sliderowl/>
        
        <Bcard/>
        
        <Futtor/>
        </>
    )

    }
    export default Home;