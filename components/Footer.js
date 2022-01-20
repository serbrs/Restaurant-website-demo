const Footer = () => {
  return (
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            Tasty Food
          </a>
          <span className="footer__description">Restaurant</span>
          <div>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Services</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Fast food
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Reserve your spot
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Event
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Terms of services
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Adress</h3>
          <ul>
            <li>Azerbaijan, Baku</li>
            <li>Baku</li>
            <li>555-555-555</li>
            <li>email@email.com</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">&#169; Made with Next Js 2022. All right reserved</p>
    </footer>
  );
};

export default Footer;
