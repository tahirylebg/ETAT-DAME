import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadCv(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())

  const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: 'etat-dame/cv', resource_type: 'raw' }, (error, result) => {
        if (error || !result) return reject(error)
        resolve(result)
      })
      .end(buffer)
  })

  return result.secure_url
}