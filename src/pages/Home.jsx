import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import heroSliderData from '../assets/fake-data/hero-slide'
import HeroSlide from '../components/HeroSlide'
import Policart from '../components/Policart'
import policy from '../assets/fake-data/policy'
import Gird from '../components/Grid'
import ProductCard from '../components/ProductCard'

import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/product'

import banner from "../assets/images/banner.png"

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <HeroSlide
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            <Section>
                <SectionBody>
                    <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                    {
                        policy.map((item, index) => <Link to="/policy" key={index}>
                            <Policart 
                            name={item.name}
                            description={item.description}
                            icon={item.icon}
                        />
                        </Link>)
                    }

                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard 
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slung={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard 
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slung={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                  Phổ biến
                </SectionTitle>
                <SectionBody>
                <Grid 
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard 
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slung={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

        </Helmet>
    )
}

export default Home
