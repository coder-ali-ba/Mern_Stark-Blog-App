import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import "../App.css"
import MainCatigories from '../components/MainCatigories';
import Featuredposts from '../components/Featuredposts';
import PostsLists from '../components/PostsLists';


const HomePage = () => {
 return(
        
    <div className="mt-4 d-flex flex-column gap-4">


     <div className="d-flex gap-4">
         <Link to='/'>Home</Link>
         <span>*</span>
         <span className='text-primary'>Bog & Articles</span>
     </div>



     <div className='d-flex justify-content-between align-items-center'>
        <div className=''>
            <h1 className='text-secondary fs-1'>Lorem ipsum dolor sit a </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor ad adipisci error aperiam.</p>
        </div>


        <Link to="write" className='position-relative' >
               <svg 
               viewBox='0 0 200 200' 
               width="200" height="200" 
               className='tracking-widest spinner' 
               role='status'>
                     <path 
                     fill='none' 
                     id='circlePath' 
                     d='M 100, 100 m -75, 0 a 75,75 0 1 ,1 150,0 a 75,75 0 1, 1 -150,0'
                     />
            
                       <text>
                         <textPath href='#circlePath' className='' startOffset="0%">Write Your Story</textPath>
                         <textPath href='#circlePath' startOffset="50%">Share Your Idea</textPath>
                       </text>      
               </svg>

               <button 
               className='
                d-flex 
                justify-content-between 
                align-items-center 
                bg-secondary
                rounded-circle        
                position-absolute 
                top-0 start-0 
                bottom-0
                end-0
                m-auto 
                w-25 h-25'>

                    <svg
                     xmlns='https://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='50'
                    height="50"
                    fill='none'
                    stroke='white'
                    strokeWidth="2"
                    >
                        <line xl='6' yl='18' y2='6'/>
                        <polyline points='9 6 18 6 18 15'/>
                    </svg>
               </button>
        </Link>
     </div>

  <MainCatigories />
  <Featuredposts />

  {/* POstsLists */}
  <div className="">
    <h1 className="my-8 text-dark">Recent Posts</h1>
   <PostsLists />
  </div>



</div>
  )
}

export default HomePage