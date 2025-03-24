import arc from '@architect/functions';

export const handler = arc.http(async function getIndex (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
  <script src=${arc.static('index.js')}></script>
</head>
<body>this is the /:album route</body>
<pre><code>${JSON.stringify(req, null, 2)}</code></pre>
</html>
`
  }
})
