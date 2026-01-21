

function PromoCard({img,title,des}) {
  return (
    <div className="promo-card">
        <div className="promo-card-text">

            <div className="promo-card-title">
                {title}
            </div>

            <div className="promo-card-des">
                {des}
            </div>

            <div className="promo-card-btns">
                <button className="promo-card-learnmore">Learn More</button>
            </div>

        </div>
        <div className="promo-card-img">
             <img src={img} />
        </div>
    </div>
  )
}

export default PromoCard