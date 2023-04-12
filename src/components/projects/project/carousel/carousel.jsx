import classes from './carousel.module.scss';
// import { Carousel as ReactCarousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.css';
import Image from "next/legacy/image";

// interface Props {
//   list: string[];
// }

export function Carousel({ list }) {
  return (
    <div className={classes.carousel}>
      {/* <ReactCarousel showArrows showThumbs={false}>
        {list?.map(imageUrl => (
          <div className={classes.imageWrapper} key={imageUrl}>
            <Image src={imageUrl} alt="project-screenshot" layout="fill" style={{borderRadius: '5px'}}/>
          </div>
        ))}
      </ReactCarousel> */}
    </div>
  )
}