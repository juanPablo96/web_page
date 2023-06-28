import React from "react";
import "./portfolioItem.css"
import jp from "../../../assets/juanpablo.jpeg";

function PortfolioItem() {
  return (
    <div className="portfolio-item-individual">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
        dolorum dignissimos blanditiis exercitationem doloribus at alias dolor
        vitae in atque. Earum ullam dolores minus optio dolorem possimus
        reiciendis, ut totam!\
      </p>
      <img src={jp} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        labore animi assumenda laudantium! Eaque magnam amet accusamus, debitis
        rem id vel tenetur possimus voluptatibus inventore temporibus eveniet
        doloremque nesciunt labore!
      </p>
    </div>
  );
}

export default PortfolioItem;
