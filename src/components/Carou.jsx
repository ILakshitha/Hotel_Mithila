import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ifs from '../assets/ifs.png';
import wso2 from '../assets/wso2-logo.png';
import hck from '../assets/hck.jpg';
import crev from '../assets/crev.png';
import paj from '../assets/pajero.png'

export default function Carou() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const Carousel1 = (props) => {
        return (
            <img
                src={props.logo}
                alt="logo"
                style={{
                    width: '180px',
                    height: '100px',
                    objectFit: 'contain',
                }}
            />
        );
    };

    return (
        <div
            className="brandcarousel-container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    height:'200px',
                    width: '80%',            // Adjust this to control carousel width
                    maxWidth: '1200px',      // Ensure it doesn’t stretch too wide
                }}
            >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    containerClass="carousel-container w-[75vw]"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <Carousel1 logo={ifs} />
                    <Carousel1 logo={wso2} />
                    <Carousel1 logo={hck} />
                    <Carousel1 logo={crev} />
                    <Carousel1 logo={paj} />
                </Carousel>
            </div>
        </div>
    );
}
