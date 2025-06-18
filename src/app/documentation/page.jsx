"use client";

import { useState, useEffect } from "react";
import "./documentation.css";
import '../globals.css'

const Documentation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkTheme(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Installation", href: "#installation", active: true },
        { name: "Quick Start", href: "#quickstart" },
        { name: "Basic Usage", href: "#basic-usage" },
      ],
    },
    {
      title: "CLI Reference",
      items: [{ name: "Commands", href: "#commands" }],
    },
    {
      title: "Vulnerability Types",
      items: [{ name: "Common Patterns", href: "#patterns" }],
    },
    {
      title: "Advanced",
      items: [
        { name: "Configuration", href: "#configuration" },
        { name: "Contributing", href: "#contributing" },
      ],
    },
  ];

  return (
    <div className="docs-container">
      <div className="mobile-menu-btn">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="menu-toggle"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-icon">{sidebarOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <div className="docs-layout">
        <nav className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3 className="sidebar-title">VYN Documentation</h3>
            </div>

            {navigation.map((section) => (
              <div key={section.title} className="nav-section">
                <h4 className="nav-title">{section.title}</h4>
                <div className="nav-links">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`nav-link ${item.active ? "active" : ""}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {sidebarOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div className="main-container">

        <main className="main-content">
          <header className="page-header">
            <h1 className="page-title">Vyn Security Scanner</h1>
            <p className="page-subtitle">
              A Python CLI tool that scans your codebase for security vulnerabilities
            </p>
            <div className="badge-container">
              <span className="badge">Python 3.7+</span>
              <span className="badge">MIT License</span>
              <span className="badge">v0.1.0</span>
            </div>
          </header>

          <section id="installation" className="content-section">
            <h2 className="section-title">Installation</h2>
            <p className="section-text">
              Install Vyn using pip or from source:
            </p>

            <div className="install-options">
              <div className="install-card">
                <div className="install-label">
                  <span className="install-icon">📦</span>
                  From PyPI (Recommended)
                </div>
                <div className="code-block">
                  pip install vyn
                </div>
              </div>

              <div className="install-card">
                <div className="install-label">
                  <span className="install-icon">🔧</span>
                  From Source
                </div>
                <div className="code-block">
                  git clone https://github.com/hyemiie/vyn.git
                  <br />
                  cd vyn
                  <br />
                  pip install .
                </div>
              </div>
            </div>
          </section>

          <section id="quickstart" className="content-section">
            <h2 className="section-title">Quick Start</h2>
            <p className="section-text">
              Get started with Vyn in seconds. Run a basic scan on your project:
            </p>

            <div className="code-block large">
              <pre>
                {`# Scan current directory
vyn scan .

# Scan specific file
vyn scan myfile.py`}
              </pre>
            </div>

            <div className="info-box">
              <span className="info-icon">💡</span>
              <div>
                <strong>Pro Tip:</strong> Run{" "}
                <code className="inline-code">vyn --help</code>{" "}
                to see all available commands and options.
              </div>
            </div>
          </section>

         

          <section id="basic-usage" className="content-section">
            <h2 className="section-title">Basic Usage</h2>

            <h3 className="subsection-title">Scanning Files</h3>
            <p className="section-text">
              Vyn can scan individual files, directories, or entire projects:
            </p>

            <div className="code-block large">
              <pre>
                {`# Single file
vyn scan app.py

# Entire directory (recursive)
vyn scan /path/to/project

# Current directory
vyn scan .`}
              </pre>
            </div>

            <h3 className="subsection-title">Understanding Results</h3>
            <p className="section-text">
              Vyn categorizes vulnerabilities by severity and provides detailed
              information:
            </p>

            <div className="severity-grid">
              <div className="severity-item critical">
                <div className="severity-label">Critical</div>
                <div className="severity-desc">Immediate action required</div>
              </div>
              <div className="severity-item high">
                <div className="severity-label">High</div>
                <div className="severity-desc">Should be fixed soon</div>
              </div>
              <div className="severity-item medium">
                <div className="severity-label">Medium</div>
                <div className="severity-desc">Consider fixing</div>
              </div>
              <div className="severity-item low">
                <div className="severity-label">Low</div>
                <div className="severity-desc">Minor issues</div>
              </div>
            </div>
          </section>

          <section id="commands" className="content-section">
            <h2 className="section-title">CLI Commands</h2>

            <div className="command-list">
              <div className="command-item">
                <div className="command-header">
                  <code className="command-name">
                    vyn scan [PATH]
                  </code>
                  <span className="command-badge">Primary</span>
                </div>
                <p className="command-desc">
                  Scan files or directories for security vulnerabilities
                </p>
                <div className="command-example">
                  <strong>Example:</strong>{" "}
                  <code className="inline-code">
                    vyn scan ./src --format table
                  </code>
                </div>
              </div>

              <div className="command-item">
                <div className="command-header">
                  <code className="command-name">
                    vyn version
                  </code>
                </div>
                <p className="command-desc">
                  Show version information and exit
                </p>
              </div>
            </div>
          </section>

          <section id="patterns" className="content-section">
            <h2 className="section-title">Common Vulnerability Patterns</h2>
            <p className="section-text">
              Vyn detects various security vulnerabilities commonly found in
              Python code:
            </p>

            <div className="pattern-grid">
              <div className="pattern-card">
                <div className="pattern-header">
                  <span className="pattern-icon">🛡️</span>
                  <h4>SQL Injection</h4>
                </div>
                <p>
                  Detects unsafe SQL query construction and dynamic query
                  building
                </p>
                <div className="code-block small">
                  <pre>{`# Vulnerable
query = f"SELECT * FROM users WHERE id = {user_id}"

# Safe
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_id,))`}</pre>
                </div>
              </div>

              <div className="pattern-card">
                <div className="pattern-header">
                  <span className="pattern-icon">🔐</span>
                  <h4>Hardcoded Secrets</h4>
                </div>
                <p>
                  Finds API keys, passwords, and other secrets in source code
                </p>
                <div className="code-block small">
                  <pre>{`# Vulnerable
API_KEY = "sk-1234567890abcdef"

# Safe
API_KEY = os.getenv('API_KEY')`}</pre>
                </div>
              </div>

              <div className="pattern-card">
                <div className="pattern-header">
                  <span className="pattern-icon">⚡</span>
                  <h4>Command Injection</h4>
                </div>
                <p>Identifies unsafe system command execution</p>
                <div className="code-block small">
                  <pre>{`# Vulnerable
os.system(f"rm {filename}")

# Safe
subprocess.run(['rm', filename], check=True)`}</pre>
                </div>
              </div>

              <div className="pattern-card">
                <div className="pattern-header">
                  <span className="pattern-icon">🌐</span>
                  <h4>Path Traversal</h4>
                </div>
                <p>Detects unsafe file path operations</p>
                <div className="code-block small">
                  <pre>{`# Vulnerable
open(f"./files/{user_input}")

# Safe
safe_path = os.path.join('./files', 
    os.path.basename(user_input))`}</pre>
                </div>
              </div>
            </div>
          </section>

          <section id="configuration" className="content-section">
            <h2 className="section-title">Configuration</h2>
            <p className="section-text">
              Customize Vyn's behavior with a configuration file (
              <code className="inline-code">
                .vyn.yml
              </code>
              ):
            </p>

            <div className="code-block large">
              <pre>
                {`# .vyn.yml
scan:
  exclude_patterns:
    - "*/tests/*"
    - "*/venv/*"
    - "*.pyc"
  
  severity_threshold: "medium"
  
  rules:
    enabled:
      - sql-injection
      - hardcoded-secrets
      - command-injection
      - path-traversal
    
    disabled:
      - weak-crypto

output:
  format: "table"
  show_context: true
  max_lines: 3

integrations:
  github_actions: true
  pre_commit: true`}
              </pre>
            </div>
          </section>

          <section id="integration" className="content-section">
            <h2 className="section-title">CI/CD Integration</h2>

            <h3 className="subsection-title">GitHub Actions</h3>
            <div className="code-block large">
              <pre>
                {`name: Security Scan
on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      
      - name: Install Vyn
        run: pip install vyn
      
      - name: Run Security Scan
        run: vyn scan . --format json --output results.json
      
      - name: Upload Results
        uses: actions/upload-artifact@v3
        with:
          name: security-results
          path: results.json`}
              </pre>
            </div>
          </section>
        </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;