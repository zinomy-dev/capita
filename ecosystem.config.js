module.exports = {
  apps : [
   {
      name   : "FrontEnd",
      script : "npm",
      args: "run prod",
      watch: true,
      ignore_watch:[ "node_modules", './*', '.*' ],
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    },
    {
      name   : "API",
      script : "./server/index.js",
      args: "run prod",
      watch: true,
      ignore_watch:[ "node_modules", './*', '*.log' ],
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
}