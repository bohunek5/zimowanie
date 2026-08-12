import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const routes = ['oferta', 'cennik', 'plac', 'hala', 'kontakt'];
const outputDirectory = new URL('../dist/', import.meta.url).pathname;
const source = join(outputDirectory, 'index.html');

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = join(outputDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(source, join(routeDirectory, 'index.html'));
  }),
);
