# CLAUDE.md — צמד ברזל אתר תדמית

## מטרת האתר
אתר תדמית רשמי לחברת ייעוץ נדל"ן **צמד ברזל**.
מטרתו ליצור אמון עם לקוחות חדשים וקיימים כאחד — להציג את החברה, השירותים, והצוות בצורה מקצועית ואמינה.

---

## פרטי הפרויקט
- **GitHub:** `Netmi11/Tadmit-site-new-`
- **Vercel:** מחובר ל-GitHub, מתעדכן אוטומטית בכל push ל-main
- **URL:** `ironteam.co.il`
- **שפה:** עברית, RTL

---

## טכנולוגיות
- React 19 + TypeScript + Vite 6
- TailwindCSS 3 (PostCSS build pipeline — לא CDN)
- Framer Motion — אנימציות
- D3-geo + topojson — מפת ישראל אינטראקטיבית
- Lucide React — אייקונים
- hash-based routing (ללא React Router)

---

## מבנה דפים (SPA)
| מזהה | דף |
|---|---|
| `home` | דף הבית |
| `personal` | ייעוץ אישי |
| `group` | קבוצות רכישה |
| `value` | מרכז ידע + מחשבון ROI |
| `about` | אודות |
| `contact-page` | צור קשר |

---

## Assets — חשוב!
קבצים סטטיים **חייבים להיות ב-`public/assets/`** (לא `assets/` בשורש).
Vite לא מגיש קבצים מהשורש ב-production build.

תמונות קיימות: `logo.webp`, `amit.webp`, `noam.webp`, `israel-map.webp`

---

## אינטגרציות
| שירות | פרטים |
|---|---|
| N8N Webhook | `https://n8n.srv1270696.hstgr.cloud/webhook/594e4a2d-bc43-4f4d-9f5a-02f28afc9754` |
| Google Analytics | G-61T9GERXEF |
| WhatsApp | 972548654555 |
| טלפון | 054-8654555 |

---

## עיצוב — צבעים
| שם | HEX |
|---|---|
| navy | `#1B3A5C` |
| gold | `#D4AF37` |
| offwhite | `#F8F6F1` |
| whatsapp | `#25D366` |

פונטים: **Heebo** (עברית), **Inter** (מספרים/אנגלית)

---

## ידוע / עתידי
- **סרטון הרצאה** — הוסר זמנית מ-MilitaryLectures. לשלב חזרה כ-YouTube embed כשיהיה לינק
- **Hero background image** — עוד לא נוסף, המשתמש יוסיף בהמשך

---

## הערת פיתוח חשובה
**Edit tool נכשל על קבצים בתיקיות עם שם עברי** (כמו `components/`).
לעריכת קבצים אלו — להשתמש ב-Python script דרך Bash tool.
