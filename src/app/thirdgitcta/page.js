import "./cta.css";
import { LuArrowUpRight } from "react-icons/lu";

export default function ThirdGithubCTA() {
  const codeString = `
import os

def delete_file():
    print("Delete a file from the system")
    filename = input("Enter the filename to delete: ")

    # Unsafe: input directly embedded in shell command
    command = f"rm {filename}"
    print(f"Running: {command}")
    os.system(command)

if __name__ == "__main__":
    delete_file()
`;

  // Basic syntax highlighting
  const highlightedCode = codeString
    .replace(/(const|await|new|return)/g, '<span class="code-keyword">$1</span>')
    .replace(/(['"].*?['"])/g, '<span class="code-string">$1</span>')
    .replace(/(\/\/.*?$)/gm, '<span class="code-comment">$1</span>');

  return (
    <div className="subcta-container">
      <div className="first-subcta-content">
        <div className="subcta-text">
          <h2>03</h2>
          <p>
Modern development moves fast. Security shouldn’t slow you down. Our AI-enhanced tool fits into your existing workflow, scanning every commit and pull request for subtle vulnerabilities , so you never have to trade speed for safety.          </p>
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
