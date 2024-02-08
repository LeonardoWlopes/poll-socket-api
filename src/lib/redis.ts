import { Redis } from 'ioredis'

export const redis = new Redis()

redis.on('connect', () => {
	console.log('\x1b[36mConnected to Redis\x1b[0m ✅')
})
