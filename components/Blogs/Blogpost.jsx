import React from "react";

export const Blogpost = () => {
  const blogs = [
    {
      date: "Sep 2 2022",
      author: "Mahevash Shaikh",
      image: "blog-1.jpg",
      heading: "Does Depression Make You Feel Worthless? You Are Not Alone",
      desc: "Has depression made you feel worthless? If so, you are not alone. You may even believe that you are worthless",
      link: "https://www.health.harvard.edu/blog/3-simple-strategies-for-stress-relief-2021012521806",
    },
    {
      date: "Aug 30 2022",
      author: "Tj Desalvo",
      image: "blog-2.jpg",
      heading:
        "Talking to Others About My Mental Health.Why Mental Health Is Hard to Talk About",
      desc: "I've never been good at talking about my mental health with others, even those who I've known for years.",
      link: "https://www.healthyplace.com/blogs/anxiety-schmanxiety/2022/6/talking-to-others-about-my-mental-health",
    },
    {
      date: "Aug 17 2022",
      author: "Kelly Bilodeau",
      image: "blog-3.jpg",
      heading: "Stress Management-Simple strategies for stress relief.",
      desc: "The last few months of any year, with deadlines and holidays, often create a harried pace.",
      link: "https://www.healthyplace.com/blogs/copingwithdepression/2022/6/does-depression-make-you-feel-worthless-you-are-not-alone",
    },
  ];

  return (
    <>
      <p className="text-center text-3xl font-bold text-[#1B0044]">Blogs</p>
      <hr className="w-20 h-1 bg-[#1B0044] mx-auto mt-2" />
      <div className="flex mx-8">
        {blogs.map((blog) => {
          return (
            <>
              <div className="w-4/12 m-4 border px-4 py-2">
                <img
                  className="flex mx-auto"
                  width={400}
                  src={`/assets/img/${blog.image}`}
                  alt=""
                />

                <div className="flex justify-between p-4">
                  <small className="">{blog.date}</small>
                  <small className="num">{blog.author}</small>
                </div>

                <div className=" font-semibold text-xl">{blog.heading}</div>
                <div className="mt-2"> {blog.desc}</div>
                <p className="flex justify-end text-sm text-blue-600 cursor-pointer hover:underline">
                  <a href={`${blog.link}`}>Read more &gt;</a>
                </p>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
};
