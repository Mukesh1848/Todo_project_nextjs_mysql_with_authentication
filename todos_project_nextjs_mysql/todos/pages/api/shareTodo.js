import pool from "../../databse/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { todoId, userIds } = req.body;
  console.log("todoId", todoId);
  console.log("userIds", userIds);

  if (!todoId || !userIds || !Array.isArray(userIds)) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    for (const userId of userIds) {
      await pool.query(
        "INSERT INTO shared_todos (todo_id, user_id) VALUES (?, ?)",
        [todoId, userId]
      );
    }

    res.status(200).json({ message: "Todo shared successfully" });
  } catch (error) {
    console.error("Error sharing todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// // import pool from "../../../databse/db";
// import pool from "@/databse/db";

// export default async function handler(req, res) {
//   const { todo_id, user_id } = req.body;
//   //   console.log(todoId, userId);
//   //   res.status(201).json({ todoId, user_id });
//   if (!todo_id || !user_id) {
//     res.status(400).json({ message: "UserId and TodosId is required" });
//   }

//   try {
//     const [response] = await pool.query(
//       "INSERT INTO SHARED_TODOS (todo_id,user_id) values(?,?)",
//       [todo_id, user_id]
//     );
//     res.status(201).json({ message: "Todo Shared SuccessFully...!" });
//   } catch (error) {
//     res.status(401).json({ error, message: "Error when sharing todo" });
//   }
// }
