import React, { useEffect, useState } from 'react';
import './Home.css';
import { ClipLoader } from "react-spinners";

const Home = ({userData}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  useEffect(()=>{
   function fetchData() {
    setLoading(true)
     fetch("/items").then(res => res.json()).then(data => {
      // console.log(data)
      if(data.message === "Failed to fetch items"){
        setError(data.message)
      } else {
        setItems(data);
      }
     }).catch((error) => {
      setError(error.message || "Something went wrong. Try again")
     }).finally(()=>{
      setLoading(false)
     })
    }
    fetchData()
  }, [])
  console.log({items})
  return (
    <div className="home-container">
      <header className="home-header">
        {userData.username} {" "};
        {userData.email} {" "};
        <img src={userData.image}  width="40px"/>
        <h1>Welcome to Our Website!</h1>
        <p>Discover our services and offerings.</p>
        <button className="cta-button">Get Started</button>
      </header>
      {/* <section className="home-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>Learn more about our company and our mission to provide top-quality services.</p>
        </div>
        <div className="content-section">
          <h2>Our Services</h2>
          <p>Explore the wide range of services we offer to meet your needs.</p>
        </div>
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries or support.</p>
        </div>
      </section> */}
      <section>
        {loading? <ClipLoader color='#0000' size={30}/> : (items.map((item, i)=>{
          return <div key={i}>
             <img src={item.image} alt='' />
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </div>
        }))}
      </section>
    </div>
  );
};

export default Home;
