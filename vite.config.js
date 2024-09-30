import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        count: resolve(__dirname, "./src/pages/count/index.html"),
        register: resolve(__dirname, "./src/pages/count/index.html"),
      },
    },
  },
};
