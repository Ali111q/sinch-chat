import React, { useState, useEffect } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";

function ImgCrop(props) {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
    props.setimg(imgAfterCrop);
  }, [imgAfterCrop]);

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;
    const context = canvasEle.getContext("2d");
    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      const dataURL = canvasEle.toDataURL("image/jpeg");
      setImage(dataURL);
      props.setSrc(dataURL)
      canvasEle.toBlob((blob) => {
        const file = new File([blob], {
          type: "image/jpeg",
        });
        setImgAfterCrop(file);
      });
      setCurrentPage("img-cropped");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };
  return (
    <div className="container" >
      {currentPage === "choose-img" ? (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
      )}
    </div>
  );
}
export default ImgCrop;
