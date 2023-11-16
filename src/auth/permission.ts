export enum Permission {
  ADD_USER = "ADD_USER"
}

export enum Role {
  ROLE_ADMIN = "ROLE_ADMIN"
}

export const roleToPermission = {
  [Role.ROLE_ADMIN]: [Permission.ADD_USER]
}