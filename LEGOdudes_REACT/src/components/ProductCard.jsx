export default function ProductCard({p, setCart}){

    const handleClick = ()=>{
      setCart((prev) => 
        prev.some(item => item.prodid === p.prodid) ? //sjekker om et element eksisterer. Hvis ja: 
        prev.map(item =>  item.prodid === p.prodid ? 
        {...item, quantity: item.quantity +1} // + 1. : Hvis nei legge til
        : item) : 
        [...prev, {...p, quantity : 1}]) //Peker på tidligere array (prev) + legger til nytt element (p)
      console.log("Legg i handlekurv")
    }

    return (
      <article className="product-card">
          <img src={`website_images/PROD_${p.imagefile}`} alt={p.title} />
          <a href="#">${p.category}</a>
          <h3>{p.title}</h3>
          <p>Kr. {p.price},-</p>
          <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
    )
  }