import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Brain, 
  BookOpen, 
  CheckCircle2, 
  XCircle,
  AlertTriangle, 
  Wind, 
  Activity, 
  Lock, 
  Sparkles, 
  Award, 
  Stethoscope, 
  Zap, 
  Eye, 
  Frown, 
  Moon, 
  ShieldCheck, 
  Droplets, 
  Calendar, 
  ChevronRight, 
  Target, 
  CheckSquare, 
  BookMarked,
  RotateCcw,
  Layers,
  User,
  LogOut,
  Mail,
  KeyRound,
  UserCheck,
  Instagram,
  HelpCircle
} from 'lucide-react';

// --- STORAGE KEYS & INITIAL CONSTANTS ---
const STORAGE_KEY = 'hijrahclean_90day_v2';
const AUTH_KEY = 'hijrahclean_users_db';
const SESSION_KEY = 'hijrahclean_active_session';

// --- CURRICULUM GENERATOR FOR 90 DAYS ---
const generate90DaysMissions = () => {
  const list = [];
  for (let i = 1; i <= 90; i++) {
    let phaseId = 1;
    let title = '';
    let insight = '';
    let tasks = [];
    let verse = '';

    if (i === 1) {
      title = 'Hari 1: Penataan Lingkungan Digital & Puasa Layar Kamar';
      insight = 'Otak penderita PMO mengasosiasikan kasur + HP malam hari sebagai tempat pemenuhan dopamin palsu. Putuskan rantai fisik ini sekarang.';
      tasks = [
        'Dilarang bersendirian di dalam kamar bersama HP!',
        'Pindahkan HP keluar dari kamar tidur malam ini.',
        'Wajib setel audio kajian / murottal Al-Qur’an menggunakan MP3 Player (atau media selain HP) menjelang tidur.',
        'Wudhu sebelum tidur dan baca Ayat Kursi & Al-Mu’awwidzatain.'
      ];
      verse = 'QS. At-Talaq: 2 - "Dan barangsiapa bertakwa kepada Allah niscaya Dia akan membukakan jalan keluar baginya."';
    } else if (i === 2) {
      title = 'Hari 2: Pemadaman Sinyal Visual & Zina Mata';
      insight = 'Setiap kerlingan mata pada konten tidak pantas membakar sel reseptor dopamin dan memicu dorongan fisik dalam 15 menit berikutnya.';
      tasks = [
        'Jangan pernah bersendirian bersama HP di tempat tertutup.',
        'Aktifkan mode pembatasan konten / Filter pencarian aman di HP.',
        'Setel audio mp3 kajian Islam / murottal sebelum tidur tanpa menyentuh HP.',
        'Tundukkan pandangan (Ghadul Bashar) seketika saat melihat hal syubhat hari ini.'
      ];
      verse = 'QS. An-Nur: 30 - "Katakanlah kepada laki-laki yang beriman: Hendaklah mereka menahan pandangannya..."';
    } else if (i === 3) {
      title = 'Hari 3: Penetralan Otak dengan Olahraga & Gerak Fisik';
      insight = 'Ketika dorongan dopamin menumpuk, energi tersebut harus dialihkan ke kontraksi otot besar melalui aktivitas fisik berat.';
      tasks = [
        'Jaga aturan utama: Dilarang berduaan bersama HP di kamar!',
        'Lakukan Push-up 20x atau Jalan Kaki Cepat selama 15 menit.',
        'Nyalakan audio kajian MP3 / murottal non-HP sebagai pengantar tidur.',
        'Ganti lamunan dengan bacaan Istighfar 100 kali.'
      ];
      verse = 'HR. Muslim - "Mukmin yang kuat lebih dicintai Allah daripada mukmin yang lemah."';
    } else if (i <= 14) {
      phaseId = 1;
      title = `Hari ${i}: Stabilisasi Kritis Detoks Dopamin (Fase ${i})`;
      insight = `Hari ke-${i} adalah masa akut penyesuaian otak. Sensasi gelisah atau bosan adalah tanda bahwa reseptor dopaminmu sedang dalam pemulihan.`;
      tasks = [
        `Dilarang bersendirian dengan HP di ruangan tertutup.`,
        `Wajib menyalakan audio MP3 kajian / murottal (selain HP) saat menjelang tidur.`,
        `Disiplinkan Shalat 5 waktu tepat waktu di masjid / awal waktu.`,
        `Catat pemicu paling dominan yang kamu rasakan hari ini di Jurnal Diagnosa.`
      ];
      verse = 'QS. Al-Ankabut: 45 - "Sesungguhnya shalat itu mencegah dari perbuatan keji dan mungkar."';
    } else if (i <= 45) {
      phaseId = 2;
      title = `Hari ${i}: Re-Wiring Otak & Pembentukan Kebiasaan Baru`;
      insight = `Jalur sinapsis lama di Prefrontal Cortex mulai memudar. Otakmu sedang membentuk jalur kebiasaan produktif baru.`;
      tasks = [
        `Terapkan disiplin: Tidak bersendirian bersama HP & selalu dengar MP3 kajian menjelang tidur.`,
        `Luangkan waktu 20 menit membaca buku bermanfaat atau belajar skill baru.`,
        `Rutin dzikir pagi & petang tanpa terlewat.`,
        `Gantikan kebiasaan melamun dengan tilawah Al-Qur’an minimal 1 maqra/halaman.`
      ];
      verse = 'QS. Ar-Ra’d: 28 - "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."';
    } else if (i <= 75) {
      phaseId = 3;
      title = `Hari ${i}: Tazkiyatun Nafs & Pengukuhan Muraqabah`;
      insight = `Memperkuat rasa kesadaran bahwa Allah Maha Melihat di mana pun kamu berada, terutama saat sendiri di kegelapan malam.`;
      tasks = [
        `Jaga kebersihan telinga dan pikiran: Rutin dengar MP3 ilmu syar'i sebelum tidur & hindari sepi berdua dengan HP.`,
        `Lakukan amalan tersembunyi (Sedekah subuh / Shalat Tahajud 2 rakaat).`,
        `Bantu keluarga atau teman tanpa mengharapkan balasan manusia.`,
        `Evaluasi kebersihan niat dan lindungi hati dari sifat sombong/merasa aman.`
      ];
      verse = 'QS. Yasin: 65 - "Pada hari ini Kami tutup mulut mereka dan berkatalah tangan mereka..."';
    } else {
      phaseId = 4;
      title = `Hari ${i}: Pembebasan Total & Istiqomah Seumur Hidup`;
      insight = `Selamat! Karakter baru dan kontrol Prefrontal Cortex milikmu telah pulih signifikan. Pertahankan kemerdekaan ini sampai ajal menjemput.`;
      tasks = [
        `Istiqomahkan gaya hidup aman: Jauhi HP saat sendirian & tidur diiringi audio MP3 murattal/kajian.`,
        `Bantu sesama / bagikan edukasi bahaya PMO kepada mereka yang membutuhkan.`,
        `Buat target hidup besar baru (Karier, Pendidikan, atau Pernikahan syar'i).`,
        `Syukuri nikmat hijrah dan berdoa memohon ketetapan hati (Istiqomah).`
      ];
      verse = 'QS. Fussilat: 30 - "Sesungguhnya orang-orang yang berkata Tuhan kami ialah Allah kemudian mereka teguh berdiri..."';
    }

    list.push({ day: i, phaseId, title, insight, tasks, verse });
  }
  return list;
};

