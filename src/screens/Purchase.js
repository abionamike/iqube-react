import { Link } from 'react-router-dom';

const Purchase = () => {
  return (
    <div className="container">
      <svg className="svg" viewBox='0 0 1440 881' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1443 0.5H-3V881L1443 483.5V0.5Z" fill="url(#paint0_linear)" fill-opacity="0.2"/>
        <defs>
          <linearGradient id="paint0_linear" x1="720" y1="0.5" x2="720" y2="881" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F2C94C"/>
            <stop offset="1" stop-color="#F2994A"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="content_two">
        <h2>Complete your Purchase</h2>
        <div className="headings_two">
          <div>Personal Info</div>
          <div className="third">Billing Info</div>
          <div className="colored">Confirm Payment</div>
          <div className="tick_border_two"></div>
        </div>
        <main className="main_two">
          <div className="heading_container">
            <div>Item Name</div>
            <div>
              <svg width="26" height="18" style={{ marginRight: 14 }} viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6304 8.19363V6.04733H23.294V0.714563H20.5146V6.04733H11.1973L5.21054 0.740855V0.714294H2.43115V6.04706H0.0947266V8.19336H2.43115V10.0714H0.0947266V12.2177H2.43115V17.4997H5.21054V12.218H14.5152L20.4968 17.5L20.5149 17.4952V17.5H23.2943V12.218H25.6307V10.0716H23.2943V8.19363H25.6304ZM5.21054 4.00136L7.52716 6.04733H5.21054V4.00136ZM5.21054 10.0716V8.19363H9.95809L12.0847 10.0716H5.21054ZM20.5146 14.3055L18.159 12.218H20.5146V14.3055ZM20.5146 10.0716H15.7375L13.6185 8.19363H20.5146V10.0716Z" fill="#F2F2F2"/>
              </svg>
              Price
            </div>
          </div>
          <div className="body_container">
            <div className="amount">
              <div>Data science and usability</div>
              <div className="price">50, 000.00</div>
            </div>
            <div className="shipping">
              <div>shipping</div>
              <div>0.00</div>
            </div>
          </div>
          <div className="box">
            <div>Total</div>
            <div className="price">50, 000.00</div>
          </div>
        </main>
        <div className="cta_two">
          <Link to="/success" className="button">Pay</Link>
          <Link to="/billing" className="cancel">Cancel Payment</Link>
        </div>
      </div>
    </div>
  )
}

export default Purchase;