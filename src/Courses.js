import React from 'react';
import Footer from "./Footer"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Courses() {
  return (
    <div className="courses">
      <h1
        className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 "
        style={{ userSelect: 'auto' }}>
        Courses
      </h1>
      <section
        className="text-gray-600 body-font"
        style={{ userSelect: 'auto' }}>
        <div
          className="container px-5 py-24 mx-auto"
          style={{ userSelect: 'auto' }}>
          <div
            className="flex flex-col text-center w-full mb-20"
            style={{ userSelect: 'auto' }}>
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ userSelect: 'auto' }}>
              Front-end web development Courses
            </h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              style={{ userSelect: 'auto' }}>
              Front-end web development is the practice of converting data to a
              graphical interface, through the use of HTML, CSS, and JavaScript,
              so that users can view and interact with that data. (You should
              have prior knowledge of html css JavaScript)
            </p>
          </div>
          <div className="flex flex-wrap -m-4" style={{ userSelect: 'auto' }}>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 1
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Vue js
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free
                  </p>
                  <Link to="/Vue">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://reactjs.org/logo-og.png "
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 2
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    React
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn react js for free


                  </p>
                  <Link to="/reactt">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 3
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Angular
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn Angular js for free

                  </p>
                  <Link to="/Angular">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://www.zdnet.com/a/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 4
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Jquery
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn Jquery for free


                  </p>
                  <Link to="jquery">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="data:image/png;base64,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"

                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 5
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Semantic UI
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn Semantic ui for free

                  </p>
                  <Link to="semantic">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4.png"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Front-end web development course 6
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    svelte
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn Svelt for free

                  </p>
                  <Link to="/svelt">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="text-gray-600 body-font"
        style={{ userSelect: 'auto' }}>
        <div
          className="container px-5 py-24 mx-auto"
          style={{ userSelect: 'auto' }}>
          <div
            className="flex flex-col text-center w-full mb-20"
            style={{ userSelect: 'auto' }}>
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ userSelect: 'auto' }}>
              Back-end web development
            </h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              style={{ userSelect: 'auto' }}>
              Back end Development refers to the server side of development
              where you are primarily focused on how the site works. ... This
              type of web development usually consists of three parts: a server,
              an application, and a database. Code written by back end
              developers is what communicates the database information to the
              browser
            </p>
          </div>
          <div className="flex flex-wrap -m-4" style={{ userSelect: 'auto' }}>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 1
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Django
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="django">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 2
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    laravel
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="/laravel">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://pythonistaplanet.com/wp-content/uploads/2020/03/Screenshot-258.png"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 3
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Flask
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="/flask">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4k2_O7abfcUJ2aMO9z-jCZCuVLT8U-6r0w&usqp=CAU"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 4
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Asp.net
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="/net">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 5
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Express js
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="express">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src=" https://coralogix.com/wp-content/uploads/2018/04/Coralogix-Nodejs-integration.jpg "
                  style={{ userSelect: 'auto' }}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                  style={{ userSelect: 'auto' }}>
                  <h2
                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                    style={{ userSelect: 'auto' }}>
                    Back-end web development course 6
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ userSelect: 'auto' }}>
                    Node js
                  </h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                    learn vue js for free

                  </p>
                  <Link to="node">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Databases</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). ... Most databases use structured query language (SQL) for writing and querying data.</p>
          </div>
          <div className="flex flex-wrap -m-4" style={{ userSelect: 'auto' }}>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://ih1.redbubble.net/image.1949472564.0811/fposter,small,wall_texture,product,750x1000.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Database Course 1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>My sql</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <Link to="mysql">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://ih1.redbubble.net/image.352416471.2750/fpp,small,lustre,wall_texture,product,750x1000.u5.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Database course 2</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Mongodb</h1>

                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <Link to="/mongo">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="data:image/jpeg;base64,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" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Database course 3</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Postgresql</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <Link to="/postgre">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                      Enroll now its Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Programming languages</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>A programming language is a set of commands, instructions, and other syntax use to create a software program. Languages that programmers use to write code are called "high-level languages." This code can be compiled into a "low-level language," which is recognized directly by the computer hardware</p>
          </div>
          <div className="flex flex-wrap -m-4" style={{ userSelect: 'auto' }}>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAqFBMVEX////+0UI1caMsbaH+zzL+0DuVsMR/oLsyb6L8///90UP+zzj+6rX+zzH//vr90DceZ53/2Gz+9dqwwtB5m7j+8cdNf6v1+fcZZZz945JqkrVkjbLU3+j85Zv+5Jf+3oT98c3e5uz++u9Xhq2Jp8Gkvc7L2OHm7O0+eaOcs8iRrsjF0t6CpbxXhqo2cJ66zdr94Iv76Kb99+D/23nP2+f81E/92GX86rD0iL3dAAAEWElEQVR4nO3bC3OiOhgGYG6pICJ4q9ZqLXhb9ay3XfX//7OTKN1KCCqzrJkJ7zNth2mnM8nb5CMJVNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYg4juxGydQebZaX/Pmb67cl0NpfdIkm6rfd1EJimbdiMaZpBYI9fQtnter7uhKXAo5H0xgPZbXuymW2mgrikYZi9iezWPdWMjQlbNDKYoF+X3cAn+mEba/N1sTQywniR3cDnWfVof/+jF92fwjBsozw3lFZg2OvzimIgLhvBQnYTn4ZlMT5fzcUV1KxIbuHztEzD/nG+CsXjolxZGMGUXbWRRcBqQmW26WesMsqWhUHX3BlRlC+LG0qVhX3NSC25SpTF5pWztkubRXx84zjd2CYocRacmSCL+oXspv0b89Zi8ZKwvHxdLvl7K83C8fyz6luk3Pnf6ic7xMoiqJ1e9Ux3rZ1iYVR64u159j3V0794W6XC6N9bUQjmiP4dxk52+wv0EuQZFaksdKspuweFGeQbFeksyC9lZon49Op2Ftp1FrqvysAIezmjMMwJlwV5k92JgkyytqO3sqgnszgosuh6zTtFjKClRYksdG8vuxeFCDMeg9waF6G2T2bh1mR3oxD8ZuOBKPqaVrOSWXzI7kYhFrmzCOaa00hEQe+qsrtRiLyl0zR/a1rTrSazaMjuRiEyzrrF2IP2UKPDgnDjoqHEaqsvLp1mwOn16IfZXrHfGbq6klm8C8aFaY6nm9nZ70EspM7PUR1na+llycIO2jceHke1Az8q1MkiNUfoUoqKmrvhcPgRe6O21OjopwaFOlnw9cKmUdSd6ONgWS5FCHF9n32wK/opSEKZLPj7iE1XUk6HiP762RTJgl9fBKHm1Lz73U9mocZaa5rMgr15sfdzRqGTkexuFGKWPOBj79yMxEXhBvckuxuF4PapwUqr5x4WuvcpuxvFeE2Wi4HWzFst6BxR5CwnWTxpFp3cWbhqlAv+AIPeRmr57qe6OlPk/Grrtx7Lonq/+9fIUXYXCrMK/nJcuKo8EtCS2zOaxSm997rJG8ruQIHma/MvsvC2sttfqND4s8jImwVRZJn1rVsx49cvaO08cfWiSrwvFuX7FnsLxWVf9MNHJLvtxZtPK+2zeap2klFTYL/f009F1liZ+HFB4tpYxn9HPPncgf+oE/uMNUsTSo3LQifWFVY21DiteEQqi9S9Q5Xtx3131+DIQq+6LnEJsmCsYaQ1j64yp5uPyMjiMhqiKsbFn0OKLSlXFsIpEmfxRso0R/biM77LaKgfSjVHNP7tiq/auYvqe/YzS7Wt6Q17XRyGezgSOkN0Vd5gfMhnxiPkC1+NFxgfFR2tjDSIdVTwxOK2TsNPx0F8r9EpzR71SnQaHeKDLPYiBt2eHn7tyjU9rjha/bNTq51Op92p1mlGdfYtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmf4HbY9TbDBhueIAAAAASUVORK5CYII=" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming Language 1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Python</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.macworld.co.uk/cmsdata/features/3636924/learn_java_on_mac_thumb800.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming lanaguge  2</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Java</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://content.techgig.com/thumb/msid-75551562,width-860,resizemode-4/C-programming-language-rises-amid-COVID-19.jpg?72434" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming Language 3</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>C</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button></div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://ih1.redbubble.net/image.416406976.0438/fposter,small,wall_texture,product,750x1000.u4.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming language 4</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>C++</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming Language 5</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Kotlin</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button> </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://cdn.auth0.com/blog/illustrations/csharp.png" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Programming language 6</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>C#</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  </p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                    Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Data Structure and Algorithm</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>                     A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.

            </p>
          </div>


          <div className="lg:w-1/3 sm:w-1/2 p-4 relative left-80" style={{ userSelect: 'auto' }}>
            <div className="flex relative" style={{ userSelect: 'auto' }}>
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="http://www.cs.cmu.edu/~spadix/class/ee760/prj3/pic/heap.gif" style={{ userSelect: 'auto' }} />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>DSA course 1</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Data Structure and algo in c++</h1>
                <p className="leading-relaxed" style={{ userSelect: 'auto' }}>
                  learn vue js for free
                </p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                  Enroll now its Free
                </button>
              </div>
            </div>
          </div>





        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Machine Learning</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.</p>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4 relative left-80" style={{ userSelect: 'auto' }}>
            <div className="flex relative" style={{ userSelect: 'auto' }}>
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.phoenixs.co.uk/wp-content/uploads/2021/02/Machine-Learning-and-Data-Science-Feature-Image.jpg" style={{ userSelect: 'auto' }} />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>ML course 1</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Machine learning in python</h1>
                <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                  .</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                  Enroll now its Free
                </button>
              </div>
            </div>
          </div>





        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Artificial Intelligence</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing (NLP), speech recognition and machine vision.</p>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4 relative left-80" style={{ userSelect: 'auto' }}>
            <div className="flex relative" style={{ userSelect: 'auto' }}>
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/business/firmenich-creates-world-s-first-flavour-by-artificial-intelligence/11822107-1-eng-GB/Firmenich-creates-world-s-first-flavour-by-artificial-intelligence_wrbm_large.jpg" style={{ userSelect: 'auto' }} />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>AI course 1</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>AI in python</h1>
                <p className="leading-relaxed" style={{ userSelect: 'auto' }}>                   learn vue js for free
                </p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                  Enroll now its Free
                </button>
              </div>
            </div>
          </div>





        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>Aruduino Microcontroller </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>Arduino is an open-source hardware and software company, project and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices.</p>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4 relative left-80" style={{ userSelect: 'auto' }}>
            <div className="flex relative" style={{ userSelect: 'auto' }}>
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg" style={{ userSelect: 'auto' }} />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}> Robotics course 1</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Aruduino</h1>
                <p className="leading-relaxed" style={{ userSelect: 'auto' }}>learn vue js for free
                </p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                  Enroll now its Free
                </button>
              </div>
            </div>
          </div>





        </div>
      </section>
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>App development </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit, while using other languages is also possible</p>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4 relative left-80" style={{ userSelect: 'auto' }}>
            <div className="flex relative" style={{ userSelect: 'auto' }}>
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://goobar.b-cdn.net/wp-content/uploads/2021/03/android_category_thumbnail.png" style={{ userSelect: 'auto' }} />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Android development course 1</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Android development in Kotlin</h1>
                <p className="leading-relaxed" style={{ userSelect: 'auto' }}>learn vue js for free</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative top-10 left-5">
                  Enroll now its Free
                </button>
              </div>
            </div>
          </div>





        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Courses;
