

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart } from "react-icons/ci";
function PopularVarieties() {
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
              popular varieties
            </h3>
            <div className="pop-crousal-wrapper">

              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"

              >
                <div className="pop-items-crousal">

                  <div className="pop-flex-wrapper">
                    <div className="pop-items-left-section">
                      <div className="pop-image">
                        <img src="/src/assets/pop1.png" alt="" />
                      </div>

                    </div>
                    <div className="pop-wishlist-button">
                      <button type="button"><CiHeart /></button>
                    </div>
                  </div>

                  <div className="pop-item-name">
                    <h3>veg burger</h3>
                  </div>
                  <div className="pop-items-wrapper"><p>$70</p>
                    <button type="button">add</button>
                  </div>

                </div>

                <div className="pop-items-crousal">

                  <div className="pop-flex-wrapper">
                    <div className="pop-items-left-section">
                      <div className="pop-image">
                        <img src="/src/assets/pop1.png" alt="" />
                      </div>

                    </div>
                    <div className="pop-wishlist-button">
                      <button type="button"><CiHeart /></button>
                    </div>
                  </div>

                  <div className="pop-item-name">
                    <h3>veg burger</h3>
                  </div>
                  <div className="pop-items-wrapper"><p>$70</p>
                    <button type="button">add</button>
                  </div>

                </div>

                <div className="pop-items-crousal">

                  <div className="pop-flex-wrapper">
                    <div className="pop-items-left-section">
                      <div className="pop-image">
                        <img src="/src/assets/pop1.png" alt="" />
                      </div>

                    </div>
                    <div className="pop-wishlist-button">
                      <button type="button"><CiHeart /></button>
                    </div>
                  </div>

                  <div className="pop-item-name">
                    <h3>veg burger</h3>
                  </div>
                  <div className="pop-items-wrapper"><p>$70</p>
                    <button type="button">add</button>
                  </div>

                </div>

                <div className="pop-items-crousal">

                  <div className="pop-flex-wrapper">
                    <div className="pop-items-left-section">
                      <div className="pop-image">
                        <img src="/src/assets/pop1.png" alt="" />
                      </div>
                    </div>
                    <div className="pop-wishlist-button">
                      <button type="button"><CiHeart /></button>
                    </div>
                  </div>

                  <div className="pop-item-name">
                    <h3>veg burger</h3>
                  </div>
                  <div className="pop-items-wrapper"><p>$70</p>
                    <button type="button">add</button>
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

export default PopularVarieties