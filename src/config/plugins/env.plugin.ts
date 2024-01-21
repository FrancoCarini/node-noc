import 'dotenv/config'
import * as env from 'env-var'


export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  MAILER_EMAIL: env.get('PORT').required().asEmailString(),
  MAILER_SECRET: env.get('PORT').required().asString(),
  PROD: env.get('PORT').required().asBool()
}