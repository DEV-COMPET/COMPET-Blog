module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '76a81aa314f8e3d966485dd0d38b0b4a'),
  },
});
