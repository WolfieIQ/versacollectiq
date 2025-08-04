#!/bin/bash

echo "🐺 Setting up WolfIQ Git Automation..."

# Ensure Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Please install Git before running this script."
    exit 1
fi

# Setup Git user info
git config --global user.name "Wolf Border"
git config --global user.email "wolf@wolfiq.com"

# Setup useful Git aliases
git config --global alias.stack '!git add . && git commit -m "🧱 Stacked new feature" && git push'
git config --global alias.rollback '!git reset --hard HEAD~1 && git push --force'
git config --global alias.sync '!git pull origin main && git push'

# Create Git branch function
echo '
function gitnew() {
  git checkout -b "feature/$1"
  echo "🧪 New feature branch created: feature/$1"
}
' >> ~/.bashrc

echo "✅ Git aliases set."
echo "✅ Feature branch command added: use \`gitnew your-feature-name\`"

echo "🔥 All done, Wolf. You're now Git-automated and deploy-ready."
