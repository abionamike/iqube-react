import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="container_three">
      <svg className="svg" viewBox='0 0 1440 881' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1443 0.5H-3V881L1443 483.5V0.5Z" fill="url(#paint0_linear)" fill-opacity="0.2"/>
        <defs>
          <linearGradient id="paint0_linear" x1="720" y1="0.5" x2="720" y2="881" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F2C94C"/>
            <stop offset="1" stop-color="#F2994A"/>
          </linearGradient>
        </defs>
      </svg>
      <main className="main_three">
        <div className="tick">
          <svg className="svg_tick" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5041 6.7984L19.3601 33.7552C17.9681 35.1376 15.7641 35.1376 14.3721 33.7552L1.49615 20.968C0.104148 19.5856 0.104148 17.3968 1.49615 16.0144C2.88815 14.632 5.09215 14.632 6.48415 16.0144L16.8661 26.3248L41.5161 1.8448C42.9081 0.462399 45.1121 0.462399 46.5041 1.8448C47.8961 3.2272 47.8961 5.416 46.5041 6.7984Z" fill="#6FCF97"/>
          </svg>
        </div>
        <h1 className="title">Purchase Completed</h1>
        <div className="content_three">Pls check your email for details concerning this transaction</div>
        <Link to="/" className="cta_three">Return Home</Link>
      </main>
    </div>
  )
}

export default Success;