"use client";
import { useRef, useState, useEffect } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { sisterCompanyData } from "@/data/video-branding";

const SisterCompany: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // Dynamic progress value

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setIsMuted(videoElement.muted);
    }
  };

  // Update progress bar based on video playback
  useEffect(() => {
    const videoElement = videoRef.current;
    const updateProgress = () => {
      if (videoElement) {
        const currentProgress =
          (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(currentProgress);
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <section
      className="h-screen bg-gray-800 flex items-center px-40 relative"
      id="about-us"
    >
      <h1 className="text-6xl font-serif font-extralight text-gray-300 mr-4">
        {sisterCompanyData.heading}
      </h1>
      <div className="w-12 h-[0.2rem] bg-gray-300"></div>
      <div className="w-[60rem] h-[30rem] absolute top-10 right-10 shadow-[3rem_3rem_6rem_rgba(0,0,0,0.7)] overflow-hidden group">
        <video
          ref={videoRef}
          src={sisterCompanyData.video.src}
          poster={sisterCompanyData.video.poster}
          className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity duration-300"
          autoPlay
          loop
          muted
        />

        <div className="w-full absolute bottom-0 bg-black/70 transform translate-y-full transition-transform duration-400 group-hover:translate-y-0">
          <div className="w-full h-[0.7rem] bg-black absolute top-0 left-0">
            <div
              className="h-full bg-red-700 transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="p-2 pt-4 flex space-x-6">
            <button
              onClick={togglePlayPause}
              className="bg-none border-none cursor-pointer text-white text-3xl"
            >
              {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-none border-none cursor-pointer text-white text-3xl"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60rem] absolute bottom-4 right-10 font-serif leading-[1.1] font-extrabold text-gray-300 border-t-[0.3rem] border-b-[0.3rem] border-double border-gray-400 p-4 flex flex-col justify-center items-center text-justify ">
        <p className="text-lg text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
          <FaQuoteLeft className="inline-block text-gray-500 mr-2" />
          {sisterCompanyData.description}
          <FaQuoteRight className="inline-block text-gray-500 ml-2" />
        </p>
      </div>
    </section>
  );
};

export default SisterCompany;
