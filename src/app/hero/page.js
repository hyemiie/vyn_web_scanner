import Image from "next/image";
import "./hero.css";
import { LuArrowUpRight } from "react-icons/lu";
import { FaCheck, faCheck } from "react-icons/fa";
import Compatibility from "../about/page";
import GithubCTA from "../githubcta/page";
import Footer from "../footer/page";
import SubGithubCTA from "../subgithubcta/page";
import Documentation from "../documentation/page";
import Link from "next/link";
import ScannerBoard from "../scannerboard/page";
import TerminalBox from "./TerminalBox";
import ThemeToggle from "../themetoggle/ThemeToggle";
import '../globals.css'
import ThirdGithubCTA from "../thirdgitcta/page";

export default function Home() {
  const codeString = `
const companies = await expand({
  sources: ['https://www.ycombinator.com/companies'],
  // auto-generated schema by expand.ai
  schema: Model('Company', {
    name: Expand.String,
    batch: Expand.String,
    url: Expand.String,
    industry: Expand.String,
  })
});
  `;
  return (
    <div className="hero">
    
      <div className="hero-page">
      
      {/* <ThemeToggle/> */}
        <div className="hero-container">
          <div className="hero-text">
            <h2>Vyn</h2>
            <div>
          
               Instantly finds security flaws and returns clear, actionable fixes.
              <br/>
              <p style={{fontWeight: "200", fontStyle:'italic'}}>No More Guesswork. Just Clear, AI-Backed Security</p>
            </div>
          </div>
          <ul>
             <li> <FaCheck
                style={{
                  color: "#4A6FA5",
                  fontSize: "12px",
                  fontWeight: "100",
                }}
              />
              Reliable scanning infrastructure</li>
              <li>
              <FaCheck
                style={{
                  color: "#4A6FA5",
                  fontSize: "12px",
                  fontWeight: "200",
                }}
              />{" "}
              Reduce security risks in production</li>
                <li> <FaCheck
                style={{
                  color: "#4A6FA5",
                  fontSize: "12px",
                  fontWeight: "200",
                }}
              />{" "}
           Great developer experience</li>
                <li> <FaCheck
                style={{
                  color: "#4A6FA5",
                  fontSize: "12px",
                  fontWeight: "200",
                }}
              />{" "}
           AI-Powered Fixes</li>
          </ul>
        </div>
        <div className="second-half">
          {/* <div className="terminal-container">
            <div className="terminal-div">
              <pre
                style={{
                  backgroundColor: "#f4f4f4",
                  borderRadius: "5px",
                  overflowX: "auto",
                  height: "'100%",
                }}
              >

                <code>{codeString}</code>
              </pre>
            </div>
          </div> */}
          <TerminalBox/>
          
        </div>
      </div>
      <div className="btn-div">
        <button className="heros-btn">
          <LuArrowUpRight size={14} color="rgb(40, 86, 120)" style={{color:"white"}} />
          <Link href='/documentation' style={{color:"white"}}>Read documentation
</Link>
        </button>
      </div>
      <Compatibility />
      <GithubCTA />
      <SubGithubCTA/>
      <ThirdGithubCTA/>
      <Footer/>

    </div>
  );
}
