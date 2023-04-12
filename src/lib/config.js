export const ironSessionConfig = {
  cookieName: 'sinabyr-session',
  password: process.env.IRON_SESSION_PASS,
  // ttl: 100,
  cookieOptions: {
    maxAge: 3600,
    secure: process.env.NODE_ENV === "production",
  }
}