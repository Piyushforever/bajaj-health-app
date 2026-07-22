import React, { useState } from "react";
import {
  Home, Activity, Users, BarChart3, User, Bell, ChevronRight, ChevronLeft,
  Check, Droplet, Footprints, Moon, Heart, Brain, Mic, Award, Gift,
  FlaskConical, TrendingDown, TrendingUp, Sparkles, MapPin
} from "lucide-react";

const BLUE = "#1560BD";
const BLUE_DARK = "#0B3D82";
const BLUE_SOFT = "#EAF2FC";
const GREEN = "#1E9E6A";
const AMBER = "#E8912D";
const INK = "#12233B";
const MUTE = "#6B7A8D";
const LINE = "#E7ECF2";

function Phone({ children }) {
  return (
    <div style={{
      width: 320, height: 660, background: "#fff", borderRadius: 34,
      border: "1px solid " + LINE, boxShadow: "0 12px 40px rgba(10,40,80,0.14)",
      overflow: "hidden", position: "relative", display: "flex", flexDirection: "column"
    }}>
      <div style={{
        height: 30, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 18px", fontSize: 12, fontWeight: 600, color: INK, flexShrink: 0
      }}>
        <span>9:41</span>
        <span style={{ letterSpacing: 1 }}>· · ·</span>
      </div>
      {children}
    </div>
  );
}

function Screen({ children, pad = true }) {
  return (
    <div style={{
      flex: 1, overflowY: "auto", padding: pad ? "0 18px 18px" : 0,
      background: "#F7FAFD"
    }}>
      {children}
    </div>
  );
}

function TopBar({ title, onBack }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "6px 0 14px", background: "#F7FAFD",
      position: "sticky", top: 0, zIndex: 2
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          border: "none", background: "none", cursor: "pointer", padding: 0, display: "flex", color: INK
        }}>
          <ChevronLeft size={22} />
        </button>
      )}
      <span style={{ fontSize: 16, fontWeight: 700, color: INK }}>{title}</span>
    </div>
  );
}

function Ring({ value, size = 128, stroke = 11, color = BLUE }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={LINE} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
    </svg>
  );
}

function Spark({ points, color = GREEN, w = 150, h = 46 }) {
  const max = Math.max(...points), min = Math.min(...points);
  const norm = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * h;
    return [x, y];
  });
  const d = norm.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  return (
    <svg width={w} height={h}>
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16, border: "1px solid " + LINE,
      padding: 16, ...style
    }}>{children}</div>
  );
}

// 1. Splash
function Splash({ go }) {
  return (
    <div onClick={() => go("home")} style={{
      flex: 1, background: "linear-gradient(160deg," + BLUE + " 0%," + BLUE_DARK + " 100%)",
      color: "#fff", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", cursor: "pointer", padding: 30, textAlign: "center"
    }}>
      <div style={{
        width: 60, height: 60, borderRadius: 15, background: "rgba(255,255,255,0.16)",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20
      }}>
        <Heart size={30} fill="#fff" color="#fff" />
      </div>
      <div style={{ fontSize: 13, letterSpacing: 3, opacity: 0.8, marginBottom: 8 }}>BAJAJ FINSERV HEALTH</div>
      <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>Your AI Health<br />Companion</div>
      <div style={{ marginTop: 40, fontSize: 13, opacity: 0.7 }}>Tap to begin</div>
    </div>
  );
}

