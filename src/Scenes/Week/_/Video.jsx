import React from "react";

export default function Video({ videoId }) {
  if (!videoId) {
    return <div>Loading...</div>;
  }

  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;rel=0&amp;modestbranding=1&amp;vq=hd720&amp;enablejsapi=1&amp;widgetid=1`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" frameBorder="0" allowFullScreen="1" title="YouTube video player" src={url} />
    </div>
  );
};
