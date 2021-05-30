import { Link } from 'react-router-dom';

const PaymentPortOne = () => {
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
      <div className="content_one">
        <h2>Complete your purchase</h2>
        <div className="headings_one">
          <div>Personal Info</div>
          <div className="colored">Billing Info</div>
          <div className="third">Confirm Payment</div>
          <div className="tick_border_one"></div>
        </div>
        <main className="main_one">
          <div>
            <label>Name of Card <sup className="sup">*</sup></label>
            <input className="card_type" type="text" name="Name on Card" placeholder="Opara Linus Ahmed" />
          </div>
          <div>
            <label>Card Type <sup className="sup">*</sup></label>
            <select name="Card Type" className="card_type">
              <option value="Visa">Visa</option>
              <option value="MasterCard">Master Card</option>
              <option value="Verve">Verve</option>
            </select>
          </div>
          <section className="card_details">
            <div className="card_number">
              <label>Card details <sup className="sup">*</sup></label>
              <input type="number" placeholder="44960     44960     44960     44960" />
            </div>
            <div className="card_date">
              <label>Expiry date <sup className="sup">*</sup></label>
              <input type="number" name="Expiry date" placeholder="04 / 23" />
            </div>
            <div className="cvv">
              <label>CVV <sup className="sup">*</sup></label>
              <input type="number" name="CVV" placeholder="923" />
            </div>
          </section>
        </main>
        <div className="cta_one">
          <Link to="/payment-port-two" className="button">Next</Link>
          <Link to="/" className="cancel">Cancel Payment</Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentPortOne;