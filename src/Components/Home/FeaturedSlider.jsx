import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./CSS/FeturedSlider.css";

const FeaturedSlider = () => {
    return (
        <div>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/0K2XHfK/Rectangle-2-3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> <span className='font-bold'>Software Engineer </span></h2>
                            <p className='text-left'>Application Start: <span className=''>2023-11-12 </span></p>
                            <p className='text-left'>Application End: <span className=''>2023-11-27 </span></p>
                            <p className='text-left'>Salary: <span className=''>$80,000 - $100,000</span></p>
                            <p className='text-left'>Category: <span className='font-semibold'>Hybrid</span></p>
                            <p className='text-left'>Applied : <span className=''>40</span></p>
                            <div className="card-actions ">
                                <button className="btn btn-primary">Details</button>
                                <p>Posted By: <br /> Mr.Mollik</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/YcSRvRv/uxui.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> <span className='font-bold'>UI/UX Designer</span></h2>
                            <p className='text-left'>Application Start: <span className=''>2023-10-12 </span></p>
                            <p className='text-left'>Application End: <span className=''>2023-11-27 </span></p>
                            <p className='text-left'>Salary: <span className=''> $70,000 - $90,000</span></p>
                            <p className='text-left'>Category: <span className='font-semibold'>Hybrid</span></p>
                            <p className='text-left'>Applied : <span className=''>26</span></p>
                            <div className="card-actions ">
                                <button className="btn btn-primary">Details</button>
                                <p>Posted By: <br /> Mahmuda</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Y0bTLsY/developer.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> <span className='font-bold'>Frontend Developer </span></h2>
                            <p className='text-left'>Application Start: <span className=''>2023-11-16 </span></p>
                            <p className='text-left'>Application End: <span className=''>2023-12-1 </span></p>
                            <p className='text-left'>Salary: <span className=''>$60,000 - $70,000</span></p>
                            <p className='text-left'>Category: <span className='font-semibold'>Remote</span></p>
                            <p className='text-left'>Applied : <span className=''>32</span></p>
                            <div className="card-actions ">
                                <button className="btn btn-primary">Details</button>
                                <p>Posted By: <br /> Kuddus Ali</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FeaturedSlider;