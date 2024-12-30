import React from "react";

const Resources = () => {
    const blogData = [
        {
            imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
            title: "Blog Title 1",
            date: "2024-12-30",
            views: "1.2k views",
            category: "Category 1",
        },
        {
            imgSrc: "https://via.placeholder.com/150",
            title: "Blog Title 2",
            date: "2024-12-29",
            views: "900 views",
            category: "Category 2",
        },
        // Add more blog entries here...
    ];

    return (
        <section className="px-6 lg:px-12 py-20">
            <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
                Resources
            </h1>

            <article className="py-6 sm:py-12">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="text-sm mb-16">
                            Qualisque erroribus usu at, duo te agam solute mucius.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
                        {blogData.map((blog, index) => (
                            <div key={index} className="flex flex-col items-center p-4 border rounded shadow">
                                <img
                                    src={blog.imgSrc}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover mb-4 rounded"
                                />
                                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                                <p className="text-sm text-gray-500 mb-1">{blog.views}</p>
                                <p className="text-sm text-gray-500">{blog.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Resources;
