import { Link } from 'react-router-dom';

const Profile = () => {
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
      <div className="profile_content">
        <h2>Complete your Purchase</h2>
        <div className="profile_headings">
          <div className="colored">Personal Info</div>
          <div>Billing Info</div>
          <div className="third">Confirm Payment</div>
          <div className="tick_border"></div>
        </div>
        <main className="profile_main">
          <div>
            <label className="label">Name</label>
            <input className="input" type="text" name="Name on Card" placeholder="Opara Linus Ahmed" />
          </div>
          <div>
            <label className="address_label">Email Address <sup className="sup">*</sup></label>
            <small className="address_text">The purchase reciept would be sent to this address</small>
            <input className="input" type="text" name="Name on Card" placeholder="OparaLinusAhmed@devmail.com" />
          </div>
          <div>
            <label className="label">Address 1</label>
            <input className="input" type="text" name="Name on Card" placeholder="The address of the user goes here" />
          </div>
          <div>
            <label className="label">Address 2</label>
            <input className="input" type="text" name="Name on Card" placeholder="and here" />
          </div>
          <section className="local_government_details">
            <div className="local_government">
              <label className="label">Local Government</label>
              <input type="text" placeholder="Surulere" />
            </div>
            <div className="state">
              <label className="label">State</label>
              <select name="Card Type" className="state_input">
                <option value="Lagos">Lagos</option>
                <option value="FCT">FCT</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Oyo">Oyo</option>
                <option value="Edo">Edo</option>
                <option value="Ogun">Ogun</option>
                <option value="kano">kano</option>
                <option value="Ondo">Ondo</option>
                <option value="Kwara">Kwara</option>
                <option value="Delta">Delta</option>
                <option value="Osun">Osun</option>
                <option value="Enugu">Enugu</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Katsina">Katsina</option>
                <option value="Gombe">Gombe</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Anambra">Anambra</option>
                <option value="AkwaIbom">AkwaIbom</option>
                <option value="Abia">Abia</option>
                <option value="Imo">Imo</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Borno">Borno</option>
                <option value="Benue">Benue</option>
                <option value="Adamawa">Adamawa</option>
                <option value="taraba">taraba</option>
                <option value="Niger">Niger</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Yobe">Yobe</option>
                <option value="CrossRiver">CrossRiver</option>
                <option value="Zamfara">Zamfara</option>
                <option value="Kogi">Kogi</option>
              </select>
            </div>
          </section>
        </main>
        <div className="profile_cta">
          <Link to="/payment-port-one" className="button">Next</Link>
          <Link to="/" className="cancel">Cancel Payment</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile;