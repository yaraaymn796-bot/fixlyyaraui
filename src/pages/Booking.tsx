import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";

const serviceTypes = ["سباكة", "كهرباء", "نجارة", "دهانات", "تكييف", "مطابخ", "محارة", "تشطيبات"];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-20 bg-background min-h-screen flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-fixly-white rounded-2xl p-12 text-center shadow-sm max-w-md">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-foreground mb-3">تم الحجز بنجاح!</h2>
          <p className="text-muted-foreground mb-6">هنتواصل معاك قريب جداً لتأكيد الموعد</p>
          <Link to="/" className="inline-block px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold">العودة للرئيسية</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">احجز الآن</h1>
          <p className="text-muted-foreground text-lg">املأ البيانات وهنيجيلك</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-fixly-white rounded-2xl p-8 max-w-3xl mx-auto shadow-sm space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">الاسم بالكامل</label>
              <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
              <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">العنوان</label>
              <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">رقم الشقة</label>
              <input className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">التاريخ</label>
              <input type="date" required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">الساعة</label>
              <input type="time" required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">نوع الخدمة</label>
            <select required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all">
              <option value="">اختر الخدمة</option>
              {serviceTypes.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">شرح المشكلة</label>
            <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none" placeholder="اشرح المشكلة بالتفصيل..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">رفع صورة المشكلة</label>
            <label className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-xl border-2 border-dashed border-border bg-card cursor-pointer hover:border-primary transition-all">
              <FaUpload className="text-accent text-xl" />
              <span className="text-muted-foreground text-sm">اضغط لرفع صورة</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>

          <button type="submit" className="w-full px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-all duration-300 animate-pulse-glow">
            تأكيد الحجز
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Booking;
