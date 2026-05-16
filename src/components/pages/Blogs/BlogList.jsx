import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  return (
    <section className="blog-secA">
      <div className="container">
        <div className="row">
          {data?.map(
            ({ image, title, date, readTime, tags, description }, index) => {
              return (
                <div key={index} className="blog-card">
                  <div className="img-wrapper">
                    <figure>
                      <Link
                        href={`/blogs/${title.trim().replaceAll(" ", "-").toLowerCase()}`}
                      >
                        {" "}
                        <Image
                          src={image}
                          width={331}
                          height={331}
                          alt="blog image"
                        ></Image>
                      </Link>
                      <div className="blog-tags">
                        {tags?.map((item, index) => {
                          return <span key={index}>{item}</span>;
                        })}
                      </div>
                    </figure>
                    <figcaption className="about-blog">
                      <p className="">
                        <strong>{title}</strong> {description}
                      </p>

                      <p>
                        <span className="date">{date}</span> <span>-</span>{" "}
                        <span className="read-time">
                          <Image
                            width={12}
                            height={12}
                            src="/assets/icon/watch.svg"
                            alt="clock"
                          />{" "}
                          {readTime}
                        </span>
                      </p>
                    </figcaption>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;

const data = [
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 1.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 2.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 3.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 4.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 5.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra.",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21,2022",
    readTime: "2 minute read",
    tags: ["Aenean Eleifend", "Aliquam"],
    image: "/assets/images/blog/blog 6.jpg",
  },
];
