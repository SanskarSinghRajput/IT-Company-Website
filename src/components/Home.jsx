import React from 'react';
import vg from "../assets/pic2.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
      <main>
        <h1>Galexious</h1>
        <p>Solution to all your problems</p>
      </main>  
    </div>
    
    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution to the tech problems
                you face
                every day. We are leading tech company whose aim is to 
                increase the 
                problem solving ability in children.
            </p>
        </div>
    </div>


    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam eum
                dignissimos numquam blanditiis et sapiente beatae optio
                aut, quasi qui
                velit in quam repellat iusto dolor quaerat, sed nesciunt
                reprehenderit
                vitae illo excepturi quisquam error pariatur officia?
                Amet laudantium
                provident vel aspernatur, aperiam facere id iste, et dolorum
                commodi velit
                praesentium cupiditate.
                Repellendus, eos ullam facilis in culpa id aut quos quasi
                deserunt corporis
                commodi quia sequi nobis amet quam voluptas, fuga quod! Consequuntur
                enim quae quis sequi dolor!
            </p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div><h1>Brands</h1>
        <article>
            <div style={{animationDelay: "0.3s",}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s",}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s",}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay: "1s",}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article></div>
    </div>
    </>
  );
};

export default Home;
