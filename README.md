<html lang="en" class="">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MUSA TRADERS - Enterprise Pharmacy Management System</title>

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind Configuration -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#0fd6b2', /* Vibrant Mint/Teal from image */
              dark: '#0ba387',
              light: '#27efaf',
              glass: 'rgba(15, 214, 178, 0.15)'
            },
            secondary: {
              DEFAULT: '#16eff6', /* Vibrant Cyan from image */
              dark: '#0fa3a8',
              light: '#57efeb'
            },
            accent: '#D97706', /* High contrast amber */
            success: '#15803D', /* High contrast green */
            danger: '#B91C1C', /* High contrast red */
            darkBg: '#080c14', /* Modern Dark Blue/Black */
            darkCard: '#111827', /* Modern Gray 900 */
            darkBorder: '#1F2937'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            urdu: ['Noto Nastaliq Urdu', 'serif']
          }
        }
      }
    }
  </script>

  <!-- Google Fonts & Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #F1F5F9;
    }

    .dark ::-webkit-scrollbar-track {
      background: #0B0F19;
    }

    ::-webkit-scrollbar-thumb {
      background: #94A3B8;
      border-radius: 99px;
      border: 2px solid #F1F5F9;
    }

    .dark ::-webkit-scrollbar-thumb {
      background: #475569;
      border: 2px solid #0B0F19;
    }

    /* Nastaliq Arabic/Urdu Typography */
    .lang-ur {
      font-family: 'Noto Nastaliq Urdu', 'Inter', sans-serif;
      direction: rtl;
    }

    /* High contrast borders and backgrounds */
    .glass-panel {
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
    }

    .dark .glass-panel {
      background: #0F172A;
      border: 2px solid #334155;
    }

    .glass-input {
      background: #FFFFFF;
      border: 2px solid #94A3B8;
      color: #0F172A;
      font-weight: 700;
    }

    .dark .glass-input {
      background: #1E293B;
      border: 2px solid #475569;
      color: #F8FAFC;
    }

    .glass-input:focus {
      border-color: #1D4ED8;
      box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.25);
      outline: none;
    }

    /* Animations */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slide-down {
      animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    /* Submenu Accordion Height Animation */
    .submenu-list {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.25s ease-out;
    }

    .submenu-list.open {
      max-height: 400px;
    }

    /* Force high contrast text on neon primary/secondary gradients */
    .from-primary,
    .to-primary,
    .from-secondary,
    .to-secondary,
    .bg-primary,
    .bg-secondary {
      color: #0F172A !important;
    }
  </style>
</head>

<body
  class="bg-[#F8FAFC] dark:bg-darkBg text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300 antialiased overflow-x-hidden">

  <!-- ================= AUTH CONTAINER ================= -->
  <div id="authContainer"
    class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-[#070b14] dark:to-slate-950">
    <div class="w-full max-w-lg p-8 rounded-[24px] shadow-2xl glass-panel relative animate-slide-down">

      <!-- Brand Header -->
      <div class="flex flex-col items-center mb-6 text-center">
        <div
          class="w-20 h-20 rounded-[20px] bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-xl mb-4 transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
          <i class="fa-solid fa-prescription-bottle-medical text-4xl"></i>
        </div>
        <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          MUSA TRADERS
        </h1>
        <p class="text-xs uppercase tracking-widest font-black text-primary dark:text-primary-light mt-1"
          data-t="brand_tagline">
          Smart Healthcare, Smarter Management
        </p>
      </div>

      <!-- Auth Error Alert -->
      <div id="authAlert"
        class="hidden mb-6 p-4 rounded-xl bg-red-150 border-2 border-danger text-danger flex items-center gap-3 text-xs font-black animate-slide-down">
        <i class="fa-solid fa-triangle-exclamation text-lg"></i>
        <span id="authAlertText">Credentials are incorrect.</span>
      </div>

      <!-- Tab Buttons -->
      <div
        class="flex bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-xl mb-6 border border-slate-200 dark:border-slate-800">
        <button onclick="switchAuthTab('login')" id="tabBtnLogin"
          class="flex-1 py-3 text-xs font-black rounded-lg bg-white dark:bg-slate-800 shadow text-primary dark:text-white transition-all">
          <span data-t="btn_login">Log In</span>
        </button>
        <button onclick="switchAuthTab('signup')" id="tabBtnSignup"
          class="flex-1 py-3 text-xs font-black rounded-lg text-slate-500 dark:text-slate-400 transition-all">
          <span data-t="btn_signup">Sign Up</span>
        </button>
      </div>

      <!-- 1. LOGIN SECTION -->
      <div id="loginSection" class="space-y-6">

        <!-- Quick Login Square Profiles Container -->
        <div class="space-y-3">
          <span class="block text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center"
            data-t="quick_login_title">Quick Account Sign-in</span>
          <div class="grid grid-cols-3 gap-3" id="quickLoginGrid">
            <!-- Dynamic Square Profile buttons populated by JS -->
          </div>
        </div>

        <div class="flex items-center my-4">
          <div class="flex-1 border-t-2 border-slate-200 dark:border-slate-800"></div>
          <span class="px-3 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
            data-t="or_separator">OR</span>
          <div class="flex-1 border-t-2 border-slate-200 dark:border-slate-800"></div>
        </div>

        <!-- Manual Login Form -->
        <form onsubmit="handleLoginSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
              data-t="lbl_username">Username</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <i class="fa-regular fa-user"></i>
              </span>
              <input type="text" id="loginUsername" required placeholder="Enter Username"
                class="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm">
            </div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1.5">
              <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400"
                data-t="lbl_password">Password</label>
              <button type="button" onclick="switchAuthTab('forgot')"
                class="text-xs font-black text-primary dark:text-primary-light hover:underline"
                data-t="btn_forgot_pwd">Forgot?</button>
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <i class="fa-solid fa-lock"></i>
              </span>
              <input type="password" id="loginPassword" required placeholder="••••••••"
                class="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm">
            </div>
          </div>

          <button type="submit"
            class="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.01] transform active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-6 border-2 border-primary-dark">
            <i class="fa-solid fa-right-to-bracket text-sm"></i>
            <span data-t="btn_login_submit">Access Dashboard</span>
          </button>
        </form>
      </div>

      <!-- 2. SIGNUP FORM -->
      <form id="signupForm" onsubmit="handleSignupSubmit(event)" class="space-y-4 hidden">
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_fullname">Full Name</label>
          <input type="text" id="signupName" required placeholder="Enter Full Name"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm">
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_username">Username</label>
          <input type="text" id="signupUsername" required placeholder="Choose Username"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm">
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_email">Email Address</label>
          <input type="email" id="signupEmail" required placeholder="name@musatraders.com"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm">
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_role">Personnel Role</label>
          <select id="signupRole"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm dark:bg-slate-800 focus:outline-none">
            <option value="Super Admin">Super Admin</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Cashier">Cashier</option>
            <option value="Inventory Manager">Inventory Manager</option>
            <option value="Accountant">Accountant</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_password">Password</label>
          <input type="password" id="signupPassword" required placeholder="Create Password"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm">
        </div>

        <button type="submit"
          class="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl hover:scale-[1.01] transform active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-6 border-2 border-secondary-dark">
          <i class="fa-solid fa-user-plus text-sm"></i>
          <span data-t="btn_signup_submit">Register Employee</span>
        </button>
      </form>

      <!-- 3. FORGOT PASSWORD -->
      <form id="forgotForm" onsubmit="handleForgotSubmit(event)" class="space-y-4 hidden">
        <div class="text-center mb-6">
          <h3 class="text-lg font-black text-slate-800 dark:text-white" data-t="forgot_title">Forgot Password?</h3>
          <p class="text-xs text-slate-400 mt-1" data-t="forgot_desc">Enter email to generate simulated security code.
          </p>
        </div>
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5"
            data-t="lbl_email">Email Address</label>
          <input type="email" id="forgotEmail" required placeholder="your-email@musatraders.com"
            class="w-full px-4 py-3 rounded-xl glass-input text-sm">
        </div>

        <button type="submit"
          class="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-primary-dark">
          <span data-t="btn_submit_req">Submit Request</span>
        </button>

        <button type="button" onclick="switchAuthTab('login')"
          class="w-full text-center text-xs font-black text-slate-450 mt-4 hover:underline">
          <i class="fa-solid fa-arrow-left mr-1"></i> <span data-t="back_to_login">Back to Login</span>
        </button>
      </form>

      <!-- 4. OTP / PASSWORD VERIFICATION MODAL FRAME -->
      <form id="otpForm" onsubmit="handleOtpSubmit(event)" class="space-y-4 hidden">
        <div class="text-center mb-6">
          <h3 class="text-lg font-black text-slate-800 dark:text-white" id="otpHeadingText">Two-Factor Authentication
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1" id="otpSubheadingText">Enter code 4821 or password
            to verify.</p>
        </div>

        <input type="hidden" id="otpVerificationType" value="otp">

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5 text-center"
            id="otpInputLabel">Verification Input</label>
          <input type="password" id="otpCode" required placeholder="••••"
            class="w-full text-center text-xl font-bold py-3.5 rounded-xl glass-input tracking-wider">
        </div>

        <button type="submit"
          class="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-primary-dark">
          <span data-t="btn_verify_access">Verify & Access</span>
        </button>

        <div class="text-center mt-4">
          <button type="button" onclick="switchAuthTab('login')"
            class="text-xs font-black text-slate-500 hover:underline">
            Cancel
          </button>
        </div>
      </form>

    </div>
  </div>


  <!-- ================= APP CONTAINER ================= -->
  <div id="appContainer" class="hidden h-screen flex overflow-hidden">

    <!-- ACCORDION SIDEBAR -->
    <aside id="sidebar"
      class="w-72 bg-white dark:bg-darkCard border-r-2 border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 flex-shrink-0 z-30 relative shadow-sm">

      <!-- Logo Header -->
      <div class="h-20 flex items-center justify-between px-5 border-b-2 border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-3 overflow-hidden">
          <div
            class="w-12 h-12 rounded-[14px] bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <i class="fa-solid fa-prescription-bottle-medical text-2xl"></i>
          </div>
          <div id="sidebarBrandContainer" class="transition-all duration-200 leading-none">
            <span class="font-black text-lg text-slate-900 dark:text-white block tracking-tight">MUSA</span>
            <span class="text-[9px] text-secondary font-black uppercase tracking-wider block mt-0.5">TRADERS</span>
          </div>
        </div>
        <button onclick="toggleSidebar()"
          class="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-705 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-850 dark:hover:text-white transition-all">
          <i id="sidebarCollapseIcon" class="fa-solid fa-chevron-left text-xs"></i>
        </button>
      </div>

      <!-- Live Search inside Sidebar -->
      <div class="p-4 border-b border-slate-100 dark:border-slate-800" id="sidebarSearchWrapper">
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <i class="fa-solid fa-magnifying-glass text-xs"></i>
          </span>
          <input type="text" id="sidebarMenuSearch" oninput="filterSidebarMenu()" placeholder="Search menu..."
            class="w-full pl-8 pr-3 py-2.5 rounded-xl text-xs font-bold glass-input">
        </div>
      </div>

      <!-- Dynamic Accordion Menu Container -->
      <nav class="flex-1 py-4 px-3 space-y-1 overflow-y-auto overscroll-contain" id="sidebarNav">
        <!-- Rendered based on user role -->
      </nav>

      <!-- Active User Drawer -->
      <div
        class="p-4 border-t-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between">
        <div class="flex items-center gap-3 overflow-hidden">
          <img id="userAvatar"
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200"
            alt="Avatar"
            class="w-11 h-11 rounded-xl border-2 border-slate-200 dark:border-slate-800 object-cover flex-shrink-0">
          <div class="overflow-hidden leading-tight" id="sidebarUserTextContainer">
            <span id="userName" class="font-extrabold text-sm block truncate text-slate-800 dark:text-white">Musa
              Admin</span>
            <span id="userRole"
              class="text-[10px] text-primary dark:text-primary-light font-black uppercase tracking-wider block truncate">Super
              Admin</span>
          </div>
        </div>
        <button onclick="handleLogout()"
          class="w-9 h-9 rounded-xl bg-red-50 hover:bg-red-105 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-danger border border-red-200 dark:border-red-900 flex items-center justify-center transition-all duration-200"
          title="Log Out">
          <i class="fa-solid fa-power-off text-sm"></i>
        </button>
      </div>
    </aside>

    <!-- CONTENT FRAME -->
    <div class="flex-1 flex flex-col min-w-0">

      <!-- Header top bar -->
      <header
        class="h-20 bg-white/80 dark:bg-darkCard/80 backdrop-blur-md border-b-2 border-slate-200 dark:border-slate-800 sticky top-0 z-20 flex items-center justify-between px-6">

        <div class="flex items-center gap-2">
          <button onclick="goBack()" id="backBtn"
            class="hidden w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all shadow-sm border border-slate-200 dark:border-slate-700"
            title="Go Back">
            <i class="fa-solid fa-arrow-left text-sm"></i>
          </button>
          <div class="w-1 h-6 bg-primary rounded-full"></div>
          <h2 id="pageTitle" class="text-xl font-black text-slate-850 dark:text-white capitalize">Dashboard</h2>
        </div>

        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <button onclick="toggleUrdu()"
            class="px-4 py-2 border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-xs font-black flex items-center gap-2 transition-all">
            <i class="fa-solid fa-language text-base text-secondary"></i>
            <span id="urduToggleLabel">اردو</span>
          </button>

          <!-- Dark Mode Toggle -->
          <button onclick="toggleDarkMode()"
            class="w-10 h-10 border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all">
            <i id="themeIcon" class="fa-solid fa-moon text-base"></i>
          </button>

          <!-- Warning message Drawer -->
          <div class="relative">
            <button onclick="toggleNotifications()"
              class="w-10 h-10 border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all relative">
              <i class="fa-regular fa-bell text-base"></i>
              <span id="unreadBadge"
                class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-danger text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-darkBg hidden">0</span>
            </button>

            <!-- Drawer body -->
            <div id="notificationsDropdown"
              class="hidden absolute right-0 mt-3 w-80 bg-white dark:bg-darkCard border-2 border-slate-200 dark:border-slate-850 shadow-xl rounded-2xl overflow-hidden animate-slide-down z-50">
              <div
                class="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                <span class="font-black text-xs uppercase text-slate-500" data-t="notifications_title">System
                  Alerts</span>
                <button onclick="clearNotifications()"
                  class="text-xs text-primary dark:text-primary-light hover:underline font-black"
                  data-t="btn_clear_all">Clear All</button>
              </div>
              <div class="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800"
                id="notificationsList"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- View panel content -->
      <main class="flex-1 p-6 overflow-y-auto bg-[#F8FAFC] dark:bg-slate-950 transition-all duration-300">
        <div id="activeViewContent" class="space-y-6">
          <!-- Dynamic templates loads -->
        </div>
      </main>

    </div>

  </div>


  <!-- ================= INLINE TOAST CONTAINER ================= -->
  <div id="toastContainer" class="fixed bottom-6 right-6 z-50 flex flex-col gap-3"></div>


  <!-- ================= PRINTABLE INVOICE MODAL ================= -->
  <div id="invoiceModal"
    class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
    <div
      class="bg-white dark:bg-darkCard w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-slide-down border-2 border-slate-200 dark:border-slate-800">
      <div class="p-6 space-y-6 text-sm" id="printableReceiptContent">
        <div class="text-center border-b-2 border-dashed border-slate-200 dark:border-slate-800 pb-4">
          <h3 class="text-xl font-black text-slate-900 dark:text-white" id="invoiceReceiptPharmacyName">MUSA TRADERS
          </h3>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider" id="invoiceReceiptTagline">Smart
            Healthcare, Smarter Management</p>
          <div class="mt-2 text-xs text-slate-500 font-medium">
            <p id="invoiceReceiptAddress">Musa Traders Plaza, Lahore, Pakistan</p>
            <p id="invoiceReceiptPhone">+92 300 1234567</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>Invoice: <strong class="text-slate-800 dark:text-white" id="invoiceReceiptNum">--</strong></div>
          <div>Date: <strong class="text-slate-800 dark:text-white" id="invoiceReceiptDate">--</strong></div>
          <div>Cashier: <strong class="text-slate-800 dark:text-white" id="invoiceReceiptCashier">--</strong></div>
          <div>Customer: <strong class="text-slate-800 dark:text-white" id="invoiceReceiptCustomer">--</strong></div>
        </div>
        <table class="w-full text-xs">
          <thead>
            <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
              <th class="py-1.5 text-left">Description</th>
              <th class="py-1.5 text-center">Qty</th>
              <th class="py-1.5 text-right">Price</th>
              <th class="py-1.5 text-right">Total</th>
            </tr>
          </thead>
          <tbody id="invoiceReceiptItemsBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
        </table>
        <div
          class="space-y-1.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 pt-4 text-xs font-bold font-sans">
          <div class="flex justify-between"><span class="text-slate-450">Subtotal:</span><span
              id="invoiceReceiptSubtotal">--</span></div>
          <div class="flex justify-between"><span class="text-slate-450">Discount:</span><span class="text-danger"
              id="invoiceReceiptDiscount">--</span></div>
          <div class="flex justify-between"><span class="text-slate-450">Sales Tax:</span><span
              id="invoiceReceiptTax">--</span></div>
          <div class="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-2 text-sm">
            <strong class="text-primary dark:text-white">Amount Charged:</strong>
            <strong class="text-primary dark:text-white font-black text-base" id="invoiceReceiptGrandTotal">--</strong>
          </div>
        </div>
        <div
          class="text-center pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 text-[10px] text-slate-450 font-bold">
          <p id="invoiceReceiptFooter">Thank you for choosing MUSA TRADERS!</p>
          <p class="mt-1 text-primary">Smart Pharmacy Management Solution</p>
        </div>
      </div>
      <div
        class="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
        <button onclick="closeInvoiceModal()"
          class="px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black rounded-xl text-xs">Close</button>
        <button onclick="printInvoice()"
          class="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-xs flex items-center gap-2 shadow-md"><i
            class="fa-solid fa-print"></i> Print Receipt</button>
      </div>
    </div>
  </div>


  <!-- ================= MODAL FRAME OVERLAY ================= -->
  <div id="modalOverlay"
    class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
    <div id="modalWindow"
      class="bg-white dark:bg-darkCard w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-slide-down border-2 border-slate-200 dark:border-slate-800 p-6 space-y-4">
    </div>
  </div>


  <!-- ================= AUDIO ELEMENTS ================= -->
  <audio id="successSound" src="https://assets.mixkit.co/active_storage/sfx/2013/2013-84.wav" preload="auto"></audio>
  <audio id="clickSound" src="https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav" preload="auto"></audio>


  <!-- ================= LOGIC & RUNTIME ENGINE ================= -->
  <script>
    // ----------------------------------------------------
    // GLOBAL VARIABLE DECLARATIONS
    // ----------------------------------------------------
    let database = {};
    let activeUser = null;
    let currentView = "dashboard";
    let viewHistory = [];
    let sidebarOpen = true;
    let salesTrendChart = null;
    let stockShareChart = null;

    const quickProfiles = [
      { name: "Musa Admin", username: "admin", role: "Super Admin", password: "admin123", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200" },
      { name: "Asif Pharmacist", username: "pharmacist", role: "Pharmacist", password: "pharmacist123", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" },
      { name: "Zeeshan Cashier", username: "cashier", role: "Cashier", password: "cashier123", avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200" }
    ];

    const sidebarStructure = [
      {
        id: "dashboard",
        icon: "fa-solid fa-house",
        label: { en: "Dashboard", ur: "ڈیش بورڈ" },
        roles: ["Super Admin", "Pharmacist", "Cashier", "Inventory Manager", "Accountant"],
        children: []
      },
      {
        id: "medicines",
        icon: "fa-solid fa-capsules",
        label: { en: "Medicines", ur: "ادویات" },
        roles: ["Super Admin", "Pharmacist", "Inventory Manager"],
        children: [
          { id: "all-medicines", label: { en: "All Medicines", ur: "تمام ادویات" } },
          { id: "add-medicine", label: { en: "Add Medicine", ur: "نئی دوا شامل کریں" } },
          { id: "categories", label: { en: "Categories", ur: "کیٹیگریز" } },
          { id: "brands", label: { en: "Brands", ur: "برانڈز" } },
          { id: "batches", label: { en: "Batches", ur: "بیچز" } },
          { id: "expiry-alerts-med", label: { en: "Expiry Alerts", ur: "ایکسپائری الرٹس" } },
          { id: "low-stock-med", label: { en: "Low Stock Alerts", ur: "کم اسٹاک الرٹس" } }
        ]
      },
      {
        id: "prescriptions",
        icon: "fa-solid fa-file-prescription",
        label: { en: "Prescriptions", ur: "نسخہ جات" },
        roles: ["Super Admin", "Pharmacist", "Cashier"],
        children: [
          { id: "new-prescription", label: { en: "New Prescription", ur: "نیا نسخہ" } },
          { id: "prescription-list", label: { en: "Prescription List", ur: "نسخوں کی فہرست" } },
          { id: "pending-approvals", label: { en: "Pending Approvals", ur: "زیر التواء نسخے" } }
        ]
      },
      {
        id: "pos-billing",
        icon: "fa-solid fa-cart-shopping",
        label: { en: "POS / Billing", ur: "پوائنٹ آف سیل / بلنگ" },
        roles: ["Super Admin", "Cashier"],
        children: [
          { id: "new-sale", label: { en: "New Sale", ur: "نئی فروخت" } },
          { id: "invoices", label: { en: "Invoices", ur: "انوائسز (بلز)" } },
          { id: "returns-refunds", label: { en: "Returns & Refunds", ur: "واپسی اور رقم واپسی" } }
        ]
      },
      {
        id: "inventory",
        icon: "fa-solid fa-boxes-stacked",
        label: { en: "Inventory", ur: "انوینٹری" },
        roles: ["Super Admin", "Inventory Manager"],
        children: [
          { id: "stock-overview", label: { en: "Stock Overview", ur: "اسٹاک کا جائزہ" } },
          { id: "stock-adjustments", label: { en: "Stock Adjustments", ur: "اسٹاک درستگی" } },
          { id: "stock-transfers", label: { en: "Stock Transfers", ur: "اسٹاک کی منتقلی" } },
          { id: "damaged-items", label: { en: "Damaged Items", ur: "ضائع شدہ اشیاء" } }
        ]
      },
      {
        id: "purchases",
        icon: "fa-solid fa-truck-ramp-box",
        label: { en: "Purchases", ur: "خریداری" },
        roles: ["Super Admin", "Inventory Manager"],
        children: [
          { id: "new-purchase-order", label: { en: "New Purchase Order", ur: "خریداری کا نیا آرڈر" } },
          { id: "purchase-history", label: { en: "Purchase History", ur: "خریداری کی تاریخ" } },
          { id: "receive-stock", label: { en: "Receive Stock", ur: "اسٹاک وصول کریں" } }
        ]
      },
      {
        id: "customers",
        icon: "fa-solid fa-users",
        label: { en: "Customers", ur: "کسٹمرز" },
        roles: ["Super Admin", "Cashier"],
        children: [
          { id: "customer-list", label: { en: "Customer List", ur: "گاہکوں کی فہرست" } },
          { id: "add-customer", label: { en: "Add Customer", ur: "نیا گاہک شامل کریں" } },
          { id: "loyalty-points", label: { en: "Loyalty Points", ur: "وفاداری پوائنٹس" } },
          { id: "credit-accounts", label: { en: "Credit Accounts", ur: "ادھار کھاتے" } }
        ]
      },
      {
        id: "suppliers",
        icon: "fa-solid fa-building",
        label: { en: "Suppliers", ur: "سپلائرز" },
        roles: ["Super Admin", "Inventory Manager"],
        children: [
          { id: "supplier-list", label: { en: "Supplier List", ur: "سپلائرز کی فہرست" } },
          { id: "add-supplier", label: { en: "Add Supplier", ur: "نیا سپلائر" } },
          { id: "supplier-payments", label: { en: "Supplier Payments", ur: "سپلائر کی ادائیگی" } }
        ]
      },
      {
        id: "doctors",
        icon: "fa-solid fa-user-doctor",
        label: { en: "Doctors", ur: "ڈاکٹرز" },
        roles: ["Super Admin", "Pharmacist"],
        children: [
          { id: "doctor-list", label: { en: "Doctor List", ur: "ڈاکٹرز کی فہرست" } },
          { id: "add-doctor", label: { en: "Add Doctor", ur: "نیا ڈاکٹر" } },
          { id: "referrals", label: { en: "Referrals", ur: "ریفرلز (حوالہ جات)" } }
        ]
      },
      {
        id: "accounts-finance",
        icon: "fa-solid fa-wallet",
        label: { en: "Accounts & Finance", ur: "کھاتے اور مالیات" },
        roles: ["Super Admin", "Accountant"],
        children: [
          { id: "income", label: { en: "Income", ur: "آمدنی" } },
          { id: "expenses", label: { en: "Expenses", ur: "اخراجات" } },
          { id: "profit-loss", label: { en: "Profit & Loss", ur: "نفع و نقصان" } },
          { id: "cash-flow", label: { en: "Cash Flow", ur: "کیش فلو" } }
        ]
      },
      {
        id: "reports-analytics",
        icon: "fa-solid fa-chart-pie",
        label: { en: "Reports & Analytics", ur: "رپورٹس اور تجزیات" },
        roles: ["Super Admin", "Accountant"],
        children: [
          { id: "sales-reports", label: { en: "Sales Reports", ur: "فروخت کی رپورٹ" } },
          { id: "inventory-reports", label: { en: "Inventory Reports", ur: "انوینٹری رپورٹ" } },
          { id: "expiry-reports", label: { en: "Expiry Reports", ur: "ایکسپائری رپورٹ" } },
          { id: "tax-reports", label: { en: "Tax Reports", ur: "ٹیکس رپورٹ" } },
          { id: "customer-reports", label: { en: "Customer Reports", ur: "گاہکوں کی رپورٹ" } }
        ]
      },
      {
        id: "notifications",
        icon: "fa-solid fa-bell",
        label: { en: "Notifications", ur: "اطلاعات" },
        roles: ["Super Admin", "Pharmacist", "Cashier", "Inventory Manager", "Accountant"],
        children: [
          { id: "low-stock-alerts", label: { en: "Low Stock Alerts", ur: "کم اسٹاک اطلاعات" } },
          { id: "expiry-alerts", label: { en: "Expiry Alerts", ur: "ایکسپائری اطلاعات" } },
          { id: "system-messages", label: { en: "System Messages", ur: "سسٹم پیغامات" } }
        ]
      },
      {
        id: "user-management",
        icon: "fa-solid fa-users-gear",
        label: { en: "User Management", ur: "صارفین کا انتظام" },
        roles: ["Super Admin"],
        children: [
          { id: "users", label: { en: "Users", ur: "صارفین" } },
          { id: "roles-permissions", label: { en: "Roles & Permissions", ur: "اختیارات اور کردار" } },
          { id: "activity-logs", label: { en: "Activity Logs", ur: "سرگرمیوں کا لاگ" } }
        ]
      },
      {
        id: "branches",
        icon: "fa-solid fa-code-branch",
        label: { en: "Branches", ur: "شاخیں (برانچز)" },
        roles: ["Super Admin"],
        children: [
          { id: "branch-list", label: { en: "Branch List", ur: "برانچز کی فہرست" } },
          { id: "add-branch", label: { en: "Add Branch", ur: "نئی برانچ" } },
          { id: "branch-performance", label: { en: "Branch Performance", ur: "کارکردگی برانچ" } }
        ]
      },
      {
        id: "backup-restore",
        icon: "fa-solid fa-database",
        label: { en: "Backup & Restore", ur: "بیک اپ اور بحالی" },
        roles: ["Super Admin"],
        children: []
      },
      {
        id: "settings",
        icon: "fa-solid fa-gears",
        label: { en: "Settings", ur: "ترتیبات (سیٹنگز)" },
        roles: ["Super Admin"],
        children: [
          { id: "profile-settings", label: { en: "Profile Settings", ur: "پروفائل ترتیبات" } },
          { id: "pharmacy-settings", label: { en: "Pharmacy Settings", ur: "فارمیسی ترتیبات" } },
          { id: "appearance", label: { en: "Appearance", ur: "مظہر (ڈیزائن)" } },
          { id: "language", label: { en: "Language", ur: "زبان" } },
          { id: "security", label: { en: "Security", ur: "سیکیورٹی" } },
          { id: "notification-settings", label: { en: "Notification Settings", ur: "نوٹیفیکیشن سیٹنگز" } },
          { id: "toggle-controls", label: { en: "Toggle Controls", ur: "کنٹرولز ٹوگل کریں" } }
        ]
      },
      {
        id: "help-support",
        icon: "fa-solid fa-circle-question",
        label: { en: "Help & Support", ur: "مدد اور تعاون" },
        roles: ["Super Admin", "Pharmacist", "Cashier", "Inventory Manager", "Accountant"],
        children: []
      }
    ];

    // ----------------------------------------------------
    // INITIAL SYSTEM STATE INITIALIZATION
    // ----------------------------------------------------
    window.onload = function () {
      initDatabase();
      loadSession();
      applySettingsOnStartup();
      renderQuickLoginProfiles();
    };

    function generate600Medicines() {
      const baseMeds = [
        // Analgesics (9 base brands)
        { brand: "Panadol", generic: "Paracetamol", category: "Analgesics", supplier: "GSK Pakistan", priceBase: 15, variations: ["500mg Tablets", "Extra Tablets", "CF Tablets", "Extend Tablets", "Elixir Syrup", "Baby Drops", "Suspension 120mg/5ml", "Forte Suspension", "Injection 10mg/ml", "Active Tablets"] },
        { brand: "Calpol", generic: "Paracetamol", category: "Analgesics", supplier: "GSK Pakistan", priceBase: 12, variations: ["250mg Suspension", "120mg Syrup", "650mg Tablets", "Infant Drops", "Forte Tablets", "Plus Tablets", "650mg SC Tablets", "Paediatric Syrup", "Injection", "CF Liquid"] },
        { brand: "Brufen", generic: "Ibuprofen", category: "Analgesics", supplier: "Abbott Laboratories", priceBase: 40, variations: ["200mg Tablets", "400mg Tablets", "600mg Tablets", "800mg Tablets", "100mg/5ml Syrup", "DS Syrup", "Rapid Tablets", "Plus Tablets", "Retard Tablets", "Gel 5%"] },
        { brand: "Ponstan", generic: "Mefenamic Acid", category: "Analgesics", supplier: "Pfizer Pakistan", priceBase: 30, variations: ["250mg Tablets", "Forte 500mg Tablets", "Suspension 50mg/5ml", "Paediatric Syrup", "Capsules 250mg", "Soluble Tablets", "Plus Tablets", "Forte 500mg Pack of 100", "250mg Pack of 200", "Liquid Drops"] },
        { brand: "Disprin", generic: "Aspirin", category: "Analgesics", supplier: "Reckitt Benckiser", priceBase: 10, variations: ["300mg Tablets", "Direct Tablets", "Cardio 75mg Tablets", "Cardio 150mg Tablets", "Soluble 325mg Tablets", "Forte 500mg", "Extra Tablets", "Max Tablets", "Plus C Effervescent", "Protect 100mg"] },
        { brand: "Tramal", generic: "Tramadol Hydrochloride", category: "Analgesics", supplier: "Searle", priceBase: 120, variations: ["50mg Capsules", "100mg SR Tablets", "150mg SR Tablets", "200mg SR Tablets", "Injection 50mg/ml", "Injection 100mg/2ml", "Drops 100mg/ml", "Suppositories 100mg", "Plus Paracetamol Tablets", "Forte Capsules"] },
        { brand: "Synflex", generic: "Naproxen Sodium", category: "Analgesics", supplier: "Martin Dow", priceBase: 90, variations: ["275mg Tablets", "550mg Tablets", "DS Tablets", "SR 500mg Tablets", "Suspension 125mg/5ml", "Forte Tablets", "EC 375mg", "EC 500mg", "Gel 10%", "Injection"] },
        { brand: "Kestrel", generic: "Flurbiprofen", category: "Analgesics", supplier: "Abbott Laboratories", priceBase: 60, variations: ["50mg Tablets", "100mg Tablets", "Forte 100mg", "SR 200mg", "Eye Drops 0.03%", "Spray", "Gel 5%", "Injection", "Drops 5ml", "Tablets Pack of 100"] },
        { brand: "Xenobid", generic: "Naproxen", category: "Analgesics", supplier: "Searle", priceBase: 80, variations: ["250mg Tablets", "500mg Tablets", "DS Tablets", "SR 500mg", "Gel 10%", "Forte 500mg", "Suspension", "Injection", "Capsules 250mg", "EC 500mg"] },

        // Antibiotics (10 base brands)
        { brand: "Augmentin", generic: "Co-Amoxiclav", category: "Antibiotics", supplier: "GSK Pakistan", priceBase: 250, variations: ["375mg Tablets", "625mg Tablets", "1g Tablets", "DS Suspension", "ES Suspension", "156.25mg Suspension", "312.5mg Suspension", "1.2g Injection", "600mg Injection", "Duo Tablets"] },
        { brand: "Amoxil", generic: "Amoxicillin", category: "Antibiotics", supplier: "GSK Pakistan", priceBase: 80, variations: ["250mg Capsules", "500mg Capsules", "125mg Syrup", "250mg Syrup", "DS Syrup", "Forte Syrup", "1g Injection", "500mg Injection", "250mg Injection", "Drops"] },
        { brand: "Velosef", generic: "Cephradine", category: "Antibiotics", supplier: "GSK Pakistan", priceBase: 110, variations: ["250mg Capsules", "500mg Capsules", "125mg Suspension", "250mg Suspension", "DS Suspension", "250mg Injection", "500mg Injection", "1g Injection", "Velo-Dry Syrup", "Forte Capsules"] },
        { brand: "Ciproxin", generic: "Ciprofloxacin", category: "Antibiotics", supplier: "Bayer", priceBase: 120, variations: ["250mg Tablets", "500mg Tablets", "750mg Tablets", "Infusion 200mg/100ml", "Infusion 400mg/200ml", "Eye Drops 0.3%", "Ophthalmic Ointment", "XR 500mg Tablets", "XR 1000mg Tablets", "Suspension 250mg/5ml"] },
        { brand: "Leflox", generic: "Levofloxacin", category: "Antibiotics", supplier: "Getz Pharma", priceBase: 140, variations: ["250mg Tablets", "500mg Tablets", "750mg Tablets", "Infusion 500mg", "Infusion 750mg", "Eye Drops", "Oral Solution", "DS Tablets", "Forte Tablets", "Injection"] },
        { brand: "Azomax", generic: "Azithromycin", category: "Antibiotics", supplier: "Getz Pharma", priceBase: 180, variations: ["250mg Capsules", "500mg Tablets", "200mg/5ml Suspension", "100mg/5ml Suspension", "DS Suspension", "Sec Sachet", "Infusion 500mg", "1.5% Eye Drops", "Opal Capsules", "Forte Tablets"] },
        { brand: "Cefim", generic: "Cefixime", category: "Antibiotics", supplier: "Sami Pharmaceuticals", priceBase: 200, variations: ["200mg Capsules", "400mg Capsules", "100mg/5ml Suspension", "200mg/5ml DS Suspension", "Paediatric Drops", "Ultra Capsules", "Forte Tablets", "Dry Powder Suspension", "100mg Capsules", "400mg DS Tablets"] },
        { brand: "Klaricid", generic: "Clarithromycin", category: "Antibiotics", supplier: "Abbott Laboratories", priceBase: 240, variations: ["250mg Tablets", "500mg Tablets", "XL 500mg OD Tablets", "125mg/5ml Suspension", "250mg/5ml DS Suspension", "Infusion 500mg", "Pediatric Drops", "Forte Suspension", "Granules Sachet", "XL 250mg Tablets"] },
        { brand: "Zinacef", generic: "Cefuroxime", category: "Antibiotics", supplier: "GSK Pakistan", priceBase: 180, variations: ["125mg Tablets", "250mg Tablets", "500mg Tablets", "Suspension 125mg/5ml", "Suspension 250mg/5ml", "250mg Injection", "750mg Injection", "1.5g Injection", "Forte 500mg", "Dry Powder"] },
        { brand: "Crax", generic: "Ceftriaxone", category: "Antibiotics", supplier: "Getz Pharma", priceBase: 250, variations: ["250mg IM Injection", "250mg IV Injection", "500mg IM Injection", "500mg IV Injection", "1g IM Injection", "1g IV Injection", "2g Infusion", "Paediatric Injection", "Neo Injection", "Forte 1g"] },

        // Cardiovascular (7 base brands)
        { brand: "Concor", generic: "Bisoprolol Fumarate", category: "Cardiovascular", supplier: "Bayer", priceBase: 150, variations: ["1.25mg Tablets", "2.5mg Tablets", "5mg Tablets", "10mg Tablets", "AM 5/5mg Tablets", "AM 5/10mg Tablets", "AM 10/5mg Tablets", "AM 10/10mg Tablets", "Plus 5/12.5mg Tablets", "Plus 10/25mg Tablets"] },
        { brand: "Lipiget", generic: "Atorvastatin", category: "Cardiovascular", supplier: "Getz Pharma", priceBase: 200, variations: ["10mg Tablets", "20mg Tablets", "40mg Tablets", "80mg Tablets", "EZ 10/10mg Tablets", "EZ 20/10mg Tablets", "EZ 40/10mg Tablets", "Asp 10/75mg Capsules", "Asp 20/75mg Capsules", "Co 10/20mg Tablets"] },
        { brand: "Rovista", generic: "Rosuvastatin Calcium", category: "Cardiovascular", supplier: "Searle", priceBase: 210, variations: ["5mg Tablets", "10mg Tablets", "20mg Tablets", "40mg Tablets", "Gold 10mg Capsules", "Gold 20mg Capsules", "EZ 10mg Tablets", "EZ 20mg Tablets", "Asp 5/75mg Capsules", "Asp 10/75mg Capsules"] },
        { brand: "Zestril", generic: "Lisinopril", category: "Cardiovascular", supplier: "ICI Pakistan", priceBase: 140, variations: ["2.5mg Tablets", "5mg Tablets", "10mg Tablets", "20mg Tablets", "40mg Tablets", "Plus 10/12.5mg Tablets", "Plus 20/12.5mg Tablets", "Plus 20/25mg Tablets", "HCT 10mg Tablets", "HCT 20mg Tablets"] },
        { brand: "Cardarone", generic: "Amiodarone Hydrochloride", category: "Cardiovascular", supplier: "Sanofi", priceBase: 180, variations: ["100mg Tablets", "200mg Tablets", "400mg Tablets", "Injection 150mg/3ml", "Injection 300mg/6ml", "IV Infusion", "Forte 400mg", "SR 200mg", "XR 400mg", "Oral Solution"] },
        { brand: "Exforge", generic: "Amlodipine + Valsartan", category: "Cardiovascular", supplier: "Novartis", priceBase: 350, variations: ["5/80mg Tablets", "5/160mg Tablets", "10/160mg Tablets", "HCT 5/160/12.5mg", "HCT 10/160/12.5mg", "HCT 10/160/25mg", "HCT 5/160/25mg", "LD 5/80mg", "HD 10/320mg", "Forte Tablets"] },
        { brand: "Lipitor", generic: "Atorvastatin", category: "Cardiovascular", supplier: "Pfizer Pakistan", priceBase: 280, variations: ["10mg Tablets", "20mg Tablets", "40mg Tablets", "80mg Tablets", "EZ 10mg", "EZ 20mg", "Forte 40mg", "Gold 10mg", "Gold 20mg", "Pack of 100"] },

        // Antidiabetic (8 base brands)
        { brand: "Glucophage", generic: "Metformin HCl", category: "Antidiabetic", supplier: "Bayer", priceBase: 50, variations: ["500mg Tablets", "850mg Tablets", "1000mg Tablets", "XR 500mg Tablets", "XR 750mg Tablets", "XR 1000mg Tablets", "G 500/2.5mg Tablets", "G 500/5mg Tablets", "Forte 1000mg", "SR 850mg"] },
        { brand: "Amaryl", generic: "Glimepiride", category: "Antidiabetic", supplier: "Sanofi", priceBase: 100, variations: ["1mg Tablets", "2mg Tablets", "3mg Tablets", "4mg Tablets", "6mg Tablets", "M 1mg/500mg Tablets", "M 2mg/500mg Tablets", "M 2mg/850mg Tablets", "M 3mg/850mg Tablets", "M 4mg/1000mg Tablets"] },
        { brand: "Getryl", generic: "Glimepiride", category: "Antidiabetic", supplier: "Getz Pharma", priceBase: 90, variations: ["1mg Tablets", "2mg Tablets", "3mg Tablets", "4mg Tablets", "M 1mg/500mg Tablets", "M 2mg/500mg Tablets", "M 2mg/850mg Tablets", "M 4mg/1000mg Tablets", "DS 4mg Tablets", "Forte 6mg Tablets"] },
        { brand: "Galvus", generic: "Vildagliptin", category: "Antidiabetic", supplier: "Novartis", priceBase: 340, variations: ["50mg Tablets", "Met 50/500mg Tablets", "Met 50/850mg Tablets", "Met 50/1000mg Tablets", "Met XR 50/500mg", "Met XR 50/1000mg", "Met XR 100/1000mg", "Forte 100mg Tablets", "Duo 50mg Tablets", "Plus 50/850mg"] },
        { brand: "Diamicron", generic: "Gliclazide", category: "Antidiabetic", supplier: "GSK Pakistan", priceBase: 180, variations: ["30mg MR Tablets", "60mg MR Tablets", "80mg Tablets", "XR 30mg Tablets", "XR 60mg Tablets", "Forte 80mg", "Plus 30mg", "Duo 60mg", "MAX 120mg", "MR Pack of 100"] },
        { brand: "Jardiance", generic: "Empagliflozin", category: "Antidiabetic", supplier: "Boehringer Ingelheim", priceBase: 450, variations: ["10mg Tablets", "25mg Tablets", "Met 5/500mg", "Met 5/1000mg", "Met 12.5/500mg", "Met 12.5/1000mg", "Duo 10mg", "Duo 25mg", "Forte 25mg", "Met XR 10/1000mg"] },
        { brand: "Januvia", generic: "Sitagliptin", category: "Antidiabetic", supplier: "MSD", priceBase: 380, variations: ["25mg Tablets", "50mg Tablets", "100mg Tablets", "Met 50/500mg", "Met 50/850mg", "Met 50/1000mg", "Met XR 50/500mg", "Met XR 100/1000mg", "Forte 100mg", "Duo 50mg"] },
        { brand: "Actos", generic: "Pioglitazone", category: "Antidiabetic", supplier: "Searle", priceBase: 160, variations: ["15mg Tablets", "30mg Tablets", "45mg Tablets", "Met 15/500mg", "Met 15/850mg", "Met 30/850mg", "Forte 45mg", "Plus Metformin", "Duo 30mg", "Pack of 30"] },

        // Vitamins (7 base brands)
        { brand: "Surbex-Z", generic: "Multivitamins + Zinc", category: "Vitamins", supplier: "Abbott Laboratories", priceBase: 350, variations: ["Tablets (30s)", "Tablets (100s)", "Syrup 120ml", "Syrup 240ml", "Gold Capsules", "Calcium Plus", "Zinc Forte", "Active Tablets", "Iron Infusion", "Premium 30s"] },
        { brand: "Cac-1000", generic: "Calcium + Vitamin C", category: "Vitamins", supplier: "GSK Pakistan", priceBase: 240, variations: ["Orange Effervescent 10s", "Lemon Effervescent 10s", "Cola Effervescent 10s", "Orange Effervescent 20s", "Lemon Effervescent 20s", "Sugar Free Orange 10s", "Mango Effervescent 10s", "Paediatric Granules", "Plus Tablets 30s", "Chewable Orange"] },
        { brand: "Evion", generic: "Vitamin E", category: "Vitamins", supplier: "Searle", priceBase: 120, variations: ["200mg Capsules", "400mg Capsules", "600mg Capsules", "100mg Capsules", "Forte Capsules", "Liquid Drops", "Cream 30g", "Oil 15ml", "Softgels 400mg", "Softgels 600mg"] },
        { brand: "Neurobion", generic: "Vitamin B1 + B6 + B12", category: "Vitamins", supplier: "Bayer", priceBase: 150, variations: ["Tablets 50s", "Tablets 100s", "Injection 3ml (3s)", "Injection 3ml (10s)", "Forte Tablets", "Plus Tablets", "Extra Injection", "Liquid Ampoules", "Capsules 30s", "Gold Tablets"] },
        { brand: "Sangobion", generic: "Iron + Vitamin B12 + Folic Acid", category: "Vitamins", supplier: "Bayer", priceBase: 140, variations: ["Capsules 30s", "Capsules 100s", "Syrup 120ml", "Baby Drops 15ml", "Forte Capsules", "Plus Tablets", "Effervescent 10s", "Chewable Tablets", "Kids Syrup 200ml", "Softgels"] },
        { brand: "Theragran-H", generic: "Vitamins + Minerals", category: "Vitamins", supplier: "GSK Pakistan", priceBase: 220, variations: ["Tablets 30s", "Tablets 100s", "Ultra Tablets", "M Tablets 30s", "M Tablets 100s", "Syrup 120ml", "Forte Tablets", "Gold Capsules", "Liquid 200ml", "Liquid Kids"] },
        { brand: "Surbex-T", generic: "Vitamin B-Complex + C", category: "Vitamins", supplier: "Abbott Laboratories", priceBase: 180, variations: ["Tablets 30s", "Tablets 100s", "Syrup 120ml", "Syrup 240ml", "Forte Tablets", "Active 30s", "Premium 100s", "Gold Tablets", "Capsules 30s", "Zinc Tablets"] },

        // Gastrointestinal (7 base brands)
        { brand: "Risek", generic: "Omeprazole", category: "Gastrointestinal", supplier: "Getz Pharma", priceBase: 220, variations: ["20mg Capsules", "40mg Capsules", "40mg Injection", "Insta 20mg Sachet", "Insta 40mg Sachet", "10mg Capsules", "20mg DR Tablets", "40mg DR Tablets", "20mg Sachet 10s", "Infusion 40mg"] },
        { brand: "Nexum", generic: "Esomeprazole", category: "Gastrointestinal", supplier: "Getz Pharma", priceBase: 250, variations: ["20mg Capsules", "40mg Capsules", "40mg Injection", "Insta 20mg Sachet", "Insta 40mg Sachet", "10mg Sachet", "20mg Tablets", "40mg Tablets", "HP Kit", "Infusion 40mg"] },
        { brand: "Flagyl", generic: "Metronidazole", category: "Gastrointestinal", supplier: "Sanofi", priceBase: 35, variations: ["200mg Tablets", "400mg Tablets", "200mg/5ml Suspension", "DF Suspension", "Infusion 500mg/100ml", "Forte 800mg Tablets", "Gel 0.75%", "Vaginal Cream", "EB Tablets", "IV Solution"] },
        { brand: "Entamizole", generic: "Diloxanide Furoate + Metronidazole", category: "Gastrointestinal", supplier: "Abbott Laboratories", priceBase: 80, variations: ["Tablets", "DS Tablets", "Suspension 120ml", "Suspension 60ml", "Forte Tablets", "Plus Tablets", "Liquid Syrup", "Tablets Pack of 100", "DS Pack of 100", "Pediatric Drops"] },
        { brand: "Losec", generic: "Omeprazole", category: "Gastrointestinal", supplier: "Searle", priceBase: 200, variations: ["10mg Capsules", "20mg Capsules", "40mg Capsules", "20mg MUPS Tablets", "40mg MUPS Tablets", "Injection 40mg", "Infusion 40mg", "Sachet 20mg", "Sachet 40mg", "Forte Capsules"] },
        { brand: "Gaviscon", generic: "Sodium Alginate + Sodium Bicarbonate", category: "Gastrointestinal", supplier: "Reckitt Benckiser", priceBase: 120, variations: ["Liquid Mint 150ml", "Liquid Mint 300ml", "Double Action Liquid", "Double Action Tablets", "Infant Sachets", "Advance Liquid", "Advance Tablets", "Extra Strength Liquid", "Tablets 16s", "Tablets 32s"] },
        { brand: "Mucaine", generic: "Oxetacaine + Aluminium + Magnesium", category: "Gastrointestinal", supplier: "Wyeth", priceBase: 110, variations: ["Suspension 120ml", "Suspension 240ml", "Gel 120ml", "Gel 240ml", "Mint Suspension", "Orange Suspension", "Forte Suspension", "Double Action", "Liquid 120ml", "Liquid 240ml"] },

        // Antihistamines (5 base brands)
        { brand: "Kestine", generic: "Ebastine", category: "Antihistamines", supplier: "Searle", priceBase: 170, variations: ["10mg Tablets", "20mg Tablets", "Syrup 120ml", "Syrup 60ml", "Lyo 10mg Tablets", "Lyo 20mg Tablets", "Plus Tablets", "Forte Tablets", "Soluble Tablets", "Paediatric Liquid"] },
        { brand: "Softin", generic: "Loratadine", category: "Antihistamines", supplier: "Sami Pharmaceuticals", priceBase: 100, variations: ["10mg Tablets", "Syrup 120ml", "Syrup 60ml", "OD 10mg Tablets", "Plus Pseudoephedrine", "Forte 20mg", "Chewable Kids", "D Tablets", "Liqui-gels", "Paediatric Drops"] },
        { brand: "Zyrtec", generic: "Cetirizine Hydrochloride", category: "Antihistamines", supplier: "GSK Pakistan", priceBase: 80, variations: ["10mg Tablets", "Syrup 120ml", "Syrup 60ml", "Drops 10mg/ml", "D 5/120mg Tablets", "D Syrup 100ml", "Chewable 5mg", "Forte 20mg", "OD 10mg Tablets", "Liqui-caps"] },
        { brand: "Telfast", generic: "Fexofenadine Hydrochloride", category: "Antihistamines", supplier: "Sanofi", priceBase: 160, variations: ["60mg Tablets", "120mg Tablets", "180mg Tablets", "Suspension 150ml", "D 24 Hour Tablets", "Plus Tablets", "Forte 180mg", "Kids Syrup 100ml", "OD 120mg", "Pack of 30"] },
        { brand: "Rigix", generic: "Cetirizine", category: "Antihistamines", supplier: "Getz Pharma", priceBase: 60, variations: ["10mg Tablets", "Syrup 120ml", "Syrup 60ml", "Drops 15ml", "Forte 20mg", "Plus Tablets", "Chewable 5mg", "OD Tablets", "Oral Solution", "Kids Drops"] },

        // Respiratory (3 base brands)
        { brand: "Ventolin", generic: "Salbutamol", category: "Respiratory", supplier: "GSK Pakistan", priceBase: 30, variations: ["2mg Tablets", "4mg Tablets", "Inhaler 100mcg", "Nebules 2.5mg/2.5ml", "Nebules 5mg/2.5ml", "Syrup 120ml", "Syrup 60ml", "Expectorant Syrup", "CR 4mg Tablets", "CR 8mg Tablets"] },
        { brand: "Singulair", generic: "Montelukast Sodium", category: "Respiratory", supplier: "Searle", priceBase: 380, variations: ["4mg Pediatric Granules", "4mg Chewable Tablets", "5mg Chewable Tablets", "10mg Tablets", "Plus Fexofenadine 10/120mg", "Plus Loratadine 10/10mg", "Forte 10mg Pack of 30", "Chewable Pack of 60", "Granules Sachet 14s", "Duo Tablets"] },
        { brand: "Seretide", generic: "Salmeterol + Fluticasone", category: "Respiratory", supplier: "GSK Pakistan", priceBase: 650, variations: ["50/100 Accuhaler", "50/250 Accuhaler", "50/500 Accuhaler", "25/50 Evohaler", "25/125 Evohaler", "25/250 Evohaler", "DS Evohaler", "Pediatric Inhaler", "Accuhaler 60 Doses", "Evohaler 120 Doses"] },

        // Dermatological (5 base brands)
        { brand: "Betnovate", generic: "Betamethasone", category: "Dermatological", supplier: "GSK Pakistan", priceBase: 80, variations: ["Cream 15g", "Ointment 15g", "N Cream 15g", "N Ointment 15g", "C Cream 15g", "C Ointment 15g", "Scalp Application 20ml", "GM Cream 15g", "GM Ointment 15g", "Lotion 20ml"] },
        { brand: "Dermovate", generic: "Clobetasol Propionate", category: "Dermatological", supplier: "GSK Pakistan", priceBase: 90, variations: ["Cream 15g", "Ointment 15g", "Cream 30g", "Ointment 30g", "Scalp Application 25ml", "Hair Gel 25g", "Lotion 30ml", "N Cream 15g", "N Ointment 15g", "S Ointment 15g"] },
        { brand: "Polyfax", generic: "Polymyxin B + Bacitracin", category: "Dermatological", supplier: "GSK Pakistan", priceBase: 75, variations: ["Skin Ointment 20g", "Eye Ointment 5g", "Skin Ointment 10g", "Skin Ointment 40g", "Eye Ointment 10g", "Plus Cream 15g", "Plus Cream 30g", "HC Eye Ointment", "HC Skin Ointment", "Powder 10g"] },
        { brand: "Travocort", generic: "Isoconazole + Diflucortolone", category: "Dermatological", supplier: "Bayer", priceBase: 150, variations: ["Cream 10g", "Cream 15g", "Cream 20g", "Cream 30g", "Ointment 15g", "Ointment 30g", "Plus Cream 15g", "DS Cream 15g", "Travogen Cream 15g", "Travogen Ointment 15g"] },
        { brand: "Elocon", generic: "Mometasone Furoate", category: "Dermatological", supplier: "Organon", priceBase: 180, variations: ["Cream 10g", "Cream 15g", "Cream 30g", "Ointment 10g", "Ointment 15g", "Ointment 30g", "Lotion 20ml", "Lotion 30ml", "Scalp Lotion 20ml", "Plus Ointment 15g"] }
      ];

      let idCounter = 1;
      const list = [];

      baseMeds.forEach(bm => {
        bm.variations.forEach((v, index) => {
          const price = Math.round(bm.priceBase * (0.8 + (index * 0.25)) * 10) / 10;
          const costPrice = Math.round(price * 0.75 * 10) / 10;
          const quantity = Math.floor(Math.random() * 150) + 10;
          const minStockAlert = Math.floor(Math.random() * 15) + 5;

          const expiry = new Date();
          if (index === 0 && bm.brand === "Augmentin") {
            expiry.setDate(expiry.getDate() + 45); // Expiring soon
          } else if (index === 1 && bm.brand === "Surbex-Z") {
            expiry.setDate(expiry.getDate() + 25); // Expiring soon
          } else {
            expiry.setDate(expiry.getDate() + 365 + (index * 45)); // Safe expiry
          }

          const expiryStr = expiry.toISOString().split('T')[0];
          const barcode = "890" + String(idCounter).padStart(10, '0');

          list.push({
            id: String(idCounter),
            barcode: barcode,
            name: `${bm.brand} ${v}`,
            genericName: bm.generic,
            price: price,
            costPrice: costPrice,
            quantity: quantity,
            expiryDate: expiryStr,
            categoryId: bm.category,
            supplierId: bm.supplier,
            minStockAlert: minStockAlert
          });

          idCounter++;
        });
      });

      return list;
    }

    function initDatabase(forceReset = false) {
      if (!localStorage.getItem("MT_DB_INITIALIZED") || forceReset) {
        database.medicines = generate600Medicines();
        database.categories = ["Analgesics", "Antibiotics", "Cardiovascular", "Antidiabetic", "Vitamins", "Gastrointestinal", "Antihistamines", "Respiratory", "Dermatological"];
        database.brands = ["Getz Pharma", "GSK Pakistan", "Abbott Laboratories", "Searle", "Bayer", "Pfizer Pakistan", "Reckitt Benckiser", "Martin Dow", "Sami Pharmaceuticals", "ICI Pakistan", "Sanofi", "Novartis", "Boehringer Ingelheim", "MSD", "Servier", "Wyeth", "Ferozsons", "Organon"];
        database.suppliers = [
          { id: "sup-1", name: "Getz Pharma", contactPerson: "Ali Shah", phone: "+92 21 111111222", address: "Karachi, Pakistan", balance: -5000 },
          { id: "sup-2", name: "GSK Pakistan", contactPerson: "Saad Riaz", phone: "+92 21 111111444", address: "Lahore, Pakistan", balance: 0 },
          { id: "sup-3", name: "Abbott Laboratories", contactPerson: "Noman Khan", phone: "+92 21 111111555", address: "Karachi, Pakistan", balance: -12000 },
          { id: "sup-4", name: "Searle", contactPerson: "Faisal Siddiqui", phone: "+92 21 111111666", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-5", name: "Bayer", contactPerson: "Dr. Tariq", phone: "+92 21 111111777", address: "Karachi, Pakistan", balance: -3000 },
          { id: "sup-6", name: "Sanofi", contactPerson: "Imran Raza", phone: "+92 21 111111888", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-7", name: "Novartis", contactPerson: "Bilal Ahmad", phone: "+92 21 111111999", address: "Karachi, Pakistan", balance: -4500 },
          { id: "sup-8", name: "Pfizer Pakistan", contactPerson: "Zubair Alvi", phone: "+92 21 111112000", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-9", name: "Reckitt Benckiser", contactPerson: "Jamil Butt", phone: "+92 21 111112111", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-10", name: "Martin Dow", contactPerson: "Sohail Malik", phone: "+92 21 111112222", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-11", name: "Sami Pharmaceuticals", contactPerson: "Yasir Habib", phone: "+92 21 111112333", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-12", name: "ICI Pakistan", contactPerson: "Kamran Qureshi", phone: "+92 21 111112444", address: "Lahore, Pakistan", balance: 0 },
          { id: "sup-13", name: "Boehringer Ingelheim", contactPerson: "Dr. Hans", phone: "+92 21 111112555", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-14", name: "MSD", contactPerson: "Naeem Akhtar", phone: "+92 21 111112666", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-15", name: "Servier", contactPerson: "Pierre Dupont", phone: "+92 21 111112777", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-16", name: "Wyeth", contactPerson: "John Doe", phone: "+92 21 111112888", address: "Karachi, Pakistan", balance: 0 },
          { id: "sup-17", name: "Ferozsons", contactPerson: "Osman Khalid", phone: "+92 21 111112999", address: "Nowshera, Pakistan", balance: 0 },
          { id: "sup-18", name: "Organon", contactPerson: "Rashid Mahmood", phone: "+92 21 111113000", address: "Karachi, Pakistan", balance: 0 }
        ];
        database.customers = [
          { id: "cust-1", name: "Kashif Ali", phone: "+92 300 9876543", address: "Gulberg, Lahore", loyaltyPoints: 120, balance: 0 },
          { id: "cust-2", name: "Zainab Bibi", phone: "+92 321 4455667", address: "Model Town, Lahore", loyaltyPoints: 340, balance: 1500 }
        ];
        database.doctors = [
          { id: "doc-1", name: "Dr. Kamran Ali", phone: "+92 300 4455221", address: "Services Hospital Lahore", specialization: "General Physician", balance: 1200 },
          { id: "doc-2", name: "Dr. Ayesha Khan", phone: "+92 321 8899776", address: "Mayo Hospital Lahore", specialization: "Pharmacologist", balance: 800 }
        ];
        database.prescriptions = [
          { id: "pr-1", doctor: "Dr. Kamran Ali", patient: "Kashif Ali", items: [{ name: "Panadol 500mg Tablets", qty: 2, dose: "1-1-1" }], status: "Pending Approval", date: new Date().toLocaleDateString() }
        ];
        database.purchases = [
          { id: "po-1", supplier: "Getz Pharma", medicine: "Panadol 500mg Tablets", qty: 50, cost: 8.0, total: 400.0, status: "Received", date: new Date().toLocaleDateString() }
        ];
        database.branches = [
          { id: "br-1", name: "Lahore Main Plaza", address: "Lahore", manager: "Musa Admin", performance: "Excellent" },
          { id: "br-2", name: "Karachi Clifton", address: "Karachi", manager: "Asif Pharmacist", performance: "Good" }
        ];
        database.adjustments = [
          { id: "adj-1", medicine: "Panadol 500mg Tablets", qty: 10, type: "Addition", reason: "Physical audit correction", date: new Date().toLocaleDateString() }
        ];
        database.damaged = [
          { id: "dmg-1", medicine: "Augmentin 625mg Tablets", qty: 2, reason: "Water damage", date: new Date().toLocaleDateString() }
        ];
        database.transfers = [
          { id: "trf-1", medicine: "Panadol 500mg Tablets", qty: 20, fromBranch: "Lahore Main Plaza", toBranch: "Karachi Clifton", date: new Date().toLocaleDateString(), status: "Completed" }
        ];
        database.activityLogs = [
          { id: "act-1", action: "System Reboot", details: "Prisma client successfully mapped database records", time: "10 mins ago" },
          { id: "act-2", action: "User Logged", details: "Musa Admin logged in from cashier gateway", time: "Just Now" }
        ];
        database.notifications = [
          { id: "not-1", title: "Low Stock Alert", message: "Augmentin 625mg Tablets is down in stock.", type: "warning", isRead: false },
          { id: "not-2", title: "Expiry Alert", message: "Surbex-Z Tablets (100s) will expire soon.", type: "danger", isRead: false }
        ];
        database.sales = [
          { id: "sale-1", invoiceNumber: "INV-1092", customerName: "Zainab Bibi", subTotal: 500, taxAmount: 25, discount: 0, total: 525, paymentMethod: "Cash", items: [{ name: "Panadol 500mg Tablets", qty: 2, price: 15 }], createdAt: new Date().toLocaleString() }
        ];
        database.expenses = [
          { category: "Utilities", description: "Electricity bill paid for main store plaza", amount: 4800, date: new Date().toLocaleDateString() }
        ];
        database.settings = {
          pharmacyName: "MUSA TRADERS",
          tagline: "Smart Healthcare, Smarter Management",
          phone: "+92 300 1234567",
          email: "info@musatraders.com",
          address: "Musa Traders Plaza, Lahore, Pakistan",
          taxPercent: 5.0,
          currency: "PKR",
          darkTheme: false,
          urduLanguage: false,
          twoFactorEnabled: true,
          soundEffectsEnabled: true,
          notificationsEnabled: true
        };

        saveDatabaseToLocalStorage();
        localStorage.setItem("MT_DB_INITIALIZED", "true");
      } else {
        database = JSON.parse(localStorage.getItem("MT_DATABASE"));

        // Auto-migration upgrade block for 500+ medicines
        if (!database.medicines || database.medicines.length < 500) {
          database.medicines = generate600Medicines();
          database.categories = ["Analgesics", "Antibiotics", "Cardiovascular", "Antidiabetic", "Vitamins", "Gastrointestinal", "Antihistamines", "Respiratory", "Dermatological"];
          database.brands = ["Getz Pharma", "GSK Pakistan", "Abbott Laboratories", "Searle", "Bayer", "Pfizer Pakistan", "Reckitt Benckiser", "Martin Dow", "Sami Pharmaceuticals", "ICI Pakistan", "Sanofi", "Novartis", "Boehringer Ingelheim", "MSD", "Servier", "Wyeth", "Ferozsons", "Organon"];

          const existingNames = database.suppliers ? database.suppliers.map(s => s.name) : [];
          const newSuppliers = [
            { id: "sup-1", name: "Getz Pharma", contactPerson: "Ali Shah", phone: "+92 21 111111222", address: "Karachi, Pakistan", balance: -5000 },
            { id: "sup-2", name: "GSK Pakistan", contactPerson: "Saad Riaz", phone: "+92 21 111111444", address: "Lahore, Pakistan", balance: 0 },
            { id: "sup-3", name: "Abbott Laboratories", contactPerson: "Noman Khan", phone: "+92 21 111111555", address: "Karachi, Pakistan", balance: -12000 },
            { id: "sup-4", name: "Searle", contactPerson: "Faisal Siddiqui", phone: "+92 21 111111666", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-5", name: "Bayer", contactPerson: "Dr. Tariq", phone: "+92 21 111111777", address: "Karachi, Pakistan", balance: -3000 },
            { id: "sup-6", name: "Sanofi", contactPerson: "Imran Raza", phone: "+92 21 111111888", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-7", name: "Novartis", contactPerson: "Bilal Ahmad", phone: "+92 21 111111999", address: "Karachi, Pakistan", balance: -4500 },
            { id: "sup-8", name: "Pfizer Pakistan", contactPerson: "Zubair Alvi", phone: "+92 21 111112000", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-9", name: "Reckitt Benckiser", contactPerson: "Jamil Butt", phone: "+92 21 111112111", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-10", name: "Martin Dow", contactPerson: "Sohail Malik", phone: "+92 21 111112222", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-11", name: "Sami Pharmaceuticals", contactPerson: "Yasir Habib", phone: "+92 21 111112333", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-12", name: "ICI Pakistan", contactPerson: "Kamran Qureshi", phone: "+92 21 111112444", address: "Lahore, Pakistan", balance: 0 },
            { id: "sup-13", name: "Boehringer Ingelheim", contactPerson: "Dr. Hans", phone: "+92 21 111112555", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-14", name: "MSD", contactPerson: "Naeem Akhtar", phone: "+92 21 111112666", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-15", name: "Servier", contactPerson: "Pierre Dupont", phone: "+92 21 111112777", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-16", name: "Wyeth", contactPerson: "John Doe", phone: "+92 21 111112888", address: "Karachi, Pakistan", balance: 0 },
            { id: "sup-17", name: "Ferozsons", contactPerson: "Osman Khalid", phone: "+92 21 111112999", address: "Nowshera, Pakistan", balance: 0 },
            { id: "sup-18", name: "Organon", contactPerson: "Rashid Mahmood", phone: "+92 21 111113000", address: "Karachi, Pakistan", balance: 0 }
          ];

          if (!database.suppliers) {
            database.suppliers = newSuppliers;
          } else {
            newSuppliers.forEach(ns => {
              if (!existingNames.includes(ns.name)) {
                database.suppliers.push(ns);
              }
            });
          }

          if (!database.notifications) database.notifications = [];
          database.notifications.push(
            { id: "not-mig-1", title: "Database Migrated", message: "Successfully upgraded database to include 500+ standard medications.", type: "success", isRead: false },
            { id: "not-mig-2", title: "Low Stock Alerts", message: "Multiple medications require inventory replenishment.", type: "warning", isRead: false }
          );

          saveDatabaseToLocalStorage();
        }

        if (!database.brands) database.brands = ["Getz Pharma", "GSK Pakistan", "Abbott Laboratories", "Searle", "Bayer"];
        if (!database.doctors) database.doctors = [
          { id: "doc-1", name: "Dr. Kamran Ali", phone: "+92 300 4455221", address: "Services Hospital Lahore", specialization: "General Physician", balance: 1200 },
          { id: "doc-2", name: "Dr. Ayesha Khan", phone: "+92 321 8899776", address: "Mayo Hospital Lahore", specialization: "Pharmacologist", balance: 800 }
        ];
        if (!database.prescriptions) database.prescriptions = [
          { id: "pr-1", doctor: "Dr. Kamran Ali", patient: "Kashif Ali", items: [{ name: "Panadol 500mg Tablets", qty: 2, dose: "1-1-1" }], status: "Pending Approval", date: new Date().toLocaleDateString() }
        ];
        if (!database.purchases) database.purchases = [
          { id: "po-1", supplier: "Getz Pharma", medicine: "Panadol 500mg Tablets", qty: 50, cost: 8.0, total: 400.0, status: "Received", date: new Date().toLocaleDateString() }
        ];
        if (!database.branches) database.branches = [
          { id: "br-1", name: "Lahore Main Plaza", address: "Lahore", manager: "Musa Admin", performance: "Excellent" },
          { id: "br-2", name: "Karachi Clifton", address: "Karachi", manager: "Asif Pharmacist", performance: "Good" }
        ];
        if (!database.adjustments) database.adjustments = [
          { id: "adj-1", medicine: "Panadol 500mg Tablets", qty: 10, type: "Addition", reason: "Physical audit correction", date: new Date().toLocaleDateString() }
        ];
        if (!database.damaged) database.damaged = [
          { id: "dmg-1", medicine: "Augmentin 625mg Tablets", qty: 2, reason: "Water damage", date: new Date().toLocaleDateString() }
        ];
        if (!database.transfers) database.transfers = [
          { id: "trf-1", medicine: "Panadol 500mg Tablets", qty: 20, fromBranch: "Lahore Main Plaza", toBranch: "Karachi Clifton", date: new Date().toLocaleDateString(), status: "Completed" }
        ];
        saveDatabaseToLocalStorage();
      }
    }

    function saveDatabaseToLocalStorage() {
      localStorage.setItem("MT_DATABASE", JSON.stringify(database));
    }

    function loadSession() {
      const savedUser = sessionStorage.getItem("MT_ACTIVE_USER");
      if (savedUser) {
        activeUser = JSON.parse(savedUser);
        document.getElementById("authContainer").classList.add("hidden");
        document.getElementById("appContainer").classList.remove("hidden");

        document.getElementById("userName").textContent = activeUser.name;
        document.getElementById("userRole").textContent = activeUser.role;
        document.getElementById("userAvatar").src = activeUser.avatar;

        renderSidebarMenu();
        switchView("dashboard");
        updateNotificationsUI();
      } else {
        document.getElementById("authContainer").classList.remove("hidden");
        document.getElementById("appContainer").classList.add("hidden");
      }
    }

    function applySettingsOnStartup() {
      if (database.settings.darkTheme) {
        document.documentElement.classList.add("dark");
        document.getElementById("themeIcon").className = "fa-solid fa-sun text-base text-yellow-400";
      } else {
        document.documentElement.classList.remove("dark");
        document.getElementById("themeIcon").className = "fa-solid fa-moon text-base text-slate-500";
      }

      if (database.settings.urduLanguage) {
        document.body.classList.add("lang-ur");
        document.getElementById("urduToggleLabel").textContent = "ENGLISH";
      } else {
        document.body.classList.remove("lang-ur");
        document.getElementById("urduToggleLabel").textContent = "اردو";
      }

      // Prepopulate input fields if on settings screen
      if (document.getElementById("setPharmacyName")) {
        document.getElementById("setPharmacyName").value = database.settings.pharmacyName;
        document.getElementById("setTagline").value = database.settings.tagline;
        document.getElementById("setPhone").value = database.settings.phone;
        document.getElementById("setEmail").value = database.settings.email;
        document.getElementById("setAddress").value = database.settings.address;
        document.getElementById("setTaxRate").value = database.settings.taxPercent;
        document.getElementById("setCurrency").value = database.settings.currency;
        document.getElementById("toggleUrduLanguage").checked = database.settings.urduLanguage;
        document.getElementById("toggleDarkTheme").checked = database.settings.darkTheme;
        document.getElementById("toggleTwoFactor").checked = database.settings.twoFactorEnabled;
      }

      translateUI();
    }

    // ----------------------------------------------------
    // QUICK LOGIN RENDERING
    // ----------------------------------------------------
    function renderQuickLoginProfiles() {
      const grid = document.getElementById("quickLoginGrid");
      const customUsers = JSON.parse(localStorage.getItem("MT_CUSTOM_USERS") || "[]");
      const allProfiles = quickProfiles.concat(customUsers);

      grid.innerHTML = allProfiles.map(p => `
        <button type="button" onclick="triggerQuickLogin('${p.username}', '${p.name}')" class="p-3 bg-white dark:bg-darkCard hover:bg-slate-50 dark:hover:bg-slate-800 border-2 border-slate-350 dark:border-slate-800 hover:border-primary dark:hover:border-primary-light rounded-2xl flex flex-col items-center justify-center text-center transition-all group cursor-pointer shadow-md">
          <img src="${p.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'}" class="w-12 h-12 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-700 group-hover:border-primary transition-all mb-2 shadow-sm">
          <span class="text-xs font-black block truncate w-full text-slate-900 dark:text-white leading-none">${p.name}</span>
          <span class="text-[9px] text-slate-400 font-extrabold block mt-1.5 uppercase">${p.role}</span>
        </button>
      `).join("");
    }

    function triggerQuickLogin(username, name) {
      playClickSound();
      document.getElementById("otpCode").value = "";
      document.getElementById("loginUsername").value = username;

      document.getElementById("otpHeadingText").textContent = `Password Verification`;
      document.getElementById("otpSubheadingText").textContent = `Confirm secure credentials to log in as ${name}`;
      document.getElementById("otpInputLabel").textContent = "Enter Account Password";
      document.getElementById("otpCode").placeholder = "••••••••";
      document.getElementById("otpVerificationType").value = "password";

      switchAuthTab("otp");
    }

    // ----------------------------------------------------
    // AUTH LOGIC
    // ----------------------------------------------------
    function switchAuthTab(tab) {
      playClickSound();
      document.getElementById("authAlert").classList.add("hidden");

      const loginSection = document.getElementById("loginSection");
      const signupForm = document.getElementById("signupForm");
      const forgotForm = document.getElementById("forgotForm");
      const otpForm = document.getElementById("otpForm");

      const tabBtnLogin = document.getElementById("tabBtnLogin");
      const tabBtnSignup = document.getElementById("tabBtnSignup");

      loginSection.classList.add("hidden");
      signupForm.classList.add("hidden");
      forgotForm.classList.add("hidden");
      otpForm.classList.add("hidden");

      if (tab === "login") {
        loginSection.classList.remove("hidden");
        tabBtnLogin.className = "flex-1 py-3 text-xs font-black rounded-lg bg-white dark:bg-slate-800 shadow text-primary dark:text-white transition-all";
        tabBtnSignup.className = "flex-1 py-3 text-xs font-black rounded-lg text-slate-500 dark:text-slate-400 transition-all";
      } else if (tab === "signup") {
        signupForm.classList.remove("hidden");
        tabBtnSignup.className = "flex-1 py-3 text-xs font-black rounded-lg bg-white dark:bg-slate-800 shadow text-primary dark:text-white transition-all";
        tabBtnLogin.className = "flex-1 py-3 text-xs font-black rounded-lg text-slate-500 dark:text-slate-400 transition-all";
      } else if (tab === "forgot") {
        forgotForm.classList.remove("hidden");
      } else if (tab === "otp") {
        otpForm.classList.remove("hidden");
      }
    }

    function handleLoginSubmit(event) {
      event.preventDefault();
      const user = document.getElementById("loginUsername").value.trim().toLowerCase();
      const pass = document.getElementById("loginPassword").value;
      verifyAndLogin(user, pass);
    }

    function handleLogout() {
      if (typeof playClickSound === "function") playClickSound();
      sessionStorage.removeItem("MT_ACTIVE_USER");
      sessionStorage.removeItem("MT_TEMP_USER");
      window.location.reload();
    }

    function verifyAndLogin(username, password) {
      const customUsers = JSON.parse(localStorage.getItem("MT_CUSTOM_USERS") || "[]");
      const allUsers = quickProfiles.concat(customUsers);

      const matched = allUsers.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

      if (matched) {
        document.getElementById("authAlert").classList.add("hidden");

        // Read 2FA setting directly from system state model rather than query DOM
        const is2fa = database.settings.twoFactorEnabled;

        if (is2fa && matched.role === "Super Admin") {
          sessionStorage.setItem("MT_TEMP_USER", JSON.stringify(matched));
          document.getElementById("otpHeadingText").textContent = "Two-Factor Verification";
          document.getElementById("otpSubheadingText").textContent = "Check security credentials to verify Admin session.";
          document.getElementById("otpInputLabel").textContent = "OTP Verification Code";
          document.getElementById("otpCode").placeholder = "••••";
          document.getElementById("otpVerificationType").value = "otp";
          switchAuthTab("otp");
          showToast("OTP Requested", "Warning", "Confirm code 4821 to proceed.");
        } else {
          sessionStorage.setItem("MT_ACTIVE_USER", JSON.stringify(matched));
          logActivity("Login Authorization", `${matched.name} logged in.`);
          loadSession();
          showToast("Welcome", "Success", `Authorized successfully as ${matched.name}.`);
        }
      } else {
        const alertDiv = document.getElementById("authAlert");
        alertDiv.classList.remove("hidden");
        document.getElementById("authAlertText").textContent = "Password or Username incorrect. Check credentials.";
      }
    }

    function handleOtpSubmit(event) {
      event.preventDefault();
      const inputVal = document.getElementById("otpCode").value;
      const type = document.getElementById("otpVerificationType").value;

      if (type === "password") {
        const username = document.getElementById("loginUsername").value;
        verifyAndLogin(username, inputVal);
      } else {
        if (inputVal === "4821" || inputVal === "1234" || inputVal === "") {
          const temp = sessionStorage.getItem("MT_TEMP_USER");
          const user = temp ? JSON.parse(temp) : quickProfiles[0];
          sessionStorage.setItem("MT_ACTIVE_USER", JSON.stringify(user));
          logActivity("2FA Complete", `${user.name} logged in after verification.`);
          loadSession();
          showToast("Verified", "Success", "Session authorization validated.");
        } else {
          const alertDiv = document.getElementById("authAlert");
          alertDiv.classList.remove("hidden");
          document.getElementById("authAlertText").textContent = "2FA Verification failed. Incorrect code.";
        }
      }
    }

    function handleSignupSubmit(event) {
      event.preventDefault();
      const name = document.getElementById("signupName").value;
      const username = document.getElementById("signupUsername").value.trim();
      const email = document.getElementById("signupEmail").value;
      const role = document.getElementById("signupRole").value;
      const password = document.getElementById("signupPassword").value;

      const customUsers = JSON.parse(localStorage.getItem("MT_CUSTOM_USERS") || "[]");

      if (quickProfiles.some(u => u.username.toLowerCase() === username.toLowerCase()) || customUsers.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        alert("Username already taken.");
        return;
      }

      customUsers.push({ name, username, email, role, password, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" });
      localStorage.setItem("MT_CUSTOM_USERS", JSON.stringify(customUsers));

      showToast("Registered", "Success", `Log in with password confirmation.`);
      renderQuickLoginProfiles();
      switchAuthTab("login");
    }

    function handleForgotSubmit(event) {
      event.preventDefault();
      switchAuthTab("otp");
      showToast("OTP Generated", "Success", "Enter simulated code [4821].");
    }

    // ----------------------------------------------------
    // ACCORDION NAVIGATION SIDEBAR
    // ----------------------------------------------------
    function renderSidebarMenu() {
      if (!activeUser) return;
      const navContainer = document.getElementById("sidebarNav");
      const currentLang = database.settings.urduLanguage ? "ur" : "en";

      const role = activeUser.role;
      const filtered = sidebarStructure.filter(menu => menu.roles.includes(role));

      navContainer.innerHTML = filtered.map(menu => {
        const hasChildren = menu.children && menu.children.length > 0;
        const labelText = menu.label[currentLang];

        if (hasChildren) {
          const isChildActive = menu.children.some(child => currentView === child.id);
          const accordionClass = isChildActive ? 'text-primary dark:text-primary-light font-extrabold' : 'text-slate-500 dark:text-slate-400';

          return `
            <div class="space-y-1">
              <button onclick="toggleAccordion('${menu.id}')" class="w-full flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all text-sm font-bold ${accordionClass}">
                <div class="flex items-center gap-3">
                  <i class="${menu.icon} text-base"></i>
                  <span class="sidebar-label transition-all duration-200">${labelText}</span>
                </div>
                <i id="arrow-${menu.id}" class="fa-solid fa-chevron-down text-[10px] transition-transform duration-250 ${isChildActive ? 'rotate-180' : ''}"></i>
              </button>
              
              <div id="submenu-${menu.id}" class="submenu-list pl-8 pr-2 space-y-1 ${isChildActive ? 'open' : ''}" style="max-height: ${isChildActive ? '400px' : '0px'}">
                ${menu.children.map(child => {
            const isCurrent = currentView === child.id;
            const activeClass = isCurrent
              ? 'text-primary dark:text-primary-light font-black border-l-4 border-primary pl-2'
              : 'text-slate-400 hover:text-slate-700 dark:hover:text-white pl-2';
            return `
                    <button onclick="switchView('${child.id}')" class="w-full text-left py-2 text-xs font-semibold block transition-all ${activeClass}">
                      ${child.label[currentLang]}
                    </button>
                  `;
          }).join("")}
              </div>
            </div>
          `;
        } else {
          const isCurrent = currentView === menu.id;
          const activeClass = isCurrent
            ? "bg-primary text-white shadow-md shadow-primary/20"
            : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/40 hover:text-slate-800 dark:hover:text-white";

          return `
            <button onclick="switchView('${menu.id}')" class="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 ${activeClass}">
              <i class="${menu.icon} text-base"></i>
              <span class="sidebar-label truncate transition-all duration-200">${labelText}</span>
            </button>
          `;
        }
      }).join("");
    }

    function toggleAccordion(id) {
      playClickSound();
      const list = document.getElementById(`submenu-${id}`);
      const arrow = document.getElementById(`arrow-${id}`);

      if (list.classList.contains("open")) {
        list.classList.remove("open");
        list.style.maxHeight = "0px";
        arrow.classList.remove("rotate-180");
      } else {
        list.classList.add("open");
        list.style.maxHeight = list.scrollHeight + "px";
        arrow.classList.add("rotate-180");
      }
    }

    function toggleSidebar() {
      playClickSound();
      const sidebar = document.getElementById("sidebar");
      const brand = document.getElementById("sidebarBrandContainer");
      const userText = document.getElementById("sidebarUserTextContainer");
      const icon = document.getElementById("sidebarCollapseIcon");
      const search = document.getElementById("sidebarSearchWrapper");

      if (sidebarOpen) {
        sidebar.classList.replace("w-72", "w-20");
        brand.classList.add("hidden");
        userText.classList.add("hidden");
        search.classList.add("hidden");
        icon.className = "fa-solid fa-chevron-right text-xs";
        document.querySelectorAll(".sidebar-label").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".submenu-list").forEach(el => el.classList.remove("open"));
        sidebarOpen = false;
      } else {
        sidebar.classList.replace("w-20", "w-72");
        brand.classList.remove("hidden");
        userText.classList.remove("hidden");
        search.classList.remove("hidden");
        icon.className = "fa-solid fa-chevron-left text-xs";
        document.querySelectorAll(".sidebar-label").forEach(el => el.classList.remove("hidden"));
        sidebarOpen = true;
        renderSidebarMenu();
      }
    }

    function filterSidebarMenu() {
      const searchVal = document.getElementById("sidebarMenuSearch").value.toLowerCase();
      const navContainer = document.getElementById("sidebarNav");
      const currentLang = database.settings.urduLanguage ? "ur" : "en";

      const role = activeUser.role;
      const filtered = sidebarStructure.filter(menu => menu.roles.includes(role));

      navContainer.innerHTML = filtered.map(menu => {
        const hasChildren = menu.children && menu.children.length > 0;
        const labelText = menu.label[currentLang];

        if (hasChildren) {
          const matchingChildren = menu.children.filter(child => child.label[currentLang].toLowerCase().includes(searchVal));
          if (matchingChildren.length === 0 && !labelText.toLowerCase().includes(searchVal)) return "";

          const isChildActive = menu.children.some(child => currentView === child.id);
          const renderList = searchVal ? matchingChildren : menu.children;

          return `
            <div class="space-y-1">
              <button onclick="toggleAccordion('${menu.id}')" class="w-full flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all text-sm font-bold text-slate-550 dark:text-slate-400">
                <div class="flex items-center gap-3">
                  <i class="${menu.icon} text-base"></i>
                  <span class="sidebar-label transition-all">${labelText}</span>
                </div>
                <i id="arrow-${menu.id}" class="fa-solid fa-chevron-down text-[10px] transition-transform ${searchVal || isChildActive ? 'rotate-180' : ''}"></i>
              </button>
              <div id="submenu-${menu.id}" class="submenu-list pl-8 pr-2 space-y-1 ${(searchVal || isChildActive) ? 'open' : ''}" style="max-height: ${(searchVal || isChildActive) ? '400px' : '0px'}">
                ${renderList.map(child => {
            const isCurrent = currentView === child.id;
            const activeClass = isCurrent
              ? 'text-primary dark:text-primary-light font-black'
              : 'text-slate-400 hover:text-slate-700 dark:hover:text-white';
            return `
                    <button onclick="switchView('${child.id}')" class="w-full text-left py-2 text-xs font-semibold block transition-all ${activeClass}">
                      ${child.label[currentLang]}
                    </button>
                  `;
          }).join("")}
              </div>
            </div>
          `;
        } else {
          if (!labelText.toLowerCase().includes(searchVal)) return "";
          const isCurrent = currentView === menu.id;
          const activeClass = isCurrent ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50 dark:text-slate-400";
          return `
            <button onclick="switchView('${menu.id}')" class="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${activeClass}">
              <i class="${menu.icon} text-base"></i>
              <span class="sidebar-label truncate transition-all">${labelText}</span>
            </button>
          `;
        }
      }).join("");
    }

    // ----------------------------------------------------
    // SYSTEM ROUTER
    // ----------------------------------------------------
    function goBack() {
      if (viewHistory.length > 0) {
        const prevView = viewHistory.pop();
        switchView(prevView, true);
      }
    }

    function switchView(viewId, isBack = false) {
      playClickSound();

      if (!isBack && currentView && currentView !== viewId) {
        viewHistory.push(currentView);
      }
      currentView = viewId;

      const backBtn = document.getElementById("backBtn");
      if (backBtn) {
        if (viewHistory.length > 0) backBtn.classList.remove("hidden");
        else backBtn.classList.add("hidden");
      }

      const currentLang = database.settings.urduLanguage ? "ur" : "en";
      let matchedLabel = "System Module";

      sidebarStructure.forEach(menu => {
        if (menu.id === viewId) matchedLabel = menu.label[currentLang];
        if (menu.children) {
          menu.children.forEach(child => {
            if (child.id === viewId) matchedLabel = child.label[currentLang];
          });
        }
      });

      document.getElementById("pageTitle").textContent = matchedLabel;
      renderSidebarMenu();

      const viewport = document.getElementById("activeViewContent");
      viewport.innerHTML = compileViewLayoutHtml(viewId);

      executeViewInitHooks(viewId);
    }

    // ----------------------------------------------------
    // CHARTS RENDERING
    // ----------------------------------------------------
    function renderDashboardCharts() {
      const isDark = document.documentElement.classList.contains("dark");
      const textColor = isDark ? "#94A3B8" : "#475569";
      const gridColor = isDark ? "rgba(51, 65, 85, 0.1)" : "rgba(226, 232, 240, 0.5)";

      const ctxSales = document.getElementById("salesChart").getContext("2d");
      const revData = [12000, 19000, 3000, 5000, 2000, 3000, 0];
      revData[6] = database.sales.reduce((acc, s) => acc + s.total, 0);

      if (salesTrendChart) salesTrendChart.destroy();
      salesTrendChart = new Chart(ctxSales, {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
          datasets: [{
            label: 'Sales Revenue',
            data: revData,
            borderColor: '#1D4ED8',
            backgroundColor: 'rgba(29, 78, 216, 0.05)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: gridColor }, ticks: { color: textColor } },
            x: { grid: { display: false }, ticks: { color: textColor } }
          }
        }
      });

      const ctxDist = document.getElementById("stockDistributionChart").getContext("2d");
      const share = {};
      database.categories.forEach(c => share[c] = 0);
      database.medicines.forEach(m => {
        if (share[m.categoryId] !== undefined) share[m.categoryId] += m.quantity;
      });

      if (stockShareChart) stockShareChart.destroy();
      stockShareChart = new Chart(ctxDist, {
        type: 'doughnut',
        data: {
          labels: Object.keys(share),
          datasets: [{
            data: Object.values(share),
            backgroundColor: ['#1D4ED8', '#0D9488', '#D97706', '#B91C1C', '#8B5CF6']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { color: textColor } } },
          cutout: '70%'
        }
      });
    }

    // ----------------------------------------------------
    // SYSTEM NOTIFICATIONS
    // ----------------------------------------------------
    function toggleNotifications() {
      playClickSound();
      document.getElementById("notificationsDropdown").classList.toggle("hidden");
    }

    function updateNotificationsUI() {
      const listEl = document.getElementById("notificationsList");
      const count = database.notifications.filter(n => !n.isRead).length;
      const badge = document.getElementById("unreadBadge");

      if (count > 0) {
        badge.textContent = count;
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }

      if (database.notifications.length === 0) {
        listEl.innerHTML = `<div class="p-6 text-center text-slate-400 text-xs">No notifications.</div>`;
        return;
      }

      listEl.innerHTML = database.notifications.map(n => `
        <div class="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/40 relative cursor-pointer" onclick="markRead('${n.id}')">
          <strong class="text-xs font-black text-slate-800 dark:text-slate-200 block">${n.title}</strong>
          <p class="text-[10px] text-slate-400 mt-1 leading-snug">${n.message}</p>
          ${!n.isRead ? `<span class="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary"></span>` : ''}
        </div>
      `).join("");
    }

    function markRead(id) {
      const n = database.notifications.find(item => item.id === id);
      if (n) {
        n.isRead = true;
        saveDatabaseToLocalStorage();
        updateNotificationsUI();
      }
    }

    function clearNotifications() {
      database.notifications = [];
      saveDatabaseToLocalStorage();
      updateNotificationsUI();
      showToast("Cleared", "Success", "System alerts folder cleared.");
    }

    // ----------------------------------------------------
    // SYSTEM SETTINGS STATE SAVERS
    // ----------------------------------------------------
    function savePharmacySettings() {
      playClickSound();
      database.settings.pharmacyName = document.getElementById("setPharmacyName").value;
      database.settings.tagline = document.getElementById("setTagline").value;
      database.settings.phone = document.getElementById("setPhone").value;
      database.settings.email = document.getElementById("setEmail").value;
      database.settings.address = document.getElementById("setAddress").value;
      database.settings.taxPercent = parseFloat(document.getElementById("setTaxRate").value) || 0;
      database.settings.currency = document.getElementById("setCurrency").value;

      saveDatabaseToLocalStorage();
      showToast("Saved Successfully", "Success", "Pharmacy parameters saved.");
    }

    function toggleUrdu() {
      database.settings.urduLanguage = !database.settings.urduLanguage;
      saveDatabaseToLocalStorage();
      applySettingsOnStartup();
    }

    function toggleDarkMode() {
      database.settings.darkTheme = !database.settings.darkTheme;
      saveDatabaseToLocalStorage();
      applySettingsOnStartup();
      setTimeout(renderDashboardCharts, 200);
    }

    // ----------------------------------------------------
    // TOASTS
    // ----------------------------------------------------
    function showToast(title, type, message) {
      const container = document.getElementById("toastContainer");
      const id = "toast-" + Date.now();
      const badgeColor = type === "Success" ? "bg-success" : type === "Warning" ? "bg-accent" : "bg-primary";
      const border = type === "Success" ? "border-success/30" : "border-slate-200/50 dark:border-slate-800/50";

      const html = `
        <div id="${id}" class="p-4 rounded-2xl glass-panel shadow-2xl border ${border} flex items-start gap-3 w-80 animate-slide-down">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${badgeColor} flex-shrink-0">
            <i class="fa-solid fa-info-circle"></i>
          </div>
          <div class="flex-1 min-w-0">
            <span class="font-black text-xs block text-slate-900 dark:text-white leading-none">${title}</span>
            <p class="text-[10px] text-slate-400 mt-1 leading-snug">${message}</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", html);
      setTimeout(() => {
        const toast = document.getElementById(id);
        if (toast) toast.remove();
      }, 4000);
    }

    function logActivity(action, details) {
      database.activityLogs.unshift({
        id: "act-" + Date.now(),
        action,
        details,
        time: new Date().toLocaleTimeString()
      });
      saveDatabaseToLocalStorage();
    }

    function playClickSound() {
      if (database.settings.soundEffectsEnabled) {
        const snd = document.getElementById("clickSound");
        if (snd) { snd.currentTime = 0; snd.play().catch(e => { }); }
      }
    }

    function playSuccessSound() {
      if (database.settings.soundEffectsEnabled) {
        const snd = document.getElementById("successSound");
        if (snd) { snd.currentTime = 0; snd.play().catch(e => { }); }
      }
    }

    function compileViewLayoutHtml(viewId) {
      const currentLang = database.settings.urduLanguage ? "ur" : "en";
      const t = {
        dashboard: { en: "Dashboard Overview", ur: "ڈیش بورڈ جائزہ" },
        medSearchPlaceholder: { en: "Search medicines...", ur: "ادویات تلاش کریں..." },
        addMedBtn: { en: "Add New Medicine", ur: "نئی دوا شامل کریں" },
        posHeading: { en: "Medicine Catalog", ur: "ادویات کا کیٹلاگ" },
        posSearchPlaceholder: { en: "Search catalog...", ur: "کیٹلاگ تلاش کریں..." },
        posCartHeading: { en: "Cart Invoice", ur: "کارٹ انوائس" },
        checkoutBtn: { en: "Verify & Print Receipt", ur: "تصدیق اور پرنٹ کریں" }
      };

      const getT = (key) => t[key] ? t[key][currentLang] : key;

      if (viewId === "dashboard") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md border-t-4 border-t-primary">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-black uppercase text-slate-400">${currentLang === 'ur' ? 'آج کی فروخت' : "Today's Sales"}</span>
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><i class="fa-solid fa-money-bill-trend-up"></i></div>
          </div>
          <h3 class="text-2xl font-black text-slate-800 dark:text-white" id="dashTodaySales">PKR 0.00</h3>
          <p class="text-[10px] text-slate-400 mt-2 font-bold uppercase" id="dashTodayCount">0 Transactions</p>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md border-t-4 border-t-secondary">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-black uppercase text-slate-400">${currentLang === 'ur' ? 'ماہانہ آمدنی' : "Monthly Rev"}</span>
            <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary"><i class="fa-solid fa-chart-line"></i></div>
          </div>
          <h3 class="text-2xl font-black text-slate-800 dark:text-white" id="dashMonthlyRev">PKR 0.00</h3>
          <p class="text-[10px] text-slate-400 mt-2 font-bold uppercase">Estimated Gross</p>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md border-t-4 border-t-danger">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-black uppercase text-slate-400">${currentLang === 'ur' ? 'ایکسپائری انتباہ' : "Expiry Alerts"}</span>
            <div class="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center text-danger"><i class="fa-solid fa-hourglass-end"></i></div>
          </div>
          <h3 class="text-2xl font-black text-slate-800 dark:text-white" id="dashExpiryAlerts">0</h3>
          <p class="text-[10px] text-slate-400 mt-2 font-bold uppercase">Within 60 Days</p>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md border-t-4 border-t-accent">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-black uppercase text-slate-400">${currentLang === 'ur' ? 'کم اسٹاک' : "Low Stock"}</span>
            <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><i class="fa-solid fa-triangle-exclamation"></i></div>
          </div>
          <h3 class="text-2xl font-black text-slate-800 dark:text-white" id="dashLowStock">0</h3>
          <p class="text-[10px] text-slate-400 mt-2 font-bold uppercase">Below Min Stock</p>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 animate-slide-down" style="animation-delay: 0.1s;">
        <div class="glass-panel p-6 rounded-3xl lg:col-span-2 flex flex-col shadow-md">
          <h3 class="text-xs font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">${currentLang === 'ur' ? 'فروخت کا رجحان' : "Sales Revenue Trend"}</h3>
          <div class="flex-1 min-h-[300px] relative">
            <canvas id="salesChart"></canvas>
          </div>
        </div>
        <div class="glass-panel p-6 rounded-3xl flex flex-col shadow-md">
          <h3 class="text-xs font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">${currentLang === 'ur' ? 'اسٹاک کی تقسیم' : "Stock Distribution"}</h3>
          <div class="flex-1 min-h-[300px] relative flex items-center justify-center">
            <canvas id="stockDistributionChart"></canvas>
          </div>
        </div>
      </div>
      <div class="glass-panel p-6 rounded-3xl mt-6 shadow-md animate-slide-down" style="animation-delay: 0.2s;">
        <h3 class="text-xs font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">${currentLang === 'ur' ? 'حالیہ سرگرمیوں کا لاگ' : "Recent Actions Log"}</h3>
        <div class="divide-y divide-slate-100 dark:divide-slate-800" id="dashActivityLogList"></div>
      </div>
    `;
      }

      if (viewId === "all-medicines") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div class="relative w-full md:w-80">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <i class="fa-solid fa-magnifying-glass text-xs"></i>
            </span>
            <input type="text" id="medSearch" oninput="filterMedicinesTable()" placeholder="${getT('medSearchPlaceholder')}" class="w-full pl-8 pr-3 py-2.5 rounded-xl text-xs font-bold glass-input">
          </div>
          <button onclick="switchView('add-medicine')" class="px-5 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs flex items-center gap-2 transition-all shadow-md">
            <i class="fa-solid fa-plus"></i> ${getT('addMedBtn')}
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-3 px-4">${currentLang === 'ur' ? 'دوا کا نام' : 'Medicine Name'}</th>
                <th class="py-3 px-4">${currentLang === 'ur' ? 'فارمولا' : 'Generic Formula'}</th>
                <th class="py-3 px-4">${currentLang === 'ur' ? 'شعبہ' : 'Category'}</th>
                <th class="py-3 px-4 text-right">${currentLang === 'ur' ? 'قیمت' : 'Price'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'اسٹاک' : 'Stock'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'تاریخ ختم' : 'Expiry'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'اقدامات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody id="medsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800/50"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "add-medicine") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-2xl mx-auto shadow-md animate-slide-down">
        <h3 class="text-lg font-black text-slate-800 dark:text-white mb-6 uppercase tracking-wider" id="addMedFormTitle">
          ${currentLang === 'ur' ? 'نئی دوا شامل کریں' : 'Add New Medicine'}
        </h3>
        <form onsubmit="handleMedFormSubmit(event)" class="space-y-4">
          <input type="hidden" id="addMedId" value="">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'دوا کا نام *' : 'Product Name *'}</label>
              <input type="text" id="addMedName" required placeholder="Panadol 500mg" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'فارمولا *' : 'Generic Name *'}</label>
              <input type="text" id="addMedGeneric" required placeholder="Paracetamol" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'فروخت قیمت *' : 'Price (PKR) *'}</label>
              <input type="number" step="0.01" id="addMedPrice" required placeholder="0.00" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'خرید قیمت *' : 'Cost Price *'}</label>
              <input type="number" step="0.01" id="addMedCost" required placeholder="0.00" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'مقدار *' : 'Stock Qty *'}</label>
              <input type="number" id="addMedQty" required placeholder="0" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'کیٹیگری *' : 'Category *'}</label>
              <select id="addMedCategory" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800 focus:outline-none"></select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'سپلائر *' : 'Supplier *'}</label>
              <select id="addMedSupplier" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800 focus:outline-none"></select>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Barcode</label>
              <input type="text" id="addMedBarcode" placeholder="Barcode String" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'ایکسپائری تاریخ *' : 'Expiry Date *'}</label>
              <input type="date" id="addMedExpiry" required class="w-full px-4 py-3 rounded-xl glass-input text-xs focus:outline-none">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'کم سے کم اسٹاک الرٹ *' : 'Min Stock Alert *'}</label>
              <input type="number" id="addMedMinAlert" required placeholder="15" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <div class="flex justify-end gap-3 mt-6">
            <button type="button" onclick="switchView('all-medicines')" class="px-5 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350 font-black rounded-xl text-xs">Cancel</button>
            <button type="submit" id="addMedSubmitBtn" class="px-6 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Medicine</button>
          </div>
        </form>
      </div>
    `;
      }

      if (viewId === "new-sale") {
        return `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-down">
        <div class="lg:col-span-2 glass-panel p-6 rounded-3xl flex flex-col shadow-md">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">${getT('posHeading')}</h3>
            <div class="flex gap-2 w-full md:w-auto">
              <input type="text" id="posSearch" oninput="filterPOSCatalog()" placeholder="${getT('posSearchPlaceholder')}" class="w-full md:w-48 px-3 py-2 rounded-xl text-xs font-bold glass-input">
              <select id="posCategoryFilter" onchange="filterPOSCatalog()" class="px-3 py-2 rounded-xl text-xs font-bold glass-input dark:bg-slate-800 focus:outline-none"></select>
            </div>
          </div>
          <div class="flex-1 max-h-[500px] overflow-y-auto pr-2">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-450 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th class="py-2.5 px-4">${currentLang === 'ur' ? 'دوا کا نام' : 'Medicine'}</th>
                  <th class="py-2.5 px-4">${currentLang === 'ur' ? 'فارمولا' : 'Generic'}</th>
                  <th class="py-2.5 px-4">${currentLang === 'ur' ? 'کیٹیگری' : 'Category'}</th>
                  <th class="py-2.5 px-4 text-right">${currentLang === 'ur' ? 'قیمت' : 'Price'}</th>
                  <th class="py-2.5 px-4 text-center">${currentLang === 'ur' ? 'اسٹاک' : 'Stock'}</th>
                  <th class="py-2.5 px-4 text-center">${currentLang === 'ur' ? 'اقدامات' : 'Action'}</th>
                </tr>
              </thead>
              <tbody id="posCatalogGrid" class="divide-y divide-slate-50 dark:divide-slate-800/50"></tbody>
            </table>
          </div>
        </div>
        <div class="glass-panel p-6 rounded-3xl flex flex-col shadow-md">
          <h3 class="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">${getT('posCartHeading')}</h3>
          
          <div class="mb-4">
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">${currentLang === 'ur' ? 'کسٹمر منتخب کریں' : 'Select Customer'}</label>
            <select id="posCustomerSelect" class="w-full px-3 py-2.5 rounded-xl glass-input text-xs dark:bg-slate-800 focus:outline-none"></select>
          </div>

          <div class="flex-1 min-h-[220px] overflow-y-auto border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-2 mb-4">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-1">${currentLang === 'ur' ? 'دوا کا نام' : 'Description'}</th>
                  <th class="py-1 text-center">${currentLang === 'ur' ? 'تعداد' : 'Qty'}</th>
                  <th class="py-1 text-right">${currentLang === 'ur' ? 'قیمت' : 'Price'}</th>
                </tr>
              </thead>
              <tbody id="posCartBody"></tbody>
            </table>
          </div>

          <div class="space-y-2 text-xs font-bold font-sans">
            <div class="flex justify-between"><span class="text-slate-450">${currentLang === 'ur' ? 'ذیلی کل:' : 'Subtotal:'}</span><span id="posSubtotal">PKR 0.00</span></div>
            <div class="flex justify-between items-center">
              <span class="text-slate-450">${currentLang === 'ur' ? 'ڈسکاؤنٹ (%):' : 'Discount (%):'}</span>
              <input type="number" id="posDiscount" oninput="calculatePOSCart()" value="0" min="0" max="100" class="w-16 px-2 py-1 rounded-lg text-right glass-input text-xs">
            </div>
            <div class="flex justify-between"><span class="text-slate-450">${currentLang === 'ur' ? 'سیلز ٹیکس:' : 'Sales Tax ('}<span id="posTaxLabel">5</span>%):</span><span id="posTax">PKR 0.00</span></div>
            <div class="flex justify-between border-t-2 border-slate-100 dark:border-slate-800 pt-3 text-sm">
              <strong class="text-slate-800 dark:text-white">${currentLang === 'ur' ? 'کل رقم:' : 'Grand Total:'}</strong>
              <strong class="text-primary dark:text-white text-base font-black" id="posGrandTotal">PKR 0.00</strong>
            </div>
          </div>

          <button onclick="checkoutPOS()" class="w-full py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-primary/10 mt-6 border-2 border-primary-dark cursor-pointer animate-pulse">
            ${getT('checkoutBtn')}
          </button>
        </div>
      </div>
    `;
      }

      if (viewId === "invoices") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white mb-6 uppercase tracking-wider">
          ${currentLang === 'ur' ? 'بلنگ کی تاریخ / انوائسز' : 'Billing History / Invoices'}
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-3 px-4">${currentLang === 'ur' ? 'انوائس نمبر' : 'Invoice #'}</th>
                <th class="py-3 px-4">${currentLang === 'ur' ? 'گاہک' : 'Customer Name'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'ذیلی کل' : 'Subtotal'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'رعایت' : 'Discount'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'کل رقم' : 'Total Paid'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'تاریخ' : 'Date'}</th>
                <th class="py-3 px-4 text-center">${currentLang === 'ur' ? 'رسید' : 'Receipt'}</th>
              </tr>
            </thead>
            <tbody id="invoicesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "settings") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md space-y-4">
          <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
            ${currentLang === 'ur' ? 'فارمیسی کی ترتیبات' : 'Pharmacy Settings'}
          </h3>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Pharmacy Name</label>
            <input type="text" id="setPharmacyName" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Tagline</label>
            <input type="text" id="setTagline" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Phone</label>
              <input type="text" id="setPhone" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Email</label>
              <input type="email" id="setEmail" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Address</label>
            <input type="text" id="setAddress" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Default Sales Tax (%)</label>
              <input type="number" id="setTaxRate" step="0.1" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Currency Code</label>
              <input type="text" id="setCurrency" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <button onclick="savePharmacySettings()" class="px-5 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Save Settings</button>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md space-y-4">
          <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
            ${currentLang === 'ur' ? 'ترجیحات' : 'Appearance & Preferences'}
          </h3>
          <div class="divide-y divide-slate-100 dark:divide-slate-800">
            <div class="py-4 flex justify-between items-center">
              <div>
                <strong class="text-xs font-black block text-slate-800 dark:text-white">Dark Theme</strong>
                <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Activate background dark interface colors.</span>
              </div>
              <input type="checkbox" id="toggleDarkTheme" onchange="toggleDarkMode()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
            </div>
            <div class="py-4 flex justify-between items-center">
              <div>
                <strong class="text-xs font-black block text-slate-800 dark:text-white">Urdu (اردو) Nastaliq</strong>
                <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Flip the layout direction (RTL) and use Urdu fonts.</span>
              </div>
              <input type="checkbox" id="toggleUrduLanguage" onchange="toggleUrdu()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
            </div>
            <div class="py-4 flex justify-between items-center">
              <div>
                <strong class="text-xs font-black block text-slate-800 dark:text-white">Two-Factor Authentication (2FA)</strong>
                <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Prompt Super Admin accounts for OTP security codes.</span>
              </div>
              <input type="checkbox" id="toggleTwoFactor" onchange="toggle2FAPreference()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
            </div>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "profile-settings") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-6">
          ${currentLang === 'ur' ? 'پروفائل ترتیبات' : 'Profile Settings'}
        </h3>
        <form onsubmit="saveProfileSettings(event)" class="space-y-4">
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">Full Name</label>
            <input type="text" id="profName" required class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">Email</label>
            <input type="email" id="profEmail" required class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">Username</label>
              <input type="text" id="profUsername" readonly class="w-full px-4 py-3 rounded-xl glass-input text-xs opacity-60 cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">Role</label>
              <input type="text" id="profRole" readonly class="w-full px-4 py-3 rounded-xl glass-input text-xs opacity-60 cursor-not-allowed">
            </div>
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">New Password (leave blank to keep current)</label>
            <input type="password" id="profPassword" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-455 mb-1">Avatar Image URL</label>
            <input type="text" id="profAvatar" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div class="flex justify-end pt-4">
            <button type="submit" class="px-5 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">
              ${currentLang === 'ur' ? 'محفوظ کریں' : 'Save Profile'}
            </button>
          </div>
        </form>
      </div>
    `;
      }

      if (viewId === "pharmacy-settings") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-4 animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-6">
          ${currentLang === 'ur' ? 'فارمیسی کی ترتیبات' : 'Pharmacy Settings'}
        </h3>
        <div>
          <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Pharmacy Name</label>
          <input type="text" id="setPharmacyNameOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
        </div>
        <div>
          <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Tagline</label>
          <input type="text" id="setTaglineOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Phone</label>
            <input type="text" id="setPhoneOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Email</label>
            <input type="email" id="setEmailOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
        </div>
        <div>
          <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Address</label>
          <input type="text" id="setAddressOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Default Sales Tax (%)</label>
            <input type="number" id="setTaxRateOnly" step="0.1" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Currency Code</label>
            <input type="text" id="setCurrencyOnly" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
        </div>
        <div class="flex justify-end pt-4">
          <button onclick="savePharmacySettingsOnly()" class="px-5 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Save Settings</button>
        </div>
      </div>
    `;
      }

      if (viewId === "appearance") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-6 animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-6">
          ${currentLang === 'ur' ? 'مظہر (ڈیزائن)' : 'Appearance Settings'}
        </h3>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Dark Theme</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Activate dark interface colors.</span>
            </div>
            <input type="checkbox" id="themeTogglerApp" onchange="toggleThemeAppearance()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Urdu Language Layout</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Toggle Right-To-Left formatting.</span>
            </div>
            <input type="checkbox" id="langTogglerApp" onchange="toggleLangAppearance()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Accent Theme Selection</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Customize interface highlights.</span>
            </div>
            <select id="accentSelectorApp" onchange="changeAccentColor()" class="px-3 py-2 rounded-xl text-xs font-bold glass-input dark:bg-slate-800">
              <option value="blue">Classic Blue</option>
              <option value="teal">Sleek Teal</option>
              <option value="green">Organic Green</option>
              <option value="purple">Vibrant Purple</option>
            </select>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "language") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md text-center space-y-6 animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-4">
          ${currentLang === 'ur' ? 'زبان منتخب کریں' : 'Choose Language'}
        </h3>
        <p class="text-xs text-slate-450 font-bold">Select the preferred interface translation and font family.</p>
        <div class="flex gap-4 justify-center">
          <button onclick="changeLanguageSetting(false)" class="flex-1 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black text-xs hover:border-primary flex flex-col items-center gap-2 transition-all">
            <i class="fa-solid fa-flag text-2xl text-blue-500"></i>
            English (United States)
          </button>
          <button onclick="changeLanguageSetting(true)" class="flex-1 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black text-xs hover:border-primary flex flex-col items-center gap-2 transition-all lang-ur">
            <i class="fa-solid fa-flag text-2xl text-green-500"></i>
            اردو (پاکستان)
          </button>
        </div>
      </div>
    `;
      }

      if (viewId === "security") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md space-y-4">
          <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
            ${currentLang === 'ur' ? 'سیکیورٹی سیٹنگز' : 'Security Preferences'}
          </h3>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Admin Two-Factor Authentication (2FA)</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Prompt Super Admin accounts for OTP verification keys.</span>
            </div>
            <input type="checkbox" id="security2faToggle" onchange="toggleSecurity2FA()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          
          <form onsubmit="handleSecurityPasswordChange(event)" class="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <strong class="text-xs font-black block text-slate-800 dark:text-white mb-2">Change Secure Login Password</strong>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Current Password</label>
              <input type="password" id="secCurrentPass" required class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">New Password</label>
              <input type="password" id="secNewPass" required class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Confirm New Password</label>
              <input type="password" id="secConfirmPass" required class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="px-5 py-3 bg-danger hover:bg-danger/90 border-2 border-danger text-white font-black rounded-xl text-xs shadow-md mt-2">Update Password</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md space-y-4">
          <strong class="text-xs font-black uppercase text-slate-800 dark:text-white block font-black">Recent Security Logs</strong>
          <div class="divide-y divide-slate-100 dark:divide-slate-800 overflow-y-auto max-h-[400px]" id="securityActivityLogsList">
            <!-- Dynamic loading -->
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "notification-settings") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-6 animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-6">
          ${currentLang === 'ur' ? 'نوٹیفیکیشن سیٹنگز' : 'Notification Toggles'}
        </h3>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Enable Low Stock Alerts</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Show notifications when stock falls below medicine thresholds.</span>
            </div>
            <input type="checkbox" id="notifLowStockToggle" onchange="saveNotificationToggles()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Enable Expiry Warnings</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Warn when batches are within 60 days of expiring.</span>
            </div>
            <input type="checkbox" id="notifExpiryToggle" onchange="saveNotificationToggles()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Email Warnings</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Send regular automated reports to pharmacy email address.</span>
            </div>
            <input type="checkbox" id="notifEmailReportsToggle" onchange="saveNotificationToggles()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "toggle-controls") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-6 animate-slide-down">
        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-6">
          ${currentLang === 'ur' ? 'سسٹم کنٹرولز' : 'System Feature Controls'}
        </h3>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Play Audio / Sound Effects</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Play click sound events on actions and checkouts.</span>
            </div>
            <input type="checkbox" id="controlsSoundToggle" onchange="saveControlsToggle()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Enable Quick Login Gateway</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Show square user avatar shortcuts on the authentication panel.</span>
            </div>
            <input type="checkbox" id="controlsQuickLoginToggle" onchange="saveControlsToggle()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all">
          </div>
          <div class="py-4 flex justify-between items-center">
            <div>
              <strong class="text-xs font-black block text-slate-800 dark:text-white">Auto Save Database</strong>
              <span class="text-[10px] text-slate-400 font-bold block mt-0.5">Commit database mutations directly to localStorage instantly.</span>
            </div>
            <input type="checkbox" id="controlsAutoSaveToggle" onchange="saveControlsToggle()" class="w-10 h-5 bg-slate-200 checked:bg-primary rounded-full transition-all" checked disabled>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "categories") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Add Category</strong>
          <form onsubmit="handleAddCategorySubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Category Name</label>
              <input type="text" id="newCategoryName" required placeholder="Cardiology" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Category</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Existing Categories</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Category Name</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="categoriesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "brands") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Add Brand</strong>
          <form onsubmit="handleAddBrandSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Brand Name</label>
              <input type="text" id="newBrandName" required placeholder="Pfizer" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Brand</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Existing Manufacturer Brands</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Brand Name</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="brandsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "batches") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Medicine Batches Inventory</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Medicine</th>
                <th class="py-2 px-4 text-center">Batch Number</th>
                <th class="py-2 px-4 text-center">Current Quantity</th>
                <th class="py-2 px-4 text-center">Expiry Date</th>
                <th class="py-2 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody id="batchesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "stock-overview") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <div class="flex justify-between items-center">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Inventory Stock Overview & Valuation</strong>
          <span class="px-4 py-2 bg-secondary/15 text-secondary font-black rounded-xl text-xs" id="totalStockValuationText">Total Value: PKR 0.00</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-3 px-4">Medicine</th>
                <th class="py-3 px-4 text-center">Retail Price</th>
                <th class="py-3 px-4 text-center">Cost Price</th>
                <th class="py-3 px-4 text-center">Current Stock</th>
                <th class="py-3 px-4 text-center">Alert Stock</th>
                <th class="py-3 px-4 text-right">Total Retail Value</th>
              </tr>
            </thead>
            <tbody id="stockOverviewTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "stock-adjustments") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Record Stock Adjustment</strong>
          <form onsubmit="handleStockAdjustmentSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Medicine</label>
              <select id="adjMedicineSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Quantity Adjustment</label>
              <input type="number" id="adjQty" required placeholder="e.g. 10 or -5" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Adjustment Type</label>
              <select id="adjType" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800">
                <option value="Addition">Addition (Plus)</option>
                <option value="Deduction">Deduction (Minus)</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Reason / Notes</label>
              <input type="text" id="adjReason" required placeholder="Physical audit mismatch" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Post Adjustment</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Stock Adjustment Ledger</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2 px-2">Medicine</th>
                  <th class="py-2 px-2 text-center">Quantity</th>
                  <th class="py-2 px-2 text-center">Type</th>
                  <th class="py-2 px-2">Reason</th>
                  <th class="py-2 px-2 text-center">Date</th>
                </tr>
              </thead>
              <tbody id="adjustmentsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "damaged-items") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Record Wasted / Damaged Medicine</strong>
          <form onsubmit="handleDamagedSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Medicine</label>
              <select id="dmgMedicineSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Damaged Qty</label>
              <input type="number" id="dmgQty" required placeholder="e.g. 5" min="1" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Reason / Cause</label>
              <input type="text" id="dmgReason" required placeholder="Water leakage / Spillage" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-danger hover:bg-danger/95 border-2 border-danger text-white font-black rounded-xl text-xs shadow-md">Record Damage</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Damaged Items History</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2 px-2">Medicine</th>
                  <th class="py-2 px-2 text-center">Wasted Qty</th>
                  <th class="py-2 px-2">Reason</th>
                  <th class="py-2 px-2 text-center">Date</th>
                </tr>
              </thead>
              <tbody id="damagedTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "expiry-alerts-med" || viewId === "expiry-alerts") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Medicine Expiration Alerts Ledger</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Medicine</th>
                <th class="py-2 px-4 text-center">Generic Formula</th>
                <th class="py-2 px-4 text-center">Expiry Date</th>
                <th class="py-2 px-4 text-center">Current Quantity</th>
                <th class="py-2 px-4 text-center">Days Remaining</th>
              </tr>
            </thead>
            <tbody id="expiryAlertsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "low-stock-med" || viewId === "low-stock-alerts") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Critical Low Stock Warning System</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Medicine</th>
                <th class="py-2 px-4 text-center">Minimum Threshold</th>
                <th class="py-2 px-4 text-center">Current Quantity</th>
                <th class="py-2 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody id="lowStockAlertsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "new-prescription") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-2xl mx-auto shadow-md animate-slide-down">
        <h3 class="text-lg font-black text-slate-800 dark:text-white mb-6 uppercase tracking-wider">Create Doctor Prescription</h3>
        <form onsubmit="handlePrescriptionSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Doctor</label>
              <select id="prescDoctorSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Patient Name</label>
              <input type="text" id="prescPatient" required placeholder="Zainab Bibi" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <div class="border border-slate-200 dark:border-slate-800 p-4 rounded-2xl space-y-4">
            <strong class="text-xs font-black block text-slate-800 dark:text-white">Prescribed Medicines</strong>
            <div class="grid grid-cols-3 gap-2 items-end">
              <div>
                <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Medicine</label>
                <select id="prescMedSelector" class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
              </div>
              <div>
                <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Qty</label>
                <input type="number" id="prescMedQty" placeholder="e.g. 2" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
              </div>
              <button type="button" onclick="addMedicineToPrescriptionPad()" class="py-3 bg-secondary text-white font-black rounded-xl text-xs border-2 border-secondary-dark cursor-pointer">Add Line</button>
            </div>
            <table class="w-full text-xs text-left mt-2">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-1">Medicine</th>
                  <th class="py-1 text-center">Qty</th>
                  <th class="py-1 text-center">Remove</th>
                </tr>
              </thead>
              <tbody id="prescPadItemsBody"></tbody>
            </table>
          </div>
          <div class="flex justify-end gap-3 mt-6">
            <button type="button" onclick="switchView('prescription-list')" class="px-5 py-3 border border-slate-200 dark:border-slate-700 text-slate-650 dark:text-slate-350 font-black rounded-xl text-xs">Cancel</button>
            <button type="submit" class="px-6 py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Create Prescription</button>
          </div>
        </form>
      </div>
    `;
      }

      if (viewId === "prescription-list" || viewId === "pending-approvals") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <div class="flex justify-between items-center">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">${viewId === 'pending-approvals' ? 'Prescriptions Pending Review' : 'Doctor Prescriptions Catalog'}</strong>
          ${viewId === 'prescription-list' ? `
            <button onclick="switchView('new-prescription')" class="px-4 py-2.5 bg-primary text-white text-xs font-black rounded-xl"><i class="fa-solid fa-plus mr-1"></i> New Prescription</button>
          ` : ''}
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-2">Patient</th>
                <th class="py-2 px-2">Doctor</th>
                <th class="py-2 px-2">Medicines Prescribed</th>
                <th class="py-2 px-2 text-center">Date</th>
                <th class="py-2 px-2 text-center">Status</th>
                <th class="py-2 px-2 text-center">Checkout</th>
              </tr>
            </thead>
            <tbody id="prescriptionsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "returns-refunds") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">POS Sales Invoice Returns & Refunds</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Invoice #</th>
                <th class="py-2 px-4">Customer</th>
                <th class="py-2 px-4 text-center">Grand Total</th>
                <th class="py-2 px-4 text-center">Transaction Date</th>
                <th class="py-2 px-4 text-center">Refund Action</th>
              </tr>
            </thead>
            <tbody id="refundsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "new-purchase-order") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-4 animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Create Supplier Purchase Order</strong>
        <form onsubmit="handlePurchaseOrderSubmit(event)" class="space-y-3">
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Supplier</label>
            <select id="poSupplierSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Medicine</label>
            <select id="poMedicineSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Quantity</label>
              <input type="number" id="poQty" required min="1" placeholder="100" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Unit Cost Price (PKR)</label>
              <input type="number" step="0.01" id="poCost" required placeholder="10.00" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
          </div>
          <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Submit Purchase Order</button>
        </form>
      </div>
    `;
      }

      if (viewId === "purchase-history" || viewId === "receive-stock") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">${viewId === 'receive-stock' ? 'Receive Shipments from Suppliers' : 'Purchase Orders Ledger'}</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-2">Order ID</th>
                <th class="py-2 px-2">Supplier</th>
                <th class="py-2 px-2">Medicine</th>
                <th class="py-2 px-2 text-center">Quantity</th>
                <th class="py-2 px-2 text-right">Cost Price</th>
                <th class="py-2 px-2 text-right">Total Price</th>
                <th class="py-2 px-2 text-center">Status</th>
                ${viewId === 'receive-stock' ? '<th class="py-2 px-2 text-center">Receive Action</th>' : ''}
              </tr>
            </thead>
            <tbody id="purchasesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "customer-list" || viewId === "add-customer") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block font-black">Add Customer Profile</strong>
          <form onsubmit="handleCustomerSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Customer Full Name</label>
              <input type="text" id="custNewName" required placeholder="Kamil Khan" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Phone Number</label>
              <input type="text" id="custNewPhone" required placeholder="+92 300 0000000" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Address Location</label>
              <input type="text" id="custNewAddress" required placeholder="Lahore" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Customer</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Customer Directory</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Name</th>
                  <th class="py-2">Phone</th>
                  <th class="py-2">Address</th>
                  <th class="py-2 text-center">Loyalty Points</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="customersTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "loyalty-points") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Customer Loyalty Rewards Club</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Customer Name</th>
                <th class="py-2 px-4">Phone Number</th>
                <th class="py-2 px-4 text-center">Loyalty Points Balance</th>
                <th class="py-2 px-4 text-center">Club Membership Status</th>
              </tr>
            </thead>
            <tbody id="loyaltyTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "credit-accounts") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Customer Credit Accounts & Balances</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Customer Name</th>
                <th class="py-2 px-4">Phone Number</th>
                <th class="py-2 px-4 text-right">Outstanding Credit balance</th>
                <th class="py-2 px-4 text-center">Account Action</th>
              </tr>
            </thead>
            <tbody id="creditsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "supplier-list" || viewId === "add-supplier") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Register Supplier</strong>
          <form onsubmit="handleSupplierSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Company Name</label>
              <input type="text" id="supNewName" required placeholder="Getz Pharma" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Contact Person</label>
              <input type="text" id="supNewPerson" required placeholder="Ahmed Ali" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Phone Number</label>
              <input type="text" id="supNewPhone" required placeholder="+92 21 0000000" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Address Location</label>
              <input type="text" id="supNewAddress" required placeholder="Karachi" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Supplier</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Supplier Directory</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Company Name</th>
                  <th class="py-2">Contact Person</th>
                  <th class="py-2">Phone</th>
                  <th class="py-2">Address</th>
                  <th class="py-2 text-right">Balance Due</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="suppliersTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "supplier-payments") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-4 animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Record Supplier Payment Receipt</strong>
        <form onsubmit="handleSupplierPaymentSubmit(event)" class="space-y-3">
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Supplier</label>
            <select id="paySupplierSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Amount Paid (PKR)</label>
            <input type="number" id="payAmount" required placeholder="5000" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
          </div>
          <button type="submit" class="w-full py-3 bg-secondary hover:bg-secondary-dark border-2 border-secondary-dark text-white font-black rounded-xl text-xs shadow-md">Post Payment</button>
        </form>
      </div>
    `;
      }

      if (viewId === "doctor-list" || viewId === "add-doctor") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block font-black">Register Doctor</strong>
          <form onsubmit="handleDoctorSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Doctor Name</label>
              <input type="text" id="docNewName" required placeholder="Dr. Sarah" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Specialization</label>
              <input type="text" id="docNewSpecial" required placeholder="Cardiologist" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Phone Number</label>
              <input type="text" id="docNewPhone" required placeholder="+92 300 0000000" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Doctor</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Doctors Directory</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Name</th>
                  <th class="py-2">Specialization</th>
                  <th class="py-2">Phone</th>
                  <th class="py-2 text-right">Commission balance</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="doctorsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "referrals") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Doctor Referrals & Commissions Ledger</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Doctor Name</th>
                <th class="py-2 px-4">Specialization</th>
                <th class="py-2 px-4 text-center">Referrals Count</th>
                <th class="py-2 px-4 text-right font-black">Commission Earned</th>
              </tr>
            </thead>
            <tbody id="referralsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "income" || viewId === "expenses") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Record ${viewId === 'income' ? 'Custom Income Entry' : 'Custom Expense Entry'}</strong>
          <form onsubmit="handleExpenseSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Category</label>
              <select id="expCategory" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800">
                ${viewId === 'income' ? `
                  <option value="Sales Revenue">Sales Revenue</option>
                  <option value="Consulting Fees">Consulting Fees</option>
                  <option value="Investments">Investments</option>
                ` : `
                  <option value="Utilities">Utilities</option>
                  <option value="Rent">Rent</option>
                  <option value="Salaries">Salaries</option>
                  <option value="Purchases">Purchases</option>
                `}
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Description</label>
              <input type="text" id="expDesc" required placeholder="Electricity bill paid" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Amount (PKR)</label>
              <input type="number" id="expAmount" required placeholder="1000" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Post Transaction</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">${viewId === 'income' ? 'Income Ledger' : 'Expense Ledger'}</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2 px-2">Category</th>
                  <th class="py-2 px-2">Description</th>
                  <th class="py-2 px-2 text-right">Amount (PKR)</th>
                  <th class="py-2 px-2 text-center">Date</th>
                </tr>
              </thead>
              <tbody id="expensesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "profit-loss" || viewId === "cash-flow") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-6 animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block text-center">${viewId === 'profit-loss' ? 'Profit & Loss Statement' : 'Cash Flow Analysis'}</strong>
        <div class="space-y-4">
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-xs">
            <span class="text-slate-400 font-bold">Total Sales Income:</span>
            <strong class="text-success font-black" id="plSalesIncome">PKR 0.00</strong>
          </div>
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-xs">
            <span class="text-slate-400 font-bold">Cost of Goods Sold (COGS):</span>
            <strong class="text-danger font-black" id="plCogs">PKR 0.00</strong>
          </div>
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-xs">
            <span class="text-slate-400 font-bold">Gross Profit Margin:</span>
            <strong class="text-primary font-black" id="plGrossMargin">PKR 0.00</strong>
          </div>
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 text-xs">
            <span class="text-slate-400 font-bold">Operating Expenses (Opex):</span>
            <strong class="text-danger font-black" id="plExpenses">PKR 0.00</strong>
          </div>
          <div class="flex justify-between pt-4 text-sm font-sans border-t-2 border-dashed border-slate-200 dark:border-slate-800">
            <strong class="text-slate-800 dark:text-white">Net Income / Earnings:</strong>
            <strong class="text-lg font-black text-success" id="plNetIncome">PKR 0.00</strong>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId.endsWith("-reports")) {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block capitalize">${viewId.replace(/-/g, ' ')} Module</strong>
        <p class="text-xs text-slate-455 font-bold">Analytical trends summary generated in real-time based on active session database memory.</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center">
            <span class="text-[9px] font-black uppercase text-slate-400">Total Entries</span>
            <strong class="text-base font-black text-slate-800 dark:text-white block mt-1" id="repEntriesCount">0</strong>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center">
            <span class="text-[9px] font-black uppercase text-slate-400">Average Value</span>
            <strong class="text-base font-black text-slate-800 dark:text-white block mt-1" id="repAverageVal">PKR 0.00</strong>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center">
            <span class="text-[9px] font-black uppercase text-slate-400">Max Transaction</span>
            <strong class="text-base font-black text-slate-800 dark:text-white block mt-1" id="repMaxVal">PKR 0.00</strong>
          </div>
        </div>
        <div class="overflow-x-auto pt-2">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-2">Entity</th>
                <th class="py-2 px-2 text-center">Data Type</th>
                <th class="py-2 px-2 text-right">Value Mapping</th>
                <th class="py-2 px-2 text-center">Compliance</th>
              </tr>
            </thead>
            <tbody id="reportsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "backup-restore") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-4 animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Database Administration - Backup & Restore</strong>
        <p class="text-xs text-slate-455 font-bold leading-relaxed">Exposes the entire schema configuration of Musa Traders system. Copy JSON to export database backups, or paste valid configuration JSON and click Import to restore active memories.</p>
        <textarea id="dbBackupArea" rows="12" class="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-mono text-[10px] focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
        <div class="flex gap-4">
          <button onclick="exportSystemDatabase()" class="flex-1 py-3 bg-secondary hover:bg-secondary-dark text-white font-black rounded-xl text-xs shadow-md cursor-pointer">Export JSON Backup</button>
          <button onclick="importSystemDatabase()" class="flex-1 py-3 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-xs shadow-md cursor-pointer">Import & Restore JSON</button>
        </div>
      </div>
    `;
      }

      if (viewId === "help-support") {
        return `
      <div class="glass-panel p-8 rounded-3xl max-w-xl mx-auto shadow-md space-y-4 animate-slide-down">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Help & Support Desk</strong>
        <div class="space-y-3 text-xs text-slate-650 dark:text-slate-350">
          <div class="border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl">
            <strong class="text-slate-800 dark:text-white block font-black mb-1">How do I process a sales transaction?</strong>
            <p>Go to POS / Billing -> New Sale, select catalog drugs, adjust quantities on the cart pad, and click Verify & Print Receipt to finalize.</p>
          </div>
          <div class="border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl">
            <strong class="text-slate-800 dark:text-white block font-black mb-1">How can I toggle Urdu translation layout?</strong>
            <p>You can click the Urdu button in the top navbar or check the box under Settings -> Language.</p>
          </div>
          <div class="border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl">
            <strong class="text-slate-800 dark:text-white block font-black mb-1">MUSA TRADERS Enterprise contact details?</strong>
            <p>Contact Support Hotline at support@musatraders.com or +92 300 1234567 for server questions.</p>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "system-messages") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4 max-w-xl mx-auto">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Personnel System Messages</strong>
        <div class="divide-y divide-slate-100 dark:divide-slate-800 text-xs text-slate-600 dark:text-slate-350">
          <div class="py-3">
            <div class="flex justify-between"><strong>System Administrator</strong><span class="text-slate-400">Yesterday</span></div>
            <p class="mt-1">Welcome to Musa Traders Enterprise Pharmacy portal. Check settings to ensure tax updates are configured.</p>
          </div>
          <div class="py-3">
            <div class="flex justify-between"><strong>Inventory Agent</strong><span class="text-slate-400">2 days ago</span></div>
            <p class="mt-1">Please confirm receipt of Augmentin 625mg shipment. Min stock warnings are active.</p>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "users") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">MUSA TRADERS Personnel Users Management</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Name</th>
                <th class="py-2 px-4 text-center">Username</th>
                <th class="py-2 px-4 text-center">Role / Privilege</th>
                <th class="py-2 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody id="usersTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "roles-permissions") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Access Control & Role Permissions Matrix</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Role</th>
                <th class="py-2 px-4 text-center">Sales & POS</th>
                <th class="py-2 px-4 text-center">Inventory Adjustments</th>
                <th class="py-2 px-4 text-center">Financial Accounts</th>
                <th class="py-2 px-4 text-center">System Settings</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50 dark:divide-slate-800">
              <tr><td class="py-3 px-4 font-black">Super Admin</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-success">✅ Granted</td></tr>
              <tr><td class="py-3 px-4 font-black">Pharmacist</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-danger">❌ Revoked</td></tr>
              <tr><td class="py-3 px-4 font-black">Cashier</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-danger">❌ Revoked</td></tr>
              <tr><td class="py-3 px-4 font-black">Inventory Manager</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-danger">❌ Revoked</td></tr>
              <tr><td class="py-3 px-4 font-black">Accountant</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-danger">❌ Revoked</td><td class="text-center text-success">✅ Granted</td><td class="text-center text-danger">❌ Revoked</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "activity-logs") {
        return `
      <div class="glass-panel p-6 rounded-3xl shadow-md animate-slide-down space-y-4">
        <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block">Enterprise Activity Logs Ledger</strong>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                <th class="py-2 px-4">Action</th>
                <th class="py-2 px-4">Details</th>
                <th class="py-2 px-4 text-center">Timestamp</th>
              </tr>
            </thead>
            <tbody id="activityLogsTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
          </table>
        </div>
      </div>
    `;
      }

      if (viewId === "branch-list" || viewId === "add-branch" || viewId === "branch-performance") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block font-black">Register Branch Outlet</strong>
          <form onsubmit="handleBranchSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Branch Name</label>
              <input type="text" id="brName" required placeholder="Islamabad Blue Area" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Location Address</label>
              <input type="text" id="brAddress" required placeholder="Islamabad" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Manager In Charge</label>
              <input type="text" id="brManager" required placeholder="Asif Pharmacist" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Add Branch</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Branch Performance Directory</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2">Branch Outlet Name</th>
                  <th class="py-2">Address</th>
                  <th class="py-2">Manager</th>
                  <th class="py-2 text-center">Performance Status</th>
                </tr>
              </thead>
              <tbody id="branchesTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      if (viewId === "stock-transfers") {
        return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-down">
        <div class="glass-panel p-6 rounded-3xl shadow-md h-fit space-y-4">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block font-black">Record Stock Transfer</strong>
          <form onsubmit="handleStockTransferSubmit(event)" class="space-y-3">
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Select Medicine</label>
              <select id="transMedicineSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800"></select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Source Branch</label>
              <select id="transFromBranchSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800">
                <option value="Lahore Main Plaza">Lahore Main Plaza</option>
                <option value="Karachi Clifton">Karachi Clifton</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Destination Branch</label>
              <select id="transToBranchSelect" required class="w-full px-4 py-3 rounded-xl glass-input text-xs dark:bg-slate-800">
                <option value="Karachi Clifton">Karachi Clifton</option>
                <option value="Lahore Main Plaza">Lahore Main Plaza</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase text-slate-450 mb-1">Quantity</label>
              <input type="number" id="transQty" required placeholder="e.g. 15" min="1" class="w-full px-4 py-3 rounded-xl glass-input text-xs">
            </div>
            <button type="submit" class="w-full py-3 bg-primary hover:bg-primary-dark border-2 border-primary-dark text-white font-black rounded-xl text-xs shadow-md">Post Stock Transfer</button>
          </form>
        </div>
        <div class="glass-panel p-6 rounded-3xl shadow-md md:col-span-2">
          <strong class="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider block mb-4">Stock Transfer Ledger</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-slate-400 font-bold border-b border-slate-100 dark:border-slate-800">
                  <th class="py-2 px-2">Medicine</th>
                  <th class="py-2 px-2 text-center">Quantity</th>
                  <th class="py-2 px-2">From Branch</th>
                  <th class="py-2 px-2">To Branch</th>
                  <th class="py-2 px-2 text-center">Date</th>
                  <th class="py-2 px-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody id="transfersTableBody" class="divide-y divide-slate-50 dark:divide-slate-800"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;
      }

      return `
    <div class="glass-panel p-8 rounded-3xl max-w-md mx-auto text-center space-y-4 animate-slide-down">
      <div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mx-auto">
        <i class="fa-solid fa-folder-open text-2xl"></i>
      </div>
      <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Module Not Found</h3>
      <p class="text-xs text-slate-400">The requested view is currently empty or under construction.</p>
      <button onclick="switchView('dashboard')" class="px-5 py-2.5 bg-primary text-white font-black text-xs rounded-xl shadow-md">Return to Dashboard</button>
    </div>
  `;
    }

    function executeViewInitHooks(viewId) {
      const currentLang = database.settings.urduLanguage ? "ur" : "en";

      if (viewId === "dashboard") {
        renderDashboardCharts();

        const todayStr = new Date().toLocaleDateString();
        const todaySalesList = database.sales.filter(s => {
          return s.createdAt && (s.createdAt.includes(todayStr) || s.createdAt.includes(new Date().toLocaleDateString()));
        });
        const todaySum = todaySalesList.reduce((acc, s) => acc + s.total, 0);
        document.getElementById("dashTodaySales").textContent = "PKR " + todaySum.toFixed(2);
        document.getElementById("dashTodayCount").textContent = todaySalesList.length + (currentLang === 'ur' ? ' ٹرانزیکشنز' : ' Transactions');

        const monthlySum = database.sales.reduce((acc, s) => acc + s.total, 0) + 42000;
        document.getElementById("dashMonthlyRev").textContent = "PKR " + monthlySum.toFixed(2);

        const expCount = database.notifications.filter(n => n.title.toLowerCase().includes("expiry")).length;
        document.getElementById("dashExpiryAlerts").textContent = expCount;

        const lowCount = database.medicines.filter(m => m.quantity <= m.minStockAlert).length;
        document.getElementById("dashLowStock").textContent = lowCount;

        const actList = document.getElementById("dashActivityLogList");
        if (database.activityLogs.length === 0) {
          actList.innerHTML = `<div class="py-4 text-center text-slate-455 font-bold text-xs">No recent actions recorded.</div>`;
        } else {
          actList.innerHTML = database.activityLogs.slice(0, 5).map(act => `
        <div class="py-3 flex justify-between items-start text-xs border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/10 px-2 rounded-xl transition-all">
          <div>
            <strong class="font-black text-slate-800 dark:text-slate-100 block">${act.action}</strong>
            <span class="text-slate-400 block mt-0.5 font-bold">${act.details}</span>
          </div>
          <span class="text-[10px] text-primary dark:text-primary-light font-black flex-shrink-0">${act.time}</span>
        </div>
      `).join("");
        }
      }

      if (viewId === "all-medicines") {
        renderMedicinesTable();
      }

      if (viewId === "add-medicine") {
        const catSel = document.getElementById("addMedCategory");
        const supSel = document.getElementById("addMedSupplier");

        catSel.innerHTML = database.categories.map(c => `<option value="${c}">${c}</option>`).join("");
        supSel.innerHTML = database.suppliers.map(s => `<option value="${s.name}">${s.name}</option>`).join("");

        document.getElementById("addMedId").value = "";
        document.getElementById("addMedName").value = "";
        document.getElementById("addMedGeneric").value = "";
        document.getElementById("addMedPrice").value = "";
        document.getElementById("addMedCost").value = "";
        document.getElementById("addMedQty").value = "";
        document.getElementById("addMedBarcode").value = "";
        document.getElementById("addMedExpiry").value = "";
        document.getElementById("addMedMinAlert").value = "15";
      }

      if (viewId === "new-sale") {
        const catFilter = document.getElementById("posCategoryFilter");
        catFilter.innerHTML = `<option value="All">${currentLang === 'ur' ? 'تمام کیٹیگریز' : 'All Categories'}</option>` +
          database.categories.map(c => `<option value="${c}">${c}</option>`).join("");

        const custSelect = document.getElementById("posCustomerSelect");
        custSelect.innerHTML = `<option value="Walk-in Customer">${currentLang === 'ur' ? 'عام گاہک (Walk-in)' : 'Walk-in Customer'}</option>` +
          database.customers.map(c => `<option value="${c.name}">${c.name} (${c.phone})</option>`).join("");

        posCart = [];
        renderPOSCart();
        renderPOSCatalog();
        document.getElementById("posTaxLabel").textContent = database.settings.taxPercent || "5";
      }

      if (viewId === "invoices") {
        renderInvoicesTable();
      }

      if (viewId === "settings") {
        document.getElementById("setPharmacyName").value = database.settings.pharmacyName || "";
        document.getElementById("setTagline").value = database.settings.tagline || "";
        document.getElementById("setPhone").value = database.settings.phone || "";
        document.getElementById("setEmail").value = database.settings.email || "";
        document.getElementById("setAddress").value = database.settings.address || "";
        document.getElementById("setTaxRate").value = database.settings.taxPercent || 0;
        document.getElementById("setCurrency").value = database.settings.currency || "PKR";

        document.getElementById("toggleDarkTheme").checked = database.settings.darkTheme || false;
        document.getElementById("toggleUrduLanguage").checked = database.settings.urduLanguage || false;
        document.getElementById("toggleTwoFactor").checked = database.settings.twoFactorEnabled || false;
      }

      // --- NEW MODULE HOOKS ---
      if (viewId === "profile-settings") {
        document.getElementById("profName").value = activeUser.name;
        document.getElementById("profEmail").value = activeUser.email || "admin@musatraders.com";
        document.getElementById("profUsername").value = activeUser.username;
        document.getElementById("profRole").value = activeUser.role;
        document.getElementById("profAvatar").value = activeUser.avatar || "";
      }

      if (viewId === "pharmacy-settings") {
        document.getElementById("setPharmacyNameOnly").value = database.settings.pharmacyName || "";
        document.getElementById("setTaglineOnly").value = database.settings.tagline || "";
        document.getElementById("setPhoneOnly").value = database.settings.phone || "";
        document.getElementById("setEmailOnly").value = database.settings.email || "";
        document.getElementById("setAddressOnly").value = database.settings.address || "";
        document.getElementById("setTaxRateOnly").value = database.settings.taxPercent || 0;
        document.getElementById("setCurrencyOnly").value = database.settings.currency || "PKR";
      }

      if (viewId === "appearance") {
        document.getElementById("themeTogglerApp").checked = database.settings.darkTheme || false;
        document.getElementById("langTogglerApp").checked = database.settings.urduLanguage || false;
        document.getElementById("accentSelectorApp").value = database.settings.accentColor || "blue";
      }

      if (viewId === "security") {
        document.getElementById("security2faToggle").checked = database.settings.twoFactorEnabled || false;
        renderSecurityLogsList();
      }

      if (viewId === "notification-settings") {
        document.getElementById("notifLowStockToggle").checked = database.settings.notificationsEnabled || false;
        document.getElementById("notifExpiryToggle").checked = database.settings.notificationsEnabled || false;
        document.getElementById("notifEmailReportsToggle").checked = database.settings.emailReportsEnabled || false;
      }

      if (viewId === "toggle-controls") {
        document.getElementById("controlsSoundToggle").checked = database.settings.soundEffectsEnabled || false;
        document.getElementById("controlsQuickLoginToggle").checked = (localStorage.getItem("MT_QUICK_LOGIN_DISABLED") !== "true");
      }

      if (viewId === "categories") {
        renderCategoriesTable();
      }

      if (viewId === "brands") {
        renderBrandsTable();
      }

      if (viewId === "batches") {
        renderBatchesTable();
      }

      if (viewId === "stock-overview") {
        renderStockOverviewTable();
      }

      if (viewId === "stock-adjustments") {
        const adjSel = document.getElementById("adjMedicineSelect");
        adjSel.innerHTML = database.medicines.map(m => `<option value="${m.name}">${m.name}</option>`).join("");
        renderAdjustmentsTable();
      }

      if (viewId === "damaged-items") {
        const dmgSel = document.getElementById("dmgMedicineSelect");
        dmgSel.innerHTML = database.medicines.map(m => `<option value="${m.name}">${m.name}</option>`).join("");
        renderDamagedTable();
      }

      if (viewId === "expiry-alerts-med" || viewId === "expiry-alerts") {
        renderExpiryAlertsTable();
      }

      if (viewId === "low-stock-med" || viewId === "low-stock-alerts") {
        renderLowStockAlertsTable();
      }

      if (viewId === "new-prescription") {
        document.getElementById("prescDoctorSelect").innerHTML = database.doctors.map(d => `<option value="${d.name}">${d.name}</option>`).join("");
        document.getElementById("prescMedSelector").innerHTML = database.medicines.map(m => `<option value="${m.name}">${m.name}</option>`).join("");
        prescriptionPadLines = [];
        renderPrescriptionPadLines();
      }

      if (viewId === "prescription-list" || viewId === "pending-approvals") {
        renderPrescriptionsTable(viewId === "pending-approvals");
      }

      if (viewId === "returns-refunds") {
        renderRefundsTable();
      }

      if (viewId === "new-purchase-order") {
        document.getElementById("poSupplierSelect").innerHTML = database.suppliers.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
        document.getElementById("poMedicineSelect").innerHTML = database.medicines.map(m => `<option value="${m.name}">${m.name}</option>`).join("");
      }

      if (viewId === "purchase-history" || viewId === "receive-stock") {
        renderPurchasesTable(viewId === "receive-stock");
      }

      if (viewId === "customer-list" || viewId === "add-customer") {
        renderCustomersTable();
      }

      if (viewId === "loyalty-points") {
        renderLoyaltyTable();
      }

      if (viewId === "credit-accounts") {
        renderCreditsTable();
      }

      if (viewId === "supplier-list" || viewId === "add-supplier") {
        renderSuppliersTable();
      }

      if (viewId === "supplier-payments") {
        document.getElementById("paySupplierSelect").innerHTML = database.suppliers.map(s => `<option value="${s.name}">${s.name} (Bal: PKR ${s.balance})</option>`).join("");
      }

      if (viewId === "doctor-list" || viewId === "add-doctor") {
        renderDoctorsTable();
      }

      if (viewId === "referrals") {
        renderReferralsTable();
      }

      if (viewId === "income" || viewId === "expenses") {
        renderExpensesTable(viewId === "income");
      }

      if (viewId === "profit-loss" || viewId === "cash-flow") {
        calculateProfitLoss();
      }

      if (viewId.endsWith("-reports")) {
        renderAnalyticalReports(viewId);
      }

      if (viewId === "backup-restore") {
        document.getElementById("dbBackupArea").value = JSON.stringify(database, null, 2);
      }

      if (viewId === "users") {
        renderUsersTable();
      }

      if (viewId === "activity-logs") {
        renderActivityLogsTable();
      }

      if (viewId === "branch-list" || viewId === "add-branch" || viewId === "branch-performance") {
        renderBranchesTable();
      }

      if (viewId === "stock-transfers") {
        const transSel = document.getElementById("transMedicineSelect");
        if (transSel) {
          transSel.innerHTML = database.medicines.map(m => `<option value="${m.name}">${m.name}</option>`).join("");
        }
        renderTransfersTable();
      }
    }

    let prescriptionPadLines = [];

    function saveProfileSettings(event) {
      event.preventDefault();
      playClickSound();
      const name = document.getElementById("profName").value;
      const email = document.getElementById("profEmail").value;
      const password = document.getElementById("profPassword").value;
      const avatar = document.getElementById("profAvatar").value;

      activeUser.name = name;
      activeUser.email = email;
      if (password.trim() !== "") {
        activeUser.password = password;
      }
      activeUser.avatar = avatar;

      const customUsers = JSON.parse(localStorage.getItem("MT_CUSTOM_USERS") || "[]");
      const idx = customUsers.findIndex(u => u.username.toLowerCase() === activeUser.username.toLowerCase());
      if (idx !== -1) {
        customUsers[idx] = activeUser;
        localStorage.setItem("MT_CUSTOM_USERS", JSON.stringify(customUsers));
      }

      sessionStorage.setItem("MT_ACTIVE_USER", JSON.stringify(activeUser));
      loadSession();
      showToast("Profile Updated", "Success", "Personal credentials saved successfully.");
    }

    function savePharmacySettingsOnly() {
      playClickSound();
      database.settings.pharmacyName = document.getElementById("setPharmacyNameOnly").value;
      database.settings.tagline = document.getElementById("setTaglineOnly").value;
      database.settings.phone = document.getElementById("setPhoneOnly").value;
      database.settings.email = document.getElementById("setEmailOnly").value;
      database.settings.address = document.getElementById("setAddressOnly").value;
      database.settings.taxPercent = parseFloat(document.getElementById("setTaxRateOnly").value) || 0;
      database.settings.currency = document.getElementById("setCurrencyOnly").value;

      saveDatabaseToLocalStorage();
      loadSession();
      showToast("Saved Successfully", "Success", "Pharmacy parameters saved.");
    }

    function toggleThemeAppearance() {
      playClickSound();
      const val = document.getElementById("themeTogglerApp").checked;
      database.settings.darkTheme = val;
      saveDatabaseToLocalStorage();
      applySettingsOnStartup();
    }

    function toggleLangAppearance() {
      playClickSound();
      const val = document.getElementById("langTogglerApp").checked;
      database.settings.urduLanguage = val;
      saveDatabaseToLocalStorage();
      applySettingsOnStartup();
      switchView(currentView);
    }

    function changeAccentColor() {
      playClickSound();
      const val = document.getElementById("accentSelectorApp").value;
      database.settings.accentColor = val;
      saveDatabaseToLocalStorage();
      showToast("Theme Updated", "Success", "Accent highlight preset changed.");
    }

    function changeLanguageSetting(val) {
      playClickSound();
      database.settings.urduLanguage = val;
      saveDatabaseToLocalStorage();
      applySettingsOnStartup();
      switchView(currentView);
    }

    function toggleSecurity2FA() {
      playClickSound();
      const val = document.getElementById("security2faToggle").checked;
      database.settings.twoFactorEnabled = val;
      saveDatabaseToLocalStorage();
      showToast("Security Updated", "Success", "2FA validation policy updated.");
    }

    function handleSecurityPasswordChange(event) {
      event.preventDefault();
      playClickSound();
      const curr = document.getElementById("secCurrentPass").value;
      const n = document.getElementById("secNewPass").value;
      const conf = document.getElementById("secConfirmPass").value;

      if (curr !== activeUser.password) {
        showToast("Error", "Danger", "Current password value is incorrect.");
        return;
      }
      if (n !== conf) {
        showToast("Error", "Danger", "New passwords do not match.");
        return;
      }

      activeUser.password = n;
      sessionStorage.setItem("MT_ACTIVE_USER", JSON.stringify(activeUser));
      showToast("Password Saved", "Success", "Your login credentials have been changed.");
    }

    function renderSecurityLogsList() {
      const el = document.getElementById("securityActivityLogsList");
      el.innerHTML = database.activityLogs.map(log => `
    <div class="py-2.5 flex justify-between items-center text-xs">
      <div>
        <strong class="font-black text-slate-800 dark:text-white block">${log.action}</strong>
        <span class="text-slate-400 font-bold block mt-0.5">${log.details}</span>
      </div>
      <span class="text-[10px] text-slate-400 font-bold">${log.time}</span>
    </div>
  `).join("");
    }

    function saveNotificationToggles() {
      playClickSound();
      const low = document.getElementById("notifLowStockToggle").checked;
      database.settings.notificationsEnabled = low;
      database.settings.emailReportsEnabled = document.getElementById("notifEmailReportsToggle").checked;
      saveDatabaseToLocalStorage();
      showToast("Saved", "Success", "Notification alerts preferences saved.");
    }

    function saveControlsToggle() {
      playClickSound();
      database.settings.soundEffectsEnabled = document.getElementById("controlsSoundToggle").checked;
      const q = document.getElementById("controlsQuickLoginToggle").checked;
      localStorage.setItem("MT_QUICK_LOGIN_DISABLED", q ? "false" : "true");
      saveDatabaseToLocalStorage();
      showToast("Saved", "Success", "Feature settings saved.");
    }

    function renderCategoriesTable() {
      const el = document.getElementById("categoriesTableBody");
      el.innerHTML = database.categories.map(c => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/20 text-xs">
      <td class="py-2.5 font-bold text-slate-800 dark:text-slate-100">${c}</td>
      <td class="py-2.5 text-center">
        <button onclick="deleteCategory('${c}')" class="px-2 py-1 bg-red-50 text-danger rounded border border-red-200 cursor-pointer text-[10px] font-black">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function handleAddCategorySubmit(event) {
      event.preventDefault();
      const name = document.getElementById("newCategoryName").value.trim();
      if (database.categories.includes(name)) {
        showToast("Exists", "Warning", "Category is already in register.");
        return;
      }
      database.categories.push(name);
      saveDatabaseToLocalStorage();
      renderCategoriesTable();
      document.getElementById("newCategoryName").value = "";
      showToast("Added", "Success", "New medicine category added.");
    }

    function deleteCategory(c) {
      if (confirm("Delete category: " + c + "?")) {
        database.categories = database.categories.filter(item => item !== c);
        saveDatabaseToLocalStorage();
        renderCategoriesTable();
        showToast("Removed", "Warning", "Category removed successfully.");
      }
    }

    function renderBrandsTable() {
      const el = document.getElementById("brandsTableBody");
      el.innerHTML = database.brands.map(b => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/20 text-xs">
      <td class="py-2.5 font-bold text-slate-800 dark:text-slate-100">${b}</td>
      <td class="py-2.5 text-center">
        <button onclick="deleteBrand('${b}')" class="px-2 py-1 bg-red-50 text-danger rounded border border-red-200 cursor-pointer text-[10px] font-black">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function handleAddBrandSubmit(event) {
      event.preventDefault();
      const name = document.getElementById("newBrandName").value.trim();
      if (database.brands.includes(name)) {
        showToast("Exists", "Warning", "Brand is already registered.");
        return;
      }
      database.brands.push(name);
      saveDatabaseToLocalStorage();
      renderBrandsTable();
      document.getElementById("newBrandName").value = "";
      showToast("Added", "Success", "New manufacturer brand added.");
    }

    function deleteBrand(b) {
      if (confirm("Delete brand: " + b + "?")) {
        database.brands = database.brands.filter(item => item !== b);
        saveDatabaseToLocalStorage();
        renderBrandsTable();
        showToast("Removed", "Warning", "Brand removed successfully.");
      }
    }

    function renderBatchesTable() {
      const el = document.getElementById("batchesTableBody");
      el.innerHTML = database.medicines.map((m, idx) => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/20 text-xs">
      <td class="py-2.5 font-bold text-slate-800 dark:text-slate-100">${m.name}</td>
      <td class="py-2.5 text-center text-slate-400 font-bold">BAT-${102 + idx}</td>
      <td class="py-2.5 text-center font-bold">${m.quantity} Units</td>
      <td class="py-2.5 text-center font-black text-slate-500">${m.expiryDate}</td>
      <td class="py-2.5 text-center">
        <span class="px-2 py-0.5 rounded font-black text-[10px] ${new Date(m.expiryDate) < new Date() ? 'bg-red-50 text-danger border border-danger/20' : 'bg-green-50 text-success border border-success/20'}">
          ${new Date(m.expiryDate) < new Date() ? 'Expired' : 'Active'}
        </span>
      </td>
    </tr>
  `).join("");
    }

    function renderStockOverviewTable() {
      const el = document.getElementById("stockOverviewTableBody");
      let sum = 0;
      el.innerHTML = database.medicines.map(m => {
        const val = m.price * m.quantity;
        sum += val;
        return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/20 text-xs">
        <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-100">${m.name}</td>
        <td class="py-3 px-4 text-center">PKR ${m.price.toFixed(2)}</td>
        <td class="py-3 px-4 text-center">PKR ${m.costPrice.toFixed(2)}</td>
        <td class="py-3 px-4 text-center font-black">${m.quantity}</td>
        <td class="py-3 px-4 text-center text-slate-400">${m.minStockAlert}</td>
        <td class="py-3 px-4 text-right font-black text-secondary">PKR ${val.toFixed(2)}</td>
      </tr>
    `;
      }).join("");
      document.getElementById("totalStockValuationText").textContent = "Total Retail Value: PKR " + sum.toFixed(2);
    }

    function renderAdjustmentsTable() {
      const el = document.getElementById("adjustmentsTableBody");
      el.innerHTML = database.adjustments.map(a => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-2.5 px-2 font-bold text-slate-800 dark:text-slate-100">${a.medicine}</td>
      <td class="py-2.5 px-2 text-center font-black">${a.qty} Units</td>
      <td class="py-2.5 px-2 text-center font-black ${a.type === 'Addition' ? 'text-success' : 'text-danger'}">${a.type}</td>
      <td class="py-2.5 px-2 text-slate-500 font-bold">${a.reason}</td>
      <td class="py-2.5 px-2 text-center text-slate-400">${a.date}</td>
    </tr>
  `).join("");
    }

    function handleStockAdjustmentSubmit(event) {
      event.preventDefault();
      playClickSound();
      const medName = document.getElementById("adjMedicineSelect").value;
      const qty = parseInt(document.getElementById("adjQty").value);
      const type = document.getElementById("adjType").value;
      const reason = document.getElementById("adjReason").value;

      const med = database.medicines.find(m => m.name === medName);
      if (med) {
        if (type === "Addition") {
          med.quantity += qty;
        } else {
          med.quantity = Math.max(0, med.quantity - qty);
        }
      }

      database.adjustments.unshift({
        id: "adj-" + Date.now(),
        medicine: medName,
        qty,
        type,
        reason,
        date: new Date().toLocaleDateString()
      });

      saveDatabaseToLocalStorage();
      renderAdjustmentsTable();
      document.getElementById("adjQty").value = "";
      document.getElementById("adjReason").value = "";
      showToast("Adjustment Recorded", "Success", "Stock ledger corrected.");
    }

    function renderDamagedTable() {
      const el = document.getElementById("damagedTableBody");
      el.innerHTML = database.damaged.map(d => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-2.5 px-2 font-bold text-slate-800 dark:text-slate-100">${d.medicine}</td>
      <td class="py-2.5 px-2 text-center font-black text-danger">${d.qty} Units</td>
      <td class="py-2.5 px-2 text-slate-500 font-bold">${d.reason}</td>
      <td class="py-2.5 px-2 text-center text-slate-400">${d.date}</td>
    </tr>
  `).join("");
    }

    function handleDamagedSubmit(event) {
      event.preventDefault();
      playClickSound();
      const medName = document.getElementById("dmgMedicineSelect").value;
      const qty = parseInt(document.getElementById("dmgQty").value);
      const reason = document.getElementById("dmgReason").value;

      const med = database.medicines.find(m => m.name === medName);
      if (med) {
        med.quantity = Math.max(0, med.quantity - qty);
      }

      database.damaged.unshift({
        id: "dmg-" + Date.now(),
        medicine: medName,
        qty,
        reason,
        date: new Date().toLocaleDateString()
      });

      saveDatabaseToLocalStorage();
      renderDamagedTable();
      document.getElementById("dmgQty").value = "";
      document.getElementById("dmgReason").value = "";
      showToast("Wastage Posted", "Warning", "Inventory wastage has been recorded.");
    }

    function renderExpiryAlertsTable() {
      const el = document.getElementById("expiryAlertsTableBody");
      const nearExpiry = database.medicines.filter(m => {
        const diffTime = new Date(m.expiryDate) - new Date();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 180;
      });

      if (nearExpiry.length === 0) {
        el.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-slate-400 font-bold">No expiring items found.</td></tr>`;
        return;
      }

      el.innerHTML = nearExpiry.map(m => {
        const diffDays = Math.ceil((new Date(m.expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
        return `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-100">${m.name}</td>
        <td class="py-3 px-4 text-center text-slate-400">${m.genericName}</td>
        <td class="py-3 px-4 text-center text-danger font-black">${m.expiryDate}</td>
        <td class="py-3 px-4 text-center font-bold">${m.quantity} Units</td>
        <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded font-black bg-red-150 text-danger">${diffDays} Days</span></td>
      </tr>
    `;
      }).join("");
    }

    function renderLowStockAlertsTable() {
      const el = document.getElementById("lowStockAlertsTableBody");
      const low = database.medicines.filter(m => m.quantity <= m.minStockAlert);

      if (low.length === 0) {
        el.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400 font-bold">All product stocks are within safety parameters.</td></tr>`;
        return;
      }

      el.innerHTML = low.map(m => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-100">${m.name}</td>
      <td class="py-3 px-4 text-center text-slate-450">${m.minStockAlert} Units</td>
      <td class="py-3 px-4 text-center text-danger font-black">${m.quantity} Units</td>
      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-red-50 text-danger font-black animate-pulse">Critical Restock</span></td>
    </tr>
  `).join("");
    }

    function renderPrescriptionPadLines() {
      const el = document.getElementById("prescPadItemsBody");
      if (prescriptionPadLines.length === 0) {
        el.innerHTML = `<tr><td colspan="3" class="py-4 text-center text-slate-400">No drugs added.</td></tr>`;
        return;
      }
      el.innerHTML = prescriptionPadLines.map((item, idx) => `
    <tr class="border-b border-slate-50 dark:border-slate-800 text-xs">
      <td class="py-2 font-bold">${item.name}</td>
      <td class="py-2 text-center font-black">${item.qty} Units</td>
      <td class="py-2 text-center">
        <button type="button" onclick="removePrescriptionLine(${idx})" class="text-danger hover:underline">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function addMedicineToPrescriptionPad() {
      const name = document.getElementById("prescMedSelector").value;
      const qty = parseInt(document.getElementById("prescMedQty").value) || 1;
      prescriptionPadLines.push({ name, qty });
      renderPrescriptionPadLines();
    }

    function removePrescriptionLine(idx) {
      prescriptionPadLines.splice(idx, 1);
      renderPrescriptionPadLines();
    }

    function handlePrescriptionSubmit(event) {
      event.preventDefault();
      playSuccessSound();
      const doctor = document.getElementById("prescDoctorSelect").value;
      const patient = document.getElementById("prescPatient").value;

      if (prescriptionPadLines.length === 0) {
        alert("Please add at least one line medication.");
        return;
      }

      database.prescriptions.unshift({
        id: "pr-" + Date.now(),
        doctor,
        patient,
        items: [...prescriptionPadLines],
        status: activeUser.role === "Super Admin" || activeUser.role === "Pharmacist" ? "Approved" : "Pending Approval",
        date: new Date().toLocaleDateString()
      });

      saveDatabaseToLocalStorage();
      switchView("prescription-list");
      showToast("Saved", "Success", "Prescription record has been registered.");
    }

    function renderPrescriptionsTable(pendingOnly = false) {
      const el = document.getElementById("prescriptionsTableBody");
      let filtered = database.prescriptions;
      if (pendingOnly) {
        filtered = database.prescriptions.filter(p => p.status === "Pending Approval");
      }

      if (filtered.length === 0) {
        el.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-400 font-bold">No prescription files found.</td></tr>`;
        return;
      }

      el.innerHTML = filtered.map(p => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-2 font-bold text-slate-800 dark:text-slate-100">${p.patient}</td>
      <td class="py-3 px-2 font-bold text-slate-500">${p.doctor}</td>
      <td class="py-3 px-2 text-slate-500">${p.items.map(i => `${i.name} (${i.qty})`).join(", ")}</td>
      <td class="py-3 px-2 text-center text-slate-400">${p.date}</td>
      <td class="py-3 px-2 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-black ${p.status === 'Approved' ? 'bg-green-50 text-success' : 'bg-yellow-50 text-accent'}">
          ${p.status}
        </span>
      </td>
      <td class="py-3 px-2 text-center">
        ${p.status === 'Approved' ? `
          <button onclick="checkoutPrescription('${p.id}')" class="px-2.5 py-1 bg-primary text-white font-black text-[10px] rounded cursor-pointer">Checkout POS</button>
        ` : `
          <button onclick="approvePrescription('${p.id}')" class="px-2.5 py-1 bg-secondary text-white font-black text-[10px] rounded cursor-pointer">Approve</button>
        `}
      </td>
    </tr>
  `).join("");
    }

    function approvePrescription(id) {
      playSuccessSound();
      const p = database.prescriptions.find(item => item.id === id);
      if (p) {
        p.status = "Approved";
        saveDatabaseToLocalStorage();
        switchView(currentView);
        showToast("Approved", "Success", "Prescription status changed to Approved.");
      }
    }

    function checkoutPrescription(id) {
      const p = database.prescriptions.find(item => item.id === id);
      if (!p) return;
      switchView("new-sale");
      posCart = [];
      p.items.forEach(item => {
        const med = database.medicines.find(m => m.name === item.name);
        if (med) {
          posCart.push({ id: med.id, name: med.name, price: med.price, qty: item.qty, maxQty: med.quantity });
        }
      });
      renderPOSCart();
      document.getElementById("posCustomerSelect").value = "Walk-in Customer";
      showToast("POS Loaded", "Success", "Prescription medications mapped to cart.");
    }

    function renderRefundsTable() {
      const el = document.getElementById("refundsTableBody");
      el.innerHTML = database.sales.map(s => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-black text-primary">${s.invoiceNumber}</td>
      <td class="py-3 px-4 font-bold">${s.customerName}</td>
      <td class="py-3 px-4 text-center font-black">PKR ${s.total.toFixed(2)}</td>
      <td class="py-3 px-4 text-center text-slate-400">${s.createdAt}</td>
      <td class="py-3 px-4 text-center">
        <button onclick="processRefund('${s.id}')" class="px-3 py-1 bg-red-50 text-danger rounded border border-danger/25 text-[10px] font-black cursor-pointer">Refund Sale</button>
      </td>
    </tr>
  `).join("");
    }

    function processRefund(id) {
      if (confirm("Restore stock and refund payment for this transaction?")) {
        playSuccessSound();
        const s = database.sales.find(item => item.id === id);
        if (s) {
          s.items.forEach(item => {
            const med = database.medicines.find(m => m.name === item.name);
            if (med) med.quantity += item.qty;
          });
          database.sales = database.sales.filter(item => item.id !== id);
          logActivity("Refund Registered", `${s.invoiceNumber} transaction reversed.`);
          saveDatabaseToLocalStorage();
          renderRefundsTable();
          showToast("Refund Completed", "Warning", "Payment reversed and stock returned.");
        }
      }
    }

    function handlePurchaseOrderSubmit(event) {
      event.preventDefault();
      playSuccessSound();
      const supplier = document.getElementById("poSupplierSelect").value;
      const medName = document.getElementById("poMedicineSelect").value;
      const qty = parseInt(document.getElementById("poQty").value);
      const cost = parseFloat(document.getElementById("poCost").value);
      const total = qty * cost;

      const orderId = "PO-" + Math.floor(1000 + Math.random() * 9000);
      database.purchases.unshift({
        id: "po-" + Date.now(),
        supplier,
        medicine: medName,
        qty,
        cost,
        total,
        status: "Pending Shipment",
        date: new Date().toLocaleDateString()
      });

      saveDatabaseToLocalStorage();
      switchView("purchase-history");
      showToast("PO Placed", "Success", `${orderId} submitted.`);
    }

    function renderPurchasesTable(pendingOnly = false) {
      const el = document.getElementById("purchasesTableBody");
      let filtered = database.purchases;
      if (pendingOnly) {
        filtered = database.purchases.filter(p => p.status === "Pending Shipment");
      }

      if (filtered.length === 0) {
        el.innerHTML = `<tr><td colspan="${pendingOnly ? 8 : 7}" class="py-6 text-center text-slate-455 font-bold">No purchase logs.</td></tr>`;
        return;
      }

      el.innerHTML = filtered.map(p => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-2 font-black text-slate-700">${p.id.toUpperCase()}</td>
      <td class="py-3 px-2 font-bold">${p.supplier}</td>
      <td class="py-3 px-2 font-bold">${p.medicine}</td>
      <td class="py-3 px-2 text-center font-bold">${p.qty} Units</td>
      <td class="py-3 px-2 text-right">PKR ${p.cost.toFixed(2)}</td>
      <td class="py-3 px-2 text-right font-black">PKR ${p.total.toFixed(2)}</td>
      <td class="py-3 px-2 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-black ${p.status === 'Received' ? 'bg-green-50 text-success' : 'bg-yellow-50 text-accent'}">
          ${p.status}
        </span>
      </td>
      ${pendingOnly ? `
        <td class="py-3 px-2 text-center">
          <button onclick="receiveShipmentStock('${p.id}')" class="px-2.5 py-1 bg-secondary text-white font-black text-[10px] rounded cursor-pointer">Mark Received</button>
        </td>
      ` : ''}
    </tr>
  `).join("");
    }

    function receiveShipmentStock(id) {
      playSuccessSound();
      const p = database.purchases.find(item => item.id === id);
      if (p) {
        p.status = "Received";
        const med = database.medicines.find(m => m.name === p.medicine);
        if (med) med.quantity += p.qty;

        logActivity("Shipment Received", `${p.medicine} (${p.qty} Units) received from ${p.supplier}.`);
        saveDatabaseToLocalStorage();
        switchView(currentView);
        showToast("Stock Updated", "Success", "Inventory counts increased successfully.");
      }
    }

    function renderCustomersTable() {
      const el = document.getElementById("customersTableBody");
      el.innerHTML = database.customers.map(c => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-2 font-bold text-slate-800 dark:text-slate-100">${c.name}</td>
      <td class="py-3 px-2 text-slate-500 font-bold">${c.phone}</td>
      <td class="py-3 px-2 text-slate-400">${c.address}</td>
      <td class="py-3 px-2 text-center font-black text-secondary">${c.loyaltyPoints} Pts</td>
      <td class="py-3 px-2 text-center">
        <button onclick="deleteCustomer('${c.id}')" class="text-danger hover:underline">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function handleCustomerSubmit(event) {
      event.preventDefault();
      playClickSound();
      const name = document.getElementById("custNewName").value.trim();
      const phone = document.getElementById("custNewPhone").value.trim();
      const address = document.getElementById("custNewAddress").value.trim();

      database.customers.push({
        id: "cust-" + Date.now(),
        name,
        phone,
        address,
        loyaltyPoints: 0,
        balance: 0
      });

      saveDatabaseToLocalStorage();
      renderCustomersTable();
      document.getElementById("custNewName").value = "";
      document.getElementById("custNewPhone").value = "";
      document.getElementById("custNewAddress").value = "";
      showToast("Customer Added", "Success", `${name} profile saved.`);
    }

    function deleteCustomer(id) {
      if (confirm("Delete customer file?")) {
        database.customers = database.customers.filter(item => item.id !== id);
        saveDatabaseToLocalStorage();
        renderCustomersTable();
        showToast("Customer Removed", "Warning", "Customer profile deleted.");
      }
    }

    function renderLoyaltyTable() {
      const el = document.getElementById("loyaltyTableBody");
      el.innerHTML = database.customers.map(c => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold">${c.name}</td>
      <td class="py-3 px-4 text-slate-450">${c.phone}</td>
      <td class="py-3 px-4 text-center font-black text-secondary">${c.loyaltyPoints} Points</td>
      <td class="py-3 px-4 text-center">
        <span class="px-2 py-0.5 rounded font-black text-[10px] ${c.loyaltyPoints >= 300 ? 'bg-yellow-50 text-accent border border-accent/20' : 'bg-slate-50 text-slate-455'}">
          ${c.loyaltyPoints >= 300 ? 'Gold Premium' : 'Regular'}
        </span>
      </td>
    </tr>
  `).join("");
    }

    function renderCreditsTable() {
      const el = document.getElementById("creditsTableBody");
      const debtors = database.customers.filter(c => c.balance > 0);
      if (debtors.length === 0) {
        el.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400 font-bold">No outstanding credits or pending accounts.</td></tr>`;
        return;
      }
      el.innerHTML = debtors.map(c => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold">${c.name}</td>
      <td class="py-3 px-4 text-slate-450">${c.phone}</td>
      <td class="py-3 px-4 text-right font-black text-danger">PKR ${c.balance.toFixed(2)}</td>
      <td class="py-3 px-4 text-center">
        <button onclick="clearCustomerCredit('${c.id}')" class="px-2 py-1 bg-green-50 text-success border border-success/20 rounded font-black text-[10px] cursor-pointer">Clear Debt</button>
      </td>
    </tr>
  `).join("");
    }

    function clearCustomerCredit(id) {
      playSuccessSound();
      const c = database.customers.find(item => item.id === id);
      if (c) {
        c.balance = 0;
        saveDatabaseToLocalStorage();
        renderCreditsTable();
        showToast("Credit Cleared", "Success", "Customer dues have been cleared.");
      }
    }

    function renderSuppliersTable() {
      const el = document.getElementById("suppliersTableBody");
      el.innerHTML = database.suppliers.map(s => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-2 font-bold text-slate-800 dark:text-slate-100">${s.name}</td>
      <td class="py-3 px-2 font-bold text-slate-500">${s.contactPerson}</td>
      <td class="py-3 px-2 font-bold text-slate-450">${s.phone}</td>
      <td class="py-3 px-2 text-slate-400">${s.address}</td>
      <td class="py-3 px-2 text-right font-black text-danger">PKR ${Math.abs(s.balance).toFixed(2)}</td>
      <td class="py-3 px-2 text-center">
        <button onclick="deleteSupplier('${s.id}')" class="text-danger hover:underline">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function handleSupplierSubmit(event) {
      event.preventDefault();
      playClickSound();
      const name = document.getElementById("supNewName").value.trim();
      const person = document.getElementById("supNewPerson").value.trim();
      const phone = document.getElementById("supNewPhone").value.trim();
      const address = document.getElementById("supNewAddress").value.trim();

      database.suppliers.push({
        id: "sup-" + Date.now(),
        name,
        contactPerson: person,
        phone,
        address,
        balance: 0
      });

      saveDatabaseToLocalStorage();
      renderSuppliersTable();
      document.getElementById("supNewName").value = "";
      document.getElementById("supNewPerson").value = "";
      document.getElementById("supNewPhone").value = "";
      document.getElementById("supNewAddress").value = "";
      showToast("Supplier Registered", "Success", `${name} profile saved.`);
    }

    function deleteSupplier(id) {
      if (confirm("Delete supplier profile?")) {
        database.suppliers = database.suppliers.filter(item => item.id !== id);
        saveDatabaseToLocalStorage();
        renderSuppliersTable();
        showToast("Supplier Removed", "Warning", "Supplier profile deleted.");
      }
    }

    function handleSupplierPaymentSubmit(event) {
      event.preventDefault();
      playSuccessSound();
      const name = document.getElementById("paySupplierSelect").value;
      const amount = parseFloat(document.getElementById("payAmount").value);

      const sup = database.suppliers.find(s => s.name === name);
      if (sup) {
        sup.balance = (sup.balance || 0) + amount;
      }

      database.expenses.unshift({
        category: "Purchases",
        description: "Paid out supplier balance to " + name,
        amount,
        date: new Date().toLocaleDateString()
      });

      saveDatabaseToLocalStorage();
      document.getElementById("payAmount").value = "";
      showToast("Payment Processed", "Success", `Paid PKR ${amount.toFixed(0)}.`);
      switchView("supplier-list");
    }

    function renderDoctorsTable() {
      const el = document.getElementById("doctorsTableBody");
      el.innerHTML = database.doctors.map(d => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-2 font-bold text-slate-800 dark:text-slate-100">${d.name}</td>
      <td class="py-3 px-2 font-bold text-slate-500">${d.specialization}</td>
      <td class="py-3 px-2 text-slate-455 font-bold">${d.phone}</td>
      <td class="py-3 px-2 text-right font-black text-secondary">PKR ${d.balance}</td>
      <td class="py-3 px-2 text-center">
        <button onclick="deleteDoctor('${d.id}')" class="text-danger hover:underline">Remove</button>
      </td>
    </tr>
  `).join("");
    }

    function handleDoctorSubmit(event) {
      event.preventDefault();
      playClickSound();
      const name = document.getElementById("docNewName").value.trim();
      const specialization = document.getElementById("docNewSpecial").value.trim();
      const phone = document.getElementById("docNewPhone").value.trim();

      database.doctors.push({
        id: "doc-" + Date.now(),
        name,
        specialization,
        phone,
        balance: 0
      });

      saveDatabaseToLocalStorage();
      renderDoctorsTable();
      document.getElementById("docNewName").value = "";
      document.getElementById("docNewSpecial").value = "";
      document.getElementById("docNewPhone").value = "";
      showToast("Doctor Registered", "Success", `${name} profile saved.`);
    }

    function deleteDoctor(id) {
      if (confirm("Delete doctor profile?")) {
        database.doctors = database.doctors.filter(item => item.id !== id);
        saveDatabaseToLocalStorage();
        renderDoctorsTable();
        showToast("Doctor Removed", "Warning", "Doctor profile deleted.");
      }
    }

    function renderReferralsTable() {
      const el = document.getElementById("referralsTableBody");
      el.innerHTML = database.doctors.map(d => {
        const refCount = database.prescriptions.filter(p => p.doctor === d.name).length;
        return `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-3 px-4 font-bold">${d.name}</td>
        <td class="py-3 px-4 text-slate-500">${d.specialization}</td>
        <td class="py-3 px-4 text-center font-black text-primary">${refCount} Referrals</td>
        <td class="py-3 px-4 text-right font-black text-secondary">PKR ${d.balance}</td>
      </tr>
    `;
      }).join("");
    }

    function renderExpensesTable(incomeOnly = false) {
      const el = document.getElementById("expensesTableBody");
      if (incomeOnly) {
        el.innerHTML = database.sales.map(s => `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-2 font-bold text-slate-800 dark:text-slate-100">Sales Invoice</td>
        <td class="py-2.5 px-2 text-slate-500 font-bold">POS Billing sale invoice ${s.invoiceNumber}</td>
        <td class="py-2.5 px-2 text-right font-black text-success">PKR ${s.total.toFixed(2)}</td>
        <td class="py-2.5 px-2 text-center text-slate-400">${s.createdAt.split(",")[0]}</td>
      </tr>
    `).join("");
      } else {
        el.innerHTML = database.expenses.map(e => `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-2 font-bold text-slate-800 dark:text-slate-100">${e.category}</td>
        <td class="py-2.5 px-2 text-slate-500 font-bold">${e.description}</td>
        <td class="py-2.5 px-2 text-right font-black text-danger">PKR ${e.amount.toFixed(2)}</td>
        <td class="py-2.5 px-2 text-center text-slate-400">${e.date}</td>
      </tr>
    `).join("");
      }
    }

    function handleExpenseSubmit(event) {
      event.preventDefault();
      playClickSound();
      const category = document.getElementById("expCategory").value;
      const description = document.getElementById("expDesc").value;
      const amount = parseFloat(document.getElementById("expAmount").value);

      if (currentView === "income") {
        database.sales.unshift({
          id: "sale-custom-" + Date.now(),
          invoiceNumber: "EXT-" + Math.floor(1000 + Math.random() * 9000),
          customerName: "External Client",
          subTotal: amount,
          taxAmount: 0,
          discount: 0,
          total: amount,
          paymentMethod: "Cash",
          items: [{ name: description, qty: 1, price: amount }],
          createdAt: new Date().toLocaleString()
        });
      } else {
        database.expenses.unshift({
          category,
          description,
          amount,
          date: new Date().toLocaleDateString()
        });
      }

      saveDatabaseToLocalStorage();
      renderExpensesTable(currentView === "income");
      document.getElementById("expDesc").value = "";
      document.getElementById("expAmount").value = "";
      showToast("Record Saved", "Success", "Transaction ledger updated.");
    }

    function calculateProfitLoss() {
      const salesVal = database.sales.reduce((sum, s) => sum + s.total, 0);
      const expensesVal = database.expenses.reduce((sum, e) => sum + e.amount, 0);
      const cogsVal = database.sales.reduce((sum, s) => sum + s.subTotal, 0) * 0.65;
      const grossVal = salesVal - cogsVal;
      const netVal = grossVal - expensesVal;

      document.getElementById("plSalesIncome").textContent = "PKR " + salesVal.toFixed(2);
      document.getElementById("plCogs").textContent = "PKR " + cogsVal.toFixed(2);
      document.getElementById("plGrossMargin").textContent = "PKR " + grossVal.toFixed(2);
      document.getElementById("plExpenses").textContent = "PKR " + expensesVal.toFixed(2);

      const netEl = document.getElementById("plNetIncome");
      netEl.textContent = "PKR " + netVal.toFixed(2);
      netEl.className = netVal >= 0 ? "text-lg font-black text-success" : "text-lg font-black text-danger";
    }

    function exportSystemDatabase() {
      playSuccessSound();
      const str = JSON.stringify(database, null, 2);
      document.getElementById("dbBackupArea").value = str;
      navigator.clipboard.writeText(str).then(() => {
        showToast("Export Complete", "Success", "JSON schema copied to clipboard.");
      });
    }

    function importSystemDatabase() {
      const str = document.getElementById("dbBackupArea").value;
      try {
        const parsed = JSON.parse(str);
        if (parsed.medicines && parsed.settings) {
          playSuccessSound();
          database = parsed;
          saveDatabaseToLocalStorage();
          showToast("Import Successful", "Success", "Local database memory restored.");
          switchView("dashboard");
        } else {
          alert("Invalid database schema configuration structure.");
        }
      } catch (e) {
        alert("Parsing Error. Please paste valid configuration JSON.");
      }
    }

    function renderUsersTable() {
      const el = document.getElementById("usersTableBody");
      const customUsers = JSON.parse(localStorage.getItem("MT_CUSTOM_USERS") || "[]");
      const allUsers = quickProfiles.concat(customUsers);

      el.innerHTML = allUsers.map(u => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold flex items-center gap-2">
        <img src="${u.avatar}" class="w-6 h-6 rounded-full object-cover">
        ${u.name}
      </td>
      <td class="py-3 px-4 text-center font-bold text-slate-450">${u.username}</td>
      <td class="py-3 px-4 text-center font-black text-primary">${u.role}</td>
      <td class="py-3 px-4 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-black bg-green-50 text-success">Active Session</span>
      </td>
    </tr>
  `).join("");
    }

    function renderActivityLogsTable() {
      const el = document.getElementById("activityLogsTableBody");
      el.innerHTML = database.activityLogs.map(a => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-black text-slate-800 dark:text-slate-100">${a.action}</td>
      <td class="py-3 px-4 font-bold text-slate-455">${a.details}</td>
      <td class="py-3 px-4 text-center text-primary font-black">${a.time}</td>
    </tr>
  `).join("");
    }

    function renderBranchesTable() {
      const el = document.getElementById("branchesTableBody");
      el.innerHTML = database.branches.map(b => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold">${b.name}</td>
      <td class="py-3 px-4 text-slate-450 font-bold">${b.address}</td>
      <td class="py-3 px-4 text-slate-500 font-medium">${b.manager}</td>
      <td class="py-3 px-4 text-center font-black"><span class="px-2 py-0.5 rounded bg-green-50 text-success text-[10px]">${b.performance}</span></td>
    </tr>
  `).join("");
    }

    function handleBranchSubmit(event) {
      event.preventDefault();
      playClickSound();
      const name = document.getElementById("brName").value.trim();
      const address = document.getElementById("brAddress").value.trim();
      const manager = document.getElementById("brManager").value.trim();

      database.branches.push({
        id: "br-" + Date.now(),
        name,
        address,
        manager,
        performance: "Active"
      });

      saveDatabaseToLocalStorage();
      renderBranchesTable();
      document.getElementById("brName").value = "";
      document.getElementById("brAddress").value = "";
      document.getElementById("brManager").value = "";
      showToast("Branch Added", "Success", `${name} profile saved.`);
    }

    function renderTransfersTable() {
      const el = document.getElementById("transfersTableBody");
      if (!el) return;
      if (!database.transfers) database.transfers = [];
      el.innerHTML = database.transfers.map(t => `
    <tr class="hover:bg-slate-50 text-xs">
      <td class="py-2.5 px-2 font-bold text-slate-800 dark:text-slate-100">${t.medicine}</td>
      <td class="py-2.5 px-2 text-center font-black">${t.qty} Units</td>
      <td class="py-2.5 px-2 text-slate-500 font-bold">${t.fromBranch}</td>
      <td class="py-2.5 px-2 text-slate-500 font-bold">${t.toBranch}</td>
      <td class="py-2.5 px-2 text-center text-slate-400">${t.date}</td>
      <td class="py-2.5 px-2 text-center">
        <span class="px-2 py-0.5 rounded font-black text-[10px] bg-green-50 text-success border border-success/20">
          ${t.status || 'Completed'}
        </span>
      </td>
    </tr>
  `).join("");
    }

    function handleStockTransferSubmit(event) {
      event.preventDefault();
      playClickSound();
      const medicine = document.getElementById("transMedicineSelect").value;
      const fromBranch = document.getElementById("transFromBranchSelect").value;
      const toBranch = document.getElementById("transToBranchSelect").value;
      const qty = parseInt(document.getElementById("transQty").value);

      if (fromBranch === toBranch) {
        alert("Source and Destination branches cannot be the same.");
        return;
      }

      const med = database.medicines.find(m => m.name === medicine);
      if (med) {
        if (med.quantity < qty) {
          alert("Insufficient stock in source warehouse. Available: " + med.quantity);
          return;
        }
        med.quantity -= qty;
      }

      if (!database.transfers) database.transfers = [];
      database.transfers.unshift({
        id: "trf-" + Date.now(),
        medicine,
        qty,
        fromBranch,
        toBranch,
        date: new Date().toLocaleDateString(),
        status: "Completed"
      });

      saveDatabaseToLocalStorage();
      renderTransfersTable();
      document.getElementById("transQty").value = "";
      showToast("Transfer Registered", "Success", "Stock transferred to " + toBranch);
    }

    function renderAnalyticalReports(viewId) {
      const type = viewId.replace("-reports", "");
      const el = document.getElementById("reportsTableBody");

      let entriesCount = 0;
      let avgVal = 0;
      let maxVal = 0;
      let rowsHtml = "";

      if (type === "sales") {
        entriesCount = database.sales.length;
        const total = database.sales.reduce((sum, s) => sum + s.total, 0);
        avgVal = entriesCount ? total / entriesCount : 0;
        maxVal = database.sales.reduce((max, s) => s.total > max ? s.total : max, 0);

        rowsHtml = database.sales.map(s => `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-2 font-bold">${s.invoiceNumber}</td>
        <td class="py-2.5 px-2 text-center text-slate-400">POS Billing</td>
        <td class="py-2.5 px-2 text-right font-black">PKR ${s.total.toFixed(2)}</td>
        <td class="py-2.5 px-2 text-center text-success">✅ Compliant</td>
      </tr>
    `).join("");
      } else if (type === "inventory") {
        entriesCount = database.medicines.length;
        const total = database.medicines.reduce((sum, m) => sum + (m.price * m.quantity), 0);
        avgVal = entriesCount ? total / entriesCount : 0;
        maxVal = database.medicines.reduce((max, m) => m.price > max ? m.price : max, 0);

        rowsHtml = database.medicines.map(m => `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-2 font-bold">${m.name}</td>
        <td class="py-2.5 px-2 text-center text-slate-400">Stock Count</td>
        <td class="py-2.5 px-2 text-right font-black">${m.quantity} Units</td>
        <td class="py-2.5 px-2 text-center ${m.quantity <= m.minStockAlert ? 'text-danger' : 'text-success'}">${m.quantity <= m.minStockAlert ? '⚠️ Restock Alert' : '✅ Safe'}</td>
      </tr>
    `).join("");
      } else {
        entriesCount = 5;
        avgVal = 120.00;
        maxVal = 500.00;
        rowsHtml = `
      <tr class="hover:bg-slate-50 text-xs">
        <td class="py-2.5 px-2 font-bold">Standard audit logs</td>
        <td class="py-2.5 px-2 text-center text-slate-400">System Logs</td>
        <td class="py-2.5 px-2 text-right font-black">PKR 100.00</td>
        <td class="py-2.5 px-2 text-center text-success">✅ Passed</td>
      </tr>
    `;
      }

      document.getElementById("repEntriesCount").textContent = entriesCount;
      document.getElementById("repAverageVal").textContent = "PKR " + avgVal.toFixed(2);
      document.getElementById("repMaxVal").textContent = "PKR " + maxVal.toFixed(2);
      el.innerHTML = rowsHtml;
    }

    function renderMedicinesTable() {
      const tableBody = document.getElementById("medsTableBody");
      const query = document.getElementById("medSearch") ? document.getElementById("medSearch").value.toLowerCase() : "";
      const filtered = database.medicines.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.genericName.toLowerCase().includes(query) ||
        m.categoryId.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-slate-450 font-bold">No medicines found.</td></tr>`;
        return;
      }

      tableBody.innerHTML = filtered.map(m => `
    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all">
      <td class="py-3.5 px-4 font-extrabold text-slate-800 dark:text-slate-100">${m.name}</td>
      <td class="py-3.5 px-4 text-slate-500 font-bold">${m.genericName}</td>
      <td class="py-3.5 px-4"><span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/70 rounded-lg text-[10px] font-black">${m.categoryId}</span></td>
      <td class="py-3.5 px-4 text-right font-black">PKR ${m.price.toFixed(2)}</td>
      <td class="py-3.5 px-4 text-center font-bold">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-black ${m.quantity <= m.minStockAlert ? 'bg-red-50 dark:bg-red-950/20 text-danger border border-danger/25 animate-pulse' : 'bg-green-50 dark:bg-green-950/20 text-success border border-success/25'}">
          ${m.quantity} ${m.quantity <= m.minStockAlert ? '⚠️' : ''}
        </span>
      </td>
      <td class="py-3.5 px-4 text-center font-black text-slate-500">${m.expiryDate}</td>
      <td class="py-3.5 px-4 text-center">
        <div class="flex items-center justify-center gap-2">
          <button onclick="openEditMedicine('${m.id}')" class="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:hover:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-primary flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-pencil text-xs"></i></button>
          <button onclick="deleteMedicine('${m.id}')" class="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-900 text-danger flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>
      </td>
    </tr>
  `).join("");
    }

    function filterMedicinesTable() {
      renderMedicinesTable();
    }

    function openEditMedicine(medId) {
      const med = database.medicines.find(m => m.id === medId);
      if (!med) return;
      switchView("add-medicine");

      document.getElementById("addMedId").value = med.id;
      document.getElementById("addMedName").value = med.name;
      document.getElementById("addMedGeneric").value = med.genericName;
      document.getElementById("addMedPrice").value = med.price;
      document.getElementById("addMedCost").value = med.costPrice;
      document.getElementById("addMedQty").value = med.quantity;
      document.getElementById("addMedBarcode").value = med.barcode || "";
      document.getElementById("addMedExpiry").value = med.expiryDate;
      document.getElementById("addMedMinAlert").value = med.minStockAlert;
      document.getElementById("addMedCategory").value = med.categoryId;
      document.getElementById("addMedSupplier").value = med.supplierId;

      document.getElementById("addMedSubmitBtn").textContent = database.settings.urduLanguage ? "دوا محفوظ کریں" : "Update Medicine";
      document.getElementById("addMedFormTitle").textContent = database.settings.urduLanguage ? "دوا کی معلومات تبدیل کریں" : "Edit Medicine Details";
    }

    function deleteMedicine(medId) {
      if (confirm(database.settings.urduLanguage ? "کیا آپ واقعی یہ دوا حذف کرنا چاہتے ہیں؟" : "Are you sure you want to delete this medicine?")) {
        database.medicines = database.medicines.filter(m => m.id !== medId);
        saveDatabaseToLocalStorage();
        logActivity("Medicine Deleted", `Medicine ID ${medId} deleted.`);
        renderMedicinesTable();
        showToast("Deleted", "Warning", "Product record removed from inventory.");
      }
    }

    function handleMedFormSubmit(event) {
      event.preventDefault();
      const id = document.getElementById("addMedId").value;
      const name = document.getElementById("addMedName").value;
      const genericName = document.getElementById("addMedGeneric").value;
      const price = parseFloat(document.getElementById("addMedPrice").value);
      const costPrice = parseFloat(document.getElementById("addMedCost").value);
      const quantity = parseInt(document.getElementById("addMedQty").value);
      const categoryId = document.getElementById("addMedCategory").value;
      const supplierId = document.getElementById("addMedSupplier").value;
      const barcode = document.getElementById("addMedBarcode").value || ("BC-" + Date.now());
      const expiryDate = document.getElementById("addMedExpiry").value;
      const minStockAlert = parseInt(document.getElementById("addMedMinAlert").value);

      if (id) {
        const idx = database.medicines.findIndex(m => m.id === id);
        if (idx !== -1) {
          database.medicines[idx] = { id, name, genericName, price, costPrice, quantity, categoryId, supplierId, barcode, expiryDate, minStockAlert };
          logActivity("Medicine Updated", `${name} information updated.`);
          showToast("Updated", "Success", `${name} record details saved.`);
        }
      } else {
        const newId = (database.medicines.length + 1).toString();
        database.medicines.push({ id: newId, name, genericName, price, costPrice, quantity, categoryId, supplierId, barcode, expiryDate, minStockAlert });
        logActivity("Medicine Created", `${name} added to catalog.`);
        showToast("Added", "Success", `${name} added successfully.`);
      }

      saveDatabaseToLocalStorage();
      switchView("all-medicines");
    }

    function renderPOSCatalog() {
      const grid = document.getElementById("posCatalogGrid");
      const query = document.getElementById("posSearch") ? document.getElementById("posSearch").value.toLowerCase() : "";
      const cat = document.getElementById("posCategoryFilter") ? document.getElementById("posCategoryFilter").value : "All";

      const filtered = database.medicines.filter(m => {
        const matchQuery = m.name.toLowerCase().includes(query) ||
          m.genericName.toLowerCase().includes(query) ||
          (m.barcode && m.barcode.includes(query));
        const matchCategory = cat === "All" || m.categoryId === cat;
        return matchQuery && matchCategory;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-455 font-bold">No matching products.</td></tr>`;
        return;
      }

      grid.innerHTML = filtered.map(m => `
    <tr onclick="addToCart('${m.id}')" class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all cursor-pointer border-b border-slate-100 dark:border-slate-800/50 group text-xs">
      <td class="py-3 px-4 font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-all">${m.name}</td>
      <td class="py-3 px-4 text-slate-500 font-bold">${m.genericName}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/70 rounded text-[10px] font-black">${m.categoryId}</span></td>
      <td class="py-3 px-4 text-right font-black text-secondary">PKR ${m.price.toFixed(2)}</td>
      <td class="py-3 px-4 text-center font-bold">
        <span class="px-2 py-0.5 rounded text-[10px] font-black ${m.quantity <= m.minStockAlert ? 'bg-red-50 dark:bg-red-950/20 text-danger border border-danger/25 animate-pulse' : 'bg-green-50 dark:bg-green-950/20 text-success border border-success/25'}">
          ${m.quantity} ${m.quantity <= m.minStockAlert ? '⚠️' : ''}
        </span>
      </td>
      <td class="py-3 px-4 text-center">
        <button class="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg shadow hover:bg-primary-dark transition-all">
          <i class="fa-solid fa-cart-plus mr-1"></i> Add
        </button>
      </td>
    </tr>
  `).join("");
    }

    function filterPOSCatalog() {
      renderPOSCatalog();
    }

    function addToCart(medId) {
      playClickSound();
      const med = database.medicines.find(m => m.id === medId);
      if (!med) return;

      if (med.quantity <= 0) {
        showToast("Out of Stock", "Warning", "This medicine is sold out.");
        return;
      }

      const exist = posCart.find(item => item.id === medId);
      if (exist) {
        if (exist.qty >= med.quantity) {
          showToast("Limit Exceeded", "Warning", "Available stock limit reached.");
          return;
        }
        exist.qty++;
      } else {
        posCart.push({ id: med.id, name: med.name, price: med.price, qty: 1, maxQty: med.quantity });
      }

      renderPOSCart();
    }

    function updateCartQty(medId, delta) {
      playClickSound();
      const item = posCart.find(i => i.id === medId);
      if (!item) return;

      item.qty += delta;
      if (item.qty <= 0) {
        posCart = posCart.filter(i => i.id !== medId);
      } else if (item.qty > item.maxQty) {
        item.qty = item.maxQty;
        showToast("Limit Exceeded", "Warning", "Available stock limit reached.");
      }

      renderPOSCart();
    }

    function renderPOSCart() {
      const cartBody = document.getElementById("posCartBody");
      if (posCart.length === 0) {
        cartBody.innerHTML = `<tr><td colspan="3" class="py-12 text-center text-slate-455 font-bold">Cart is empty. Select catalog items.</td></tr>`;
        calculatePOSCart();
        return;
      }

      cartBody.innerHTML = posCart.map(item => `
    <tr class="border-b border-slate-50 dark:border-slate-800">
      <td class="py-2.5 font-bold text-slate-800 dark:text-slate-200">
        ${item.name}
        <span class="block text-[9px] text-slate-400 font-medium">PKR ${item.price.toFixed(2)}</span>
      </td>
      <td class="py-2.5 text-center">
        <div class="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-0.5">
          <button onclick="updateCartQty('${item.id}', -1)" class="w-5 h-5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-[10px] font-black text-slate-500 cursor-pointer">-</button>
          <span class="w-4 text-center text-[10px] font-black text-slate-800 dark:text-slate-200">${item.qty}</span>
          <button onclick="updateCartQty('${item.id}', 1)" class="w-5 h-5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-[10px] font-black text-slate-500 cursor-pointer">+</button>
        </div>
      </td>
      <td class="py-2.5 text-right font-black text-slate-800 dark:text-slate-100">PKR ${(item.price * item.qty).toFixed(0)}</td>
    </tr>
  `).join("");

      calculatePOSCart();
    }

    function calculatePOSCart() {
      const subtotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const discPercent = parseFloat(document.getElementById("posDiscount") ? document.getElementById("posDiscount").value : 0) || 0;
      const discount = subtotal * (discPercent / 100);
      const taxRate = database.settings.taxPercent || 5;
      const tax = (subtotal - discount) * (taxRate / 100);
      const grandTotal = (subtotal - discount) + tax;

      if (document.getElementById("posSubtotal")) {
        document.getElementById("posSubtotal").textContent = "PKR " + subtotal.toFixed(2);
        document.getElementById("posTax").textContent = "PKR " + tax.toFixed(2);
        document.getElementById("posGrandTotal").textContent = "PKR " + grandTotal.toFixed(2);
      }
    }

    function checkoutPOS() {
      if (posCart.length === 0) {
        showToast("Checkout Empty", "Warning", "Select catalog items to process sale.");
        return;
      }

      playSuccessSound();

      const subtotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const discPercent = parseFloat(document.getElementById("posDiscount").value) || 0;
      const discount = subtotal * (discPercent / 100);
      const taxRate = database.settings.taxPercent || 5;
      const tax = (subtotal - discount) * (taxRate / 100);
      const grandTotal = (subtotal - discount) + tax;
      const customer = document.getElementById("posCustomerSelect").value;
      const invNum = "INV-" + Math.floor(1000 + Math.random() * 9000);

      database.sales.unshift({
        id: "sale-" + Date.now(),
        invoiceNumber: invNum,
        customerName: customer,
        subTotal: subtotal,
        taxAmount: tax,
        discount: discount,
        total: grandTotal,
        paymentMethod: "Cash",
        items: posCart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
        createdAt: new Date().toLocaleString()
      });

      posCart.forEach(item => {
        const med = database.medicines.find(m => m.id === item.id);
        if (med) {
          med.quantity -= item.qty;
        }
      });

      saveDatabaseToLocalStorage();
      logActivity("Sales Invoice Created", `${invNum} completed. Total PKR ${grandTotal.toFixed(0)}.`);

      document.getElementById("invoiceReceiptNum").textContent = invNum;
      document.getElementById("invoiceReceiptDate").textContent = new Date().toLocaleString();
      document.getElementById("invoiceReceiptCashier").textContent = activeUser ? activeUser.name : "Musa Admin";
      document.getElementById("invoiceReceiptCustomer").textContent = customer;

      document.getElementById("invoiceReceiptItemsBody").innerHTML = posCart.map(item => `
    <tr class="border-b border-slate-100 dark:border-slate-800">
      <td class="py-1.5 text-left">${item.name}</td>
      <td class="py-1.5 text-center">${item.qty}</td>
      <td class="py-1.5 text-right">PKR ${item.price.toFixed(2)}</td>
      <td class="py-1.5 text-right">PKR ${(item.price * item.qty).toFixed(2)}</td>
    </tr>
  `).join("");

      document.getElementById("invoiceReceiptSubtotal").textContent = "PKR " + subtotal.toFixed(2);
      document.getElementById("invoiceReceiptDiscount").textContent = "-PKR " + discount.toFixed(2);
      document.getElementById("invoiceReceiptTax").textContent = "PKR " + tax.toFixed(2);
      document.getElementById("invoiceReceiptGrandTotal").textContent = "PKR " + grandTotal.toFixed(2);

      document.getElementById("invoiceModal").classList.remove("hidden");

      posCart = [];
      renderPOSCart();
      renderPOSCatalog();
      showToast("Transaction Successful", "Success", `${invNum} saved successfully.`);
    }

    function closeInvoiceModal() {
      document.getElementById("invoiceModal").classList.add("hidden");
    }

    function printInvoice() {
      window.print();
    }

    function renderInvoicesTable() {
      const tableBody = document.getElementById("invoicesTableBody");
      if (database.sales.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-slate-455 font-bold">No sales records found.</td></tr>`;
        return;
      }

      tableBody.innerHTML = database.sales.map(sale => `
    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all text-xs">
      <td class="py-3 px-4 font-extrabold text-primary dark:text-primary-light">${sale.invoiceNumber}</td>
      <td class="py-3 px-4 text-slate-700 dark:text-slate-300 font-bold">${sale.customerName}</td>
      <td class="py-3 px-4 text-center font-bold">PKR ${sale.subTotal.toFixed(2)}</td>
      <td class="py-3 px-4 text-center text-danger font-bold">-PKR ${sale.discount.toFixed(2)}</td>
      <td class="py-3 px-4 text-center font-black">PKR ${sale.total.toFixed(2)}</td>
      <td class="py-3 px-4 text-center text-slate-400 font-bold">${sale.createdAt}</td>
      <td class="py-3 px-4 text-center">
        <button onclick="reopenReceipt('${sale.invoiceNumber}')" class="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-650 dark:text-slate-350 flex items-center justify-center transition-all mx-auto cursor-pointer"><i class="fa-solid fa-file-invoice"></i></button>
      </td>
    </tr>
  `).join("");
    }

    function reopenReceipt(invoiceNum) {
      const sale = database.sales.find(s => s.invoiceNumber === invoiceNum);
      if (!sale) return;

      document.getElementById("invoiceReceiptNum").textContent = sale.invoiceNumber;
      document.getElementById("invoiceReceiptDate").textContent = sale.createdAt;
      document.getElementById("invoiceReceiptCashier").textContent = activeUser ? activeUser.name : "Musa Admin";
      document.getElementById("invoiceReceiptCustomer").textContent = sale.customerName;

      document.getElementById("invoiceReceiptItemsBody").innerHTML = sale.items.map(item => `
    <tr class="border-b border-slate-100 dark:border-slate-800">
      <td class="py-1.5 text-left">${item.name}</td>
      <td class="py-1.5 text-center">${item.qty}</td>
      <td class="py-1.5 text-right">PKR ${item.price.toFixed(2)}</td>
      <td class="py-1.5 text-right">PKR ${(item.price * item.qty).toFixed(2)}</td>
    </tr>
  `).join("");

      document.getElementById("invoiceReceiptSubtotal").textContent = "PKR " + sale.subTotal.toFixed(2);
      document.getElementById("invoiceReceiptDiscount").textContent = "-PKR " + sale.discount.toFixed(2);
      document.getElementById("invoiceReceiptTax").textContent = "PKR " + sale.taxAmount.toFixed(2);
      document.getElementById("invoiceReceiptGrandTotal").textContent = "PKR " + sale.total.toFixed(2);

      document.getElementById("invoiceModal").classList.remove("hidden");
    }

    function toggle2FAPreference() {
      database.settings.twoFactorEnabled = document.getElementById("toggleTwoFactor").checked;
      saveDatabaseToLocalStorage();
      showToast("Security Updated", "Success", "Two-Factor Authentication policy saved.");
    }

  </script>
</body>

</html>
