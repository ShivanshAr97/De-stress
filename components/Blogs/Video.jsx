import React from "react";

export const Video = () => {
  const videos = [
    {
      frame:"https://www.youtube.com/embed/Nz9eAaXRzGg"
    },
    {
        frame:"https://www.youtube.com/embed/UQ1wDXtPxxI"
    },
    {
        frame:"https://www.youtube.com/embed/rmeGVhhbGrM"
    },
  ];

  return (
    <>
      <p className="text-center m-4 text-3xl font-bold text-[#1B0044]">Videos</p>
      <hr className="w-20 h-1 bg-[#1B0044] mx-auto mt-2" />
      <div className="flex mx-8">
        {videos.map((video) => {
          return (
            <>
            <div className="p-8">
              <iframe width="340" height="400" src={`${video.frame}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
