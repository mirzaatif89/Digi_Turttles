// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The dev-only devtools plugin injects data-tsd-source on every JSX element; React Three Fiber
// treats that as a three.js property and crashes. Strip it from 3D scene files.
const stripTsdSourceFrom3D = {
  name: "strip-tsd-source-3d",
  enforce: "post" as const,
  transform(code: string, id: string) {
    if (!/src\/components\/.*Scene\.tsx/.test(id)) return;
    if (!code.includes("data-tsd-source")) return;
    return { code: code.replace(/\s*"?data-tsd-source"?\s*[:=]\s*"[^"]*",?/g, ""), map: null };
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [stripTsdSourceFrom3D],
    // Pre-bundle the lazily loaded 3D libs so Vite doesn't re-optimize mid-session (that
    // reload leaves two React copies and crashes hooks with "reading 'useState'").
    optimizeDeps: { include: ["three", "@react-three/fiber", "@react-three/drei"] },
  },
});
