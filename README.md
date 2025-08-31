# QR-Code-Automation-using-GoogleDrive-and-AppScript

This project automates the process of generating QR codes for files uploaded to Google Drive.  
It uses **Google Apps Script** to watch a "Files" folder and automatically create QR codes in a "QR Codes" folder.  
Each QR code links directly to the uploaded file, making it easy to share via scan.

---

## 🚀 Features
- ✅ Automatic QR code generation for any file added to the `Files` folder.
- ✅ QR codes saved in a separate `QR Codes` folder with the same filename.
- ✅ Files are made shareable via Google Drive (Anyone with link can view).
- ✅ Fully automated with time-based triggers (runs every few minutes).
- ✅ Free to use — built entirely with Google Apps Script.

---

## ⚙️ How It Works
1. Upload a file into the **Files** folder.  
2. Wait for ~30 seconds.  
3. The script automatically generates a QR code and stores it in the **QR Codes** folder.  

---

## 🛠️ Tech Stack
- **Google Drive** (file storage)  
- **Google Apps Script** (automation logic)  
- **Free QR Code API** (QR code generation)  

---

## 📂 Folder Setup
- **Files Folder** → Place any file you want to share.  
- **QR Codes Folder** → Script saves QR codes here.  

---

## 🔧 Setup Instructions
1. Open [Google Apps Script](https://script.google.com/).  
2. Create a new project.  
3. Paste the code from [`appsscript/Code.gs`](appsscript/Code.gs).  
4. Replace the `filesFolderId` and `qrFolderId` with your Google Drive folder IDs.  
5. Save and run the script once → grant permissions.  
6. Set up a **time-driven trigger** (e.g., every 1 minute).  

---


## 🔐 Security Notes
- Script only works on the folders you specify.  
- Files are set to "Anyone with the link can view" so they can be opened via QR.  
- Do not use for sensitive or private documents.  

---

## 🏆 Future Enhancements
- 🎨 Branded QR codes with logos and colors  
- 📊 Access tracking (log QR scans)  
- 🔑 Password-protected QRs  
- 📤 Automatic email/WhatsApp sharing  

---
