---

---

# Installation

https://git-scm.com/

# Usage

```shell
git init -b main
git remote add origin remote-repo-url
git status # checkout which file was changed.
git diff hello.rs # see the difference of the two versions.
git add .
git commit -m "Fix: fix something wrong."
git push origin main
git push -u origin main
git pull
```

### Git log

```shell
git log
git log --oneline
git log --graph
```

### Username and email

```bash
git config user.name
git config user.password
git config user.email
```

### Configure username and email password

```bash
git config --global user.name "desonglll" && git config --global user.password "password" && git config --global user.email "lindesong666@163.com"
```

## Generate SSH key

```bash
ssh-keygen -t rsa -C "lindesong666@163.com"
ssh -T git@github.com
```

## ALL IN ONE COMMAND

```shell
git config --global user.name "desonglll" && git config --global user.password "password" && git config --global user.email "lindesong666@163.com" && ssh-keygen -t ed25519 -C "lindesong666@163.com" && cat ~/.ssh/id_ed25519.pub
```

Enabling SSH connections over HTTPS can solve this problem

If you are able to SSH into[git@ssh.github.com](mailto:git@ssh.github.com)over port 443, you can override your SSH
settings to force any connection to GitHub.com to run through that server and port.

To set this in your SSH configuration file, edit the file at `~/.ssh/config`, and add this section:

```rust
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

## Setting default branch name

```shell
git config --global init.defaultBranch main
```

## Remote URL

```shell
git remote -v
git remote get-url origin
git remote set-url origin [url]
git remote rm origin
git remote add origin [url]
```

## Merge remote branch to local branch

```shell
git merge origin
```

## Switch branch

```shell
git branch
git branch -a
git branch -v
git checkout -b new-branch
git checkout -
git switch -c new-branch
git branch -M main
```

## Check the difference of file

```shell
git diff
```

## Delete local branch

```shell
# 不加-D表示创建新local分支xxx，加-D表示强制删除local分支xxx
# For branch that not merged to main branch.
git branch -D xxx

# For branch that already merged to main branch.
git branch -d xxx
```

# Git ignore file

## macOS

```plaintext
# macOS system files
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \\r
Icon

# Thumbnails
._*

# Files that might appear on external disk
.Spotlight-V100
.Trashes

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
```

