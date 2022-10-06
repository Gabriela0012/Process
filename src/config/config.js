import dotenv from "dotenv";

dotenv.config();


export default{
  app: {
    MODE:process.env.NODE || 'PROD',
    PORT: process.env.PORT || '8080',
    DEBUG: process.env.DEBUG || false
  },
  mongo:{
    MONGO_URL:process.env.MONGO_URL

  }
  
}