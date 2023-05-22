import { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function Example() {
  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [inputImage, setInputImage] = useState(null);
  // 유저가 선택한 영역만큼 크롭된 이미지
  const [croppedImage, setCroppedImage] = useState(null);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => setInputImage(URL.createObjectURL(e.target.files[0]))} />
      <Cropper src={inputImage} aspectRatio={16 / 9} crop={onCrop} ref={cropperRef} />
      <img src={croppedImage} />
    </div>
  );
}

export default Example;