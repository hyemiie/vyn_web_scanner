"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Shield,
  Code,
  FileText,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Github,
  TerminalIcon,
} from "lucide-react";
import "./boards.css";
import axios from "axios";
import "../globals.css";

const ScannerBoard = () => {
  const [repolink, setRepoLink] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseScanResult = (resultText) => {
    if (!resultText) return [];

    const issues = [];
    const sections = resultText.split(
      "=================================================="
    );

    sections.forEach((section) => {
      if (section.trim()) {
        const lines = section.split("\n").filter((line) => line.trim());
        const issue = {};
        let collectingSuggestion = false;
        let suggestionLines = [];

        lines.forEach((line) => {
          if (line.includes("→ Issue      :")) {
            issue.title = line.replace("→ Issue      :", "").trim();
          } else if (line.includes("→ File       :")) {
            issue.file = line.replace("→ File       :", "").trim();
          } else if (line.includes("→ Line       :")) {
            issue.line = line.replace("→ Line       :", "").trim();
          } else if (line.includes("→ Severity   :")) {
            issue.severity = line.replace("→ Severity   :", "").trim();
          } else if (line.includes("→ Confidence :")) {
            issue.confidence = line.replace("→ Confidence :", "").trim();
          } else if (line.includes("→ AI Suggestion:")) {
            collectingSuggestion = true;
            suggestionLines.push(line.replace("→ AI Suggestion:", "").trim());
          } else if (collectingSuggestion) {
            suggestionLines.push(line);
          }
        });

        if (suggestionLines.length > 0) {
          issue.suggestion = suggestionLines.join("\n").trim();
        }

        if (issue.title) {
          issues.push(issue);
        }
      }
    });

    return issues;
  };

  const scanrepo = async () => {
    if (repolink) {
      setLoading(true);
      setError(null);
      setScanResult(null);

      try {
        // Remove the mock response and use the actual API call
        const response = await axios.post("https://cautious-anne-corinne-yemi-21a9f9d2.koyeb.app/scan_repo/", {
          repo_url: repolink,
        });

        console.log("Scan successfuldd:", response);
        setScanResult(response.data);
        // if (response.data.report && response.data.report.startsWith("=====")) {
        //   setScanResult(response.data.report);
        // } else setError(response.data.report);
      } catch (error) {
        console.error("Error scanning repo:", error);
        setError('Failed to scan the repository. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a repository URL.");
    }
  };

  const getSeverityClass = (severity) => {
    switch (severity?.toUpperCase()) {
      case "HIGH":
        return "severity-high";
      case "MEDIUM":
        return "severity-medium";
      case "LOW":
        return "severity-low";
      default:
        return "severity-default";
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity?.toUpperCase()) {
      case "HIGH":
        return <AlertTriangle className="severity-icon-medium" />;
      case "MEDIUM":
        return <Shield className="severity-icon-medium" />;
      case "LOW":
        return <Shield className="severity-icon-small" />;
      default:
        return <Shield className="severity-icon-small" />;
    }
  };

  const issues = scanResult ? parseScanResult(scanResult.report) : [];

  const IssueCard = ({ issue, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="issue-card">
        <div
          className="issue-header"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="issue-header-content">
            <div className="issue-info">
              <div className="issue-badges">
                <span
                  className={`severity-badge ${getSeverityClass(
                    issue.severity
                  )}`}
                >
                  {getSeverityIcon(issue.severity)}
                  {issue.severity}
                </span>
                <span className="confidence-badge">
                  <FileText className="confidence-icon" />
                  {issue.confidence} Confidence
                </span>
              </div>
              <h3 className="issue-title">{issue.title}</h3>
              <div className="issue-details">
                <span className="issue-file">
                  <Code className="file-icon" />
                  {issue.file?.split("\\").pop() || "Unknown file"}
                </span>
                <span>Line {issue.line}</span>
              </div>
            </div>
            <div className="chevron-icon">
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="issue-expanded">
            <div className="suggestion-section">
              <h4 className="suggestion-title">
                <Lightbulb className="suggestion-icon" />
                AI Suggestion
              </h4>
              <div className="suggestion-content">{issue.suggestion}</div>
            </div>
            <div className="full-path">Full path: {issue.file}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="scanner-container">
      <div className="scanner-wrapper">
        <div className="scanner-header">
          {/* <h2 className="scanner-title">
                        <Shield className="scanner-title-icon" />
                        Security Scanner
                    </h2> */}

          <div className="scanner-form">
            <input
              className="scanner-input"
              placeholder="Paste public git repository URL"
              value={repolink}
              onChange={(e) => setRepoLink(e.target.value)}
            />
            <button
              onClick={scanrepo}
              disabled={loading}
              className="scanner-button"
            >
              {loading ? <TerminalIcon /> : <Github />}
            </button>
          </div>

          {loading && (
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <span>Scanning repository...</span>
            </div>
          )}

          {error && <div className="error-message">{error}</div>}
        </div>

        {scanResult && (
          <div className="results-container">
            <div className="results-header">
              {/* <h3 className="results-title">Scan Results</h3> */}
              <div className="results-summary">
                <span className="results-count">
                  {issues.length} issue{issues.length !== 1 ? "s" : ""} found
                </span>
                <div className="severity-badges">
                  {["HIGH", "MEDIUM", "LOW"].map((severity) => {
                    const count = issues.filter(
                      (issue) => issue.severity === severity
                    ).length;
                    if (count > 0) {
                      return (
                        <span
                          key={severity}
                          className={`severity-badge ${getSeverityClass(
                            severity
                          )}`}
                        >
                          {count} {severity}
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            {issues.length > 0 ? (
              <div>
                {issues.map((issue, index) => (
                  <IssueCard key={index} issue={issue} index={index} />
                ))}
              </div>
            ) : (
              <div className="no-issues">
                <Shield className="no-issues-icon" />
                <p className="no-issues-title">No security issues found!</p>
                <p className="no-issues-subtitle">
                  Your repository appears to be secure.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScannerBoard;
