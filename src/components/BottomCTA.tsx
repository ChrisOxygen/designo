import Button from "../ui/Button";

function BottomCTA() {
  return (
    <div className="bottom-cta">
      <div className="bottom-cta__top-white-area">
        <div className="bottom-cta__content-wrapper box-container">
          <div className="cta-content">
            <h2 className="cta-content__title">
              Let’s talk about your project
            </h2>
            <span className="cta-content__desc">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </span>
          </div>
          <Button className="btn btn__bg-dark" to="/contact">
            Get in touch
          </Button>
        </div>
      </div>
      <div className="bottom-cta__bottom-dark-area"></div>
    </div>
  );
}

export default BottomCTA;
