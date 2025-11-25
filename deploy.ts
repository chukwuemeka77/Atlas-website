import { execSync } from "child_process";

function deploy() {
  try {
    console.log("Deploying Atlas Website to Vercel...");
    
    // Build the Next.js app
    execSync("npm run build", { stdio: "inherit" });
    
    // Deploy using Vercel CLI
    execSync("npx vercel --prod --confirm", { stdio: "inherit" });

    console.log("✅ Deployment complete!");
  } catch (err) {
    console.error("❌ Deployment failed:", err);
  }
}

deploy();
