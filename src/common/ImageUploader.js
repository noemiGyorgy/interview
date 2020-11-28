import React from "react";
import ImageUploading from "react-images-uploading";
import dropArea from "../drop_area.svg";
import { Row, Col } from "react-bootstrap";

function ImageUploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  // 1 Megabyte in Byte
  const maxFileSize = 1000000;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <React.Fragment>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        span
        dataURLKey="data_url"
        maxFileSize={maxFileSize}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <div className="upload__image-wrapper">
              <div className="text-right">
                <button id="remove-all" onClick={onImageRemoveAll}>
                  Remove all
                </button>
              </div>
              {imageList.map((image, index) => (
                <Row key={index} className="image-item text-left mb-3">
                  <Col xs lg="3">
                    <img src={image["data_url"]} alt="" width="100" />
                  </Col>
                  <Col className="image-item__btn-wrapper align-self-center text-right">
                    <button onClick={() => onImageUpdate(index)}>
                      <i className="fas fa-pencil-alt"></i> Update
                    </button>
                    <button onClick={() => onImageRemove(index)}>
                      <i class="fas fa-trash-alt"></i> Remove
                    </button>
                  </Col>
                </Row>
              ))}
              {({ imageList, onImageUpload, onImageRemoveAll, errors }) =>
                errors && (
                  <div>
                    {errors.maxNumber && (
                      <span>
                        Number of selected images exceed maximum number of files
                      </span>
                    )}
                    {errors.acceptType && (
                      <span>Selected file type is not allowed</span>
                    )}
                    {errors.maxFileSize && (
                      <span>Selected file size exceed the maximum limit</span>
                    )}
                  </div>
                )
              }
            </div>
            <div
              className="click-drop"
              style={isDragging ? { color: "#28a745" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img src={dropArea} alt="" />
            </div>
          </div>
        )}
      </ImageUploading>
    </React.Fragment>
  );
}

export default ImageUploader;
