export default function TitleContainer({ item }){
    //console.log('Loading the title container page')
    let { name  , price , description} = item
    //console.log(name  , price , description)
    // the price here will be the base price
    // but when we add things then we will update the price
    return (
        <div className="title-container">
            <div className="title-header-row">
                <div className="title-left">
                <h1 className="item-title">{name}</h1>
                <div className="spice-indicators">
                    {[...Array(5)].map((_, index) => (
                    <div key={index} className="spice-badge">
                        <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 2C5 2 3 5 3 10C3 15 5 20 5 20C5 20 7 15 7 10C7 5 5 2 5 2Z" fill="#7D1204" />
                        <path d="M5 0V2" stroke="#7D1204" strokeWidth="1.5" />
                        </svg>
                    </div>
                    ))}
                </div>
                </div>

                <div className="title-right">
                <div className="price-display">
                    <span className="currency">ETB</span> <span className="amount">{price}</span>
                </div>
                <span className="tax-label">Taxes included</span>
                </div>
            </div>

            {description && <p className="item-description">{description}</p>}
            </div>
    );
}