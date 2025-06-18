import "./cta.css";
import { LuArrowUpRight } from "react-icons/lu";

export default function SubGithubCTA() {
  const codeString = `
const companies = await expand({
  const dataset = await expand.dataset({
    sources: ['https://www.ycombinator.com/companies'],
    schema: Model('Company', {
      name: Expand.String,
      batch: Expand.String,
      url: Expand.String,
      industry: Expand.String,
    }),
    name: 'yc-companies-db',
  })
  
  const companies = await db.findMany('Company')
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
