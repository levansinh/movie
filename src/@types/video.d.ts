interface IServerData {
  filename: string
  link_embed: string
  link_m3u8: string
  name: string
  slug: string
}
export interface IVideo {
  data: {
    episodes: {
      server_data: IServerData[]
      server_name: string
    }[]
  }
}
