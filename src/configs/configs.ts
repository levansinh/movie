import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API: z.string()
})

const configProject = configSchema.safeParse(process.env.NEXT_PUBLIC_API)

if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

const envConfig = configProject.data
export default envConfig
