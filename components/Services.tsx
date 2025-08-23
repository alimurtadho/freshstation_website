'use client'

import { motion } from 'framer-motion'
import { 
  BuildingOfficeIcon, 
  HomeIcon, 
  TruckIcon, 
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: 'B2B Wholesale',
      description: 'Bulk supply for restaurants, hotels, and food processing companies with competitive pricing.',
      features: ['Minimum order: 100kg', 'Flexible payment terms', 'Quality guarantee', 'Regular supply']
    },
    {
      icon: HomeIcon,
      title: 'Direct to Consumer',
      description: 'Fresh avocados delivered directly to your home with same-day or next-day delivery.',
      features: ['Same-day delivery', 'Minimum order: 1kg', 'Online payment', 'Satisfaction guarantee']
    },
    {
      icon: TruckIcon,
      title: 'Custom Logistics',
      description: 'Tailored delivery solutions to meet specific timing and packaging requirements.',
      features: ['Temperature controlled', 'Flexible scheduling', 'Custom packaging', 'Real-time tracking']
    },
    {
      icon: GlobeAltIcon,
      title: 'Export Services',
      description: 'International shipping for overseas customers with proper documentation and certification.',
      features: ['Export certification', 'International shipping', 'Customs handling', 'Quality assurance']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Consultation',
      description: 'Expert advice on avocado selection, storage, and handling for business customers.',
      features: ['Free consultation', 'Storage guidance', 'Quality training', 'Business support']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control from farm to delivery ensuring premium standards.',
      features: ['Pre-delivery inspection', 'Quality certification', 'Return policy', '24/7 support']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive avocado supply solutions tailored to meet the diverse needs of our B2B and B2C customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full btn-secondary">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4">
              Our Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to your table, we ensure quality at every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Harvest', description: 'Hand-picked at perfect ripeness' },
              { step: '02', title: 'Quality Check', description: 'Rigorous inspection process' },
              { step: '03', title: 'Package', description: 'Careful packaging for freshness' },
              { step: '04', title: 'Deliver', description: 'Fast and reliable delivery' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -z-10"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
