/* eslint-disable functional/prefer-readonly-type */
import type { AxiosInstance, Method } from "axios"
import type { RouteLocationRaw, Router } from "vue-router"

import Auth from "../Auth"

import CookieOptions from "./CookieOptions"
import AuthDriver from "./drivers/AuthDriver"
import HttpDriver from "./drivers/HttpDriver"
import OAuth2Driver from "./drivers/OAuth2Driver"

type HttpData = {
  url?: string
  method?: Method
  redirect?: RouteLocationRaw
}
type Options = {
  //var
  rolesKey?: string
  rememberKey?: string
  staySignedInKey?: string
  tokenDefaultKey?: string
  tokenImpersonateKey?: string
  stores?: (
    | "cookie"
    | "storage"
    | {
        set: (key: string, value: string, expires: boolean, auth: Auth) => void
        get: (key: string) => string | null
        remove: (key: string) => void
      }
  )[]
  cookie?: CookieOptions

  // Redirects

  authRedirect?: RouteLocationRaw
  forbiddenRedirect?: RouteLocationRaw
  notFoundRedirect?: RouteLocationRaw

  // Http

  registerData?: HttpData & {
    autoLogin?: boolean
    fetchUser?: boolean
    staySignedIn?: boolean
    remember?: boolean
    redirect?: RouteLocationRaw
  }
  loginData?: HttpData & {
    fetchUser?: boolean
    staySignedIn?: boolean
    remember?: boolean
    redirect?: RouteLocationRaw
  }

  logoutData?: HttpData & {
    makeRequest?: boolean
    redirect?: RouteLocationRaw
  }
  fetchData?: Omit<HttpData, "redirect"> & {
    enabled?: boolean
    redirect?: RouteLocationRaw
  }
  refreshData?: Omit<HttpData, "redirect"> & {
    enabled?: boolean
    interval?: number
  }
  impersonateData?: HttpData & {
    fetchUser?: boolean
    redirect?: RouteLocationRaw
  }
  unimpersonateData?: HttpData & {
    fetchUser?: boolean
    makeRequest?: boolean
  }
  oauth2Data?: HttpData & {
    fetchUser?: true
  }

  // External

  getUrl?: () => string
  getCookieDomain?: () => string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseUserData?: <T = any>(obj: any) => T

  // Plugin

  plugins: {
    router: Router
    http: AxiosInstance
  }

  // Driver

  drivers: {
    auth: AuthDriver
    http: HttpDriver
    oauth2?: OAuth2Driver
  }
}

export default Options
