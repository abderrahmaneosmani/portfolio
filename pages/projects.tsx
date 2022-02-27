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
            <ul>
              <h2 className="card-title">TECHNOLOGIES</h2>
              <li>NextJs</li>
              <li>Firebase</li>
            </ul>

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
            <ul>
              <h2 className="card-title">TECHNOLOGIES</h2>
              <li>NextJS</li>
              <li>Nestjs</li>
              <li>Firebase</li>
              <li>MongoDb</li>
            </ul>

            <div className="justify-end card-actions">
              <Link href="https://ecommerce-front-end-six.vercel.app/">
                <a className="btn btn-primary">Visit</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider">AND</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              height="600px"
              width="600px"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/images%2Fcrm%2Fcrm-capture-5.png?alt=media&token=f68e99ea-7368-431c-8336-6ebc46f18caa"
              alt="Album"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">CRM</h2>
            <p>
              the application manages the relation between customers,
              commercials, pedagogical agent and training Institute
            </p>
            <ul>
              <h2 className="card-title">TECHNOLOGIES</h2>

              <li>nodejs express</li>
              <li>
                Angualar {"By "}
                <span className="text-cyan-400 text-2xl	">
                  {" "}
                  faizakihel2@gmail.com
                </span>{" "}
                <li>Mysql</li>
                <li>Google cloud</li>
              </li>
            </ul>

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
