import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  petstore: {
    from: {
      // source: "url",
      // url: "https://raw.githubusercontent.com/anymaniax/orval/master/samples/react-query/basic/petstore.yaml",
      source: "file",
      relativePath: "./api-specs/petstore.yaml",
    },

    outputDir: "generated/petstore",

    to: async (context) => {
      const filenamePrefix = "petstore";

      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });

      await generateReactQueryComponents(context, {
        // all CORS headers
        injectedHeaders: [
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept, Origin, Accept-Language, Access-Control-Request-Method, Access-Control-Request-Headers",
        ],
        filenamePrefix,
        schemasFiles,
      });
    },
  },

  github: {
    from: {
      // source: "url",
      // url: "https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml",
      source: "url",
      url: "https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.json",
      // source: "file",
      // relativePath: "./api-specs/github.yaml",
    },

    outputDir: "generated/github",

    to: async (context) => {
      const filenamePrefix = "github";

      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });

      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },

  rewards: {
    from: {
      source: "url",
      url: "https://rewards-microservice.onrender.com/",
    },

    outputDir: "generated/rewards",

    to: async (context) => {
      const filenamePrefix = "rewards";

      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });

      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
