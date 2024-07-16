import { Navbar } from "./Navbar";
import "../styles/home.css";

import Footer from "./Footer";
import Recipecarousel from "./Recipecarousel";



export const Home = () => {


  
    

    

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="left-section">
          <h1>PRAnav</h1>
          <div className="h3" style={{ textAlign: "center" }}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              voluptate!
            </h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>

          <div className="button-holder">
            <button>view our plans</button>
          </div>
        </div>
      </div>
      <div className="why-pranav">
        <div className="heading">
          <h1>why PRAnav</h1>
        </div>
        <div className="holder">
          <div className="card card-1">
            <div className="card-top">
              <img
                src={require("../assets/1.jpg")}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-bottom">
              <div className="title">
                <h2 className="card-title-h2">No skimpin on the chicken!</h2>
              </div>
              <div className="content">
                <p>Or steak, or fish, or plant protein</p>
              </div>
            </div>
          </div>

          <div className="card card-2">
            <div className="card-top">
              <img
                src={require("../assets/2.jpg")}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-bottom">
              <div className="title">
                <h2 className="card-title-h2">No commitment whatsoever</h2>
              </div>
              <div className="content">
                <p>Skipping weeks or cancelling is super easy.</p>
              </div>
            </div>
          </div>

          <div className="card card-3">
            <div className="card-top">
              <img
                src={require("../assets/3.jpg")}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-bottom">
              <div className="title">
                <h2 className="card-title-h2">The most 5-star reviews</h2>
              </div>
              <div className="content">
                <p>Our huge recipe selection wows week after week</p>
              </div>
            </div>
          </div>

          <div className="card card-4">
            <div className="card-top">
              <img
                src={require("../assets/4.jpg")}
                alt="img"
                className="card-img"
              />
            </div>
            <div className="card-bottom">
              <div className="title">
                <h2 className="card-title-h2">Fresh and affordable price</h2>
              </div>
              <div className="content">
                <p>Chef-created deliciousness from $7.49 per meal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-holder">
          <button>view our plans</button>
        </div>
      </div>
      <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFD9C8"
            fillOpacity="1"
            d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,192C420,192,480,160,540,144C600,128,660,128,720,160C780,192,840,256,900,250.7C960,245,1020,171,1080,149.3C1140,128,1200,160,1260,165.3C1320,171,1380,149,1410,138.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="info-section">
        <div className="info-left">
          <img src={require("../assets/img.jpg")} alt="" className="info-img" />
        </div>
        <div className="info-right">
          <div>
            <h1 className="info-heading">What’s inside each box?</h1>
          </div>
          <div className="list">
            <p>✓ Easy-to-follow recipes with clear nutritional info</p>
            <p>✓ High-quality ingredients sourced straight from the farm</p>
            <p>✓ Convenient meal kits that fit perfectly in the fridge</p>
            <p>✓ A fun cooking experience that makes you feel unstoppable</p>
            <p>✓ Innovative packaging designed to reduce waste</p>
          </div>
          <div className="button-holder">
            <button>view our plans</button>
          </div>
        </div>
      </div>

      <div className="svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9BCBC" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,74.7C320,75,400,117,480,160C560,203,640,245,720,250.7C800,256,880,224,960,186.7C1040,149,1120,107,1200,96C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>

        <div className="recipies-display-container">
        <div className="recipie-holder">
            <div className="recipie-heading">
            <h1 className="info-heading">Over 30+ fresh recipes every week !!</h1>
            <Recipecarousel/>
          </div>
        </div>
        </div>
        <div className="farming-info">
          <div className="image">
              <img src={require("../assets/farmer.png")} alt="" />
          </div>
          <div className="display-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sunt iste. Rerum, aspernatur. Qui doloremque voluptates asperiores quis commodi magni a, ducimus obcaecati corrupti, sit non laboriosam magnam, amet exercitationem? Id deleniti ratione dolore ex culpa libero modi, ab assumenda voluptatem suscipit aliquam fugit quae! Officia deleniti doloribus architecto iure fuga ab a porro vitae maxime mollitia unde praesentium, necessitatibus quisquam accusantium dicta dolor nisi, fugiat consectetur blanditiis libero iusto sunt. Voluptatem autem distinctio adipisci odio itaque ex est impedit quam! Eaque doloremque corrupti nam quibusdam ratione sequi dolorum ab voluptate libero. Natus illum recusandae, amet ducimus a omnis accusamus? Eaque nostrum deserunt eius excepturi commodi ea adipisci incidunt libero voluptatibus illum deleniti debitis sed dicta saepe voluptate, et enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam porro odit cupiditate voluptates modi voluptatum voluptate architecto excepturi nesciunt in autem non laudantium cum, fugiat impedit rem veniam? Ipsam totam laborum ut harum beatae laboriosam doloribus nisi, esse incidunt error facere culpa quam expedita omnis reprehenderit. Optio sapiente laborum nesciunt laudantium itaque ducimus reiciendis vel iste, explicabo harum ea natus corrupti dignissimos sit facilis? Aliquid quae voluptatum provident doloribus repellat sequi possimus alias non voluptatibus, ipsa veritatis ad! Praesentium voluptas labore inventore, vero fuga, voluptates sapiente corrupti id consequuntur quam possimus deserunt modi, quasi numquam neque sequi assumenda ab quidem eligendi nisi. Ipsam fugit modi accusantium praesentium, aliquid et minima, incidunt amet laboriosam dolore neque eveniet, impedit ut beatae?
            </p>
          </div>
        </div>

        <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,0L30,21.3C60,43,120,85,180,90.7C240,96,300,64,360,85.3C420,107,480,181,540,213.3C600,245,660,235,720,234.7C780,235,840,245,900,213.3C960,181,1020,107,1080,85.3C1140,64,1200,96,1260,96C1320,96,1380,64,1410,48L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
    <Footer/>
    </>
  );
};
