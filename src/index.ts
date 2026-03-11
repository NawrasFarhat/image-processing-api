import express from 'express'
import imageRoutes from './routes/images'

const app = express()
const port = 3000

app.use('/api/images', imageRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app