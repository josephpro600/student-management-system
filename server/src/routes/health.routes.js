
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Student Management API is running",
    data: {
      application: "Student Management System",
      backend: "Node.js + Express",
      database: "Supabase PostgreSQL",
      supabaseConfigured: true,
      timestamp: new Date().toISOString()
    }
  });
});

export default router;
