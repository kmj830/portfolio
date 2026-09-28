/**
 * MinJung Kim Portfolio Application Logic
 * Minimalist Clean White Architecture & Responsive Dual-Layout
 */

// Helper: Format Markdown bold (**text**) to HTML <strong>
function formatRichText(text) {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

const PROJECTS_DATA = [
  {
    id: "nomad",
    name: "NOMAD (노마드)",
    subtitle: "스마트 공항 면세점 체크인 및 항공 여정 연동 럭셔리 트래블 플랫폼 백엔드",
    categories: ["backend", "ai"],
    status: "중앙해커톤 출품작",
    statusType: "hackathon",
    affiliation: "중앙해커톤 출품 프로젝트",
    period: "2026.08",
    role: "Spring Boot 백엔드 코어 설계, 비행 여정 OCR 파이프라인 및 매장 직원 태블릿 구축",
    metrics: [
      { label: "실시간 통신", value: "SSE (Server-Sent Events)" },
      { label: "문서 파싱", value: "Vision OCR" },
      { label: "인프라", value: "Docker / Render" },
      { label: "API 표준", value: "OpenAPI 3.0" }
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "SSE",
      "Vision OCR",
      "Docker",
      "Render",
      "Tailwind CSS"
    ],
    images: {
      swagger: "assets/images/projects/nomad-swagger.png",
      ui: "assets/images/projects/nomad-staff-ui.png",
      swaggerCaption: "NOMAD Swagger REST API 명세",
      uiCaption: "인천공항 T1 면세 부티크 매장 직원 태블릿 관제 UI"
    },
    overview: "항공 탑승권 Vision OCR 스캔으로 비행 여정(PNR)을 자동 등록하고, 인천공항 면세점 현장 도착 시 매장 직원 태블릿으로 실시간 알림(SSE)을 전송하는 스마트 트래블 큐레이션 백엔드입니다. 현지 기후 데이터 분석 기반 패션 큐레이션과 면세 결제/마일리지 파이프라인을 구축했습니다.",
    architecture: `[여행객 클라이언트]
  ├── 항공 탑승권(보딩패스) 이미지 업로드
  └── Vision OCR 텍스트 추출 ──> PNR & 비행 여정 자동 등록
         │
         ▼
[NOMAD Core Backend (Spring Boot)]
  ├── JourneyService: 목적지 기후/날씨 데이터 연동 패션 큐레이션
  ├── StoreService: 공항 면세점 도착 감지 및 SSE(Server-Sent Events) 브로드캐스트
  ├── OrderService: 면세품 Fast Checkout 및 마일리지 적립 처리
  └── Swagger OpenAPI 3.0 명세 제공
         │ (SSE 실시간 이벤트)
         ▼
[면세 부티크 매장 직원 태블릿 (Staff Web UI)]
  ├── VIP 고객 체크인 실시간 알림 피드
  └── 사전 요청 피팅 의상 준비 및 룸 배정 관제`,
    troubleshooting: [
      {
        problem: "공항 면세점 현장의 네트워크 순단 환경에서 실시간 체크인 알림 누락 위험",
        solution: "단방향 경량 실시간 통신인 SSE(Server-Sent Events)를 도입하고, 재연결 자동 재시도 로직 및 DataInitializer 멱등성을 확보하여 현장 네트워크 지연 상황에서도 안정적인 수신 환경을 구축했습니다."
      },
      {
        problem: "외부 비행 여정 데이터 및 다국어 상품 DTO 처리 시 객체 매핑 복잡도 증가",
        solution: "공항 픽업 가능 일정 자동 계산 알고리즘과 전용 DTO 계층을 분리하고, 예외 처리를 GlobalExceptionHandler로 일원화하여 API 응답 일관성을 확보했습니다."
      }
    ],
    links: [
      { label: "Backend GitHub", url: "https://github.com/kmj830/nomad" },
      { label: "Staff Tablet UI GitHub", url: "https://github.com/kmj830/nomad/tree/main/src/main/resources/static/staff" }
    ]
  },
  {
    id: "dogmate",
    name: "DogMate (멍메이트)",
    subtitle: "반려동물 분리불안 완화 및 이상행동 원격 케어 IoT 솔루션",
    categories: ["backend", "iot", "ai"],
    status: "진행 중",
    statusType: "progress",
    affiliation: "국립금오공과대학교 IoT 기초설계 (담당: 손기봉 교수님)",
    period: "2026.09 - 진행 중",
    role: "하드웨어 센서/액추에이터 제어, 클라우드 연동 및 시스템 아키텍처 설계",
    metrics: [
      { label: "텔레메트리 주기", value: "3s 주기 전송" },
      { label: "센서 오차 보정", value: "Median Filter" },
      { label: "음향 분석 AI", value: "YAMNet (Edge AI)" },
      { label: "클라우드 인프라", value: "Google Cloud Run" }
    ],
    techStack: [
      "Raspberry Pi",
      "GrovePi+",
      "Python",
      "Flask",
      "YAMNet",
      "Google Cloud Run",
      "SwiftUI"
    ],
    images: {
      swagger: "assets/images/projects/dogmate-swagger.png",
      ui: "assets/images/projects/dogmate-ui.png",
      swaggerCaption: "멍메이트 IoT Cloud API 1.0.0 Swagger",
      uiCaption: "DogMate iOS 클라이언트 (SwiftUI 기반 분리불안 감지 및 실시간 원격 제어 앱)"
    },
    overview: "반려견의 짖음과 분리불안 음향을 라즈베리파이 엣지 환경에서 YAMNet 딥러닝 모델로 실시간 분석하고, 온습도·조도·초음파 센서 데이터를 3초 주기로 Google Cloud Run 백엔드에 전송합니다. 견주는 iOS SwiftUI 네이티브 앱을 통해 실시간 환경을 확인하고 원격으로 간식 디스펜서를 제어하거나 안정 음성을 전달합니다.",
    architecture: `[라즈베리파이 3B+ (Edge AI)]
  ├── 마이크 입력 ──> YAMNet 음향 분류 (이상 짖음 감지)
  ├── 온습도(DHT11) / 조도 / 거리 센서 3초 주기 수집
  └── 메디안 필터(Median Filter) 노이즈 제거
         │ (HTTP REST / 3s 주기)
         ▼
[Google Cloud Run (백엔드 API)]
  ├── Flask 기반 RESTful API & Swagger OpenAPI 명세
  └── 텔레메트리 히스토리 및 이상행동 이벤트 영속화
         │
         ▼
[iOS Client (SwiftUI)]
  ├── 실시간 센서 대시보드 (온도·습도·조도 차트)
  ├── 원격 간식 디스펜서(서보모터) 및 부저 액추에이터 제어
  └── 견주 음성 녹음 전송 기능`,
    troubleshooting: [
      {
        problem: "초음파 센서 거리 측정 시 노이즈 및 간헐적 0/NaN 튐 현상",
        solution: "하드웨어단에서 메디안 필터(5개 샘플 윈도우) 알고리즘을 구현하여 이상치를 제거하고, 백엔드 API 쿼리단에서 결측치 및 NaN 방어 필터링 로직을 구축하여 텔레메트리 데이터 무결성을 확보했습니다."
      },
      {
        problem: "프론트엔드-백엔드 간 크로스 플랫폼 연동 시 통신 규격 충돌",
        solution: "언어/프레임워크에 종속되지 않는 프론트엔드 공식 핸드오프 패키지(docs/for_frontend)를 설계하고, 전 엔드포인트 CORS 허용 및 OpenAPI 3.0 Swagger 스키마를 정립하여 Swift 클라이언트와의 무마찰 연동을 달성했습니다."
      }
    ],
    links: [
      { label: "Hardware & Backend GitHub", url: "https://github.com/kmj830/IoT" },
      { label: "SwiftUI iOS Front GitHub", url: "https://github.com/kmj830/IoT-front" }
    ]
  },
  {
    id: "smoking-area",
    name: "Smoking Area (스모킹 에리어)",
    subtitle: "위치 기반 공공데이터 흡연구역 지도 및 시민 제보 플랫폼",
    categories: ["backend"],
    status: "해커톤 출품작",
    statusType: "hackathon",
    affiliation: "해커톤 대회 출품 프로젝트",
    period: "2026.07",
    role: "백엔드 전체 아키텍처, 지오코딩 반경 검색 알고리즘 및 카카오 OAuth2 인증 구현",
    metrics: [
      { label: "거리 계산", value: "Haversine Geocoding" },
      { label: "소셜 인증", value: "Kakao OAuth2" },
      { label: "배포 플랫폼", value: "Docker / Render" },
      { label: "문서화", value: "Swagger OpenAPI 3" }
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Kakao OAuth2",
      "Geocoding",
      "Docker",
      "Render",
      "Swagger UI"
    ],
    images: {
      swagger: "assets/images/projects/smoking-area-swagger.png",
      ui: "assets/images/projects/smoking-area-ui.png",
      swaggerCaption: "Smoking Area Backend REST API Swagger",
      uiCaption: "여기흡연 모바일 웹 클라이언트 (Google Maps 연동 및 실시간 흡연구역 탐색)"
    },
    overview: "길거리 간접흡연 피해를 방지하고 흡연자의 편의를 돕는 위치 기반 흡연구역 지도 서비스입니다. 공공데이터를 연계해 위/경도 기반 반경 검색(Haversine)을 제공하며, 시민이 새로운 흡연구역을 사진과 함께 제보하고 관리자가 검수·승인하는 참여형 제보 파이프라인을 구축했습니다.",
    architecture: `[클라이언트 (Web / Mobile)]
  ├── 카카오 소셜 로그인 (OAuth2)
  ├── 사용자 현재 위치(GPS 위·경도) 획득
  └── 주변 흡연구역 지도 렌더링 & 북마크
         │ (RESTful API / JSON)
         ▼
[Spring Boot 백엔드 (Render / Docker)]
  ├── GeocodingService: Haversine 공식을 활용한 반경(500m/1km) 필터링
  ├── SmokingAreaService: 공공데이터 흡연구역 목록 조회 및 북마크 영속화
  ├── ReportService: 사용자 사진 업로드 및 현장 제보 접수
  ├── AdminReportController: 관리자 전용 제보 승인/반려 워크플로우
  └── Swagger OpenAPI 3.0 대화형 문서 제공`,
    troubleshooting: [
      {
        problem: "Render 클라우드 무료 티어 인스턴스의 메모리 한계로 인한 빌드/기동 시 OOM 발생",
        solution: "JVM 힙 메모리 옵션을 최적화하고, 발표 및 시연 시 오류 발생에 대비해 `.env.local` 기반 원클릭 로컬 런타임 전환 스크립트(`scripts/run-local.sh`) 및 ngrok 터널링 파이프라인을 구축하여 가용성을 보장했습니다."
      },
      {
        problem: "사용자 제보 사진 처리 및 관리자 권한 분리 보안 취약점",
        solution: "카카오 회원 ID와 시스템 내부 고유 User ID 매핑을 엄격히 분리하고, Role 기반 접근 제어(RBAC) 인터셉터를 적용하여 일반 사용자의 관리자 엔드포인트 무단 접근을 원천 차단했습니다."
      }
    ],
    links: [
      { label: "Backend Repository", url: "https://github.com/kmj830/smoking-area-backend" },
      { label: "Frontend Repository (KimGyuR)", url: "https://github.com/KimGyuR/Smoking-Searching-App" }
    ]
  },
  {
    id: "findbook",
    name: "FindBook (파인드북)",
    subtitle: "초고속 인메모리 캐싱 & 웹 브라우저 카메라 바코드 스캔 도서관 장서 점검 솔루션",
    categories: ["backend"],
    status: "현장 실무 직접 도입",
    statusType: "production",
    affiliation: "도서관 현장 실무 도입 프로젝트",
    period: "2026.08",
    role: "백엔드 전체 개발, Supabase PostgreSQL 연동 및 인메모리 캐시 성능 최적화",
    metrics: [
      { label: "실무 적용", value: "도서관 현장 운영 도입" },
      { label: "스캔 방식", value: "HTML5 Camera Barcode" },
      { label: "데이터베이스", value: "Supabase PostgreSQL" },
      { label: "캐싱 계층", value: "In-Memory Hot Cache" }
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Supabase",
      "In-Memory Cache",
      "HTML5 Scanner",
      "Render"
    ],
    images: {
      swagger: "assets/images/projects/findbook-swagger.png",
      ui: "assets/images/projects/findbook-ui.png",
      swaggerCaption: "FindBook REST API Swagger 명세",
      uiCaption: "실제 현장에서 사용한 서가 이웃도서 탐색기 & 카메라 바코드 스캐너 UI"
    },
    overview: "도서관 현장의 대규모 장서 점검 업무를 개선하기 위해 개발되어 **실제 현장에서 직접 도입·사용된** 솔루션입니다. 전용 바코드 스캐너 없이 스마트폰/노트북 웹 브라우저 카메라로 바코드를 즉각 인식하고, 서가 미배치 및 분실 도서를 실시간으로 대조하여 점검 결과 엑셀 보고서를 자동 생성합니다.",
    architecture: `[현장 작업자 웹 브라우저]
  ├── 웹캠/스마트폰 카메라를 통한 실시간 바코드 스캔
  ├── 찾아야 하는 책 목록 실시간 일치 여부 피드백 (음향/진동)
  └── 점검 결과 엑셀 리포트 자동 다운로드
         │
         ▼
[Spring Boot 백엔드]
  ├── BookApiController & BookViewController
  ├── 2.5초 주기 인메모리 캐싱 계층 (In-Memory Hot Cache)
  │    └── 대규모 스캔 반복 요청 시 DB 부하 제거
  └── Supabase IPv4 Connection Pooler (Singapore Region)
         │
         ▼
[PostgreSQL Database (Supabase Cloud)]
  └── 서가 도서 마스터 및 장서 점검 히스토리 보관`,
    troubleshooting: [
      {
        problem: "원격지(싱가포르) Supabase DB 연결 시 네트워크 레이턴시로 인한 도서 조회 딜레이 발생",
        solution: "IPv4 Connection Pooler 주소를 적용해 커넥션 오버헤드를 줄이고, 2.5초 유효 기간의 인메모리 캐싱 레이어를 도서 조회 서비스에 배치하여 연속 스캔 요청의 지연 시간을 획기적으로 단축했습니다."
      },
      {
        problem: "도서관 서지 정보 내 특수문자 및 따옴표로 인한 자바스크립트 렌더링 오류",
        solution: "Thymeleaf 및 클라이언트 템플릿의 HTML 이스케이프 정책을 전면 강화하고, 데이터 전송 DTO의 유효성 검증을 정밀화하여 스캔 중 렌더링 크래시 현상을 완전히 해소했습니다."
      }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kmj830/findbook" }
    ]
  },
  {
    id: "workguard",
    name: "WorkGuard (워크가드)",
    subtitle: "Spring AI & Google Gemini 기반 산업 안전 관리 어시스턴트 API",
    categories: ["backend", "ai"],
    status: "진행 중",
    statusType: "progress",
    hasUiTab: false,
    affiliation: "개인 프로젝트",
    period: "2026.08 - 진행 중",
    role: "Spring AI 기반 LLM 오케스트레이션, Google Cloud GCP 연동 및 API 아키텍처 설계",
    metrics: [
      { label: "최신 런타임", value: "Java 25 (Loom)" },
      { label: "AI 프레임워크", value: "Spring AI 2.0" },
      { label: "LLM 엔진", value: "Google Gemini Flash" },
      { label: "클라우드", value: "Google Cloud GCP" }
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "Google Cloud GCP",
      "Google Gemini",
      "Swagger UI"
    ],
    images: {
      swagger: "assets/images/projects/workguard-swagger.png",
      ui: "assets/images/projects/workguard-swagger.png",
      swaggerCaption: "WorkGuard Spring AI & Google Gemini 질의응답 Swagger 명세",
      uiCaption: "WorkGuard Spring AI & Google Gemini 질의응답 Swagger 명세"
    },
    overview: "산업 현장에서 근로자와 안전 관리자가 안전 수칙 및 규정을 실시간으로 질의하고 작업 위험도를 사전 평가할 수 있는 스마트 안전 관리 API입니다. Java와 Spring Boot, Spring AI 및 Google Gemini Flash 모델을 도입하여 초저지연 AI 응답 파이프라인을 구축하고 있습니다.",
    architecture: `[산업 현장 작업자 / 관리자 시스템]
  └── 안전 규정 질의 및 작업 환경 텍스트/상황 입력
         │
         ▼
[WorkGuard API (Spring Boot)]
  ├── SwaggerRedirectController: /api 및 /docs의 Swagger UI 자동 리다이렉트
  ├── AiController: 프롬프트 파라미터 유효성 검증 및 전처리
  └── Spring AI ChatClient: Google Cloud GCP 인증 파이프라인
         │
         ▼
[Google Gemini Flash Engine]
  ├── 산업안전보건법 및 작업 환경 안전 수칙 분석
  └── 맞춤형 안전 체크리스트 및 위험도 평가 결과 JSON 스트리밍`,
    troubleshooting: [
      {
        problem: "HTTPS 환경 배포 시 Swagger UI 서버 베이스 URL이 HTTP로 바인딩되어 Mixed Content 경고 발생",
        solution: "OpenAPI 서버 설정을 프로토콜 독립적인 상대 경로(Relative Base URL)로 동적 구성하여 HTTPS 프록시 환경에서도 브라우저 보안 경고 없이 원활히 Swagger 대화형 테스트가 가능하도록 수정했습니다."
      },
      {
        problem: "급변하는 생성형 AI 모델 버전 변경에 따른 Spring AI 바인딩 호환성 문제",
        solution: "Gemini Flash 모델 변경 시 유연하게 대응할 수 있도록 환경 변수 및 모델 파라미터를 외부화하고, Spring AI 모델 인터페이스 계층을 추상화하여 모델 교체 비용을 최소화했습니다."
      }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kmj830/workguard-api" }
    ]
  }
];

// Technical Skills Data Matrix (Clean 4 Categories)
const SKILLS_DATA = [
  {
    category: "프론트엔드 (Frontend)",
    skills: [
      { name: "Swift / SwiftUI", level: "iOS Native App", highlight: true },
      { name: "HTML / CSS / JavaScript", level: "Web Standards", highlight: true },
      { name: "Tailwind CSS", level: "Modern Utility" },
      { name: "Thymeleaf", level: "SSR Template" }
    ]
  },
  {
    category: "백엔드 (Backend)",
    skills: [
      { name: "Java", level: "Core Language", highlight: true },
      { name: "Spring Boot", level: "RESTful Framework", highlight: true },
      { name: "Spring Data JPA", level: "ORM / Hibernate", highlight: true },
      { name: "Spring Security", level: "JWT Authentication" },
      { name: "Python (Flask)", level: "IoT Server" },
      { name: "RESTful API", level: "OpenAPI 3.0 Standard" }
    ]
  },
  {
    category: "DB & 클라우드 (DB & Cloud)",
    skills: [
      { name: "PostgreSQL", level: "Relational Database", highlight: true },
      { name: "Supabase", level: "Cloud Database" },
      { name: "Google Cloud Run", level: "Serverless Container", highlight: true },
      { name: "Docker", level: "Containerization" },
      { name: "Render", level: "Cloud Hosting" },
      { name: "Git / GitHub", level: "Version Control & Actions" }
    ]
  },
  {
    category: "AI (Artificial Intelligence)",
    skills: [
      { name: "Google Gemini", level: "LLM Orchestration", highlight: true },
      { name: "Spring AI", level: "AI Framework", highlight: true },
      { name: "OpenAI API", level: "DALL-E / GPT" },
      { name: "YAMNet", level: "Edge Audio Classification", highlight: true },
      { name: "Vision OCR", level: "Document Parsing" }
    ]
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  renderSkills();
  initEventListeners();
});

// Render Projects Grid
function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.categories.includes(filterCategory));

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-project-id="${p.id}">
      <div class="project-card-header">
        <div class="status-chip ${p.statusType}">
          <span class="status-dot"></span>
          ${p.status}
        </div>
        <span class="project-period">${p.period}</span>
      </div>

      <!-- Preview Image Showcase with View Toggle -->
      <div class="project-preview-box">
        ${p.hasUiTab === false ? `
          <div class="preview-tabs single-tab">
            <span class="preview-tab-single">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              스웨거 REST API 명세
            </span>
          </div>
          <div class="preview-frame">
            <img id="preview-img-${p.id}" src="${p.images.swagger}" alt="${p.name} 스웨거 명세" loading="lazy" />
            <span id="preview-caption-${p.id}" class="preview-caption">${p.images.swaggerCaption}</span>
          </div>
        ` : `
          <div class="preview-tabs">
            <button type="button" class="preview-tab-btn active" onclick="switchPreview('${p.id}', 'ui', this)">
              <span>구동 화면</span>
            </button>
            <button type="button" class="preview-tab-btn" onclick="switchPreview('${p.id}', 'swagger', this)">
              <span>스웨거 API</span>
            </button>
          </div>
          <div class="preview-frame">
            <img id="preview-img-${p.id}" src="${p.images.ui}" alt="${p.name} 구동 화면" loading="lazy" />
            <span id="preview-caption-${p.id}" class="preview-caption">${p.images.uiCaption}</span>
          </div>
        `}
      </div>

      <div class="project-body">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <p class="project-overview-short">${formatRichText(p.overview)}</p>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="metrics-grid">
        ${p.metrics.map(m => `
          <div class="metric-item">
            <span class="metric-label">${m.label}</span>
            <span class="metric-value">${m.value}</span>
          </div>
        `).join("")}
      </div>

      <!-- Tech Stack Badges (Clean No-Version) -->
      <div class="tech-pills">
        ${p.techStack.slice(0, 6).map(t => `<span class="tech-pill">${t}</span>`).join("")}
        ${p.techStack.length > 6 ? `<span class="tech-pill more">+${p.techStack.length - 6}</span>` : ""}
      </div>

      <!-- Footer CTA Buttons -->
      <div class="project-card-footer">
        <button type="button" class="btn-detail" onclick="openProjectModal('${p.id}')">
          <span>상세 아키텍처 & 트러블슈팅</span>
          <svg class="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        ${p.links[0] ? `
          <a href="${p.links[0].url}" target="_blank" rel="noopener noreferrer" class="btn-github" title="GitHub 소스코드">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");
}

