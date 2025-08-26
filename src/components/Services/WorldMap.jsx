import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const World = ({ data }) => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate the globe
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      width={undefined}
      height={undefined}
      backgroundColor="rgba(0,0,0,0)"  // transparent background
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // realistic earth texture
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // realistic bumps
      arcsData={data}
      arcColor={(d) => d.color}
      arcStroke={1.2}
      arcAltitude={(d) => d.arcAlt}
      arcDashLength={0.4}
      arcDashGap={2}
      arcDashInitialGap={() => Math.random()}
      arcDashAnimateTime={4000}
      pointsData={data}
      pointAltitude={0.01}
      pointColor={() => "#ff0000"} // points in red for visibility
      showGlobe={true}
      globeTransparent={false}
    />
  );
};

export default World;
