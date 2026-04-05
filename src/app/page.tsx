"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="L'otre Rive"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Welcome to L'otre Rive"
      description="Experience genuine service and amazing food by the riverside. Your perfect spot for memorable dining in Abidjan."
      testimonials={[
        {
          name: "Ange Patrick",
          handle: "@localguide",
          testimonial: "Amazing place, Amazing Food, Genuine Service",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491778.jpg",
        },
        {
          name: "Djeneba Soro",
          handle: "@localguide",
          testimonial: "Overall, we had a good meal. The service was quick and the staff were courteous.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-burger-fast-food-cheat-meal-woman-burger-restaurant_169016-67527.jpg",
        },
        {
          name: "Darcy Walker",
          handle: "@localguide",
          testimonial: "The setting was lovely, the food excellent, and the staff attentive.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
        },
        {
          name: "Patrice K.",
          handle: "@localguide",
          testimonial: "Great atmosphere for a birthday celebration. Truly memorable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
        },
        {
          name: "Marie L.",
          handle: "@localguide",
          testimonial: "Genuine service in a beautiful location. Definitely coming back.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-having-laugh-together_23-2148395336.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
        {
          text: "Book a Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-sea-food-wooden-table-bench-shore-concept_53876-23078.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491778.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-eating-burger-fast-food-cheat-meal-woman-burger-restaurant_169016-67527.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-friends-having-laugh-together_23-2148395336.jpg",
          alt: "Customer 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Riverside Dining",
        },
        {
          type: "text",
          text: "Fresh Ingredients",
        },
        {
          type: "text",
          text: "Genuine Service",
        },
        {
          type: "text",
          text: "Exceptional Cocktails",
        },
        {
          type: "text",
          text: "Abidjan's Favorite",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="About L'otre Rive"
      description="Located in the heart of Abidjan, L'otre Rive is a women-owned establishment dedicated to providing exceptional culinary experiences. Our lovely riverside setting combines with attentive service and fresh, gourmet ingredients to create the perfect atmosphere for any occasion."
      bulletPoints={[
        {
          title: "Women-Owned Excellence",
          description: "Founded with a passion for hospitality and culinary innovation.",
        },
        {
          title: "Riverside Setting",
          description: "Enjoy your meal in a beautiful and relaxing riverside environment.",
        },
        {
          title: "Attentive Service",
          description: "Our staff is dedicated to ensuring your experience is quick, courteous, and memorable.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Blue Lagoon",
          price: "12,000 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-sauce-fried-eggplant_140725-2972.jpg",
        },
        {
          id: "p2",
          name: "Riverside Grilled Fish",
          price: "18,500 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/drink-champagne-glass-copy-space_23-2148340077.jpg",
        },
        {
          id: "p3",
          name: "Gourmet Beef Medallion",
          price: "22,000 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-tiki-cocktail-with-passion-fruit-table_140725-12846.jpg",
        },
        {
          id: "p4",
          name: "Tropical Fusion Salad",
          price: "9,500 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/slices-meat-served-with-lettuce-sesame-seeds-sauce_141793-955.jpg",
        },
        {
          id: "p5",
          name: "L'otre Rive Seafood Platter",
          price: "28,000 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bartender-preparing-drink_23-2150494242.jpg",
        },
        {
          id: "p6",
          name: "Decadent Chocolate Delight",
          price: "8,000 FCFA",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-young-woman-portrait-outdoor_624325-2930.jpg",
        },
      ]}
      title="Our Culinary Highlights"
      description="Discover our curated selection of signature dishes and handcrafted cocktails."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Ange Patrick",
          handle: "@localguide",
          testimonial: "Amazing place, Amazing Food, Genuine Service",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491778.jpg",
        },
        {
          id: "t2",
          name: "Djeneba Soro",
          handle: "@localguide",
          testimonial: "Overall, we had a good meal. The service was quick and the staff were courteous.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-burger-fast-food-cheat-meal-woman-burger-restaurant_169016-67527.jpg",
        },
        {
          id: "t3",
          name: "Darcy Walker",
          handle: "@localguide",
          testimonial: "The setting was lovely, the food excellent, and the staff attentive.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
        },
        {
          id: "t4",
          name: "Patrice K.",
          handle: "@localguide",
          testimonial: "Great atmosphere for a birthday celebration. Truly memorable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
        },
        {
          id: "t5",
          name: "Marie L.",
          handle: "@localguide",
          testimonial: "Genuine service in a beautiful location. Definitely coming back.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-having-laugh-together_23-2148395336.jpg",
        },
      ]}
      showRating={true}
      title="Guest Reviews"
      description="We are proud to have served so many satisfied guests at L'otre Rive."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Visit Us"
      title="Contact L'otre Rive"
      description="We are located at 928R+2M, Abidjan. Give us a call or visit us for a delightful culinary experience."
      inputPlaceholder="Enter your email for reservations"
      buttonText="Send Reservation Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "07 57 57 47 47",
              href: "tel:+2250757574747",
            },
            {
              label: "Abidjan, Ivory Coast",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 L'otre Rive. All rights reserved."
      bottomRightText="Built with passion in Abidjan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
