import React from 'react'
import mernim from "./images/mer.jpg"
function Afterh() {
  return (
    <div className="afterh">
      <section className="text-gray-600 body-font" style={{ userSelect: 'auto' }}>
        <div className="container px-5 py-24 mx-auto" style={{ userSelect: 'auto' }}>
          <div className="flex flex-col text-center w-full mb-20" style={{ userSelect: 'auto' }}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" style={{ userSelect: 'auto' }}>The Most Demanded Courses</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ userSelect: 'auto' }}>Below are the 3 most demanded courses in this century</p>
          </div>
          <div className="flex flex-wrap -m-4" style={{ userSelect: 'auto' }}>

            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://st4.depositphotos.com/1001941/22391/v/450/depositphotos_223918160-stock-illustration-isometric-illustration-analyst-developer-searching.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Demanded Course 1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Web development</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>In these few years web development has grown very much . And for your job you need a portfolio so for making that you need a website so thats why web development is the best development in this universe</p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.phoenixs.co.uk/wp-content/uploads/2021/02/Machine-Learning-and-Data-Science-Feature-Image.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Demanded Course 2</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Machine learning</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention</p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Enroll now its Free
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" style={{ userSelect: 'auto' }}>
              <div className="flex relative" style={{ userSelect: 'auto' }}>
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/business/firmenich-creates-world-s-first-flavour-by-artificial-intelligence/11822107-1-eng-GB/Firmenich-creates-world-s-first-flavour-by-artificial-intelligence_wrbm_large.jpg" style={{ userSelect: 'auto' }} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{ userSelect: 'auto' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1" style={{ userSelect: 'auto' }}>Demanded Course 3</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ userSelect: 'auto' }}>Artificial Intelligence</h1>
                  <p className="leading-relaxed" style={{ userSelect: 'auto' }}>Artificial Intelligence is the most demaded course in this whole universe as people thing its pretty cool and also due to goggle assistance and siri . People are very excited in this intelligence</p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Enroll now its free
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}

export default Afterh
