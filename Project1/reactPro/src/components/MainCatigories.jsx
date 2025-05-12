import React from 'react'
import { Link , Links} from 'react-router-dom'
import "../App.css"

function MainCatigories() {
  return (
    <div className='category d-none d-md-flex bg-white p-3 rounded justify-content-center align-items-center '>
      <div className='flex-fill d-flex justify-content-center align-items-center flex-wrap gap-3'>
        <Link to="/posts" className='bg-info rounded text-white p-1 list-unstyled'>ALl Posts</Link>
        <Link to="/posts?cat=web-design" className='link rounded text-dark  p-1 list-unstyled '>WEB Design</Link>
        <Link to="/post?cat=development" className='link rounded text-dark   p-1 list-unstyled'>Development</Link>
        <Link to="/post?cat=databases" className='link rounded text-dark p-1 list-unstyled'>Database</Link>
        <Link to="/post?cat=seo" className='link rounded  p-1 text-dark list-unstyled'>Search Engines</Link>
        <Link to="/post?cat=marketing" className='link rounded text-dark  p-1 list-unstyled'>Marketing</Link>
      </div>
      <span className='fs-3 me-2'>|</span>
      <div className='text-white  bg-light rounded text-center'>
         <svg
           xmlns='http://www.w3.org/2000/svg'
           viewBox='0 0 24 24'
           width="20"
           height="20"
           fill='none'
           stroke='gray'
         >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="16.5" y1="16.5" x2='22' y2="22" />
         </svg>
             <input type="text" placeholder='search a post...' className='bg-transparent' style={{
                border : "none"

             }} />
      </div>
    </div>
  )
}

export default MainCatigories
