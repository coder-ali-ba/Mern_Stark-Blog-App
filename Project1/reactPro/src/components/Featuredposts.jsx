import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Featuredposts() {
  return (
    <div className='mt-1 d-md-flex flex-md-row gap-4 ' >
      {/* firstPost */}
      <div className='w-100  d-flex flex-column gap-2 '>
         {/* image */}
         <Image style={{borderRadius:"20px"}} src='https://cdn.pixabay.com/photo/2017/11/14/00/28/wormwood-some-competition-2947198_640.jpg' className='img-fluid object-fit-cover' />
         <div className='d-flex align-items-center gap-2'>
          <h4>01,</h4>
          <Link>Web Design</Link>
          <span className='text-dark'>2days ago</span>  
         </div>
         <Link to="/test" className='fs-4'>Lorem ipsum dolor sit amet hkgyug klahsdioh jdhoiuh audhiuoad ihdoia, asperiores?</Link>

      </div>
         


      {/* //other Posts */}
      <div className='w-100 d-flex justify-content-center flex-column gap-5 rounded '
      style={{
        height:"500px"
      }}>
        <div className='d-flex gap-2 h-25 bg-light rounded'>
          <Image  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7NVerPcEofTixKhTcyX2Z_47-8ohdWKpeQ&s'
          className='rounded h-100'
          />

          <div>
           <div className='d-flex gap-4'>
             <h4>02.</h4>
             <Link>Web Design</Link> 
             <span>2 days ago</span>
           </div>
           {/* title */}
           <Link to="/test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto nisi</Link>
          </div>
        </div>


         <div className='d-flex gap-2 h-25 bg-light rounded'>
          <Image  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7NVerPcEofTixKhTcyX2Z_47-8ohdWKpeQ&s'
          className='rounded h-100'
          />

          <div>
           <div className='d-flex gap-4'>
             <h4>02.</h4>
             <Link>Web Design</Link> 
             <span>2 days ago</span>
           </div>
           {/* title */}
           <Link to="/test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto nisi</Link>
          </div>
        </div>


         <div className='d-flex gap-2 h-25 bg-light rounded'>
          <Image  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7NVerPcEofTixKhTcyX2Z_47-8ohdWKpeQ&s'
          className='rounded h-100'
          />

          <div>
           <div className='d-flex gap-4'>
             <h4>02.</h4>
             <Link>Web Design</Link> 
             <span>2 days ago</span>
           </div>
           {/* title */}
           <Link to="/test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto nisi</Link>
          </div>
        </div>



















        



        
      </div>
    </div>
  )
}

export default Featuredposts
