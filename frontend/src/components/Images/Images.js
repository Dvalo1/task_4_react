import React from "react";
import { Link } from "react-router-dom";
import Clock from "../timer/timer";
import Cookies from 'js-cookie'
import BeautyStars from "beauty-stars";

// Main task page, displays images from strapi including (Title / description / Date / Star Rating / Timer and Tags (Categories))
// Rating will save in cookies with the name 'Rating{image.id}' to make each cookie unique and display it upon loading
// Timer is just for display for now, it doesn't have actual functionality :( Users can still vote after 3 minutes, but once they vote it can't be edited.
//Same for the toolbar (Sorting images) ^^

function Image({ images }) {
  var editableStatus = ''
  var clockStatus = ''

  function onStarClick(nextValue, prevValue, name) {
    var currentImageId = prevValue.currId;
    //console.log('Rating' + currId)
    Cookies.set('Rating' + currentImageId, nextValue.value);
    window.location.reload(false);
    //console.log(Cookies.get('Rating'+currentImageId))
  }
  
  return (
    <div className="image_display_wrapper">
      
      {images.map((image) => {
        var currId = image.id;
        if (Cookies.get('Rating' + currId)) {
          editableStatus = false;
        } else {
          editableStatus = true;
          clockStatus = <Clock />
        }
        return (
          <div className="image_display" data-id={image.id} key={image.id}>
            <div id="image"><img src={image.image_src[0].url} alt=""/></div>
            <div className="info">
              <div className="info_text">
                <p className="img_title">{image.img_title}</p>
                <p className="img_desc">{image.img_desc}</p>
                <p className="img_date">{image.img_date}</p>
              </div>

              <div className="image_rating">
                <BeautyStars
                  value={Cookies.get('Rating' + currId)}
                  onChange={value => onStarClick({ value }, {currId})}
                  editable={editableStatus}
                />
              </div>

              {clockStatus}
              <div className="info_categories">
                <span>Tags: </span>
                {image.categories.map((category) => {
                  return <Link className="img_categories" to={`/category/${category.id}`} key={category.id}> {category.name} </Link>
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Image;
