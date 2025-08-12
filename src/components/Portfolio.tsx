import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Portfolio: React.FC = () => {
  const longFormVideos = [
    { embedId: 'H7Mbc6E5guQ' },
    { embedId: '1DPLO6QQqgg' },
    { embedId: '4JovNM7HvcM' },
    { embedId: 'X4ups-SuZSI' },
  ];

  const shortFormVideos = [
    { embedId: 'xZAO_v_3qwM' },
    { embedId: 'Sp_jCMnkyGo' },
    { embedId: '9SYGG9cgnb0' },
    { embedId: 'lCuggeyYFog' },
    { embedId: 'KXH4yeoL_vw' },
    { embedId: 'YDqJMZ5fPH0' },
  ];

  const VideoCarousel = ({
    videos,
    aspect,
    maxSlides,
    uniqueNav,
  }: {
    videos: any[];
    aspect: string;
    maxSlides: number;
    uniqueNav: string;
  }) => (
    <div className="relative">
      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.custom-next-${uniqueNav}`,
            prevEl: `.custom-prev-${uniqueNav}`,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: maxSlides },
          }}
          className="pb-8"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black border border-white/[0.08] rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className={`relative ${aspect}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         {/* Left Arrow */}
        <button
          className={`custom-prev-${uniqueNav} absolute -left-20 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm`}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          className={`custom-next-${uniqueNav} absolute -right-20 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm`}
        >
          ›
        </button>
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
          View All
        </button>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across different formats and platforms.
          </p>
        </div>

        {/* Long Form Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">YouTube Long Form</h3>
            <span className="text-gray-400 text-sm">01-60 minute content</span>
          </div>
          <VideoCarousel
            videos={longFormVideos}
            aspect="aspect-video"
            maxSlides={2}
            uniqueNav="long"
          />
        </div>

        {/* Short Form Carousel */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">YouTube Shorts</h3>
            <span className="text-gray-400 text-sm">15-60 second content</span>
          </div>
          <VideoCarousel
            videos={shortFormVideos}
            aspect="aspect-[9/16]"
            maxSlides={3}
            uniqueNav="short"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
