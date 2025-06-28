import './App.css'

function App() {
  const handleContactClick = () => {
    window.location.href = 'mailto:petr.kavulok@gmail.com?subject=Domain%20Inquiry&body=Hello,%20I%20am%20interested%20in%20purchasing%20this%20domain%20for%201BTC.';
  };

  return (
    <div className="app">
      <div className="info-banner">
        <span className="banner-text">🌐 Doména je na prodej</span>
        <button className="contact-btn" onClick={handleContactClick}>
          Contact Owner
        </button>
      </div>
      <div className="content">
        <div className="miami-diamond">💎</div>
        <div className="miami-sunset">🌅</div>
        <h1 className="title">Honzův bezvýznamný kamarád</h1>
      </div>
    </div>
  )
}

export default App
