import { Employee } from "../types";

export const updateEmployee = async (data: Employee) => {
  await fetch(new URL("http://localhost:5000/api/employee/"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const createEmployee = async (data: Employee) => {
  await fetch(new URL("http://localhost:5000/api/employee"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const listEmployee = async (): Promise<Employee[]> => {
    const res = await fetch(new URL("http://localhost:5000/api/employee"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result: Employee[] = (await res.json()) as Employee[];
    return result;
  };

  export const deleteEmployee = async (data: Employee) => {
    await fetch(new URL(`http://localhost:5000/api/employee/${data.id}`), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
  };