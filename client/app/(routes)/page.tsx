import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard/Billboard'
import ProductList from '@/components/ProductList/ProductList'
import Container from '@/components/ui/Container/Container'
import React from 'react'

type Props = {}

export const revalidate = 0

async function HomePage({}: Props) {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('f5ef7136-58d3-419e-a043-cd639d7f67a9')
  return (
    <Container>
      <div className={`space-y-10 pb-10`}>
        <Billboard data={billboard} />

        <div className={`flex flex-col gap-y-8 sm:px-6 lg:px-8`}>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
