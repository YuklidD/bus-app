import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // Assuming you create a CSS file for additional styling

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex euismod, tincidunt nunc id, lacinia nisl."'
        },
        {
            name: 'Jane Smith',
            text: '"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec euismod, nunc id lacinia nisl."'
        },
        {
            name: 'Mike Johnson',
            text: '"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae ex euismod."'
        },
        {
            name: 'Emily Davis',
            text: '"Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est."'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show all 4 if there's enough space
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container testimonials-container">
            <h2 className="text-center">Customer Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">{testimonial.name}</h5>
                                <p className="card-text">{testimonial.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
