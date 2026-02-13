# 🛒 Shared Grocery List

A real-time shared grocery list for Serge & Yulya. One person adds items at home, the other checks them off at the store — updates appear instantly on both phones.

## ✨ Features
- **Real-time sync** — changes appear instantly on both phones
- **Quick add** — type and hit enter, auto-parses quantities ("2 lbs chicken")
- **Categories** — Produce, Dairy, Meat, Bakery, Pantry, Frozen, etc.
- **Check off in store** — big checkboxes for one-handed use
- **Share list** — one tap to share the list code with your spouse
- **Works offline** — items sync when you're back online

---

## 🔧 Setup Guide (10 minutes)

### Step 1: Create Firebase Project (FREE)

1. Go to [firebase.google.com](https://firebase.google.com)
2. Click **"Go to console"** (top right) — sign in with your Google account
3. Click **"Add project"**
4. Name it `grocery-list` (or anything)
5. Turn OFF Google Analytics (you don't need it) → Click **Create Project**
6. Wait for it to finish → Click **Continue**

### Step 2: Create the Database

1. In your Firebase project, click **"Build"** in the left sidebar
2. Click **"Realtime Database"**
3. Click **"Create Database"**
4. Select location: **United States (us-central1)** → Click **Next**
5. Select **"Start in test mode"** → Click **Enable**

> ⚠️ Test mode allows open access for 30 days. After you confirm everything works, follow Step 6 below to secure it.

### Step 3: Get Your Config

1. Click the **gear icon** ⚙️ (top left, next to "Project Overview")
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** `</>` (looks like this: **</>**)
5. Enter nickname: `grocery` → Click **Register app**
6. You'll see a code block with `firebaseConfig`. Copy these values:
   ```
   apiKey: "AIzaSy..."
   authDomain: "grocery-list-xxxxx.firebaseapp.com"
   databaseURL: "https://grocery-list-xxxxx-default-rtdb.firebaseio.com"
   projectId: "grocery-list-xxxxx"
   storageBucket: "grocery-list-xxxxx.appspot.com"
   messagingSenderId: "123456789"
   appId: "1:123456789:web:abcdef..."
   ```

### Step 4: Add Config to Your App

1. Open `index.html` in a text editor (or on GitHub)
2. Find this section near the top of the `<script>`:
   ```javascript
   const FIREBASE_CONFIG = {
     apiKey: "YOUR_API_KEY",
     ...
   };
   ```
3. Replace each `YOUR_...` value with the real values from Step 3
4. Save the file

### Step 5: Deploy to GitHub Pages

1. Create a new repo on GitHub called `grocery-list`
2. Upload all 5 files: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`
3. Go to **Settings → Pages → Deploy from branch → main → / (root) → Save**
4. Your app is live at `https://YOUR-USERNAME.github.io/grocery-list/`

### Step 6: Secure Your Database (Do This After Testing)

After you confirm the app works on both phones:

1. Go back to Firebase Console → Realtime Database → **Rules** tab
2. Replace the rules with:
   ```json
   {
     "rules": {
       "lists": {
         "$listId": {
           ".read": true,
           ".write": true
         }
       }
     }
   }
   ```
3. Click **Publish**

This allows read/write only within list paths (still simple but more secure).

---

## 📱 How to Use

### First Time Setup
1. **Serge** opens the app → taps "Serge" → taps "Start New List"
2. **Serge** taps **"Share"** button → sends the list code to Yulya
3. **Yulya** opens the app → taps "Yulya" → pastes the code → taps "Join List"
4. Both phones are now synced!

### Daily Use
- **At home**: Yulya adds items she needs → "Whole milk", "Chicken breast", etc.
- **At the store**: Serge opens the app → sees all items → checks them off one by one
- **Both see updates in real time** — Yulya can even add things while Serge is shopping

### Quick Add Tips
- Type `2 lbs chicken breast` → auto-parses quantity "2 lbs" and item "chicken breast"
- Tap the **+** button for the detailed form with category selection
- Swipe through category filters to focus on one aisle

---

## 📱 Install on iPhone
1. Open the URL in **Safari**
2. Tap **Share** (square with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add**
