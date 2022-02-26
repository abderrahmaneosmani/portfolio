import React from "react";

function projects() {
  return (
    <>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
        <div className="divider">OR</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
        <div className="divider">OR</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
