import { IKImage } from "imagekitio-react"

const Image = ({}) => {
    return(
      <IKImage
       urlEndpoint="https://ik.imagekit.io/alilia1212/"
       path={"/layers-icon-on-white-background-free-vector.jpg"}
       style={{
        width:"40px",
        height : '40px'
       }}
       loading='lazy'
       lqip={{ active: true, quality: 20 }}
       alt={"#"}
    //    width={w}
    //    height={h}
    //    transformation={[
    //     {
    //         width :w,
    //         height : h
    //     }

    //    ]}
        />
    )
}

export default Image