import { Router } from 'express'
import { testDatabaseConnection } from '../config/database.js'

const router = Router()

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

router.get('/health/db', async (_req, res) => {
  const connected = await testDatabaseConnection()
  res.status(connected ? 200 : 503).json({
    status: connected ? 'ok' : 'error',
    database: connected ? 'connected' : 'disconnected',
  })
})

export default router
