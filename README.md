# parameterized routes and static files architect repro case

The issue seems to be that if you have a two-level parameterized route (i.e. `GET /:album/:photo`) and use the `@static` helper, when deployed to AWS, the parameterized route takes over for the static helper.

Presumably because the route the static helper operates on is `/_static/{filename}`, which collides with any user-defined two-level parameterized routes.

# Running this Repo

    npm install
    npm start

Load up http://localhost:3333. You should get a JS alert (this comes from an `index.js` file housed as a static file under the `public/` directory of this project. This is expected and desired.
Load up http://localhost:3333/something. You should get a JS alert. This is expected and desired.
Load up http://localhost:3333/something/else. You should get a JS alert. This is expected and desired.

Cool. Shut the sandbox down. Now run `npm run deploy`. Wait for the deploy to AWS to complete.
Load up the AWS URL displayed. Note that there is no JS alert. If you look into the network tab, you can see that the response for the `/_static/index-{fingerprint}.js` file is the HTML returned by the `GET /:album/:photo` route.
