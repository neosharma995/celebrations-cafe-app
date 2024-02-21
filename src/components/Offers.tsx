
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
function Offers() {
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
                            offers for you 
                        </h3>
                        <div className="pop-crousal-wrapper offer-crousal-wrapper">

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
                                <div className="offer-items-crousal">
                                    <div className="offer-flex-wrapper">
                                        <div className="offer-image">
                                            <img src="/src/assets/offers.jpeg" alt="" />
                                        </div>
                                        <div className="offer-item-name">
                                            <h3>veg burger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="offer-items-crousal">
                                    <div className="offer-flex-wrapper">
                                        <div className="offer-image">
                                        <img src="/src/assets/offers.jpeg" alt="" />
                                        </div>
                                        <div className="offer-item-name">
                                            <h3>veg burger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="offer-items-crousal">
                                    <div className="offer-flex-wrapper">
                                        <div className="offer-image">
                                        <img src="/src/assets/offers.jpeg" alt="" />
                                        </div>
                                        <div className="offer-item-name">
                                            <h3>veg burger</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="offer-items-crousal">
                                    <div className="offer-flex-wrapper">
                                        <div className="offer-image">
                                        <img src="/src/assets/offers.jpeg" alt="" />
                                        </div>
                                        <div className="offer-item-name">
                                            <h3>veg burger</h3>
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

export default Offers