// Switch Image in Project Card
function switchPreview(projectId, type, btnElement) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const card = btnElement.closest(".project-card");
  const tabBtns = card.querySelectorAll(".preview-tab-btn");
  tabBtns.forEach(b => b.classList.remove("active"));
  btnElement.classList.add("active");

  const imgEl = document.getElementById(`preview-img-${projectId}`);
  const captionEl = document.getElementById(`preview-caption-${projectId}`);

  if (type === "swagger") {
    imgEl.src = project.images.swagger;
    imgEl.alt = `${project.name} 스웨거 API 명세`;
    captionEl.textContent = project.images.swaggerCaption;
  } else {
    imgEl.src = project.images.ui;
    imgEl.alt = `${project.name} 구동 화면`;
    captionEl.textContent = project.images.uiCaption;
  }
}

// Render Skills Matrix (Clean 4 Categories)
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map(group => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">${group.category}</h3>
      <div class="skill-items-list">
        ${group.skills.map(s => `
          <div class="skill-item ${s.highlight ? 'highlight' : ''}">
            <span class="skill-name">${s.name}</span>
            <span class="skill-level">${s.level}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Setup Event Listeners
function initEventListeners() {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderProjects(category);
    });
  });

  // Modal Backdrop & Close Button
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close-btn");
  if (modalClose && modal) {
    modalClose.addEventListener("click", closeProjectModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Keyboard Escape Key to Close Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });

  // Discord Copy Buttons (Desktop & Mobile)
  const discordBtns = document.querySelectorAll(".btn-copy-discord");
  discordBtns.forEach(btn => {
    btn.addEventListener("click", copyDiscordHandle);
  });
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalAffiliation = document.getElementById("modal-affiliation");
  const modalOverview = document.getElementById("modal-overview");
  const modalArchitecture = document.getElementById("modal-architecture");
  const modalTroubleshooting = document.getElementById("modal-troubleshooting");
  const modalTechBadges = document.getElementById("modal-tech-badges");
  const modalLinks = document.getElementById("modal-links");

  // Dual or Single Screenshot Showcase in Modal
  const modalScreenshots = document.getElementById("modal-screenshots");
  if (modalScreenshots) {
    if (project.hasUiTab === false) {
      modalScreenshots.innerHTML = `
        <div class="modal-gallery-single">
          <div class="gallery-label">
            <span class="badge-gallery">스웨거 REST API 명세</span>
            <span>${project.images.swaggerCaption}</span>
          </div>
          <img src="${project.images.swagger}" alt="${project.name} 스웨거 명세" class="gallery-img" />
        </div>
      `;
    } else {
      modalScreenshots.innerHTML = `
        <div class="modal-gallery-grid">
          <div class="gallery-item">
            <div class="gallery-label">
              <span class="badge-gallery">구동 화면 / 인터페이스</span>
              <span>${project.images.uiCaption}</span>
            </div>
            <img src="${project.images.ui}" alt="${project.name} 구동 화면" class="gallery-img" />
          </div>
          <div class="gallery-item">
            <div class="gallery-label">
              <span class="badge-gallery">스웨거 REST API 명세</span>
              <span>${project.images.swaggerCaption}</span>
            </div>
            <img src="${project.images.swagger}" alt="${project.name} 스웨거 명세" class="gallery-img" />
          </div>
        </div>
      `;
    }
  }

  modalTitle.textContent = project.name;
  modalSubtitle.textContent = project.subtitle;
  modalAffiliation.textContent = `${project.affiliation} · ${project.period} · 역할: ${project.role}`;
  modalOverview.innerHTML = formatRichText(project.overview);
  modalArchitecture.textContent = project.architecture;

  modalTroubleshooting.innerHTML = project.troubleshooting.map((t, idx) => `
    <div class="trouble-item">
      <div class="trouble-challenge">
        <span class="badge-challenge">Challenge ${idx + 1}</span>
        <p><strong>문제:</strong> ${formatRichText(t.problem)}</p>
      </div>
      <div class="trouble-solution">
        <span class="badge-solution">Solution</span>
        <p><strong>해결:</strong> ${formatRichText(t.solution)}</p>
      </div>
    </div>
  `).join("");

  modalTechBadges.innerHTML = project.techStack.map(t => `<span class="tech-pill">${t}</span>`).join("");

  modalLinks.innerHTML = project.links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">
      <span>${link.label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  `).join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Project Detail Modal
function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Copy Discord Handle & Toast
function copyDiscordHandle() {
  const discordHandle = "kmj830";
  navigator.clipboard.writeText(discordHandle).then(() => {
    showToast(`디스코드 ID (${discordHandle}) 가 복사되었습니다!`);
  }).catch(() => {
    showToast(`디스코드 ID: ${discordHandle}`);
  });
}

// Show Toast Notification
function showToast(message) {
  let toast = document.getElementById("toast-container");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-container";
    toast.className = "toast-container";
    document.body.appendChild(toast);
  }

  const toastItem = document.createElement("div");
  toastItem.className = "toast-item";
  toastItem.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.appendChild(toastItem);
  setTimeout(() => {
    toastItem.classList.add("fade-out");
    setTimeout(() => toastItem.remove(), 300);
  }, 3000);
}
