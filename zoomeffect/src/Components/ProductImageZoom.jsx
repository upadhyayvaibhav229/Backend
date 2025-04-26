import React, { useState, useRef } from "react";

export default function ProductImageZoom() {
  const [showZoom, setShowZoom] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseEnter = () => setShowZoom(true);
  const handleMouseLeave = () => setShowZoom(false);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLensPosition({ x, y });
  };

  const lensSize = 100;
  const zoomLevel = 2;

  const imageSrc ="https://react-ecommerce-website-phi.vercel.app/assets/p_img2_1-ku4Fyxmj.png";

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 gap-10">
      {/* Main Image Container */}
      <div
        className="relative w-[300px] h-[300px] overflow-hidden border"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={imageRef}
      >
        <img
          src={imageSrc}
          alt="Product"
          className="w-full h-full object-cover"
        />
        {showZoom && (
          <div
            className="absolute pointer-events-none border border-black bg-white bg-opacity-50"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: `${lensPosition.x - lensSize / 2}px`,
              top: `${lensPosition.y - lensSize / 2}px`,
            }}
          />
        )}
      </div>

      {/* Zoomed View */}
      {showZoom && (
        <div
          className="w-[300px] h-[300px] border overflow-hidden bg-no-repeat"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${300 * zoomLevel}px ${300 * zoomLevel}px`,
            backgroundPosition: `-${lensPosition.x * zoomLevel - lensSize / 2}px -${lensPosition.y * zoomLevel - lensSize / 2}px`,
          }}
        />
      )}
    </div>
  );
}  