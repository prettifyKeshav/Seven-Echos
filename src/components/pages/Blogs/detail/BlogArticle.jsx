import Image from "next/image";
import React from "react";

const BlogArticle = () => {
  return (
    <section className="blog-secB">
      <div className="container">
        <div className="row">
          <div className="blog-stat">
            <div className="stat-card">
              <Image
                src="/assets/icon/stat.svg"
                width={18}
                height={18}
                alt="stat"
              />
              <span>views</span>
              <span>1.6K</span>
            </div>

            <div className="stat-card">
              <Image
                src="/assets/icon/branch.svg"
                width={18}
                height={18}
                alt="stat"
              />
              <span>Shares</span>
              <span>996K</span>
            </div>

            <ul className="social-stat">
              {socialStat.map((item, index) => (
                <li key={index}>
                  <Image src={item.icon} width={24} height={24} alt="stat" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="blog-article website-content">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Facilisis donec arcu orci
              nisi consectetur non volutpat. Id dui aenean lorem neque non
              mattis suscipit. Sed consectetur integer ornare aliquam mattis at
              et neque. Ut maecenas massa vitae praesent sed. Ultrices integer
              lorem in pretium laoreet vivamus tortor.
            </p>

            <p>
              Ultrices risus ornare tempor sit in tristique volutpat sit.
              Pulvinar placerat vivamus ultrices diam et. Felis dignissim
              volutpat quis tortor pellentesque tortor sollicitudin interdum.
              Vestibulum volutpat amet ornare ac aliquet ut. Ac facilisis
              facilisi nisi vulputate volutpat amet. Phasellus donec mollis
              varius at. Sit eu venenatis dictum commodo cras facilisis. Orci
              rutrum donec et massa iaculis natoque quam facilisi cursus.
              Parturient habitant nulla enim auctor. Orci pellentesque massa
              dignissim habitasse tempor. Duis metus sit enim elementum amet
              nulla viverra fames in. Sit massa luctus commodo nascetur volutpat
              at feugiat ultricies est.
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet consectetur. Risus tellus duis aliquet.
            </blockquote>

            <img src="/assets/images/blog/article.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu amet nisl massa neque
              sed tincidunt morbi quis. Sed at iaculis potenti duis. Dis nunc
              pellentesque et fermentum arcu in. Magna ornare eu rhoncus
              tincidunt cras adipiscing fermentum.
            </p>
            <p>
              Nunc venenatis sit morbi facilisi felis risus etiam mauris nisl.
              Ac id pulvinar pharetra nam amet pulvinar vestibulum aliquam eu.
              Porttitor gravida urna leo elementum feugiat. Mattis sit vitae at
              nisl non lacus vivamus nunc a. Ac nam quis in sapien at maecenas
              ut elit. Eros mattis sapien ut integer elit id viverra euismod
              integer. Non mi dignissim phasellus magna placerat. Accumsan sed
              nullam rhoncus fames tellus leo euismod. Urna urna malesuada justo
              morbi quis lectus diam. Bibendum quis cursus vitae nisl duis. Nibh
              mauris et quis quam. Purus velit velit pulvinar penatibus
              vulputate.
            </p>

            <h4>Lorem ipsum dolor sit amet</h4>

            <ul>
              <li>Lorem ipsum dolor sit amet consectetur. Nisi id </li>
              <li>Lorem ipsum dolor sit amet consectetur. Nisi id </li>
              <li>Lorem ipsum dolor sit amet consectetur. Nisi id </li>
              <li>Lorem ipsum dolor sit amet consectetur. Nisi id </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur. Pulvinar ipsum et
              condimentum pulvinar. Id suspendisse rhoncus cursus gravida
              faucibus ut ut. Dignissim eu facilisi adipiscing rhoncus commodo
              in. Turpis proin venenatis libero ridiculus ullamcorper. Enim
              sollicitudin lacus orci volutpat lobortis vitae dolor adipiscing
              ligula. Sed imperdiet hendrerit non nibh feugiat. Eget mauris
              pulvinar maecenas habitasse. Amet nunc orci ultrices ut tristique
              ullamcorper.
            </p>
          </div>
          <div className="sidebar">
            <div className="social">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;

const socialStat = [
  {
    icon: "/assets/icon/facebook-dark.svg",
    label: "125",
  },
  {
    icon: "/assets/icon/twitter-dark.svg",
    label: "425",
  },
  {
    icon: "/assets/icon/pinterest.svg",
    label: "25",
  },
];