// 2. Home
function HomeScreen({ go }) {
  const missions = [
    { icon: Footprints, label: "Walk 6,000 steps", sub: "6,245 / 6,000", done: true },
    { icon: Droplet, label: "Drink 2L water", sub: "2.1 / 2L", done: true },
    { icon: Activity, label: "Back stretch", sub: "10 / 10 min", done: true },
    { icon: Brain, label: "Meditation", sub: "15 / 15 min", done: true },
  ];
  const snap = [
    { icon: Moon, k: "Sleep", v: "7h 20m", c: GREEN },
    { icon: Brain, k: "Stress", v: "Low", c: GREEN },
    { icon: Heart, k: "Heart", v: "Good", c: GREEN },
    { icon: Activity, k: "BP", v: "120/80", c: BLUE },
  ];
  return (
    <Screen>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 16px" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: INK }}>Good morning</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: INK }}>Rahul</div>
        </div>
        <Bell size={22} color={MUTE} />
      </div>

      <Card style={{ background: "linear-gradient(160deg,#fff,#F4F9FF)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <Ring value={84} />
            <div style={{
              position: "absolute", inset: 0, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center"
            }}>
              <div style={{ fontSize: 30, fontWeight: 800, color: INK }}>84</div>
              <div style={{ fontSize: 11, color: MUTE }}>/ 100</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: MUTE, marginBottom: 4 }}>Your health score</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: GREEN, marginBottom: 8 }}>Great job</div>
            <Spark points={[70, 72, 71, 75, 78, 80, 84]} />
          </div>
        </div>
      </Card>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "18px 0 10px" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: INK }}>Today's mission</span>
        <span style={{ fontSize: 13, color: BLUE, fontWeight: 600 }}>4 / 4 done</span>
      </div>
      <Card style={{ padding: 8 }}>
        {missions.map((m, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 8px",
            borderBottom: i < missions.length - 1 ? "1px solid " + LINE : "none"
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9, background: BLUE_SOFT,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <m.icon size={17} color={BLUE} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{m.label}</div>
              <div style={{ fontSize: 12, color: MUTE }}>{m.sub}</div>
            </div>
            <div style={{
              width: 22, height: 22, borderRadius: "50%", background: GREEN,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Check size={13} color="#fff" strokeWidth={3} />
            </div>
          </div>
        ))}
      </Card>

      <div style={{ fontSize: 15, fontWeight: 700, color: INK, margin: "18px 0 10px" }}>Quick health snapshot</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {snap.map((s, i) => (
          <Card key={i} style={{ padding: 12 }}>
            <s.icon size={18} color={s.c} />
            <div style={{ fontSize: 12, color: MUTE, marginTop: 8 }}>{s.k}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: INK }}>{s.v}</div>
          </Card>
        ))}
      </div>

      <div onClick={() => go("report")} style={{
        marginTop: 14, background: BLUE, color: "#fff", borderRadius: 14, padding: 14,
        display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer"
      }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>View AI health report</span>
        <ChevronRight size={18} />
      </div>
    </Screen>
  );
}

// 3. Report Analysis
function Report({ go }) {
  const markers = [
    { k: "HbA1c", v: "6.1%", tag: "Prediabetes", c: AMBER },
    { k: "Vitamin D", v: "24 ng/mL", tag: "Insufficient", c: AMBER },
    { k: "Cholesterol", v: "186 mg/dL", tag: "Borderline", c: AMBER },
    { k: "BMI", v: "26.4", tag: "Overweight", c: AMBER },
    { k: "Blood pressure", v: "120/80", tag: "Normal", c: GREEN },
    { k: "Liver markers", v: "Normal", tag: "Good", c: GREEN },
  ];
  return (
    <Screen>
      <TopBar title="Health report analysis" onBack={() => go("home")} />
      <div style={{
        background: "#E9F8F0", border: "1px solid #BEEAD4", borderRadius: 12,
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, marginBottom: 14
      }}>
        <Sparkles size={16} color={GREEN} />
        <span style={{ fontSize: 13, color: "#12694A", fontWeight: 600 }}>Report analyzed by AI</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#12694A" }}>98% confidence</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {markers.map((m, i) => (
          <Card key={i} style={{ padding: 13 }}>
            <div style={{ fontSize: 12, color: MUTE }}>{m.k}</div>
            <div style={{ fontSize: 19, fontWeight: 800, color: INK, margin: "3px 0" }}>{m.v}</div>
            <span style={{ fontSize: 11, fontWeight: 700, color: m.c }}>{m.tag}</span>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <Sparkles size={16} color={BLUE} />
          <span style={{ fontSize: 14, fontWeight: 700, color: INK }}>AI summary</span>
        </div>
        <div style={{ fontSize: 13.5, color: "#3A4A5C", lineHeight: 1.6 }}>
          You have early signs of prediabetes. The good news is that it is reversible with
          consistent daily habits. Start your 90 day mission today.
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          <span style={{ fontSize: 12, color: MUTE }}>Detected risk level</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: AMBER }}>Moderate</span>
        </div>
      </Card>

      <div onClick={() => go("journey")} style={{
        marginTop: 14, background: BLUE, color: "#fff", borderRadius: 14, padding: 14,
        textAlign: "center", fontSize: 14, fontWeight: 700, cursor: "pointer"
      }}>
        Start my health journey
      </div>
    </Screen>
  );
}

