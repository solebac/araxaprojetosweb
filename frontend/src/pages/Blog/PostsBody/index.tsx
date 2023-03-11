import { Link } from "react-router-dom";

const PostsBody = () => {
  return (
    <>
      <section className="blog-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto p-0">
              <div className="blog-details-content">
                <div className="bc-top">
                  <p>
                    Afashion season can be defined as much by the people on the
                    catwalk as it can by the clothes they are wearing. This time
                    around, a key moment came at the end of Marc Jacobs’ New
                    York show, when an almost makeup-free Christy Turlington
                    made a rare return to the catwalk, aged 50 (she also stars,
                    with the designer himself, in the label’s AW ad campaign),
                    where the average catwalk model is around 18.
                  </p>
                </div>
                <div className="bc-details">
                  <div className="bc-pic">
                    <img src="img/blog/bd-pic.jpg" alt="" />
                  </div>
                  <div className="bc-text">
                    <p>
                      If they’re still in the awareness stages of getting to
                      know the brand, then they’ll most likely keep reading more
                      on what Tock has to offer. They’re using one email design
                      to speak to two types of readers both in the first stage
                      of their welcome email.You can also change an email
                      design’s color based on new product, season or to match a
                      marketing campaign’s new look and feel.
                    </p>
                    <p>
                      Design: The email imitates a product marketing funnel
                      system, bringing the reader towards each CTA with
                      “Awareness, Consideration, and Action” as the main stages.
                      Harry’s used a color block design to guide reader through
                      each,
                    </p>
                  </div>
                </div>
                <div className="bc-desc">
                  <p>
                    A few days later, Simone Rocha arguably upped the ante. The
                    32-year-old’s show – in part inspired by Louise Bourgeois,
                    who lived until she was 98 – featured models in their 30s
                    and 40s, including cult favourite Jeny Howorth and actor
                    Chloë Sevigny.
                  </p>
                </div>
                <div className="bc-quote">
                  <div className="bq-icon">
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className="bq-text">
                    <p>
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="bc-desc-last">
                  <p>
                    Occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate.
                  </p>
                </div>
                <div className="bc-tags">
                  <Link to="#">Fashion</Link>
                  <Link to="#">Street style</Link>
                  <Link to="#">Diversity</Link>
                  <Link to="#">Beauty</Link>
                </div>
                <div className="bc-related-post">
                  <a href="#" className="previous-post">
                    <i className="fa fa-angle-left"></i> Previous posts
                  </a>
                  <a href="#" className="next-post">
                    Next posts <i className="fa fa-angle-right"></i>
                  </a>
                </div>
                {/**Begin Posts Relacionados*/}
                {/**<PostsRelated /> - Em desenvolvimento*/}
                {/**End Posts Relacionados */}

                {/**Begin Posts Comentários*/}
                {/**<PostsCommets /> - Em desenvolvimento*/}
                {/**End Posts Comentários */}

                {/**Begin Posts Send Comentários*/}
                {/**<PostsSendCommets /> - Em desenvolvimento*/}
                {/**End Posts Send Comentários */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PostsBody;
