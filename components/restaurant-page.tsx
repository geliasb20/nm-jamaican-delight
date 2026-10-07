"use client";

import { useState } from "react";
import { FlavorTicker } from "./flavor-ticker";

export default function RestaurantPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header>
        <a
          className="brand"
          href="#"
          aria-label="N and M Jamaican Delight II home"
        >
          <span className="brandmark">
            N<span>&</span>M
          </span>
          <span>
            JAMAICAN
            <br />
            DELIGHT <b>II</b>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={menuOpen ? "open" : ""}
          aria-label="Main navigation"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#menu">Menu</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location & Hours</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="button small order"
          href="https://www.ubereats.com/store/n%26m-jamaican-delight-ll/3fjApE52V_CcWz1vhp0h1Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Online <span aria-hidden="true">＋</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>
      <main id="main-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="flag" aria-hidden="true">
                ✕
              </span>{" "}
              STRAIGHT FROM THE ISLAND. RIGHT HERE IN OAK GROVE.
            </p>
            <h1>
              Bold Flavor.
              <br />
              Big Portions.
              <br />
              <em>
                Authentic
                <br className="mobile-break" /> Jamaican.
              </em>
            </h1>
            <p className="intro">
              Oak Grove's home for slow-simmered oxtail, smoky jerk chicken, and
              island comfort.
            </p>
            <div className="actions">
              <a
                className="button order"
                href="https://www.ubereats.com/store/n%26m-jamaican-delight-ll/3fjApE52V_CcWz1vhp0h1Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Menu
              </a>
              <a className="button ghost" href="#location">
                Find Us at Gate 4
              </a>
            </div>
            <div className="hero-rating">
              <span className="stars">★★★★★</span>
              <strong>4.1</strong>
              <span>360+ verified reviews</span>
            </div>
          </div>
          <div className="hero-art hero-dish">
            <div className="hero-dish-glow" aria-hidden="true"></div>
            <img
              className="hero-dish-photo"
              src="/images/hero-jerk-chicken.jpg"
              alt="Jerk chicken with rice and peas, golden fried plantains, and steamed cabbage in a takeaway tray"
              width="2048"
              height="1143"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </section>

        <FlavorTicker />
        <section className="section" id="menu">
          <div className="section-head">
            <div>
              <p className="eyebrow">THE HEAVY HITTERS</p>
              <h2>
                Come hungry.
                <br />
                Leave <em>happy.</em>
              </h2>
            </div>
            <p>
              From the first bite to the last spoonful.
              <br />
              These are the flavors you'll come back for.
            </p>
          </div>
          <div className="food-grid">
            <article className="food-card">
              <div className="food-image oxtail">
                <span>01 / SLOW & LOW</span>
              </div>
              <h3>Tender Oxtail Stew</h3>
              <p>Rich, melt-in-your-mouth gravy slow-cooked to perfection.</p>
              <span className="food-tag">COMFORT IN EVERY BITE</span>
            </article>
            <article className="food-card">
              <div className="food-image jerk">
                <span>02 / BRING THE HEAT</span>
              </div>
              <h3>Char-Grilled Jerk Chicken</h3>
              <p>
                Smoky, spicy, seasoned with traditional pimento and scotch
                bonnet.
              </p>
              <span className="food-tag">THE ISLAND CLASSIC</span>
            </article>
            <article className="food-card">
              <div className="food-image patties">
                <span>03 / GOLDEN GOODNESS</span>
              </div>
              <h3>Jamaican Beef Patties</h3>
              <p>Golden, flaky crust filled with savory spiced ground beef.</p>
              <span className="food-tag">FLAKY. SAVORY. IRRESISTIBLE.</span>
            </article>
            <article className="food-card">
              <div className="food-image sides">
                <span>04 / THE PERFECT COMPANY</span>
              </div>
              <h3>Classic Sides</h3>
              <p>Steamed cabbage, fried sweet plantains, and rice & peas.</p>
              <span className="food-tag">MAKE IT A FULL PLATE</span>
            </article>
          </div>
          <div className="menu-bottom">
            <span>Good food. Generous plates. That's how we do it.</span>
            <a
              className="text-link"
              href="https://www.ubereats.com/store/n%26m-jamaican-delight-ll/3fjApE52V_CcWz1vhp0h1Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the full menu
            </a>
          </div>
        </section>
        <section className="reviews section" id="reviews">
          <div className="section-head">
            <div>
              <p className="eyebrow">WORD ON THE STREET</p>
              <h2>
                Good food.
                <br />
                <em>Great company.</em>
              </h2>
            </div>
            <div className="rating-badge">
              <strong>
                4.1<span> / 5</span>
              </strong>
              <div className="stars">★★★★★</div>
              <span>360+ verified reviews</span>
            </div>
          </div>
          <div className="review-window">
            <div className="review-track">
              <figure>
                <div className="stars">★★★★★</div>
                <blockquote>
                  “Large portions that two people can share. The jerk chicken
                  and cabbage are packed with authentic flavor!”
                </blockquote>
                <figcaption>
                  N&M CUSTOMER <span>BIG PORTION ENERGY</span>
                </figcaption>
              </figure>
              <figure>
                <div className="stars">★★★★★</div>
                <blockquote>
                  “The oxtail stew is out of this world — meat literally falls
                  off the bone.”
                </blockquote>
                <figcaption>
                  N&M CUSTOMER <span>LOVE AT FIRST BITE</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="about section" id="about">
          <p className="eyebrow">ISLAND ROOTS. OAK GROVE HEART.</p>
          <h2>
            Real food.
            <br />
            Made with <em>soul.</em>
          </h2>
          <div>
            <p>
              At N&M Jamaican Delight II, island comfort means rich gravy, smoky
              jerk spice, golden patties, and a plate worth sitting down for.
            </p>
            <p>
              Stop by for a taste of Jamaica, take your favorites home, or bring
              someone hungry. There's always room for good company.
            </p>
            <div className="tags">
              <span>Veteran-Owned</span>
              <span>Black-Owned</span>
              <span>Dine-in & Takeout</span>
            </div>
          </div>
        </section>
        <section className="location section" id="location">
          <div>
            <p className="eyebrow">YOUR ISLAND SPOT, CLOSE TO HOME</p>
            <h2>
              Find us
              <br />
              at <em>Gate 4.</em>
            </h2>
            <address>
              <strong>16468 Fort Campbell Blvd</strong>
              <br />
              Oak Grove, KY 42262
            </address>
            <p>
              Near Gate 4, Gateway Plaza.
              <br />
              Large truck parking available behind the building.
            </p>
            <div className="location-actions">
              <a
                className="button"
                href="https://www.google.com/maps/search/?api=1&query=16468+Fort+Campbell+Blvd+Oak+Grove+KY+42262"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              <a href="tel:+12709855400">(270) 985-5400</a>
            </div>
          </div>
          <div className="visit-panel">
            <span className="visit-icon" aria-hidden="true">
              ✳
            </span>
            <p className="eyebrow">YOUR NEXT GOOD MEAL STARTS HERE</p>
            <h3>
              Pull up.
              <br />
              We'll bring
              <br />
              the flavor.
            </h3>
            <div className="hours">
              <span>OPENING TIME</span>
              <strong>10 AM</strong>
            </div>
            <p>Call for today's closing time and availability.</p>
            <a className="text-link" href="tel:+12709855400">
              Call for pickup
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-main">
          <a className="brand" href="#">
            <span className="brandmark">
              N<span>&</span>M
            </span>
            <span>
              JAMAICAN
              <br />
              DELIGHT <b>II</b>
            </span>
          </a>
          <p>
            A little Jamaica.
            <br />A whole lot of love.
          </p>
          <div>
            <h4>COME THROUGH</h4>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location & Hours</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>LET'S EAT</h4>
            <a
              className="order"
              href="https://www.ubereats.com/store/n%26m-jamaican-delight-ll/3fjApE52V_CcWz1vhp0h1Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
            <a href="tel:+12709855400">(270) 985-5400</a>
            <span>Opens 10 AM</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <span>{new Date().getFullYear()}</span> N&M Jamaican Delight II.
            All rights reserved.
          </span>
          <span>OAK GROVE, KY • ONE LOVE.</span>
        </div>
      </footer>
    </>
  );
}
