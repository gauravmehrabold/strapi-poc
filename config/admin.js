module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f66c2974eeba087ec630a9b41e60e52c'),
  },
});
