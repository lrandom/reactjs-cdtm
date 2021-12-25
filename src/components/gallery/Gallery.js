import React from "react";
import './Gallery.css';
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg",
                "https://cdn.vietnambiz.vn/thumb_w/600/2019/9/8/natural-environment-15679182259811060670206-crop-15679182630051017276139.jpg",
                "https://www.juneva.com/wp-content/uploads/Tap-Into-Natures-Power-And-Reclaim-Your-Healthy-Energy.jpg"
            ],
            activeImageIndex: 0
        }
    }

    render() {
        return (
            <div className="gallery">
                <div className="zoom">
                    <img src={this.state.images[this.state.activeImageIndex]} alt=""/>
                </div>

                <div className="thumbnails">
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <div className="thumbnail" key={index} onClick={() => {
                                    this.setState({'activeImageIndex': index})
                                }}>
                                    <img src={image} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;
