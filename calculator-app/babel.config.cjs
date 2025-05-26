module.exports = {
    presets: [
      // Transforma ES2015+ según tu versión de Node y React
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react'
    ]
  }
  