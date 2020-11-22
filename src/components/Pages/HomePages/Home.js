import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';
import { Redirect } from 'react-router-dom';
import Navbar from '../../Navbar';


function Home() {

  // const [user, setUser] = useState({name:"", email:""})
  // const [error, setError] = useState("");

  if(sessionStorage.getItem('isLogin') && sessionStorage.getItem('isLogin') == 'true'){
    return (
      <>
          <Navbar />

        <HeroSection {...homeObjOne} />
        
      </>
    );
  }else{
    return <Redirect to='/' />;
  }
}

export default Home;