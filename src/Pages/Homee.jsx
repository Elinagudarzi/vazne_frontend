/*import React, { useState } from 'react';
import { Link } from '@reach/router';
import vazne1 from "../images/vazne1.png";
import vazne2 from "../images/vazne2.png";
import vazne3 from "../images/vazne3.png";
import  vazne4 from "../images/vazne4.jpg";
import Headers from '../components/headers';
import MainFold from '../components/MainFold';


const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
     
     <Headers
      imageSrc={vazne1}/>
     <Link to='../pages/shop.jsx' className='mainfold' onClick={handleClick} >
      <MainFold 
      imageSrc={vazne2}
      title={"فروشگاه آنلاین"}
      subtitle={"شامل تمامی ملزومات و پوشاک ورزشی"}
      flipped={true}
      />
     </Link>
      
     <Link to='../pages/coach.jsx' className='mainfold' onClick={handleClick} >
      <MainFold 
      imageSrc={vazne3}
      title={" مربی آنلاین"}
      subtitle={"مربی در منزل همراه با برنامه"}
      flipped={true}
      />
      </Link>

      <Link to='../pages/blog.jsx' className='mainfold' onClick={handleClick} >
      <MainFold 
      imageSrc={vazne4}
      title={"محتوا"}
      subtitle={"مطالب مربوط به برخی از رشته های ورزشی مطرح جهان"}
      flipped={true}
      />
      </Link>
      
      
      
    </div>
  )
}

export default Home;*/