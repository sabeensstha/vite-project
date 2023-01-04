enum UserRoles {
  admin = "admin",
  manager = "manager",
  staff = "staff",
}

const userRoles = {
  admins: [
    String(UserRoles.admin),
    String(UserRoles.manager),
    String(UserRoles.staff),
  ],
  users: [String(UserRoles.staff)],
  manager: [String(UserRoles.manager), String(UserRoles.staff)],
};

export {};
