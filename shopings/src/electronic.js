import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Electronics() {
  const [card, setCard] = useState(0);
  const handleIncrement = () => {
    setCard((prevCard) => prevCard + 1); 
  };

  return (
    <>
      <br />

      <div>
        <ul className="ele d-flex m-2" style={{ listStyleType: "none", padding: 0 }}>
          <li><Link to="Mobile" className="btn btn-primary">Mobile</Link></li>
          <li><Link to="Laptops" className="btn btn-primary">Laptops</Link></li> 
          <li><Link to="Tv" className="btn btn-primary">TV</Link></li>
        </ul>
      </div>
      <div>
        <img
          src="https://thumbs.dreamstime.com/z/electronics-online-shopping-banner-devices-delivery-box-270532354.jpg"
          alt="electronics"
          width={1550}
          height={500}
        />
      </div>

      <Outlet />
    </>
  );
}

export function Mobile() {
  const [card, setCard] = useState(0);
  const navigate = useNavigate();

  const phones = [
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/61gGBEmzriL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Lava",
      description: "This is a mobile phone with advanced features and sleek design.",
      price: 17000,
      rating: 4.3,
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/81nMsYgIHdL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Redmi",
      description: "This is a mobile phone with advanced features and sleek design.",
      price: 14500,
      rating: 4.3,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/81KFSdWCCEL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Redmi 13c",
      description: "This is a mobile phone with advanced features and sleek design.",
      price: 16000,
      rating: 4.3,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/619VJYWIbXL._AC_UY327_FMwebp_QL65_.jpg",
      name: "iQoo Z9 Lite",
      description: "This is a mobile phone with advanced features and sleek design.",
      price: 11495,
      rating: 4.3,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/619VJYWIbXL._AC_UY327_FMwebp_QL65_.jpg",
      name: "iQoo Z9",
      description: "This is a mobile phone with advanced features and sleek design.",
      price: 11495,
      rating: 4.3,
    },
  ];

  const handleIncrement = () => {
    setCard((prevCard) => prevCard + 1);
  };

  const PhoneShow = (phone) => {
    navigate(`/mobile/${phone.id}`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft: '35px' }}>
      {phones.map((phone, id) => (
        <div key={id} style={{ padding: '20px', width: '250px' }} onClick={() => PhoneShow(phone)}>
          <img src={phone.image} alt={phone.name} style={{ width: '100%' }} />
          <h2 className="text-primary">Phone: {phone.name}</h2>
          <p className="about text-secondary">About: {phone.description}</p>
          <h5 className="rate text-danger">Rating: {phone.rating}</h5>
          <h2 className="price text-success">Price: ₹{phone.price}</h2>
          <button className="btn btn-primary m-2 r-2">Buy Now</button>
          <p>
            <button className="btn btn-danger" onClick={handleIncrement}>Add to Cart</button>
            <sup>{card}</sup>
          </p>
        </div>
      ))}
    </div>
  );
}

export function Laptops() {
  return (
    <div>
      <h1>This is from the Laptops component.</h1>
    </div>
  );
}

export function Tv() {
  return (
    <div>
      <h1>This is from the TV component.</h1>
    </div>
  );
}

export default Electronics;
