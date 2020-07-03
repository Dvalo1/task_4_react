import React from "react";
import Query from "../Query";
import Image from "./Images";
import IMAGES_QUERY from "../../queries/image/images";
import Toolbar from "../../components/Toolbar/index"
import Nav from "../CategoriesNav/index";

// Exporting Categories navbar / Toolbar (Search/Sort) / Main images page

function Home(props) {
  return (
    <div>
      <Query query={IMAGES_QUERY}>
        {({ data: { images } }) => {
          return (
            <div className="rateImage_page">
              <Nav />
              <Toolbar />
              <Image images={images}></Image>
            </div>
          )
        }}
      </Query>
    </div>
  );
}

export default Home;
