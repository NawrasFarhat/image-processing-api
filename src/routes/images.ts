import express, { Request, Response } from 'express'
import resizeImage from '../utilities/resizeImage'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename as string
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)

  if (!filename || !width || !height) {
    return res.status(400).send('Missing parameters')
  }

  try {
    const imagePath = await resizeImage(filename, width, height)
    res.sendFile(imagePath)
  } catch {
    res.status(500).send('Error processing image')
  }
})

export default router