// 4. Journey
function Journey({ go }) {
  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
  const tasks = [
    { icon: Footprints, label: "Walk 6,000 steps", sub: "6,245 / 6,000", done: true },
    { icon: Droplet, label: "Drink 2L water", sub: "1.6 / 2L", done: false },
    { icon: Moon, label: "Sleep 7+ hours", sub: "6h 20m / 7h", done: false },
    { icon: Heart, label: "Healthy meal", sub: "2 / 3 meals", done: false },
    { icon: Brain, label: "Stress check in", sub: "Completed", done: true },
  ];
  return (
    <Screen>
      <TopBar title="Reverse prediabetes" onBack={() => go("home")} />
      <div style={{ fontSize: 13, color: MUTE, marginTop: -6, marginBottom: 12 }}>90 day mission · Week 3 of 12</div>

      <Card style={{ padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 10 }}>Journey timeline</div>
        <div style={{ display: "flex", gap: 8 }}>
          {weeks.map((w, i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 9, fontSize: 12, fontWeight: 700,
              background: i === 2 ? BLUE : i < 2 ? BLUE_SOFT : "#F1F4F8",
              color: i === 2 ? "#fff" : i < 2 ? BLUE : MUTE
            }}>{w}</div>
          ))}
        </div>
        <div style={{ height: 6, background: "#EEF2F6", borderRadius: 4, marginTop: 12 }}>
          <div style={{ width: "25%", height: "100%", background: BLUE, borderRadius: 4 }} />
        </div>
        <div style={{ fontSize: 11, color: MUTE, marginTop: 6 }}>25% complete</div>
      </Card>

      <div style={{ fontSize: 15, fontWeight: 700, color: INK, margin: "16px 0 10px" }}>Today's tasks</div>
      <Card style={{ padding: 8 }}>
        {tasks.map((t, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 8px",
            borderBottom: i < tasks.length - 1 ? "1px solid " + LINE : "none"
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, background: BLUE_SOFT,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <t.icon size={16} color={BLUE} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: INK }}>{t.label}</div>
              <div style={{ fontSize: 12, color: MUTE }}>{t.sub}</div>
            </div>
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              background: t.done ? GREEN : "#fff", border: t.done ? "none" : "2px solid " + LINE,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {t.done && <Check size={12} color="#fff" strokeWidth={3} />}
            </div>
          </div>
        ))}
      </Card>

      <Card style={{ marginTop: 14, background: BLUE, border: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Sparkles size={20} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>AI coach</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
              You are doing great, Rahul. Consistency today builds a healthier tomorrow.
            </div>
          </div>
        </div>
      </Card>
    </Screen>
  );
}

// 5. Daily Check-in
function CheckIn({ go }) {
  const [energy, setEnergy] = useState(2);
  const [stress, setStress] = useState(3);
  const [mood, setMood] = useState(1);
  const faces = ["😣", "😕", "😐", "🙂", "😄"];
  return (
    <Screen>
      <TopBar title="Daily check in" onBack={() => go("home")} />
      <div style={{ fontSize: 13, color: MUTE, marginTop: -6, marginBottom: 14 }}>AI analyzes your answers in real time</div>

      <Card style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 12 }}>How energetic do you feel?</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {["Very tired", "", "", "", "Energetic"].map((lbl, i) => (
            <button key={i} onClick={() => setEnergy(i)} style={{
              border: "none", background: "none", cursor: "pointer", display: "flex",
              flexDirection: "column", alignItems: "center", gap: 4
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: energy === i ? BLUE : "#F1F4F8",
                border: energy === i ? "none" : "1px solid " + LINE
              }} />
              {lbl && <span style={{ fontSize: 10, color: MUTE }}>{lbl}</span>}
            </button>
          ))}
        </div>
      </Card>

      <Card style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 12 }}>Stress level today</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[1, 2, 3, 4].map(n => (
            <button key={n} onClick={() => setStress(n)} style={{
              flex: 1, padding: "10px 0", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
              border: "1px solid " + (stress === n ? BLUE : LINE),
              background: stress === n ? BLUE : "#fff", color: stress === n ? "#fff" : INK
            }}>{n}</button>
          ))}
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 12 }}>How is your mood?</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {faces.map((f, i) => (
            <button key={i} onClick={() => setMood(i)} style={{
              border: "none", cursor: "pointer", fontSize: 26, padding: 4, borderRadius: 10,
              background: mood === i ? BLUE_SOFT : "none", opacity: mood === i ? 1 : 0.5
            }}>{f}</button>
          ))}
        </div>
      </Card>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
        <div style={{
          width: 54, height: 54, borderRadius: "50%", background: BLUE,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          boxShadow: "0 6px 18px rgba(21,96,189,0.4)"
        }}>
          <Mic size={24} color="#fff" />
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: MUTE, marginTop: 8 }}>Tap to speak</div>
    </Screen>
  );
}

