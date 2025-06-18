// components/Footer.js
import './footer.css'
export default function Footer() {
  return (
 <footer className="terminal-footer">
  <div className="terminal-line">
   Built to collaborate with you. Secured by AI.
  </div>
  <div className="terminal-sub">
    <span className="prompt">&gt;_</span>&copy; {new Date().getFullYear()} SecureScan
  </div>
</footer>



  );
}
