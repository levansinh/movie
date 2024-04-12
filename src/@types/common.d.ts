interface IProductItem {
  name: string
  origin_name: string
  poster_url: string
  slug: string
  thumb_url: string
  year: number
  _id: string
  modified: {
    time: string
  }
}

interface IPagination {
  currentPage: number
  totalItems: number
  totalItemsPerPage: number
  totalPages: number
}

interface IResponse<T = any> {
  data: {
    items: T
    pagination: IPagination
    status: boolean
  }
}