// 6. Corporate Challenge
function Challenge({ go }) {
  const depts = [
    { rank: 1, name: "Operations", km: "12,450 km" },
    { rank: 2, name: "Technology", km: "11,230 km" },
    { rank: 3, name: "Sales", km: "9,850 km" },
    { rank: 4, name: "Finance", km: "8,120 km" },
    { rank: 5, name: "Human resources", km: "6,540 km" },
  ];
  return (
    <Screen>
      <TopBar title="Corporate challenge" onBack={() => go("home")} />
      <Card style={{ background: "linear-gradient(160deg," + BLUE + "," + BLUE_DARK + ")", border: "none", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <MapPin size={17} color="#fff" />
          <span style={{ fontSize: 16, fontWeight: 700 }}>Walk across India</span>
        </div>
        <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 12 }}>7th to 13th May</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>Progress 62%</div>
        <div style={{ height: 8, background: "rgba(255,255,255,0.25)", borderRadius: 5, marginTop: 6 }}>
          <div style={{ width: "62%", height: "100%", background: "#fff", borderRadius: 5 }} />
        </div>
        <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6 }}>2,450 / 4,000 km</div>
      </Card>

      <div style={{ fontSize: 15, fontWeight: 700, color: INK, margin: "16px 0 10px" }}>Leaderboard</div>
      <Card style={{ padding: 8 }}>
        {depts.map((d, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "11px 8px",
            borderBottom: i < depts.length - 1 ? "1px solid " + LINE : "none"
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: "50%", fontSize: 13, fontWeight: 800,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: d.rank <= 3 ? BLUE : "#F1F4F8", color: d.rank <= 3 ? "#fff" : MUTE
            }}>{d.rank}</div>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: INK }}>{d.name}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: BLUE }}>{d.km}</span>
          </div>
        ))}
      </Card>

      <Card style={{ marginTop: 14, display: "flex", gap: 12 }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: MUTE }}>Your team rank</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: INK }}>2 / 8</div>
        </div>
        <div style={{ width: 1, background: LINE }} />
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: MUTE }}>Team streak</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: AMBER }}>12 days</div>
        </div>
      </Card>
    </Screen>
  );
}

// 7. Digital Twin
function Twin({ go }) {
  const [slider, setSlider] = useState(20);
  const projected = Math.round(84 + slider * 0.35);
  return (
    <Screen>
      <TopBar title="Health digital twin" onBack={() => go("home")} />
      <Card style={{ background: "linear-gradient(170deg,#0C2E5A,#154B94)", border: "none", color: "#fff", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14 }}>
          {["Current", "90 days", "1 year"].map((t, i) => (
            <span key={i} style={{
              fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20,
              background: i === 1 ? "#fff" : "rgba(255,255,255,0.15)",
              color: i === 1 ? BLUE_DARK : "#fff"
            }}>{t}</span>
          ))}
        </div>
        <div style={{ fontSize: 60 }}>🧍</div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
          {[["Sleep", "+20%"], ["Activity", "+35%"], ["Stress", "-25%"], ["Nutrition", "+30%"]].map((m, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, opacity: 0.8 }}>{m[0]}</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{m[1]}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginTop: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 12 }}>What happens if you improve your sleep?</div>
        <input type="range" min={-20} max={50} value={slider} onChange={e => setSlider(+e.target.value)}
          style={{ width: "100%", accentColor: BLUE }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: MUTE, marginTop: 4 }}>
          <span>-20%</span><span style={{ color: BLUE, fontWeight: 700 }}>+{slider}%</span><span>+50%</span>
        </div>
      </Card>

      <Card style={{ marginTop: 14, background: "#E9F8F0", border: "1px solid #BEEAD4" }}>
        <div style={{ fontSize: 12, color: "#12694A" }}>Projected health score</div>
        <div style={{ fontSize: 34, fontWeight: 800, color: "#12694A" }}>{projected}<span style={{ fontSize: 15 }}> / 100</span></div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#12694A" }}>Excellent</div>
      </Card>
    </Screen>
  );
}