const MISSIONS_DATA = generate90DaysMissions();

const DIAGNOSTIC_PRESETS = [
  {
    id: 'loneliness_night',
    title: 'Sepi / HP Malam Hari di Kamar',
    icon: Moon,
    category: 'Fisik & Lingkungan',
    severity: 'Kritis (Bahaya Tingkat Tinggi)',
    dopamineSpike: 'Reseptor Dopamin Akut (15 Menit Kritis)',
    diagnosis: 'Sinyal Kritis! Isolasi fisik di tempat tidur bersama HP saat tubuh lelah adalah perangkap utama yang mematikan Prefrontal Cortex (PFC). Akal sehatmu sedang dilumpuhkan secara agresif.',
    actionProtocol: [
      '⚡ LANGKAH 1 (FISIK): Buka pintu kamar SEKARANG! Pindahkan HP ke luar ruangan (ruang tamu/dapur/meja makan). Dilarang menyentuh HP di atas kasur malam ini.',
      '❄️ LANGKAH 2 (SHOCK AIR): Ambil wudhu dengan air dingin, basuh wajah & kepala sampai terasa dingin meresap untuk menurunkan hormon adrenokortikal.',
      '📖 LANGKAH 3 (RESONANSI MURAQABAH): Hidupkan Audio MP3 Murottal/Kajian dari perangkat selain HP (atau simpan HP di jarak 3 meter) dan tidurlah dengan posisi miring ke kanan.'
    ],
    verse: 'QS. Yasin: 65 - "Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka dan kesaksianlah kaki mereka terhadap apa yang dahulu mereka kerjakan."'
  },
  {
    id: 'visual_syubhat',
    title: 'Melihat Gambar/Konten Haram di Medsos',
    icon: Eye,
    category: 'Mata & Visual',
    severity: 'Tinggi (Potensi Relapse 85%)',
    dopamineSpike: 'Spike Dopamin Visual Instan',
    diagnosis: 'Zina Mata Terdeteksi! Terjadi lonjakan dopamin buatan yang mengirim sinyal impulsif ke saraf tepi. Jika tidak diputus dalam 30 detik, sinyal ini akan memaksa tubuh melakukan maksiat.',
    actionProtocol: [
      '⚡ LANGKAH 1 (PEMUTUSAN AKSES): Matikan Wi-Fi / Data Seluler HP-mu SELAMA 30 MENIT SEKARANG JUGA!',
      '💪 LANGKAH 2 (PENGALIHAN DARAH): Lakukan 20x Push-up atau 20x Squat secara eksplosif! Alirkan darah dari otak impulsif menuju otot rangka besar.',
      '🛡️ LANGKAH 3 (PEMBERSIHAN): Ucapkan "A\'udzubillahi minasy-syaithanir-rajim" 3x, cuci mata dengan air bersih, dan baca Ayat Kursi.'
    ],
    verse: 'QS. An-Nur: 30 - "Katakanlah kepada laki-laki yang beriman: Hendaklah mereka menahan pandangannya, dan memelihara kemaluannya; yang demikian itu adalah lebih suci bagi mereka..."'
  },
  {
    id: 'stress_boredom',
    title: 'Stres Pekerjaan / Tugas / Bosan',
    icon: Frown,
    category: 'Emosional',
    severity: 'Sedang (Jebakan Pelarian)',
    dopamineSpike: 'Pencarian Kesenangan Semu',
    diagnosis: 'Dopamine Trap Detected! Otakmu yang lelah sedang mencari pelarian cepat untuk menurunkan hormon stres (kortisol). PMO bukanlah solusi stres, melainkan racun yang merusak sistem sarafmu.',
    actionProtocol: [
      '💧 LANGKAH 1 (HIDRASI FISIK): Minum 2 gelas air dingin secara perlahan sambil duduk.',
      '🚶 LANGKAH 2 (PERPINDAHAN RUANG): Berdiri dan keluar dari ruangan selama 10 menit. Hirup udara segar dan tatap langit luar.',
      '📿 LANGKAH 3 (DZIKIR PENENANG): Ucapkan "Subhanallah walhamdulillah wala ilaha illallah wallahu akbar" 33x dengan menghayati artinya.'
    ],
    verse: 'QS. Ar-Ra\'d: 28 - "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."'
  },
  {
    id: 'anger_emotional',
    title: 'Emosi / Marah / Kecewa / Sakit Hati',
    icon: Zap,
    category: 'Emosional',
    severity: 'Tinggi (Robohnya Benteng)',
    dopamineSpike: 'Banjir Hawa Nafsu & Amarah',
    diagnosis: 'Ego Hijack! Setan memanfaatkan emosi negatif dan amarahmu untuk merobohkan seluruh benteng pertahanan keimanan dan akal sehatmu.',
    actionProtocol: [
      '🛑 LANGKAH 1 (PERUBAHAN POSTUR): Jika kamu berdiri maka segera duduklah! Jika kamu duduk maka berbaringlah!',
      '🧊 LANGKAH 2 (PEMADAMAN API): Segera berwudhu dengan air mengalir secara sempurna. Padamkan api amarah dan bisikan setan.',
      '🤲 LANGKAH 3 (ISTIGHFAR LISAN): Ucapkan Istighfar "Astaghfirullahal \'Adzim" 50x sampai sesak di dadamu menghilang.'
    ],
    verse: 'HR. Abu Dawud - "Marah itu dari setan dan setan diciptakan dari api, dan api hanya padam dengan air. Maka jika salah seorang kalian marah, berwudhulah."'
  }
];

