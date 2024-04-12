import Image from 'next/image'
import Link from 'next/link'

interface IProductItems {
  image: string
  alt: string
  name: string
  time: string
  slug: string
}

export default function ProductItems({ image, alt, name, time, slug }: IProductItems) {
  return (
    <div>
      <Image width={200} height={200} src={image} alt={alt} />
      <div className=''>
        <div className=''>
          <Link href={`/detail/${slug}`}>{name}</Link>
          {/* <span>{time}</span> */}
        </div>
      </div>
    </div>
  )
}
