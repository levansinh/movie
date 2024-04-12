'use client'
import { useQuery } from '@tanstack/react-query'

import http from '@/configs/axiosConfig'
import ProductItem from '@/components/Products/ProductItem/ProductItem'

export default function Home() {
  const { data, isLoading } = useQuery<IResponse<IProductItem[]>>({
    queryKey: ['movie'],
    queryFn: () => http.get('danh-sach/phim-moi-cap-nhat?page=1')
  })
  return (
    <main className=''>
      <div className='grid grid-cols-4 gap-4'>
        {data?.data.items.map((item) => (
          <ProductItem
            key={item._id}
            name={item.name}
            time={item.modified.time}
            image={item.thumb_url}
            alt={item.slug}
            slug={item.slug}
          />
        ))}
      </div>
    </main>
  )
}
