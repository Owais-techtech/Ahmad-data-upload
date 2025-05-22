const output = document.getElementById("output");

const lines = [
  "Initializing secure connection...",
  "Establishing link with Snapchat servers...",
  "Checking Snapchat password for user: victim_123...",
  "Password found: ********",
  "Accessing phone storage...",
  "Cloning recent images...",
  "Extracting contact list...",
  "Accessing SMS history...",
  "Scanning for bank apps...",
  "Detected: SBI, HDFC, Paytm Bank",
  "Extracting bank credentials...",
  "Uploading data to secure server [172.36.94.22]...",
  "Uploading (45%)...",
  "Uploading (72%)...",
  "Uploading (100%)...",
  "Locating device IP...",
  "Tracing location...",
  "Location found:
  "Contacting regional cyber police...",
  "Alert sent to Cyber Crime Cell...",
  "WARNING: System flagged for illegal activity!",
  "Generating report for authorities...",
  "Finalizing data dump...",
  "Process complete. Disconnecting..."
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "\n";
    i++;
    setTimeout(typeLine, Math.random() * 300 + 100);
  } else {
    output.innerHTML += "\n[Press ESC to exit]";
  }
}

window.onload = typeLine;