// 8. Progress
function Progress({ go }) {
  const rows = [
    { k: "Weight", v: "72.5 kg", d: "-2.4 kg", up: false, pts: [76, 75, 74.5, 74, 73.5, 73, 72.5] },
    { k: "HbA1c", v: "6.1%", d: "-0.7", up: false, pts: [6.8, 6.7, 6.6, 6.4, 6.3, 6.2, 6.1] },
    { k: "Blood pressure", v: "120/80", d: "-10 mmHg", up: false, pts: [130, 128, 127, 125, 123, 121, 120] },
    { k: "Stress (weekly avg)", v: "Low", d: "-15%", up: false, pts: [60, 58, 55, 50, 45, 42, 38] },
    { k: "Health score", v: "84 / 100", d: "+12 pts", up: true, pts: [72, 74, 76, 78, 80, 82, 84] },
  ];
  return (
    <Screen>
      <TopBar title="Progress dashboard" onBack={() => go("home")} />
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {["Overview", "Biometrics", "Missions"].map((t, i) => (
          <span key={i} style={{
            fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 20,
            background: i === 0 ? BLUE : "#fff", color: i === 0 ? "#fff" : MUTE, border: "1px solid " + LINE
          }}>{t}</span>
        ))}
      </div>

      <Card style={{ padding: 8 }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "12px 8px",
            borderBottom: i < rows.length - 1 ? "1px solid " + LINE : "none"
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: MUTE }}>{r.k}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: INK }}>{r.v}</div>
            </div>
            <Spark points={r.pts} color={r.up ? GREEN : BLUE} w={90} h={34} />
            <div style={{
              display: "flex", alignItems: "center", gap: 2, fontSize: 12, fontWeight: 700,
              color: r.up ? GREEN : BLUE
            }}>
              {r.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{r.d}
            </div>
          </div>
        ))}
      </Card>

      <Card style={{ marginTop: 14, background: "#FFF6E9", border: "1px solid #F5DCB0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <Sparkles size={16} color={AMBER} />
          <span style={{ fontSize: 14, fontWeight: 700, color: "#8A5A12" }}>AI insight</span>
        </div>
        <div style={{ fontSize: 13, color: "#8A5A12", lineHeight: 1.5 }}>
          Risk reduced by 18%. Great progress, keep it up.
        </div>
      </Card>
    </Screen>
  );
}

// 9. Lab Reminder
function LabReminder({ go }) {
  return (
    <Screen>
      <TopBar title="Lab test reminder" onBack={() => go("home")} />
      <Card style={{ textAlign: "center", padding: 24 }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%", background: BLUE_SOFT, margin: "0 auto 16px",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <FlaskConical size={30} color={BLUE} />
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 8 }}>It has been 90 days</div>
        <div style={{ fontSize: 14, color: MUTE, lineHeight: 1.5, marginBottom: 18 }}>
          Time to repeat your HbA1c test. Regular testing helps you track progress and stay in control.
        </div>
        <div style={{
          background: BLUE, color: "#fff", borderRadius: 12, padding: 13, fontSize: 14, fontWeight: 700, cursor: "pointer"
        }}>Book test</div>
      </Card>

      <div style={{ fontSize: 14, fontWeight: 700, color: INK, margin: "16px 0 10px" }}>Nearby labs</div>
      {[["Thyrocare", "0.8 km away"], ["Metropolis", "1.2 km away"]].map((l, i) => (
        <Card key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, padding: 13 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: BLUE_SOFT, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FlaskConical size={17} color={BLUE} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{l[0]}</div>
            <div style={{ fontSize: 12, color: MUTE }}>{l[1]}</div>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: BLUE }}>Book</span>
        </Card>
      ))}

      <Card style={{ marginTop: 4, background: "#E9F8F0", border: "1px solid #BEEAD4" }}>
        <div style={{ fontSize: 12, color: "#12694A", marginBottom: 8 }}>Compare your reports</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div>
            <div style={{ fontSize: 11, color: "#12694A" }}>HbA1c previous</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#12694A" }}>6.8%</div>
          </div>
          <ChevronRight size={18} color="#12694A" />
          <div>
            <div style={{ fontSize: 11, color: "#12694A" }}>HbA1c current</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#12694A" }}>6.1%</div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: 13, fontWeight: 800, color: GREEN }}>0.7% better</div>
        </div>
      </Card>
    </Screen>
  );
}

