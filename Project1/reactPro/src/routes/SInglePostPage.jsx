import { Image } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
// import Image from "../components/image";
const SinglePostPage = () => {
    return(
    <div className="d-flex flex-column gap-5">
        {/* Detail */}
        <div className="d-flex flex-column flex-lg-row gap-5 align-items-center  ">


           <div className="d-flex flex-column  gap-4 ">
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt?</h1>
             <div className="d-flex align-items-center gap-2">
                <span>Written by</span>
                <Link> Habib ALi</Link>
                <span> On</span>
                <Link> Web Design</Link>
                <span>2 days ago</span>
             </div>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aperiam cupiditate ratione nobis asperiores, dignissimos explicabo voluptatum, molestiae laboriosam perspiciatis distinctio fuga blanditiis omnis sed!</p>
           </div>


           <div className=" "
           style={{
            maxWidth:"500px"
           }}>
            <Image className="img-fluid rounded" src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"/>
           </div>

        </div>
        {/* content */}
        <div className="d-flex flex-column flex-md-row gap-2">
            {/* text */}
            <div className="d-flex flex-column gap-5 " style={{
              textAlign:"justify"
            }}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in commodi assumenda aliquid. Quos qui fuga vel eaque esse, temporibus adipisci dignissimos iste deserunt corrupti eum facere. Aspernatur, dicta beatae?</p>
            </div>



            {/* menu */}
            <div className="px-4" style={{ 
              position: 'sticky',
              top: '2rem',

              }}>
             <h1>Author</h1>
             <div>
              <Image className="rounded-circle w-50 h-50" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"/>
              <Link>John Doe</Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum .</p>
              <div className="d-flex">
                <Link>
                   <Image className="w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHPKFhyhXAM7hRP_kFAhkBve8H4WJgtJnGw&s"/>
                </Link>
                <Link>
                    <Image className="w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHPKFhyhXAM7hRP_kFAhkBve8H4WJgtJnGw&s"/>
                </Link>
              </div>
             </div>
            </div>
        </div>
    </div>
    )
}
export default SinglePostPage