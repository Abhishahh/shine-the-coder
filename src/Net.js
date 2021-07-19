import React from 'react'
import Footer from './Footer'
function Net() {
    return (
        <div className="net">

            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 relative left-60">
                Below is the full course of .Net
            </h1>

            <div className=" relative left-60">
                <iframe width="727" height="409" src="https://www.youtube.com/embed/C5cnZ-gZy2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <Footer />
        </div>
    )
}

export default Net
