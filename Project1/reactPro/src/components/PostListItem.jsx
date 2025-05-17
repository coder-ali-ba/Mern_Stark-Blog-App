import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PostListItem() {
    Image
  return (
    <div className='d-md-flex gap-5 mt-5'>

       <div className='d-md-none d-xl-block mt-3 '>
         <Image className='img-fluid w-125 h-100 rounded' src='https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?b=1&s=612x612&w=0&k=20&c=9PyipVek-UL7ECf1tpy0uIRnbajme4W4qoJkJKYczUU='/>
       </div>

       <div className='d-flex flex-column gap-2'>
         <Link to="/test" className='text-4xl'><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>Delectus, ab.</Link>
         <div className='d-flex align-items-center gap-2'>
           <span>Written by</span>
           <Link>Habib ALi</Link>
           <span>On</span>
           <Link>Web Design</Link>
           <span>2 days ago</span>
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus provident alias aspernatur et aliquam quibusdam maiores vel molestias laboriosam dolorum necessitatibus, expedita, tempore corporis? Eos, accusamus deleniti? Culpa, beatae tempore!</p>
         <Link to="/test">Read more</Link>

       </div>

      

       

      
    </div>
  )
}

export default PostListItem
