'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Image, 
  Printer, 
  CheckCircle,
  Star,
  Truck,
  Shield,
  Clock,
  Palette,
  FileImage,
  Leaf
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const EkolojikCerceve = () => {
  const products = [
    {
      id: 1,
      name: '10x15 cm Ekolojik Çerçeve',
      description: 'Küçük boyut ekolojik çerçeve',
      price: '30₺',
      features: ['Doğa dostu', 'Yüksek kalite', 'Sürdürülebilir'],
      image: '/images/ekolojik-10x15.jpg'
    },
    {
      id: 2,
      name: '15x21 cm Ekolojik Çerçeve',
      description: 'Orta boyut ekolojik çerçeve',
      price: '45₺',
      features: ['Çevre dostu', 'Net görüntü', 'Profesyonel'],
      image: '/images/ekolojik-15x21.jpg'
    },
    {
      id: 3,
      name: '20x30 cm Ekolojik Çerçeve',
      description: 'Büyük boyut ekolojik çerçeve',
      price: '70₺',
      features: ['Büyük boyut', 'Kaliteli malzeme', 'Dekoratif'],
      image: '/images/ekolojik-20x30.jpg'
    }
  ]

  const features = [
    {
      icon: Leaf,
      title: 'Doğa Dostu',
      description: 'Sürdürülebilir malzemeler'
    },
    {
      icon: Shield,
      title: 'Çevre Dostu',
      description: 'Ekolojik üretim süreci'
    },
    {
      icon: Clock,
      title: 'Hızlı Baskı',
      description: 'Aynı gün teslimat imkanı'
    },
    {
      icon: Palette,
      title: 'Canlı Renkler',
      description: 'RGB renk paleti ile gerçekçi renkler'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Ekolojik Çerçeve
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Doğa dostu sürdürülebilir çerçeve
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Doğa dostu</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Sürdürülebilir</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Çevre dostu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Ekolojik Çerçeve Boyutları
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun ekolojik çerçeve boyutunu seçin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <FileImage className="text-green-600 text-4xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="text-2xl font-bold text-green-600 mb-4">
                    {product.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-800">Özellikler:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                    Sipariş Ver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Ekolojik Çerçevenizi Hemen Basın
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Doğa dostu ekolojik çerçeve için hemen sipariş verin
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Siparişe Başla
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EkolojikCerceve