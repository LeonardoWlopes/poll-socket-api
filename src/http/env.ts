import z from 'zod'

const envSchema = z.object({
	PORT: z.string().default('3000'),
	DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
	console.error(_env.error.flatten().fieldErrors)
	process.exit(1)
}

export const env = _env.data
