// @ts-check
import { defineConfig } from 'astro/config';

// Site estatico: nada de servidor, nada de banco, nada de segredo.
// A autenticacao fica no Cloudflare Access, na frente. Ver docs/PLATAFORMA.md secao 4.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
