import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Users, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lambodar Creation - premium mens fashion brand founded in 2019. Discover our journey, values, and commitment to quality.',
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary-900 text-balance">
              About Us
            </h1>
            <p className="text-lg text-primary-600 mt-6">
              Discover the story behind Lambodar Creation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] bg-primary-100 overflow-hidden">
              <Image
                src="https://lambodarcreation.com/wp-content/uploads/2024/02/1ef2fbe2-image.png"
                alt="Lambodar Creation story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="section-title mt-4">
                Resilience and Growth
              </h2>
              <div className="mt-6 space-y-4 text-primary-600 leading-relaxed">
                <p>
                  In December 2019, Three friends came together putting aside their 
                  regular jobs and started a venture called LAMBODAR CREATION.
                </p>
                <p>
                  As the business was getting its path, COVID brought everything down. 
                  After dealing with those challenging days, the brand Lambodar Creation 
                  established itself among locals as a brand for fit-focused basics.
                </p>
                <p>
                  Over the past 5 years, Lambodar Creation has served people all over India 
                  and International clients too. We are known for our consistent quality 
                  and long-term customer relationships.
                </p>
              </div>
              <Link href="/shop" className="btn-primary mt-8">
                Shop Our Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-medium">
              Our Values
            </h2>
            <p className="text-primary-300 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'We never compromise on quality. Every piece is crafted with premium materials and attention to detail.',
              },
              {
                icon: Heart,
                title: 'Customer Love',
                description: 'Our customers are at the heart of everything. We build lasting relationships through exceptional service.',
              },
              {
                icon: Users,
                title: 'Fit Focused',
                description: 'Perfect fit is our signature. We ensure every garment flatters and feels comfortable.',
              },
              {
                icon: Target,
                title: 'Consistency',
                description: 'Same great quality, every time. You know what to expect when you shop with us.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-primary-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-50 p-10">
              <h3 className="text-2xl font-serif font-medium text-primary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-primary-600 leading-relaxed">
                To provide premium quality menswear that combines ethnic traditions with 
                contemporary style. We strive to make every man feel confident and stylish 
                through our carefully crafted collections, while maintaining accessible 
                pricing and exceptional customer service.
              </p>
            </div>
            <div className="bg-primary-900 text-white p-10">
              <h3 className="text-2xl font-serif font-medium mb-4">
                Our Vision
              </h3>
              <p className="text-primary-300 leading-relaxed">
                To become a leading name in Indian menswear, recognized for our commitment 
                to quality, innovation in design, and customer satisfaction. We aim to 
                expand our reach while staying true to our roots and the values that built 
                our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Craftsmanship</h2>
            <p className="section-subtitle mx-auto">
              Every piece tells a story of quality and attention to detail
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Fabrics',
                description: 'We source only the finest fabrics - from luxurious satin to comfortable cotton blends.',
              },
              {
                title: 'Expert Tailoring',
                description: 'Each garment is crafted with precision, ensuring perfect fit and lasting durability.',
              },
              {
                title: 'Quality Control',
                description: 'Every piece goes through rigorous quality checks before reaching you.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white">
                <h3 className="text-lg font-medium text-primary-900 mb-3">{item.title}</h3>
                <p className="text-sm text-primary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-accent text-white p-12 md:p-16 text-center rounded-sm">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Explore our collection of premium menswear and discover pieces that 
              reflect your unique style.
            </p>
            <Link href="/shop" className="inline-flex items-center px-8 py-4 bg-white text-accent font-medium uppercase text-sm hover:bg-primary-50 transition-colors">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}