const createInitialUserData = () => ({
  startDate: new Date().toISOString(),
  completedDays: [],
  completedTasks: {},
  relapses: [],
  triggers: []
});

export default function App() {
  // Authentication state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const activeSession = localStorage.getItem(SESSION_KEY);
      return activeSession ? JSON.parse(activeSession) : null;
    } catch {
      return null;
    }
  });

  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Main application recovery data state (User Specific)
  const [userData, setUserData] = useState(() => {
    try {
      const activeSession = localStorage.getItem(SESSION_KEY);
      if (activeSession) {
        const user = JSON.parse(activeSession);
        const userStorageKey = `${STORAGE_KEY}_${user.email}`;
        const saved = localStorage.getItem(userStorageKey);
        if (saved) return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return createInitialUserData();
  });

  const [activeTab, setActiveTab] = useState('program'); // 'program' | 'journal' | 'panic' | 'relapse_log'
  const [selectedDayNum, setSelectedDayNum] = useState(1);
  const [activeDiagnosis, setActiveDiagnosis] = useState(null);

  // Relapse Modal & Evaluation Form State
  const [showRelapseModal, setShowRelapseModal] = useState(false);
  const [relapseTrigger, setRelapseTrigger] = useState('');
  const [relapseLoss, setRelapseLoss] = useState('');
  const [relapsePlan, setRelapsePlan] = useState('');

  // Breathing Visualizer State
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('Inhale');
  const [breathingTimer, setBreathingTimer] = useState(4);

  // Time calculations
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Save progress under user-specific key
  useEffect(() => {
    if (!currentUser?.email) return;
    try {
      const userStorageKey = `${STORAGE_KEY}_${currentUser.email}`;
      localStorage.setItem(userStorageKey, JSON.stringify(userData));
    } catch (e) {
      console.error('Failed to save recovery data to localStorage', e);
    }
  }, [userData, currentUser]);

  // Auth Functions
  const handleRegister = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authName.trim() || !authEmail.trim() || !authPassword.trim()) {
      setAuthError('Semua kolom wajib diisi!');
      return;
    }

    if (authPassword.length < 6) {
      setAuthError('Kata sandi minimal 6 karakter!');
      return;
    }

    let usersDB = [];
    try {
      const storedUsers = localStorage.getItem(AUTH_KEY);
      if (storedUsers) usersDB = JSON.parse(storedUsers);
    } catch {
      usersDB = [];
    }

    const cleanEmail = authEmail.toLowerCase().trim();
    const existingUser = usersDB.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existingUser) {
      setAuthError('Email ini sudah terdaftar! Silakan login.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: authName.trim(),
      email: cleanEmail,
      password: authPassword
    };

    usersDB.push(newUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(usersDB));
    
    // Create new initial data starting from NOW (0 days/hours/minutes/seconds)
    const freshUserData = createInitialUserData();
    const userStorageKey = `${STORAGE_KEY}_${cleanEmail}`;
    localStorage.setItem(userStorageKey, JSON.stringify(freshUserData));
    setUserData(freshUserData);

    // Auto login
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name: newUser.name, email: newUser.email }));
    setCurrentUser({ name: newUser.name, email: newUser.email });
    setAuthName('');
    setAuthEmail('');
    setAuthPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!authEmail.trim() || !authPassword.trim()) {
      setAuthError('Silakan masukkan Email dan Kata Sandi!');
      return;
    }

    let usersDB = [];
    try {
      const storedUsers = localStorage.getItem(AUTH_KEY);
      if (storedUsers) usersDB = JSON.parse(storedUsers);
    } catch {
      usersDB = [];
    }

    const cleanEmail = authEmail.toLowerCase().trim();
    const user = usersDB.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.password === authPassword
    );

    if (!user) {
      setAuthError('Email atau kata sandi salah!');
      return;
    }

    // Load user-specific data or create fresh if missing
    const userStorageKey = `${STORAGE_KEY}_${cleanEmail}`;
    const savedData = localStorage.getItem(userStorageKey);
    if (savedData) {
      try {
        setUserData(JSON.parse(savedData));
      } catch {
        const freshData = createInitialUserData();
        setUserData(freshData);
        localStorage.setItem(userStorageKey, JSON.stringify(freshData));
      }
    } else {
      const freshData = createInitialUserData();
      setUserData(freshData);
      localStorage.setItem(userStorageKey, JSON.stringify(freshData));
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
    setCurrentUser({ name: user.name, email: user.email });
    setAuthEmail('');
    setAuthPassword('');
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  };

  // Box Breathing Effect
  useEffect(() => {
    let interval = null;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathingTimer((prev) => {
          if (prev > 1) return prev - 1;
          setBreathingPhase((currentPhase) => {
            if (currentPhase === 'Inhale') return 'Hold (In)';
            if (currentPhase === 'Hold (In)') return 'Exhale';
            if (currentPhase === 'Exhale') return 'Hold (Out)';
            return 'Inhale';
          });
          return 4;
        });
      }, 1000);
    } else {
      setBreathingPhase('Inhale');
      setBreathingTimer(4);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive]);

  // Realtime streak diff
  const startDateObj = new Date(userData.startDate);
  const diffTimeMs = Math.max(0, now.getTime() - startDateObj.getTime());
  const activeStreakDays = Math.floor(diffTimeMs / (1000 * 60 * 60 * 24));

  const timeDiff = {
    days: activeStreakDays,
    hours: Math.floor((diffTimeMs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diffTimeMs / (1000 * 60)) % 60),
    seconds: Math.floor((diffTimeMs / 1000) % 60)
  };

  const selectedMission = MISSIONS_DATA.find((m) => m.day === selectedDayNum) || MISSIONS_DATA[0];

  const handleSetTaskStatus = (dayNum, taskIdx, status) => {
    const currentDayTasks = userData.completedTasks[dayNum] || {};
    const newStatus = currentDayTasks[taskIdx] === status ? null : status;

    const updatedDayTasks = { ...currentDayTasks };
    if (newStatus) {
      updatedDayTasks[taskIdx] = newStatus;
    } else {
      delete updatedDayTasks[taskIdx];
    }

    setUserData((prev) => ({
      ...prev,
      completedTasks: {
        ...prev.completedTasks,
        [dayNum]: updatedDayTasks
      }
    }));
  };

  const handleCompleteDay = (dayNum) => {
    if (!userData.completedDays.includes(dayNum)) {
      setUserData((prev) => ({
        ...prev,
        completedDays: [...prev.completedDays, dayNum]
      }));
    }
  };

  const handleOpenRelapseModal = () => {
    setShowRelapseModal(true);
  };

  const handleConfirmRelapse = (e) => {
    e.preventDefault();
    if (!relapseTrigger || !relapseLoss || !relapsePlan) {
      alert('Mohon isi seluruh formulir evaluasi diri untuk meriset program 90 Hari.');
      return;
    }

    const newRelapseLog = {
      id: Date.now(),
      date: new Date().toISOString(),
      previousStreakDays: activeStreakDays,
      trigger: relapseTrigger,
      loss: relapseLoss,
      plan: relapsePlan
    };

    setUserData((prev) => ({
      ...prev,
      startDate: new Date().toISOString(),
      completedDays: [],
      completedTasks: {},
      relapses: [newRelapseLog, ...prev.relapses]
    }));

    setRelapseTrigger('');
    setRelapseLoss('');
    setRelapsePlan('');
    setShowRelapseModal(false);
    setSelectedDayNum(1);
  };

  const handleProcessDiagnosis = (presetObj) => {
    if (!presetObj) return;
    setActiveDiagnosis(presetObj);

    const newLog = {
      id: Date.now(),
      date: new Date().toISOString(),
      title: presetObj.title,
      severity: presetObj.severity,
      diagnosis: presetObj.diagnosis,
      protocol: presetObj.actionProtocol
    };

    setUserData((prev) => ({ ...prev, triggers: [newLog, ...prev.triggers] }));
  };

  // IF USER IS NOT LOGGED IN, RENDER AUTHENTICATION PAGE
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex items-center justify-center p-4 selection:bg-emerald-500 selection:text-slate-950">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* APP HEADER / LOGO */}
          <div className="text-center space-y-2 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
              <Target className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">HijrahClean</h1>
            <p className="text-xs text-slate-400">Aplikasi Pemulihan Kecanduan PMO & Program 90 Hari</p>
          </div>

          {/* AUTH TOGGLE SWITCH */}
          <div className="grid grid-cols-2 p-1 bg-slate-950 border border-slate-800 rounded-xl text-xs font-bold">
            <button
              onClick={() => { setAuthMode('login'); setAuthError(''); }}
              className={`py-2 rounded-lg transition-all ${authMode === 'login' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              Masuk / Login
            </button>
            <button
              onClick={() => { setAuthMode('register'); setAuthError(''); }}
              className={`py-2 rounded-lg transition-all ${authMode === 'register' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              Daftar Akun Baru
            </button>
          </div>

          {/* ERROR ALERT */}
          {authError && (
            <div className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-xs font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* AUTH FORM */}
          <form onSubmit={authMode === 'register' ? handleRegister : handleLogin} className="space-y-4">
            
            {authMode === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Nama Lengkap:</span>
                </label>
                <input
                  type="text"
                  required
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                  placeholder="Masukkan nama lengkapmu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Alamat Email:</span>
              </label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kata Sandi:</span>
              </label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
            >
              {authMode === 'register' ? (
                <>
                  <UserCheck className="w-4 h-4" />
                  <span>Daftar Sekarang & Mulai Hijrah</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Masuk Ke Aplikasi</span>
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-slate-500 text-center">
            Semua data tersimpan aman secara privat di perangkat milikmu.
          </p>

        </div>
      </div>
    );
  }

  // MAIN DASHBOARD (FOR LOGGED-IN USERS)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      
      {/* APP HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-black text-white">HijrahClean</h1>
                <a
                  href="https://instagram.com/takutdosa.id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 transition-all flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>by @takutdosa.id</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400">Akun: <span className="text-emerald-400 font-semibold">{currentUser.name}</span></p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 rounded-xl transition-all text-xs font-bold flex items-center gap-1.5"
            title="Keluar / Logout"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Keluar</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 space-y-6 pb-24">
        
        {/* LIVE STREAK COUNTER BANNER */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden space-y-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-widest">
                CLEAN STREAK AKTIF
              </span>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
                <span>Bebas PMO & Pemulihan Dopamin</span>
              </h2>
            </div>

            <button
              onClick={handleOpenRelapseModal}
              className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Lapor Relapse / Gagal PMO</span>
            </button>
          </div>

          {/* REALTIME TIMER GRID */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">{timeDiff.days}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase">Hari</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3">
              <p className="text-2xl sm:text-3xl font-black text-white">{timeDiff.hours}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase">Jam</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3">
              <p className="text-2xl sm:text-3xl font-black text-white">{timeDiff.minutes}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase">Menit</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">{timeDiff.seconds}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase">Detik</p>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="grid grid-cols-4 bg-slate-900 border border-slate-800 rounded-2xl p-1 gap-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('program')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'program' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">90 Hari Challenge</span>
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'journal' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span className="hidden sm:inline">Diagnosa</span>
          </button>
          <button
            onClick={() => setActiveTab('panic')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'panic' ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span className="hidden sm:inline">Darurat</span>
          </button>
          <button
            onClick={() => setActiveTab('relapse_log')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'relapse_log' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span className="hidden sm:inline">Riwayat Reset</span>
          </button>
        </div>

        {/* TAB 1: PROGRAM 90 HARI */}
        {activeTab === 'program' && (
          <div className="space-y-6">
            
            {/* MATRIX GRID DAYS (SEALED LOGIC INCLUDED) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Matriks Kurikulum 90 Hari (Klik nomor untuk membuka)</span>
                </h3>
                <span className="text-[10px] text-amber-400 font-semibold">
                  Hari Aktif: Ke-{activeStreakDays + 1}
                </span>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5 max-h-48 overflow-y-auto p-1 custom-scrollbar">
                {MISSIONS_DATA.map((m) => {
                  const dayNum = m.day;
                  const isUnlocked = dayNum <= activeStreakDays + 1;
                  const isSelected = selectedDayNum === dayNum;
                  const isCompleted = userData.completedDays.includes(dayNum);
                  
                  // Task status calculation
                  const tasksStatusObj = userData.completedTasks[dayNum] || {};
                  const hasFailedTask = Object.values(tasksStatusObj).includes('failed');

                  let buttonBg = 'bg-slate-950 text-slate-600 border-slate-900 cursor-not-allowed';
                  if (isUnlocked) {
                    buttonBg = 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700';
                    if (hasFailedTask) buttonBg = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                    if (isCompleted) buttonBg = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold';
                  }

                  if (isSelected) {
                    buttonBg += ' ring-2 ring-emerald-400 border-transparent';
                  }

                  return (
                    <button
                      key={dayNum}
                      disabled={!isUnlocked}
                      onClick={() => setSelectedDayNum(dayNum)}
                      className={`h-9 rounded-xl border text-xs font-bold flex items-center justify-center transition-all relative ${buttonBg}`}
                    >
                      {!isUnlocked ? (
                        <Lock className="w-3 h-3 text-slate-700" />
                      ) : (
                        <span>{dayNum}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DAY MISSION DETAIL CARD */}
            {selectedDayNum > activeStreakDays + 1 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-slate-600">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Hari Ke-{selectedDayNum} Masih Tersegel!</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Selesaikan hari demi hari secara istiqomah. Hari ini masih terkunci sampai hitungan *Clean Streak* kamu mencapainya.
                </p>
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5">
                <div className="border-b border-slate-800 pb-4 space-y-1">
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                    KURIKULUM HARI KE-{selectedMission.day}
                  </span>
                  <h2 className="text-lg font-black text-white">{selectedMission.title}</h2>
                  <p className="text-xs text-slate-300 leading-relaxed italic">{selectedMission.insight}</p>
                </div>

                {/* TASKS CHECKLIST */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Tugas & Amalan Wajib Hari Ini:
                  </h3>
                  
                  <div className="space-y-2">
                    {selectedMission.tasks.map((taskText, idx) => {
                      const dayTaskObj = userData.completedTasks[selectedMission.day] || {};
                      const taskStatus = dayTaskObj[idx]; // 'completed' | 'failed' | undefined

                      return (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                            taskStatus === 'completed'
                              ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                              : taskStatus === 'failed'
                              ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                              : 'bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          <span className="text-xs font-medium leading-relaxed">{taskText}</span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleSetTaskStatus(selectedMission.day, idx, 'completed')}
                              className={`p-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1 ${
                                taskStatus === 'completed'
                                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-emerald-400'
                              }`}
                              title="Tandai Selesai"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleSetTaskStatus(selectedMission.day, idx, 'failed')}
                              className={`p-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1 ${
                                taskStatus === 'failed'
                                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-amber-400'
                              }`}
                              title="Tandai Terlewat"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* VERSE & COMPLETE BUTTON */}
                <div className="pt-2 border-t border-slate-800 space-y-4">
                  <p className="text-xs text-amber-300/90 italic font-medium bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl">
                    {selectedMission.verse}
                  </p>

                  <button
                    onClick={() => handleCompleteDay(selectedMission.day)}
                    disabled={userData.completedDays.includes(selectedMission.day)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      userData.completedDays.includes(selectedMission.day)
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 cursor-default'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/10'
                    }`}
                  >
                    <CheckSquare className="w-4 h-4" />
                    <span>
                      {userData.completedDays.includes(selectedMission.day)
                        ? 'Modul Hari Ini Selesai Dilakukan'
                        : 'Tandai Modul Hari Ini Selesai'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: JURNAL DIAGNOSA POWERFUL */}
        {activeTab === 'journal' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5">
              <div className="border-b border-slate-800 pb-3 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-base font-extrabold text-white">Sistem Diagnosa Kedaruratan Pemicu</h2>
                </div>
                <p className="text-xs text-slate-400">
                  Pilih pemicu atau bisikan impulsif yang sedang kamu rasakan. Sistem akan memberikan diagnosa medis-syari beserta protokol penanganan instan tanpa kompromi.
                </p>
              </div>

              {/* DIAGNOSTIC TRIGGER BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DIAGNOSTIC_PRESETS.map((preset) => {
                  const IconComponent = preset.icon;
                  const isSelected = activeDiagnosis?.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleProcessDiagnosis(preset)}
                      className={`p-4 rounded-xl border text-left transition-all space-y-2 relative overflow-hidden ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/40 ring-1 ring-emerald-400'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          {preset.severity}
                        </span>
                        <IconComponent className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xs font-bold text-white">{preset.title}</h3>
                      <p className="text-[11px] text-slate-400">{preset.category}</p>
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE DIAGNOSIS RESULT CARD */}
              {activeDiagnosis && (
                <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        HASIL DIAGNOSA KEDARURATAN
                      </span>
                      <h3 className="text-sm font-extrabold text-white">{activeDiagnosis.title}</h3>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-900 border border-slate-800 text-emerald-400 rounded-lg">
                      {activeDiagnosis.dopamineSpike}
                    </span>
                  </div>

                  {/* DIAGNOSIS BREAKDOWN */}
                  <div className="p-3.5 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-1">
                    <p className="text-xs font-bold text-rose-400 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" /> Analisis Saraf & Kondisi Akal:
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">{activeDiagnosis.diagnosis}</p>
                  </div>

                  {/* ACTION PROTOCOL STAGE */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> PROTOKOL TINDAKAN SEKETIKA (WAJIB DILAKUKAN):
                    </h4>
                    <div className="space-y-2">
                      {activeDiagnosis.actionProtocol.map((step, sIdx) => (
                        <div key={sIdx} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 font-medium leading-relaxed">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SYAR'I ANCHOR */}
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 italic">
                    {activeDiagnosis.verse}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: TOMBOL DARURAT (PANIC PROTOCOL SUPER AMPUH) */}
        {activeTab === 'panic' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-900 border border-rose-500/40 rounded-2xl p-5 sm:p-6 space-y-6">
              
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-rose-500/20 border border-rose-500/40 rounded-2xl flex items-center justify-center mx-auto text-rose-400 animate-pulse">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-black text-white">PROTOKOL INTERVENSI DARURAT INSTAN</h2>
                <p className="text-xs text-rose-200 max-w-md mx-auto leading-relaxed">
                  Dorongan dopamin hanya berlangsung intens selama 10–15 menit pertama! Ikuti instruksi komando di bawah ini untuk mematikan dorongan fisik seketika.
                </p>
              </div>

              {/* BOX BREATHING VISUALIZER */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-4 shadow-inner">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Wind className="w-4 h-4 text-emerald-400" />
                  <span>Latihan Pernapasan Saraf Parasimpatik (Box Breathing 4-4-4-4)</span>
                </span>

                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full border-4 border-emerald-500/30 transition-all duration-1000 ${isBreathingActive ? 'scale-110 border-emerald-400 bg-emerald-500/5' : ''}`} />
                  <div className="text-center space-y-1">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{breathingPhase}</p>
                    <p className="text-4xl font-black text-white">{breathingTimer}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className={`px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-lg ${
                    isBreathingActive
                      ? 'bg-rose-500 hover:bg-rose-400 text-slate-950 shadow-rose-500/20'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  }`}
                >
                  {isBreathingActive ? 'Hentikan Panduan Pernapasan' : 'Mulai Latihan Pernapasan Penenang Dopamin'}
                </button>
              </div>

              {/* IMMEDIATE PHYSICAL ACTIONS */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Komando Tindakan Fisik 60 Detik:</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 1. Pindah Ruangan
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">Berdiri dan langsung keluar dari kamar tidur SEKARANG. Jangan bertahan di kasur!</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Droplets className="w-3.5 h-3.5" /> 2. Siram Air Cold Reset
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">Wudhu atau basuh wajah dengan air dingin mengalir untuk mengejutkan sistem saraf.</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> 3. Matikan Layar HP
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">Letakkan HP jauh dari jangkauan tangan minimal 15 menit sampai dorongan mereda.</p>
                  </div>
                </div>
              </div>

              {/* STERN REMINDER */}
              <div className="p-4 bg-rose-950/30 border border-rose-500/30 rounded-xl text-xs text-rose-200 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-rose-300">
                  <ShieldAlert className="w-4 h-4" /> Ingatlah Pengawasan Allah (Muraqabah):
                </p>
                <p className="italic leading-relaxed">
                  "Dia mengetahui (pandangan) mata yang khianat dan apa yang disembunyikan oleh hati." (QS. Ghafir: 19). Nikmat kenikmatan maksiat hanya berlangsung beberapa detik, namun penyesalan dan kehancuran masa depan bertahan seumur hidup.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: EVALUASI RELAPSE LOG */}
        {activeTab === 'relapse_log' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="border-b border-slate-800 pb-3 space-y-1">
                <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-rose-400" />
                  <span>Riwayat Evaluasi Pertanggungjawaban Relapse</span>
                </h2>
                <p className="text-xs text-slate-400">
                  Catatan pembelajaran dari kekalahan masa lalu agar kesalahan pemicu yang sama tidak berulang.
                </p>
              </div>

              {userData.relapses.length === 0 ? (
                <div className="p-8 text-center text-slate-500 space-y-2">
                  <Award className="w-8 h-8 mx-auto text-emerald-500/40" />
                  <p className="text-xs">Belum ada riwayat relapse. Pertahankan perjuangan ini!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {userData.relapses.map((r) => (
                    <div key={r.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                        <span>{new Date(r.date).toLocaleDateString('id-ID', { dateStyle: 'medium' })}</span>
                        <span className="font-bold text-rose-400">Streak Terputus: {r.previousStreakDays} Hari</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-300">Pemicu:</span>
                        <p className="text-slate-400">{r.trigger}</p>
                      </div>
                      <div>
                        <span className="font-bold text-rose-300">Kerugian yang Dirasakan:</span>
                        <p className="text-slate-400">{r.loss}</p>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-400">Komitmen Mencegah Berulang:</span>
                        <p className="text-slate-300">{r.plan}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* RELAPSE EVALUATION MODAL */}
      {showRelapseModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 overflow-y-auto flex items-center justify-center">
          <div className="max-w-xl w-full bg-slate-900 border border-rose-500/40 rounded-3xl p-6 space-y-6 shadow-2xl my-8">
            
            <div className="text-center space-y-2 border-b border-slate-800 pb-4">
              <div className="w-12 h-12 bg-rose-500/20 border border-rose-500/40 rounded-2xl flex items-center justify-center mx-auto text-rose-400">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-black text-white">PERINGATAN TEGAS & EVALUASI PMO</h2>
              <p className="text-xs text-rose-300">
                Setiap kali kamu kalah dan mengulangi PMO, kamu sedang secara aktif merusak struktur otakmu dan membelakangi akhirat!
              </p>
            </div>

            {/* SEVERE WARNING SECTIONS */}
            <div className="space-y-4 max-h-60 overflow-y-auto p-1 custom-scrollbar text-xs">
              
              <div className="p-3.5 bg-rose-950/30 border border-rose-500/30 rounded-xl space-y-1.5">
                <p className="font-bold text-rose-400 flex items-center gap-1.5">
                  <Brain className="w-4 h-4" /> 1. Dampak Medis & Neurosains (Kerusakan Otak):
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1 leading-relaxed">
                  <li><b>Atrofi Prefrontal Cortex (PFC):</b> Otak depan penentu kesuksesan menyusut. Kamu makin pelupa, linglung, dan sulit fokus.</li>
                  <li><b>Reseptor Dopamin Kebas:</b> Kebiasaan produktif terasa membosankan. Kamu kehilangan daya juang dan semangat hidup.</li>
                </ul>
              </div>

              <div className="p-3.5 bg-amber-950/30 border border-amber-500/30 rounded-xl space-y-1.5">
                <p className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Frown className="w-4 h-4" /> 2. Dampak Sosial & Kesuksesan Masa Depan:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1 leading-relaxed">
                  <li>Rasa percaya diri hancur, memicu ketakutan sosial (*social anxiety*).</li>
                  <li>Hilangnya wibawa kepemimpinan dan rusaknya potensi karier/finansial masa depan.</li>
                </ul>
              </div>

              <div className="p-3.5 bg-rose-950/40 border border-rose-500/40 rounded-xl space-y-1.5">
                <p className="font-bold text-rose-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> 3. Teguran Syar'i & Siksa Akhirat:
                </p>
                <p className="text-slate-200 italic leading-relaxed">
                  "Sungguh aku mengetahui ada suatu kaum yang datang membawa kebaikan sebesar Gunung Tihamah yang putih, lalu Allah menjadikannya bagaikan debu yang berterbangan karena melanggar batasan Allah saat sendirian." (HR. Ibnu Majah)
                </p>
              </div>

            </div>

            {/* ACCOUNTABILITY FORM */}
            <form onSubmit={handleConfirmRelapse} className="space-y-4 pt-2 border-t border-slate-800">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">1. Apa pemicu utama kamu kalah kali ini?</label>
                <input
                  type="text"
                  required
                  value={relapseTrigger}
                  onChange={(e) => setRelapseTrigger(e.target.value)}
                  placeholder="Contoh: Sepi di kamar malam hari sambil main HP..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">2. Kerugian fisik/spiritual apa yang baru kamu rasakan?</label>
                <input
                  type="text"
                  required
                  value={relapseLoss}
                  onChange={(e) => setRelapseLoss(e.target.value)}
                  placeholder="Contoh: Otak terasa kabur, bersalah, lemas..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">3. Komitmen konkret apa agar pemicu ini tidak berulang?</label>
                <input
                  type="text"
                  required
                  value={relapsePlan}
                  onChange={(e) => setRelapsePlan(e.target.value)}
                  placeholder="Contoh: HP wajib ditaruh di luar kamar sebelum jam 10 malam..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowRelapseModal(false)}
                  className="w-1/2 py-3 rounded-xl border border-slate-800 font-bold text-xs text-slate-400 hover:text-white transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-rose-500 hover:bg-rose-400 text-slate-950 rounded-xl font-bold text-xs transition-all shadow-lg shadow-rose-500/20"
                >
                  Reset Program dari Hari Ke-1
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* FOOTER BRANDING */}
      <footer className="bg-slate-950 border-t border-slate-900 py-4 text-center">
        <a
          href="https://instagram.com/takutdosa.id"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-slate-500 hover:text-rose-400 transition-all inline-flex items-center gap-1.5"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>Dikembangkan oleh @takutdosa.id</span>
        </a>
      </footer>

    </div>
  );
}
