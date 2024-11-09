---
tags: 
Links: 
Area: 
Created: 
Modified:
---
Setup: 

During setting up the github repository, I'm got this error in the last step for `npx quartz sync --no-pull` . I've followed all the steps from Quartz documentation and double checked/ followed with Nicole van der Hoeven's video on the installation. I'm not sure if anyone else got this error (sorry couldn't find it here). I used Google Gemini that came up with this solution and it worked for me. Posting this here in case anyone else faces this issue. Here's what I needed to do:

1. **Generate SSH Keys**

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

Replacing `your_email@example.com` with my actual email address. Press Enter when prompted for a passphrase (optional, but recommended for added security).

2. **Add the Public Key to GitHub:**

- After running the previous command, you'll have a private key (usually id_rsa) and a public key (usually id_rsa.pub).
- Copy the contents of the public key file (id_rsa.pub). You can use the cat command followed by the file path:

`cat ~/.ssh/id_rsa.pub`

- Go to your GitHub account settings: [https://github.com/settings/profile](https://github.com/settings/profile "https://github.com/settings/profile")

Navigate to the "SSH and GPG keys" section.

- Click "New SSH key" and paste the copied public key content into the key field.

- Give your key a descriptive title (e.g., "Quartz Project Key").

- Click "Add SSH key". Keep the type as 'Authentication'.

3. **Update Remote URL (if necessary)**:

- If you ran git remote set-url origin REMOTE-URL earlier and REMOTE-URL contains your link in HTTPS, you'll need to update it to the SSH URL format.

4. **Push Again with SSH Authentication:**

- Now that you've added your SSH key to GitHub, you can try pushing again using `npx quartz sync --no-pull`

[](https://cdn.discordapp.com/attachments/1249076164711157820/1249076165033988116/CleanShot_2024-06-09_at_00.44.352x.png?ex=670ebc54&is=670d6ad4&hm=472a8520fa357348b1297a326dcd8de8b7cf978d1260cf2ea5bb4a4285dd0c0b&)

![Image](https://media.discordapp.net/attachments/1249076164711157820/1249076165033988116/CleanShot_2024-06-09_at_00.44.352x.png?ex=670ebc54&is=670d6ad4&hm=472a8520fa357348b1297a326dcd8de8b7cf978d1260cf2ea5bb4a4285dd0c0b&=&format=webp&quality=lossless&width=1100&height=648)