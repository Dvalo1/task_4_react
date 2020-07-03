import React from "react";

// Not yet done

function toolBar(props) {
  return (

    <div className="toolbar_wrapper">
        <div className="search_bar">
          
        </div>
        <div className="sort_by">
            <span>Sort Images By:</span>
            <div className="tags">
                <div className="sort_tag">Date</div>
                <div className="sort_tag">Rating</div>
                <div className="sort_tag">Category</div>
            </div>
        </div>
    </div>

  );
}

export default toolBar;
