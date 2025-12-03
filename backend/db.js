import {neon} from '@neondatabase/serverless'
import "dotend/config";

export const sql =neon(process.env.DATABASE_URL)