// import { defineConfig } from "sanity";
// import {structureTool} from "sanity/structure";
// import schemas from "";

// const config = defineConfig({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
//   title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
//   dataset: "production",
//   apiVersion: "2023-06-18",
//   basePath: "/admin",
//   plugins: [structureTool()],
//   schema: { types: schemas },
// });

// export default config;


'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { codeInput } from '@sanity/code-input'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './app/sanity/env'
import {schema} from './app/sanity/schemaTypes'
import {structure} from './app/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    codeInput(),
  
  ],
})
