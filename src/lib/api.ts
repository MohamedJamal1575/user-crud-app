
export const api = {
  getUsers: () => fetch("/api/users").then(res => res.json()),

  createUser: (data: any) =>
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateUser: (data: any) =>
    fetch("/api/users", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteUser: (id: string) =>
    fetch("/api/users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    }),
};
