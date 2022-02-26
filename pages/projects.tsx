import Link from "next/link";
import React from "react";

function projects() {
  return (
    <>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fpomodoro.png?alt=media&token=4ac887f4-1ef4-4d40-a3e4-b375db6d3655"
              alt="Album"
              height="600px"
              width="600px"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pomodoro</h2>
            <p>
              it use as timer to break work into interval .users can create
              task, enjoy with music
            </p>

            <div className="justify-end card-actions">
              <Link href="https://pomdoro-nextjs.vercel.app">
                <a className="btn btn-primary">Visit</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Ffullstack.png?alt=media&token=71f57e36-fdbd-4755-bb58-3aeec05aef74"
              alt="Album"
              height="600px"
              width="600px"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">e-Commerce</h2>
            <p>Full Stack e-Commerce</p>
            <div className="justify-end card-actions">
              <Link href="https://ecommerce-front-end-ebon.vercel.app/">
                <a className="btn btn-primary">Visit</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">CRM</h2>
            <p>Customer relationship management, </p>
            <div className="justify-end card-actions">
              <Link href="crm">
                <a className="btn btn-primary">Visit</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
