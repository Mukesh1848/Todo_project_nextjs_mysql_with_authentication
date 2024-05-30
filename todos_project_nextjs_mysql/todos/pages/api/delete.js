import pool from "../../databse/db";
import { authenticateToken } from "../../utils/auth";

// export default async function handler(req, res) {
//   authenticateToken(req, res, async () => {
//     const { id } = req.body;
//     // const userId = req.user.id;

//     try {
//       const [result] = await pool.query;
//       // "DELETE FROM Todo WHERE id = ? AND user_id = ?", [id, userId];
//       "DELETE FROM TODO WHERE ID = ?", [id];
//       res.status(202).json({ message: "Todo deleted successfully" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: error.message });
//     }
//   });
// }

/*

export default async function handler(req, res) {
  // Ensure the request method is DELETE
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  authenticateToken(req, res, async () => {
    const { id } = req.body;

    // Check if the ID is provided
    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    try {
      const [result] = await pool.query("DELETE FROM Todo WHERE id = ?", [id]);

      // Check if any rows were affected
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "TODO item not found" });
      }

      res.status(200).json({ message: "TODO item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}


*/

// import pool from "../../../database/db";
// import { authenticateToken } from "../../../utils/auth";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  authenticateToken(req, res, async () => {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    try {
      // Start a transaction
      // await pool.query("START TRANSACTION");

      // Delete related entries in shared_todos
      // await pool.query("DELETE FROM shared_todos WHERE todo_id = ?", [id]);

      // Delete the TODO item (Here we are Using cascade method to delete todo)
      const [result] = await pool.query("DELETE FROM Todo WHERE id = ?", [id]);

      // Commit the transaction
      // await pool.query("COMMIT");

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "TODO item not found" });
      }

      res.status(200).json({ message: "TODO item deleted successfully" });
    } catch (error) {
      // Rollback the transaction in case of an error
      await pool.query("ROLLBACK");
      res.status(500).json({ error: error.message });
    }
  });
}
