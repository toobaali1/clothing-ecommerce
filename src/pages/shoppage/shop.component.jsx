import React from "react";
import  SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
}
} //end constructor
    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                <h1>COLLECTIONS</h1>
                {collections.map(({id, ...otherProps})=>(
                <CollectionPreview key={id} {...otherProps} />

                ))}
            </div>
        )
    }
} //end class

export default ShopPage;