// 10. Rewards
function Rewards({ go }) {
  const rewards = [
    { icon: Heart, k: "Health insurance", sub: "Premium benefit" },
    { icon: Activity, k: "Gym membership", sub: "Up to 20% off" },
    { icon: Gift, k: "Healthy cafeteria", sub: "20% cashback" },
    { icon: Award, k: "Wellness store", sub: "Exclusive offers" },
  ];
  const badges = [["7 day streak", "🔥"], ["Mission master", "🏅"], ["Early bird", "🌅"]];
  return (
    <Screen>
      <TopBar title="Rewards" onBack={() => go("home")} />
      <Card style={{ background: "linear-gradient(160deg," + BLUE + "," + BLUE_DARK + ")", border: "none", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>Health coins</div>
            <div style={{ fontSize: 30, fontWeight: 800 }}>2,450</div>
          </div>
          <div style={{ fontSize: 13, opacity: 0.9 }}>View history</div>
        </div>
      </Card>

      <div style={{ fontSize: 15, fontWeight: 700, color: INK, margin: "16px 0 10px" }}>Available rewards</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {rewards.map((r, i) => (
          <Card key={i} style={{ padding: 13 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: BLUE_SOFT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
              <r.icon size={17} color={BLUE} />
            </div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: INK }}>{r.k}</div>
            <div style={{ fontSize: 12, color: MUTE }}>{r.sub}</div>
          </Card>
        ))}
      </div>

      <div style={{ fontSize: 15, fontWeight: 700, color: INK, margin: "16px 0 10px" }}>Your achievements</div>
      <div style={{ display: "flex", gap: 10 }}>
        {badges.map((b, i) => (
          <Card key={i} style={{ flex: 1, textAlign: "center", padding: 13 }}>
            <div style={{ fontSize: 26 }}>{b[1]}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginTop: 4 }}>{b[0]}</div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 12, color: MUTE }}>Wellness points this month</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: INK }}>12,840</div>
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: GREEN }}>+1,250</span>
      </Card>
    </Screen>
  );
}

const SCREENS = {
  splash: Splash, home: HomeScreen, report: Report, journey: Journey, checkin: CheckIn,
  challenge: Challenge, twin: Twin, progress: Progress, lab: LabReminder, rewards: Rewards,
};

const NAV = [
  { key: "home", icon: Home, label: "Home" },
  { key: "journey", icon: Activity, label: "Journey" },
  { key: "challenge", icon: Users, label: "Community" },
  { key: "progress", icon: BarChart3, label: "Insights" },
  { key: "rewards", icon: User, label: "Rewards" },
];

const ALL = [
  ["splash", "1. Splash"], ["home", "2. Home"], ["report", "3. Report analysis"],
  ["journey", "4. Journey"], ["checkin", "5. Daily check in"], ["challenge", "6. Challenge"],
  ["twin", "7. Digital twin"], ["progress", "8. Progress"], ["lab", "9. Lab reminder"],
  ["rewards", "10. Rewards"],
];

export default function App() {
  const [screen, setScreen] = useState("splash");
  const Current = SCREENS[screen];
  const showNav = screen !== "splash";

  return (
    <div style={{ minHeight: "100vh", background: "#EEF3F8", padding: "24px 12px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 380, margin: "0 auto 18px", textAlign: "center" }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Bajaj Health OS</div>
        <div style={{ fontSize: 13, color: MUTE }}>Employee app prototype</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <Phone>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Current go={setScreen} />
          </div>
          {showNav && (
            <div style={{
              display: "flex", borderTop: "1px solid " + LINE, background: "#fff", flexShrink: 0, padding: "6px 0"
            }}>
              {NAV.map(n => (
                <button key={n.key} onClick={() => setScreen(n.key)} style={{
                  flex: 1, border: "none", background: "none", cursor: "pointer", padding: "6px 0",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                  color: screen === n.key ? BLUE : MUTE
                }}>
                  <n.icon size={20} />
                  <span style={{ fontSize: 10, fontWeight: 600 }}>{n.label}</span>
                </button>
              ))}
            </div>
          )}
        </Phone>
      </div>

      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: MUTE, textAlign: "center", marginBottom: 10 }}>Jump to any screen</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center" }}>
          {ALL.map(([key, label]) => (
            <button key={key} onClick={() => setScreen(key)} style={{
              fontSize: 12, fontWeight: 600, padding: "7px 12px", borderRadius: 20, cursor: "pointer",
              border: "1px solid " + (screen === key ? BLUE : LINE),
              background: screen === key ? BLUE : "#fff", color: screen === key ? "#fff" : INK
            }}>{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
