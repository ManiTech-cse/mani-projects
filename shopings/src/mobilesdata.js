import { useParams } from 'react-router-dom';

import    BuyNowComponent from './map';
function Mobilesdata() {
  const { id } = useParams();

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
    }
  ];

  const phone = phones.find(phone => phone.id == id);

  return (
    <div style={{ padding: '20px' }}>
      {phone ? (
        <>
          <img src={phone.image} alt={phone.name} style={{ width: '300px' }} />
          <h2>{phone.name}</h2>
          <p>{phone.description}</p>
          <h4>Price: ₹{phone.price}</h4>
          <h5>Rating: {phone.rating}</h5>
        </>
      ) : (
        <p>Phone not found</p>
      )}
   <BuyNowComponent></BuyNowComponent>
    </div>
  
  );
}

export default Mobilesdata;
