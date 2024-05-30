import pool from "../../databse/db";
import { authenticateToken } from "../../utils/auth";

export default async function handler(req, res) {
  authenticateToken(req, res, async () => {
    const { id, todo } = req.body;

    // console.log(req.body);

    if (!id || !todo.title || !todo.description) {
      // console.log("Missing required fields:", { id, title:todo.title,description:todo.description });
      return res
        .status(400)
        .json({ error: "ID ,title, and description are required" });
    }

    try {
      const [result] = await pool.query(
        "UPDATE Todo SET title = ?, description = ? WHERE id = ?",
        [todo.title, todo.description, id]
      );

      res
        .status(200)
        .json({ id, title: todo.title, description: todo.description });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
