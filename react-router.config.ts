import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: false, // switch off for now, as I don't think the textarea component works with SSR
  presets: [vercelPreset()],
} satisfies Config;
