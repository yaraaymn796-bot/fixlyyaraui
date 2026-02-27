import { useState } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaScrewdriverWrench, FaUsers, FaCalendarDays, FaMoneyBill, FaStar, FaChartBar, FaGear, FaBars, FaXmark, FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sidebarLinks = [
  { icon: FaChartLine, label: "الرئيسية", id: "home" },
  { icon: FaScrewdriverWrench, label: "الخدمات", id: "services" },
  { icon: FaUsers, label: "الفنيين", id: "technicians" },
  { icon: FaCalendarDays, label: "الحجوزات", id: "bookings" },
  { icon: FaMoneyBill, label: "المدفوعات", id: "payments" },
  { icon: FaStar, label: "التقييمات", id: "reviews" },
  { icon: FaChartBar, label: "التقارير", id: "reports" },
  { icon: FaGear, label: "الإعدادات", id: "settings" },
];

const chartData = [
  { day: "السبت", orders: 18 },
  { day: "الأحد", orders: 25 },
  { day: "الإثنين", orders: 22 },
  { day: "الثلاثاء", orders: 30 },
  { day: "الأربعاء", orders: 28 },
  { day: "الخميس", orders: 35 },
  { day: "الجمعة", orders: 20 },
];

const stats = [
  { label: "إجمالي الخدمات", value: "١٢٥", icon: FaScrewdriverWrench },
  { label: "الفنيين النشطين", value: "٤٥", icon: FaUsers },
  { label: "طلبات اليوم", value: "٢٣", icon: FaCalendarDays },
  { label: "إيرادات الشهر", value: "٧٥,٠٠٠ ج.م", icon: FaMoneyBill },
  { label: "التقييم العام", value: "٤.٨ ⭐", icon: FaStar },
];

const bookings = [
  { client: "أحمد محمد", service: "سباكة", technician: "محمود حسن", date: "٢٦/٠٢/٢٠٢٦", status: "منجز", amount: "٣٥٠ ج.م" },
  { client: "سارة علي", service: "كهرباء", technician: "عمرو خالد", date: "٢٦/٠٢/٢٠٢٦", status: "قيد الانتظار", amount: "٥٠٠ ج.م" },
  { client: "محمد حسين", service: "نجارة", technician: "يوسف أحمد", date: "٢٥/٠٢/٢٠٢٦", status: "جاري", amount: "٨٠٠ ج.م" },
  { client: "فاطمة عبدالله", service: "دهانات", technician: "كريم سعيد", date: "٢٥/٠٢/٢٠٢٦", status: "منجز", amount: "١,٢٠٠ ج.م" },
  { client: "عمر يوسف", service: "تكييف", technician: "حسن محمد", date: "٢٤/٠٢/٢٠٢٦", status: "منجز", amount: "٦٥٠ ج.م" },
];

const topTechnicians = [
  { name: "محمود حسن", specialty: "سباكة", rating: 4.9, tasks: 87 },
  { name: "عمرو خالد", specialty: "كهرباء", rating: 4.8, tasks: 72 },
  { name: "يوسف أحمد", specialty: "نجارة", rating: 4.7, tasks: 65 },
  { name: "كريم سعيد", specialty: "دهانات", rating: 4.9, tasks: 90 },
];

const statusColor = (s: string) => {
  if (s === "منجز") return "bg-fixly-green/20 text-fixly-brown";
  if (s === "قيد الانتظار") return "bg-primary/20 text-foreground";
  return "bg-secondary text-foreground";
};

const Dashboard = () => {
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background font-cairo" dir="rtl">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 0, opacity: sidebarOpen ? 1 : 0 }}
        className="bg-secondary overflow-hidden shrink-0 border-l border-border"
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-8">لوحة التحكم</h2>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActive(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? "bg-primary/20 text-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent"
                }`}
              >
                <link.icon className={active === link.id ? "text-accent" : ""} />
                <span>{link.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-fixly-white/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-foreground text-xl">
              {sidebarOpen ? <FaXmark /> : <FaBars />}
            </button>
            <div className="relative hidden md:block">
              <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
              <input className="pr-10 pl-4 py-2 rounded-xl bg-card border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/50 outline-none w-64" placeholder="بحث..." />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:block">الخميس ٢٦ فبراير ٢٠٢٦</span>
            <button className="relative">
              <FaBell className="text-xl text-accent" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center">٣</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-foreground">م</div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="text-xl text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-fixly-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">طلبات آخر ٧ أيام</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 62% 89%)" />
                  <XAxis dataKey="day" tick={{ fill: "hsl(21 15% 48%)", fontSize: 12 }} />
                  <YAxis tick={{ fill: "hsl(21 15% 48%)", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(30 30% 85%)",
                      borderRadius: "12px",
                      fontFamily: "Cairo",
                    }}
                  />
                  <Line type="monotone" dataKey="orders" stroke="hsl(26 100% 77%)" strokeWidth={3} dot={{ fill: "hsl(25 97% 74%)", r: 5 }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bookings table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="lg:col-span-2 bg-fixly-white rounded-2xl p-6 shadow-sm overflow-x-auto">
              <h3 className="text-lg font-bold text-foreground mb-4">الحجوزات الأخيرة</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="px-4 py-3 text-right font-semibold text-foreground rounded-r-xl">العميل</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">الخدمة</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">الفني</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">التاريخ</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">الحالة</th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground rounded-l-xl">المبلغ</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
                    <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                      <td className="px-4 py-3 text-foreground">{b.client}</td>
                      <td className="px-4 py-3 text-foreground">{b.service}</td>
                      <td className="px-4 py-3 text-foreground">{b.technician}</td>
                      <td className="px-4 py-3 text-muted-foreground">{b.date}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(b.status)}`}>{b.status}</span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-foreground">{b.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Top technicians */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-fixly-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">الفنيين المتميزين</h3>
              <div className="space-y-4">
                {topTechnicians.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-foreground shrink-0">
                      {tech.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-sm truncate">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.specialty}</div>
                    </div>
                    <div className="text-left shrink-0">
                      <div className="text-sm font-bold text-accent">{tech.rating} ⭐</div>
                      <div className="text-xs text-muted-foreground">{tech.tasks} مهمة</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
