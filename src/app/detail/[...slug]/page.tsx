'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import http from '@/configs/axiosConfig'
import RenderVideo from '@/components/Video/RenderVideo/RenderVideo'
import { IVideo } from '@/@types/video'

export default function DetailPage() {
  const params = useParams()
  const slug = params.slug[0]
  console.log(slug)
  const { data: dataMovie, isLoading } = useQuery<IVideo>({
    queryKey: ['movie-detail'],
    queryFn: () => http.get(`/phim/${slug}`)
  })

  console.log(dataMovie && dataMovie.data.episodes[0].server_data[0].link_m3u8)

  return (
    <div>
      <RenderVideo url='https://s3.phim1280.tv/20240412/YjVEveju/index.m3u8' />
    </div>
  )
}
