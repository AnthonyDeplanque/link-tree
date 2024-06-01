import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.GIVEAWAY_SECRET': JSON.stringify(env.GIVEAWAY_SECRET),
      'process.env.TWITCH_CLIENT_ID': JSON.stringify(env.TWITCH_CLIENT_ID),
      'process.env.TWITCH_SECRET': JSON.stringify(env.TWITCH_SECRET),
      'process.env.LOCATION_URL': JSON.stringify(env.LOCATION_URL)
    },
    plugins: [react()],
  };
});
