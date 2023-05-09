import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (
    <div className="cropper" style={{zIndex: 9099}}>
      <div>
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              position: "absolute",
              width: "100%",
              height: "80%",
              backgroundColor: "#fff",
            },
          }}
        />
      </div>

      <div className="action-btns">
        <button
          className="btn-outline"
          style={{ backgroundColor: "red" }}
          onClick={onCropCancel}
        >
          Cancel
        </button>
        <button
          className=""
          onClick={() => {
            onCropDone(croppedArea);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ImageCropper;
