import express from 'express'
import axios from 'axios'
import path from 'path'
import { fileURLToPath } from 'url'
import { API_KEY, BASE_URL } from './public/js/config/config.js'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/search', async (req, res) => {
  const { q, page = 1, perPage = 20, category = '' } = req.query
  try {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      q
    )}&page=${page}&per_page=${perPage}&image_type=photo&category=${category}&safesearch=true`

    const response = await axios.get(url)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
