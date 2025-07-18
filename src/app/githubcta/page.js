import "./cta.css";
import { LuArrowUpRight } from "react-icons/lu";

export default function SubGithubCTA() {
  const codeString = `
def calculate_expression():
    print("Simple Calculator")
    user_input = input("Enter a math expression (e.g. 2 + 3 * 4): ")
    
    try:
        # WARNING: This is dangerous!
        result = eval(user_input)
        print("Result:", result)
    except Exception as e:
        print("Invalid input:", e)

if __name__ == "__main__":
    calculate_expression()
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
          <h2>01</h2>
          <p>
        Scan your code, spot vulnerabilities, while the AI layer catches less obvious issues like misconfigurations, API misuse, and insecure patterns, all before your code reaches production
          </p>
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
