import {Permission, Role, roleToPermission} from "./permission";
import {NextFunction, Response} from "express";
import {AccessForbiddenError} from "../error/error.handler";
import {AuthRequest} from "./auth";

export const has =
  (permissions: Permission[]) => (req: AuthRequest, _res: Response, next: NextFunction) => isAllowed(permissions, req.user?.roles) ? next() : next(new AccessForbiddenError());

const isAllowed = (permissions: Permission[], r?: Role[]) =>
  permissions.every((p) => r && mapRolesToPermissions(r)?.includes(p));

export const mapRolesToPermissions = (roles: Role[]) => {
  const permissions = roles.map((role) => roleToPermission[role]).filter(Boolean);

  return Array.from(new Set(permissions.flat()));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const auth = (req: AuthRequest, _res: Response, _next: NextFunction) => {
  req.user = {roles: [Role.ROLE_ADMIN]}
  _next()
}