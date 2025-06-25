
# Check if user exists

```shell
id <username>
id mikeshinoda
```
# Add user

```shell
sudo adduser <username>
sudo adduser mikeshinoda
```
# Change password

```shell
sudo passwd <username>
sudo passwd mikeshinoda
```

# Let user have admin permission

```shell
sudo usermod -aG sudo <username>
sudo usermod -aG sudo mikeshinoda
```