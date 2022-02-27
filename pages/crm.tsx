import React from "react";

function crm() {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-2.png?alt=media&token=7f105dec-587d-4f49-950f-d14c27bc675d"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-4.png?alt=media&token=47e18768-8726-47b5-9228-5ed2d7e01b3e"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-5.png?alt=media&token=f68e99ea-7368-431c-8336-6ebc46f18caa"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-6.png?alt=media&token=c4f5fae8-7d6f-47d8-be4d-d2283f3e4a67"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-7.png?alt=media&token=de5f4d82-6032-4f16-a93a-5efe39c46f4c"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-8.png?alt=media&token=a3b0d5eb-27ff-45c7-98f5-9555bb8acbb6"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide7" className="relative w-full carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-9.png?alt=media&token=45620caf-8c09-4400-b7f0-95ab0bfc1bbc"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default crm;
