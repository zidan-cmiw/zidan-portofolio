# 📧 EmailJS Setup Guide

Ikuti langkah-langkah ini untuk setup EmailJS untuk Contact Form.

## 📋 Step 1: Create EmailJS Account

1. **Buka**: https://www.emailjs.com/
2. **Klik "Sign Up"** (kanan atas)
3. **Sign up dengan**:
   - Email + Password, atau
   - Google Account (lebih cepat)
4. **Verify email** kamu (cek inbox)
5. **Login** ke EmailJS Dashboard

---

## 📋 Step 2: Add Email Service

1. Di **EmailJS Dashboard**, klik **"Email Services"** di sidebar kiri
2. **Klik "Add New Service"**
3. **Pilih email provider** kamu:
   - **Gmail** (Recommended) ✅
   - Outlook
   - Yahoo
   - Custom SMTP
4. **Klik "Connect Account"**
5. **Login dengan Gmail** kamu (yang mau nerima email dari contact form)
6. **Allow EmailJS** to access your Gmail
7. **Service ID** akan auto-generate (contoh: `service_abc123`)
8. **Copy Service ID** ini (nanti dipake)
9. **Klik "Create Service"**

---

## 📋 Step 3: Create Email Template

1. Di sidebar kiri, klik **"Email Templates"**
2. **Klik "Create New Template"**
3. **Isi template**:

### Template Settings:
- **Template Name**: `Contact Form Portfolio`

### Email Content:
**Subject**: 
```
New Contact from {{from_name}}
```

**Body** (HTML format):
```html
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

### Settings:
- **From Name**: `Portfolio Contact Form`
- **From Email**: `{{from_email}}` (variabel dari form)
- **To Email**: `YOUR_EMAIL@gmail.com` (email kamu yang nerima)
- **Reply To**: `{{from_email}}`

4. **Klik "Save"**
5. **Copy Template ID** (contoh: `template_xyz789`)

---

## 📋 Step 4: Get Public Key

1. Di sidebar kiri, klik **"Account"** (atau icon user)
2. Klik **"General"** tab
3. **Copy "Public Key"** (contoh: `Abc123XyZ456`)
   - Ini adalah **Public Key** / **User ID**
   - BUKAN "Private Key"!

---

## 📋 Step 5: Test Integration (Optional)

Di Email Templates, klik **"Test It"** untuk test template kamu:
- Isi test data
- Klik "Send Test Email"
- Cek inbox kamu (should receive test email)

---

## ✅ Summary - Yang Kamu Perlu Copy:

Setelah selesai setup di EmailJS, kamu akan punya **3 keys**:

1. **Service ID**: `service_abc123` (dari Email Services)
2. **Template ID**: `template_xyz789` (dari Email Templates)
3. **Public Key**: `Abc123XyZ456` (dari Account → General)

---

## 🔧 Next Step: Update .env.local

Setelah dapat 3 keys di atas, tambahkan ke file `.env.local`:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Abc123XyZ456
```

Save file, restart dev server, dan contact form siap dipakai! 🎉

---

## 📧 Email Template Variables

Variables yang bisa dipakai di template:

- `{{from_name}}` - Nama user dari form
- `{{from_email}}` - Email user dari form
- `{{message}}` - Pesan user dari form
- `{{to_name}}` - Nama kamu (recipient)

---

## 🆓 Free Tier Limits

EmailJS Free Plan:
- ✅ 200 emails/month
- ✅ 1 email service
- ✅ 2 email templates
- ✅ Unlimited contact forms

Cukup banget untuk portfolio personal! 🎉

---

## 🆘 Troubleshooting

**Email tidak masuk?**
- Cek Spam/Junk folder
- Pastikan Gmail verified di EmailJS
- Test template di EmailJS dashboard

**Error "Public Key not valid"?**
- Pastikan copy Public Key yang benar (bukan Private Key)
- Cek spelling di .env.local

**Error 401 Unauthorized?**
- Service ID salah
- Template ID salah
- Restart dev server setelah update .env.local

---

Need help? EmailJS Docs: https://www.emailjs.com/docs/
