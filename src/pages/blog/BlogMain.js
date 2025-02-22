import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SingleBlog from "../../components/Blog";

import blogImg1 from "../../assets/img/blog/blog-1-1.jpg";

const BlogMain = () => {
  return (
    <main>
      <Breadcrumb title="Blog Style 1" subTitle="blog" />

      <div className="it-blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <SingleBlog
                thumbImage={blogImg1}
                title="velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
                publishedDate="21 April 2024"
                btnClass="ed-btn-blog"
                hasArrow
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogMain;
