import React from 'react';
import CarouselShopping from '../components/header/CarouselShopping'
import ShoppingHeader from '../components/header/ShoppingHeader'
import SupportBoxes from '../components/shop&support/SupportBoxes'
import ShoppingGrid from '../components/shop&support/ShoppingGrid'
import CardsCarouselNew from '../components/cards/CardsCarouselNew'
import DiscountSection from '../components/discount/DiscountSection'
import CardsCarouselFeatured from '../components/cards/CardsCarouselFeatured'
import FlashSale from '../components/flashsale/FlashSale'
import TopSellers from '../components/topsellers/TopSellers'
import CarouselReviews from '../components/carouselreviews/CarouselReviews'
import CarouselBlog from '../components/blog/CarouselBlog'
import Subscribe from '../components/subscribe/subscribe'
import Brands from '../components/brands/Brands'
import Footer from '../components/footer/Footer'



const Home = () => {
    return (
        <div>
            <CarouselShopping></CarouselShopping>
            <ShoppingHeader></ShoppingHeader>
            <SupportBoxes></SupportBoxes>
            <ShoppingGrid></ShoppingGrid>
            <CardsCarouselNew></CardsCarouselNew>
            <DiscountSection></DiscountSection>
            <CardsCarouselFeatured></CardsCarouselFeatured>
            <FlashSale></FlashSale>
            <TopSellers></TopSellers>
            <CarouselReviews></CarouselReviews>
            <CarouselBlog></CarouselBlog>
            <Subscribe></Subscribe>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
}

export default Home;
