import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next"
import { ironSessionConfig } from "./config";

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, ironSessionConfig);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, ironSessionConfig);
}