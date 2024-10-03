import * as Joi from 'joi'

export default Joi.object({

    NODE_ENV: Joi.string().trim().valid('development','test','stagging','production').default('development'),
    DATABASE_PORT:Joi.number().port().default(5432),
    DATABASE_USER:Joi.string().valid("postgres"),
    DATABASE_PASSWORD:Joi.string().required(),
    DATABASE_HOST:Joi.string().required(),
    DATABASE_NAME:Joi.string().required(),
    DATABASE_SYNC:Joi.boolean(),
    DATABASE_AUTOLOAD:Joi.boolean()
})