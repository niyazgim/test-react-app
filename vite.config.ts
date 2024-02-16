import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

let base_val = '/'
if(process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY)
  base_val = `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base_val,
});
