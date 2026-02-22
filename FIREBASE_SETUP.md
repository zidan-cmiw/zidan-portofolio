# 🔥 Firebase Guestbook Setup Guide

Ikuti langkah-langkah ini untuk setup Firebase Firestore untuk fitur Guestbook/Comment.

## 📋 Step 1: Buat Firebase Project

1. **Buka Firebase Console**: https://console.firebase.google.com/
2. **Klik "Add project"** atau "Create a project"
3. **Isi nama project**: `zidan-portfolio` (atau nama lain)
4. **Google Analytics**: Optional (bisa di-skip atau enable)
5. **Klik "Create project"** dan tunggu sampai selesai

## 📋 Step 2: Setup Firestore Database

1. Di Firebase Console, pilih project kamu
2. **Klik "Build" → "Firestore Database"** di sidebar kiri
3. **Klik "Create database"**
4. **Pilih location**: `asia-southeast1` (Singapore) - paling dekat dengan Indonesia
5. **Start in production mode** (kita akan atur rules nanti)
6. **Klik "Enable"**

## 📋 Step 3: Atur Firestore Security Rules

1. Di Firestore Database, klik tab **"Rules"**
2. **Replace rules** dengan kode ini:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /guestbook/{document} {
      // Allow anyone to read messages
      allow read: if true;
      
      // Allow anyone to create messages (with validation)
      allow create: if request.resource.data.keys().hasAll(['name', 'message', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.message is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.name.size() <= 50
                    && request.resource.data.message.size() > 0
                    && request.resource.data.message.size() <= 500;
      
      // Deny update and delete for security
      allow update, delete: if false;
    }
  }
}
```

3. **Klik "Publish"**

## 📋 Step 4: Get Firebase Config

1. Di Firebase Console, klik **⚙️ Settings** (gear icon) → **Project settings**
2. Scroll ke bawah ke bagian **"Your apps"**
3. **Klik icon "</>"** (Web app)
4. **Isi app nickname**: `zidan-portfolio-web`
5. **Jangan centang** Firebase Hosting
6. **Klik "Register app"**
7. **Copy config object** yang muncul (seperti ini):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxx"
};
```

## 📋 Step 5: Update Firebase Config di Code

1. **Buka file**: `src/lib/firebase.js`
2. **Replace** `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, dll dengan config kamu:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...", // Paste dari Firebase Console
  authDomain: "zidan-portfolio.firebaseapp.com",
  projectId: "zidan-portfolio",
  storageBucket: "zidan-portfolio.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxx"
};
```

3. **Save file**

## 📋 Step 6: Test Guestbook

1. **Jalankan dev server**:
```bash
npm run dev
```

2. **Buka**: http://localhost:3000
3. **Scroll ke section Contact**
4. **Isi form "Leave a Comment"**:
   - Name: Test User
   - Message: Hello, this is my first comment!
5. **Klik "Post Comment"**
6. **Cek**: Comment harus muncul di "Recent Messages" dalam beberapa detik

## 📋 Step 7: Verifikasi di Firebase Console

1. Balik ke **Firebase Console** → **Firestore Database**
2. **Klik "Data" tab**
3. Kamu harus lihat collection **"guestbook"** dengan document pertama kamu
4. Setiap document punya:
   - `name`: nama user
   - `message`: pesan user
   - `createdAt`: timestamp otomatis

## 🎉 Selesai!

Guestbook kamu sekarang sudah live dengan:
- ✅ Real-time updates (comments langsung muncul)
- ✅ Validation (max 500 characters, required fields)
- ✅ Security rules (read anyone, create with validation)
- ✅ Auto-sorted (newest first)
- ✅ Limit 10 recent messages

## 🔒 Security Features

- ✅ Anyone can read messages
- ✅ Anyone can post messages (with validation)
- ✅ Name max 50 characters
- ✅ Message max 500 characters
- ✅ No one can edit/delete messages (anti-vandalism)
- ✅ Auto spam protection via Firebase

## 💡 Tips

1. **Monitor di Firebase Console**: Bisa lihat semua comments yang masuk
2. **Delete spam manually**: Di Firebase Console → Firestore → pilih document → Delete
3. **Upgrade plan**: Free tier Firebase cukup untuk portfolio (50K reads/day)

## 🆘 Troubleshooting

**Error: "Firebase is not defined"**
- Cek apakah sudah `npm install firebase`
- Restart dev server

**Error: "Missing or insufficient permissions"**
- Cek Firestore Rules sudah di-publish
- Pastikan rules allow read & create

**Comments tidak muncul**
- Cek Firebase config sudah benar
- Buka Console → Network tab → cek error
- Pastikan internet connection aktif

---

Need help? Check Firebase docs: https://firebase.google.com/docs/firestore
