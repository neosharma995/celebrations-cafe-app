 
 
 function OurFavorites( ) {
    return (
      <div className="new-items-outer">
        <div className="new-items-inner">
        <div className="section-title">
             <h3 className="header-title">
               our favorites
             </h3>
 
           </div>
          <div className="new-items-wrapper">
 
           
 
          <div className="items-card">
           <div className="items-card-image">
             <img src='/src/assets/item1.png' alt='image'/>
           </div>
           <div className="items-price-name">
              <ul className='new-items-lists'>
              <h3>paneer butter masala</h3>
               <p>$200</p>
              </ul>
           </div>
           <div className="items-add-button">
             <button type="button">add</button>
           </div>
          </div>
 
          <div className="items-card">
           <div className="items-card-image">
             <img src='/src/assets/item2.png' alt='image'/>
           </div>
           <div className="items-price-name">
              <ul className='new-items-lists'>
              <h3>paneer butter masala</h3>
               <p>$140</p>
              </ul>
           </div>
           <div className="items-add-button">
             <div className="item-add">
             <button type="button">add</button>
             </div>
             
           </div>
          </div>
 
          <div className="items-card">
           <div className="items-card-image">
             <img src='/src/assets/item3.png' alt='image'/>
           </div>
           <div className="items-price-name">
              <ul className='new-items-lists'>
              <h3>paneer butter masala</h3>
               <p>$140</p>
              </ul>
           </div>
           <div className="items-add-button">
             <button type="button">add</button>
           </div>
          </div>
 
          </div>
        </div>
      </div>
    );
  }
  
  export default OurFavorites;
  
