import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js",
    out: "./drizzle",
    dbCredentials: {
        url: 'postgresql://ai-short-videp-generator_owner:t2jAV0uLbGhF@ep-sparkling-paper-a5cm1awt.us-east-2.aws.neon.tech/ai-short-videp-generator?sslmode=require'
    }
});
