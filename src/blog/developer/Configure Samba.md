
Install samba

```shell
sudo apt update
sudo apt install samba
```

create a shared folder

```shell
sudo mkdir -p /mnt/shared
sudo chmod 777 /mnt/shared
```

edit the configuration file

```shell
sudo vim /etc/samba/smb.conf
```

and add the following configuration

```
[Shared]
   path = /mnt/shared
   browseable = yes
   read only = no
   guest ok = yes
```

do following change if you wanna restrict user access

```
   guest ok = no
   valid users = your_username
```

add smb user, make sure the user is existing in ubuntu. [[Configure Ubuntu#Add user]]

```shell
sudo smbpasswd -a mikeshinoda
```

start smb service

```shell
sudo systemctl restart smbd
```

check connection validation locally

```shell
smbclient -L localhost -U mikeshinoda
```

UFW

```shell
sudo ufw allow Samba
```