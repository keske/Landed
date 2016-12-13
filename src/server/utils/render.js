export const renderFullPage = (html, devPort, domain, initialState = null, head) => {
  const bundleCSS = initialState !== null || process.env.NODE_ENV === 'production'
    ? `<link rel="stylesheet" type="text/css" href="http://${domain}:${devPort}/dist/bundle.css"></style>`
    : '';

  return `
    <!doctype html>
    <meta charset="utf-8">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0">

        <meta property="og:type" content="website" />
        <meta property="og:url" content=${head} />

        ${head ? head.title.toString() : ''}
        ${head ? head.meta.toString() : ''}

        <link rel="stylesheet" type="text/css" href="/static/vendors/bootstrap/bootstrap.min.css"></style>
        <link rel="stylesheet" type="text/css" href="/static/vendors/bootstrap/bootstrap-theme.min.css"></style>
        <link rel="stylesheet" type="text/css" href="/static/vendors/react-select/react-select.css"></style>
        <link rel="stylesheet" type="text/css" href="/static/fonts/index.css"></style>

        <link rel="stylesheet" type="text/css" href="/static/vendors/rc-slider/index.css"></style>

        <style>
          .rc-slider-rail {
            background-color: #373737;
            height: 10px;
            margin-top: -5px;
            border-radius: 5px;
          }

          .rc-slider-track {
            display: none;
          }

          .rc-slider-handle {
            width: 10px;
            height: 10px;

            border: none;

            background: rgb(0,203,162);
            background: -moz-linear-gradient(top, rgba(0,203,162,1) 0%, rgba(0,155,105,1) 100%);
            background: -webkit-linear-gradient(top, rgba(0,203,162,1) 0%,rgba(0,155,105,1) 100%);
            background: linear-gradient(to bottom, rgba(0,203,162,1) 0%,rgba(0,155,105,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00cba2', endColorstr='#009b69',GradientType=0 );
          }
        </style>


        ${bundleCSS}
        <link rel="shortcut icon" href="/static/images/favicon.png" type="image/x-icon">
        ${head ? head.title.toString() : ''}
      </head>
      <body>
        <div id="root">${html}</div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})};
        </script>

        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDN3lvuQwak4fCIrPILC7ZaF5tMZKRPmgI&libraries=places"></script>
        <script src="http://${domain}:${devPort}/dist/vendor.js"></script>
        <script src="http://${domain}:${devPort}/dist/main.js"></script>
      </body>
    </html>
    `;
};
