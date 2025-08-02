'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Premium Quality',
      description: 'Hand-selected avocados ensuring only the finest quality reaches our customers'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes from farm to delivery'
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Efficient logistics ensuring fresh avocados reach you quickly'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6">
              About <span className="text-gradient">Fresh Station</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fresh Station Indonesia is a premium avocado supplier specializing in high-quality 
              Avocado Hass varieties. Located in Indonesia's fertile agricultural regions, we 
              combine traditional farming wisdom with modern agricultural practices.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide the freshest, most nutritious avocados while supporting 
              sustainable farming practices and building lasting relationships with our customers.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <img
                src="/img/farm-about.jpg"
                alt="Fresh Avocado Farm"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Business Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10k+</div>
              <div className="text-gray-600">Avocados Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Quality Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
