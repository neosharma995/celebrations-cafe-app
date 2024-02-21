 

import Carousel from "react-multi-carousel";
 
import "react-multi-carousel/lib/styles.css";
 
function Craving() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1
        }
    };
    return (
        <>
            <div className="crousal-outer">
                <div className="crousal-inner">
                    <div className="crousal-wrapper">
                        <h3 className="header-title">
                            what are you craving for
                        </h3>
                        <div className="pop-crousal-wrapper craving-crousal-wrapper">

                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={false}
                                autoPlaySpeed={300}
                                removeArrowOnDeviceType={['tablet', 'mobile']}
                                dotListClass="custom-dot-list-style"

                            >
                                <div className="craving-items-crousal">
                                    <div className="craving-flex-wrapper">
                                        <div className="craving-image">
                                            <img src="/src/assets/craving.webp" alt="" />
                                        </div>
                                        <div className="craving-item-name">
                                            <h3>veg gurger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="craving-items-crousal">
                                    <div className="craving-flex-wrapper">
                                        <div className="craving-image">
                                        <img src="/src/assets/craving.webp" alt="" />
                                        </div>
                                        <div className="craving-item-name">
                                            <h3>veg gurger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="craving-items-crousal">
                                    <div className="craving-flex-wrapper">
                                        <div className="craving-image">
                                        <img src="/src/assets/craving.webp" alt="" />
                                        </div>
                                        <div className="craving-item-name">
                                            <h3>veg gurger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="craving-items-crousal">
                                    <div className="craving-flex-wrapper">
                                        <div className="craving-image">
                                        <img src="/src/assets/craving.webp" alt="" />
                                        </div>
                                        <div className="craving-item-name">
                                            <h3>veg gurger</h3>
                                        </div>
                                    </div>
                                </div>




                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Craving