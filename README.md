# Team-Trustchain
Banking Fraud Prevention with Blockchain Transparency

# 🚀 Git Workflow Guide

This project uses a **branch-based workflow** to keep the `main` branch stable.  
Follow the steps below depending on whether you are the **Project Owner** or a **Collaborator**.

---

## 🧑‍💼 For the Project Owner (Initial Setup)

1. **Create a folder and initialize Git**

   ```bash
   mkdir project-name
   cd project-name
   git init
2. Add and commit your files
   ```bash
    git add .
    git commit -m "Initial commit"

3. Set branch name to main
   ```bash
    git branch -M main

4. Connect to GitHub repository
    ```bash
    git remote add origin <GitHub repo link>

5. Push code to GitHub
    ```bash
    git push -u origin main
   

👥 For Collaborators (Clone & Setup)

1. Clone the project
    ```bash
    git clone <GitHub repo link>

2. Create your own branch (important!)
    ```bash
    git switch -C your-branch-name
   📝 Note: Never edit code directly on the main branch. Always create your own branch first.


   ✍️ Working on Your Branch

1. Stage all changes
    ```bash
    git add .

2. Commit your changes
    ```bash
    git commit -m "Describe your changes here"

3. Push your branch to GitHub
    ```bash
    git push -u origin your-branch-name


🔁 Final Merge Process (Project Owner)

After collaborators push their branches, review and merge them into main.

1. Fetch all branches
    ```bash
    git fetch

2. Check available branches
    ```bash
    git branch -r

3. Switch to a collaborator’s branch to review their code
    ```bash
    git switch branch-name

4. Switch back to main
    ```bash
    git switch main

5. Merge the collaborator’s branch
    ```bash
    git merge branch-name

6. Push the updated main branch to GitHub
    ```bash
    git push origin main



   ✅ Summary

Project Owner: Set up the repo and manage merges into main.

Collaborators: Always create a new branch before making changes.

Everyone: Keep main clean and stable.

