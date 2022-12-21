module.exports = {
  components: {
    categories: [
      {
        name: 'Input',
        include: [
          'src/components/Button/Button.js',
        ]
      },
      {
        name: 'Typography',
        include: [
          'src/components/Heading/Heading.js',
        ]
      }
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-uxpin'
};