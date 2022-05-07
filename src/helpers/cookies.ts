// helper for reusable function
import { setCookie } from 'nookies'

interface ICookies {
  access_token: string
  refresh_token: string
}

/* set access & refresh token cookies */
export const setAuthCookies = (data: ICookies) => {
  setCookie(null, 'access_token', data.access_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.COOKIES_DOMAIN,
    path: '/',
  })
  setCookie(null, 'refresh_token', data.refresh_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.COOKIES_DOMAIN,
    path: '/',
  })
  return false
}
