import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const sets = {
  Any: 'Binary_Property/Any',
  Cc: 'General_Category/Control',
  Cf: 'General_Category/Format',
  P: 'General_Category/Punctuation',
  S: 'General_Category/Symbol',
  Z: 'General_Category/Separator'
}

function unicodeProperties() {
  const virtualId = '\0uc-micro:unicode'

  return {
    name: 'unicode-properties',

    resolveId(id) {
      if (id === 'uc-micro:unicode') return virtualId
    },

    // Generate JavaScript module with regular expressions.
    load(id) {
      if (id !== virtualId) return null

      return Object.entries(sets).map(([name, path]) => {
        const { characters } = require(`regenerate-unicode-properties/${path}.js`)

        return `export const ${name} = ${characters.toRegExp()}`
      }).join('\n')
    },

    // Generate TypeScript declarations.
    generateBundle(options) {
      if (options.format !== 'es') return

      const source = Object.keys(sets)
        .map(name => `export declare const ${name}: RegExp`)
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'index.d.ts',
        source: `${source}\n`
      })
    }
  }
}

export default {
  input: 'uc-micro:unicode',
  plugins: [ unicodeProperties() ],
  output: [
    {
      file: 'build/index.mjs',
      format: 'es'
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs'
    }
  ]
}
