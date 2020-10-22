import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


const CollectionOverview = ({collections})=>{
    return(
        <div className="collection-overview">
            { collections.map(({id, ...otherProps})=>(
            <CollectionPreview key={id} {...otherProps} /> ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});


export default connect(mapStateToProps)(CollectionOverview);