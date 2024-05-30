import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const createTodoApi = async (todo) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  try {
    const response = await axios.post(`${baseUrl}/create`, todo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTodosApi = async () => {
  const token = localStorage.getItem("token");
  // console.log("Fetch todo api called");
  if (!token) return;
  try {
    const response = await axios.get(`${baseUrl}/todo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("response of Fetch todo api", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodoApi = async (id) => {
  const token = localStorage.getItem("token");
  // console.log("token", token);
  // console.log("id for delete todo", id);
  if (!token) return;
  try {
    await axios.delete(`${baseUrl}/delete`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const fetchTodoByIdApi = async (id) => {
  const token = localStorage.getItem("token");
  // console.log("fetch by id ", id);
  if (!token) return;
  try {
    const response = await axios.get(`${baseUrl}/todo/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

// todo

export const updateTodoApi = async (todo, id) => {
  // console.log("todo inside update api ", id);
  const token = localStorage.getItem("token");
  if (!token) return;
  try {
    const response = await axios.put(
      `${baseUrl}/update`,
      { todo, id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.id);
    console.log(response);
    return response;
  } catch (error) {
    console.log("update todo", error);
    throw error;
  }
};

export const shareTodoApi = async (todoId, userIds) => {
  try {
    const response = await axios.post("/api/shareTodo", { todoId, userIds });
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const showUserNameApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/showUserName`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
