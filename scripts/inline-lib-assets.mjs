// After `tsc -p tsconfig.lib.json`: the compiled library still has `import portrait from
// '../assets/chris-portrait.jpg'`, which only Vite understands. This rewrites each of those
// imports into a constant holding a data URI, so the library works wherever it is rendered
// and not only inside the site's own build. Used by the Claude Design sync (see
// .design-sync/NOTES.md); the site's own build is untouched.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, resolve } from 'node:path'

const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }
const IMPORT = /^import (\w+) from (['"])(\.{1,2}\/[^'"]+\.(?:jpe?g|png|svg|webp))\2;?[ \t]*$/gm

function* jsFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) yield* jsFiles(p)
    else if (name.endsWith('.js')) yield p
  }
}

let inlined = 0
for (const file of jsFiles('dist-lib')) {
  const before = readFileSync(file, 'utf8')
  const after = before.replace(IMPORT, (whole, name, _quote, rel) => {
    // dist-lib mirrors src/, so '../assets/x.jpg' from dist-lib/components resolves against src/.
    const source = resolve('src', dirname(file).replace(/^dist-lib\/?/, ''), rel)
    const data = readFileSync(source).toString('base64')
    inlined++
    return `const ${name} = "data:${MIME[extname(rel).toLowerCase()]};base64,${data}";`
  })
  if (after !== before) writeFileSync(file, after)
}
console.log(`inline-lib-assets: ${inlined} asset import(s) inlined`)
