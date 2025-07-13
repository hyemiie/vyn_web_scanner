import "./subcta.css";
import { LuArrowUpRight } from "react-icons/lu";

export default function SubGithubCTA() {
  const codeString = `
import sqlite3

def login():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    username = input("Enter your username: ")
    password = input("Enter your password: ")

    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    print("Running query:", query)
    cursor.execute(query)

 


  `;

  // Basic syntax highlighting
  const highlightedCode = codeString
    .replace(/(const|await|new|return)/g, '<span class="code-keyword">$1</span>')
    .replace(/(['"].*?['"])/g, '<span class="code-string">$1</span>')
    .replace(/(\/\/.*?$)/gm, '<span class="code-comment">$1</span>');

  return (
    <div className="subcta-container">
      <div className="subcta-content">
        <div className="subcta-text">
          <h2>02</h2>
          <p>
            {/* Just one more line and we start syncing the result into a dataset.
            You can export this to wherever you need it - be it S3, Postgres,
            or Google Sheets. */}
Combines static analysis (SAST), dependency analysis, and AI-powered code reasoning to surface vulnerabilities across multiple layers of your application. Works seamlessly with modern CI/CD systems          </p>
          <button className="subcta-btn">
            <LuArrowUpRight size={14} color="#e27e8a" />
            Get Custom Documentation
          </button>
        </div>

        <div className="subcta-code">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      </div>
    </div>
  );
}
