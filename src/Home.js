import React from 'react';
import image1 from './images/image2.jpg';
function Home() {
  return (
    <div className="home">
      <section class="text-gray-600 body-font" />
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={image1}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About this website
          </h1>
          <p class="mb-8 leading-relaxed">
            This website is who want to learn programming. In this website you
            will see many courses. Mainly in this website you will learn machine
            learning, Artificial intelligence and web development. This website
            is open source means everything is free . you can learn any thing of
            programming for free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
