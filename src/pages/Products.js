import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'

function Products() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await fetch('https://codexplained.se/cars.php')
    const products = await data.json()
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper
      as={motion.div}
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.url} alt={product.url} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>
              <Button
                as={motion.button}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                View
              </Button>{' '}
            </Link>
          </div>
        ))}
      </section>
    </PageWrapper>
  )
}

export default Products
