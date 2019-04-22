const gplay = require('google-play-scraper');

module.exports = router => {

  router.get(
    "/api/analysis/wire/info",
    (req, res) => {
      gplay.app({
          appId: 'com.wire'
        })
        .then(data => {
          res.status(200).json(data);
        }).catch(err => {
          console.log(err);

          res.status(404).json({
            error: 'There was an error obtaining the app info'
          });
        });
    }
  );

  return router;
}
