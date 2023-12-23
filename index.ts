import winston from "winston"

const logger = winston.createLogger({
   level: "info",
   format: winston.format.combine(
      // winston.format.colorize({ all: true }),
      winston.format.timestamp({
         format: "YYYY-MM-DD HH:mm:ss"
      }),
      winston.format.align(),
      winston.format.printf((info) => {
         console.log(info.message)
         console.log(typeof info.message)
         return `[${info.timestamp}] ${info.level}: ${typeof info.message === "object" ? JSON.stringify(info.message, null, 2) : info.message}`
      })
   ),
   transports: [
      new winston.transports.Console(),
      new winston.transports.File({
         filename: "logs/info.log",
         format: winston.format.combine(
            winston.format.json()
         )
      })
   ]
})

logger.info("Hello world!")
logger.error("Hello world!")
console.log(typeof {
   test: "Hello world!"
})
logger.info({
   test: "Hello world!"
})