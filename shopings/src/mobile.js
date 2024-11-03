 function Mobile() {
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
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft: '35px', textalign:'center' }}>
        {phones.map((phone, index) => (
          <div key={index} style={{ padding: '20px', width: '250px' }}>
            <img src={phone.image} alt={phone.name} style={{ width: '100%' }} />
            <h2 className='text-primary'>Phone: {phone.name}</h2>
            <p className='about text-secondary'>About: {phone.description}</p>
            <h5 className='rate text-danger'>Rating: {phone.rating}</h5>
            <h2 className='price text-success'>Price: ₹{phone.price}</h2>
          </div>
        ))}
     
      </div>
    );
  }
  export default Mobile;