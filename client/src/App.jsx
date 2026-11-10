
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  CalendarCheck,
  Wallet,
  Server,
  Database,
  ShieldCheck
} from "lucide-react";

import { checkBackendHealth } from "./services/api";
import "./App.css";

const modules = [
  { title: "Students", icon: GraduationCap, description: "Manage student records" },
  { title: "Teachers", icon: Users, description: "Manage teaching staff" },
  { title: "Academics", icon: BookOpen, description: "Classes and subjects" },
  { title: "Attendance", icon: CalendarCheck, description: "Track daily attendance" },
  { title: "Finance", icon: Wallet, description: "Manage school fees" },
  { title: "Security", icon: ShieldCheck, description: "Manage access and roles" }
];

function App() {
  const [backend, setBackend] = useState("Checking...");

  useEffect(() => {
    checkBackendHealth()
      .then(() => setBackend("Connected"))
      .catch(() => setBackend("Disconnected"));
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <GraduationCap size={32} />
          <span>EduManage</span>
        </div>

        <p className="nav-label">MAIN MENU</p>
        <nav>
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#students">Students</a>
          <a href="#teachers">Teachers</a>
          <a href="#academics">Academics</a>
          <a href="#attendance">Attendance</a>
          <a href="#finance">Finance</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h2>Student Management System</h2>
            <p>School administration overview</p>
          </div>
          <span className="admin-label">Administrator</span>
        </header>

        <section className="welcome">
          <div>
            <p>ADMINISTRATION PANEL</p>
            <h1>Welcome to EduManage</h1>
            <span>
              Your central platform for managing school activities.
            </span>
          </div>
          <GraduationCap size={75} />
        </section>

        <section className="section">
          <h2>System modules</h2>
          <div className="module-grid">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <article className="module-card" key={module.title}>
                  <Icon size={27} />
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section">
          <h2>Development environment</h2>
          <div className="status-grid">
            <div className="status-card">
              <Server />
              <div>
                <strong>Express Backend</strong>
                <p>{backend}</p>
              </div>
              <span className={backend === "Connected" ? "dot online" : "dot"} />
            </div>

            <div className="status-card">
              <Database />
              <div>
                <strong>Supabase</strong>
                <p>Configuration prepared</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
