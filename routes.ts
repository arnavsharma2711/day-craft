/**
 * An array of routes that are public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = [
  "/"
];

/**
 * An array of routes that are private.
 * These routes require authentication.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
];

/**
 * Prefix for API Authentication routes.
 * Routes that start with this prefix are for API Authentication purpose.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after login.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
