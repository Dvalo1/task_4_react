import React from 'react';

// Style changer, no actual functionality yet. Just visual side.
// Ability to switch between dark/light mode
// Ability to change text colors (Options being orange / purple / green / light blue / red)
// Ability to change theme colors (Options being rhino / asphalt / dark slate / darkness / dark gray)

class StyleChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStyleMenu: false,
      toggleSlider: false,
    }
  }
  toggleMenu() {
    this.setState({toggleStyleMenu: !this.state.toggleStyleMenu});
  }
  toggleSlider() {
    this.setState({toggleSlider: !this.state.toggleSlider});
  }
  render() {
    let styleChangerClass = ["style_changer"];
    if(this.state.toggleStyleMenu) {
      styleChangerClass.push('shown');
    }

    let test = ["slider round"];
    if(this.state.toggleSlider) {
      test.push('clicked');
    }

    return(       
      <div>
        <div className="style_menu" onClick={this.toggleMenu.bind(this)}>
            <div className="tbar_icon">
                <span className="bars-first"></span>
                <span className="bars-second"></span>
                <span className="bars-third"></span>
            </div>
        </div>

        <div className={styleChangerClass.join(' ')}>

            <div className="style_tab width_changer">
              <div className="style_slider">
                <div className={test.join(' ')} onClick={this.toggleSlider.bind(this)}>

                </div>
              </div>
              <div className="style_description">
                <h4>Light Mode</h4>
                <p>Toggle this to turn website to the light mode.</p>
              </div>
            </div>


            <div className="style_tab text_colors">
                <div className="style_desc_spec"><h4>Change Text Colors</h4></div>
                <div className="text_colors_wrapper">
                  <div className="colors_each orange"></div>
                  <div className="colors_each purple"></div>
                  <div className="colors_each green"></div>
                  <div className="colors_each lblue"></div>
                  <div className="colors_each red"></div>
                </div>
            </div>
            <div className="style_tab theme_colors">
            <div className="style_desc_spec"><h4>Change Theme Colors</h4></div>
            <div class="style_color_switcher_theme">
                <div class="colors_theme_each rhino">
                    <h4>Rhino</h4>
                    <div class="color_tab"></div>
                </div>
            </div>
            <div class="style_color_switcher_theme">
                <div class="colors_theme_each asphalt">
                    <h4>Asphalt</h4>
                    <div class="color_tab"></div>
                </div>
            </div>
            <div class="style_color_switcher_theme">
                <div class="colors_theme_each dslate">
                    <h4>Dark Slate</h4>
                    <div class="color_tab"></div>
                </div>
            </div>
            <div class="style_color_switcher_theme">
                <div class="colors_theme_each darkness">
                    <h4>Darkness</h4>
                    <div class="color_tab"></div>
                </div>
            </div>
            <div class="style_color_switcher_theme">
                <div class="colors_theme_each dgray">
                    <h4>Dark Gray</h4>
                    <div class="color_tab"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
  }
}

export default StyleChanger;
