'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Products() {
  const products = [
    {
      name: 'Premium Hass Avocado',
      grade: 'Grade A',
      size: '200-300g',
      description: 'Premium export-quality Hass avocados with perfect skin, optimal oil content, and consistent ripening. Ideal for high-end restaurants, premium retailers, and international markets.',
      features: ['Flawless dark green to black skin', 'Creamy, buttery texture', 'High oil content (15-20%)', 'Extended shelf life', 'Export certification ready'],
      image: '/img/premium-hass.png',
      price: 'Premium pricing',
      target: 'Export • Premium Retail • Fine Dining'
    },
    {
      name: 'Standard Hass Avocado',
      grade: 'Grade B',
      size: '150-250g',
      description: 'High-quality Hass avocados with excellent taste and nutrition. Minor cosmetic variations do not affect the superior flavor and health benefits.',
      features: ['Rich, nutty flavor', 'Smooth creamy flesh', 'Good oil content (12-15%)', 'Fresh daily harvest', 'Local market approved'],
      image: '/img/standard-hass.png',
      price: 'Market competitive',
      target: 'Supermarkets • Restaurants • Cafes'
    },
    {
      name: 'Processing Hass Avocado',
      grade: 'Grade C',
      size: '120-200g',
      description: 'Perfect for food processing, guacamole production, and commercial kitchens. Same nutritional value and taste, with cosmetic imperfections that make them ideal for processing.',
      features: ['Same great nutrition', 'Perfect for mashing/blending', 'Bulk packaging available', 'Cost-effective solution', 'Food service optimized'],
      image: '/img/processing-hass.png',
      price: 'Bulk discount pricing',
      target: 'Food Processing • Catering • Manufacturing'
    }
  ]

  return (
    <section id="products" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
            Premium <span className="text-gradient">Hass Avocado</span> Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We offer three quality grades of authentic Indonesian Hass Avocados, each carefully sorted 
            to meet specific market needs - from premium export quality to cost-effective processing solutions.
            All our avocados are sourced from certified farms and graded according to international standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Grade A - Premium Export Quality</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Grade B - Standard Market Quality</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Grade C - Processing Quality</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.grade}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary-600">{product.size}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Target Market:</span>
                    <span className="text-sm font-medium text-gray-700">{product.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Pricing:</span>
                    <span className="text-sm font-medium text-primary-600">{product.price}</span>
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hass Avocado Quality Standards
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh Station Indonesia follows international grading standards for Hass avocados, ensuring consistent quality and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Export Grade</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Perfect dark green/black skin</li>
                <li>• No blemishes or scarring</li>
                <li>• Optimal firmness (ready-to-ripen)</li>
                <li>• 200-300g uniform size</li>
                <li>• Export certification compliant</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Standard Market Grade</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Minor skin discoloration</li>
                <li>• Small surface marks acceptable</li>
                <li>• Excellent flesh quality</li>
                <li>• 150-250g size range</li>
                <li>• Perfect for retail markets</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing Grade</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Surface imperfections present</li>
                <li>• Irregular shape variations</li>
                <li>• Same nutritional benefits</li>
                <li>• 120-200g mixed sizes</li>
                <li>• Ideal for food manufacturing</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Nutritional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Hass Avocado Nutritional Excellence
            </h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Hass avocados are renowned worldwide for their superior nutritional profile and rich, creamy texture that makes them perfect for both culinary and health applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">320</div>
              <div className="text-primary-100 text-sm">Calories per avocado</div>
              <div className="text-xs text-primary-200 mt-1">High energy density</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">29g</div>
              <div className="text-primary-100 text-sm">Healthy Fats</div>
              <div className="text-xs text-primary-200 mt-1">Monounsaturated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">14g</div>
              <div className="text-primary-100 text-sm">Dietary Fiber</div>
              <div className="text-xs text-primary-200 mt-1">Digestive health</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-primary-100 text-sm">Vitamins & Minerals</div>
              <div className="text-xs text-primary-200 mt-1">Including K, E, C, B6</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Key Health Benefits:</h4>
              <ul className="space-y-1 text-primary-100">
                <li>• Heart-healthy monounsaturated fats</li>
                <li>• Rich in potassium (more than bananas)</li>
                <li>• High in folate and vitamin K</li>
                <li>• Natural source of oleic acid</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Culinary Advantages:</h4>
              <ul className="space-y-1 text-primary-100">
                <li>• Creamy, buttery texture</li>
                <li>• Rich, nutty flavor profile</li>
                <li>• Versatile for sweet & savory dishes</li>
                <li>• Natural emulsifier properties</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
