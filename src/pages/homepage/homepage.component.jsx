import React from "react";
import Directory from "../../components/directory-menu/directory-menu.components";
import {HomepageContainer} from "./homepage.styles";

const HomePage = () => {
    return(
        <HomepageContainer>
            <Directory/>
        </HomepageContainer>
    );
}

export default HomePage;