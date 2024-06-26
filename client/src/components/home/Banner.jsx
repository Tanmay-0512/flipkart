import React from 'react'
import Carousel from 'react-multi-carousel';
import { bannerData } from '../constants/data';
import styled from '@emotion/styled';
import "react-multi-carousel/lib/styles.css";

const Image = styled('img')({
    width:'100%',
    height:'280'
})


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  return (
    <Carousel 
    responsive={responsive}
    // swipeable={false}
    // draggable={false}
    // showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    // keyBoardControl={true}
    // customTransition="all .5"
    // transitionDuration={500}
    // containerClass="carousel-container"
    // deviceType={this.props.deviceType}
    // dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px"
    >
        {
            bannerData.map(data=>(
                <Image src={data.url} alt="banner" />
            ))
        }
    </Carousel>
  )
}

export default Banner