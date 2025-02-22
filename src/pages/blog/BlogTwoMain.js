import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SingleBlogThree from "../../components/Blog/SingleBlogThree";

import blogImg1 from "../../assets/img/blog/blog-1-1.jpg";

const BlogTwoMain = () => {
  return (
    <main>
      <Breadcrumb title="Blog Style 2" subTitle="blog" />

      <div className="it-blog-area it-blog-style-3 it-blog-style-4 inner-style grey-bg pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <SingleBlogThree
                blogImage={blogImg1}
                title="Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed
                    do."
                authorName="Sunilra smoth"
                publishedDate="March 28, 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogTwoMain;
