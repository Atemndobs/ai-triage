#!/bin/bash
# Quick deploy script for AI Triage (bypasses Vercel CLI permission issues)

cd /Users/atem/sites/ai-triage

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 Uncommitted changes detected. Commit message:"
    read -r MESSAGE
    git add .
    git commit -m "$MESSAGE"
else
    echo "✨ No changes to commit, triggering redeploy..."
    git commit --allow-empty -m "chore: redeploy"
fi

echo "🚀 Pushing to GitHub (triggers Vercel auto-deploy)..."
git push origin main

echo "✅ Done! Check deployment at:"
echo "   https://vercel.com/atemndobs-projects/ai-triage"
echo "   https://ai-triage-ruby.vercel.app"
