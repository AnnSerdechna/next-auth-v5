/**
 * An array of routes that are accessible to the public
 * These routes do not require authentification
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  '/'
];

/**
 * An array of routes that are used for authentification
 * These routes will redirect logged in users to 'setting
 * @type {string[]}
 */
export const authRoutes: string[] = [
  '/auth/login',
  '/auth/register'
];

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/settings';