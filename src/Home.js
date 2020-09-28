import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="B07ZS1DZM1"
            title="LG 38GL950G-B 38 Inch UltraGear Nano IPS 1ms Curved Gaming Monitor with 144HZ Refresh Rate and NVIDIA G-SYNC, Black"
            price={1596.0}
            image="https://www.lg.com/us/images/monitors/md06064936/gallery/medium01.jpg"
            rating={5}
          />
          <Product
            id="B0895GWFFH"
            title="Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White - WYZECP1"
            price={35.67}
            image="https://images-na.ssl-images-amazon.com/images/G/01/vince/boost/detailpages/wyzelabs_video._SR720,404_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="B0895GWFFH"
            title="MOOSOO Cordless Vacuum Cleaner, 23Kpa Stick Handheld Vacuum with Brushless Motor Multi-attachments Detachable Battery Extension Wand Ultra-Quiet K17"
            price={154.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71olxRb1SbL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="B085B2L642"
            title="LEGO City Advent Calendar 60268 Playset, Includes 6 City Adventures TV Series Characters, Miniature Builds, City Play Mat, and Many More Fun and Festive Features, New 2020 (342 Pieces)"
            price={19.97}
            image="https://i.ebayimg.com/00/s/MTIyNVgxNDkz/z/04MAAOSwTdNfTTbX/%24_1.JPG"
            rating={5}
          />
          <Product
            id="B076W2B841"
            title="Black Card Revoked 3 - Original Flavor"
            price={17.99}
            image="https://images-na.ssl-images-amazon.com/images/I/717Jx5oUdwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="B087D961VG"
            title="Samsung QN55Q60TA 55 Ultra High Definition 4K QLED Quantum HDR Smart TV "
            price="755.79"
            image="https://images-na.ssl-images-amazon.com/images/I/71WUKbD30BL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
