function OurQualities() {
  return (
    <div className="our-qualities">
      <span className="bg-shape"></span>
      <div className="our-qualities__content-wrapper box-container">
        <div className="single-quality">
          <div className="single-quality__img">
            <img
              src="./assets/home/desktop/illustration-passionate.svg"
              alt=""
            />
          </div>
          <div className="quality__text">
            <span className="single-quality__title">PASSIONATE</span>
            <span className="single-quality__desc">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </span>
          </div>
        </div>
        <div className="single-quality">
          <div className="single-quality__img">
            <img
              src="./assets/home/desktop/illustration-resourceful.svg"
              alt=""
            />
          </div>
          <div className="quality__text">
            <span className="single-quality__title">RESOURCEFUL</span>
            <span className="single-quality__desc">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </span>
          </div>
        </div>
        <div className="single-quality">
          <div className="single-quality__img">
            <img src="./assets/home/desktop/illustration-friendly.svg" alt="" />
          </div>
          <div className="quality__text">
            <span className="single-quality__title">FRIENDLY</span>
            <span className="single-quality__desc">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurQualities;
