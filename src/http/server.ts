import fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'

import cookie from '@fastify/cookie'
import fastifyWebsocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'
import { env } from './env'

const app = fastify()

app.register(cookie, {
	secret: 'my-secret',
	hook: 'onRequest',
})

app.register(fastifyWebsocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: +env.PORT }).then((url) => {
	console.log(`🚀 Server is running on ${url}`)
})
