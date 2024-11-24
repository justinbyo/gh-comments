import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT, // Use the token from the .env file
});

async function testConnection() {
  try {
    const response = await octokit.rest.users.getAuthenticated();
    console.log("Connection successful:", response.data);
  } catch (error) {
    console.error("Error connecting to GitHub:", error.message);
  }
}

testConnection();
