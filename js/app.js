/**
 * MinJung Kim Portfolio Application Logic
 * Minimalist White-Tone Interactive System
 */

const PROJECTS_DATA = [
  {
    id: "dogmate",
    name: "DogMate (멍메이트)",
    subtitle: "반려동물 분리불안 완화 및 이상행동 원격 케어 IoT 솔루션",
    categories: ["backend", "iot", "ai"],
    status: "Cloud Run 배포 완료",
    statusType: "live",
    affiliation: "국립금오공과대학교 IoT 기초설계 (담당: 손기봉 교수님)",
    period: "2026.09 - 진행 중",
    role: "하드웨어 센서/액추에이터 제어, 클라우드 연동 및 시스템 아키텍처 설계",
    metrics: [
      { label: "텔레메트리 주기", value: "3s" },
      { label: "센서 오차 보정", value: "Median Filter" },
      { label: "엣지 사운드 분류", value: "YAMNet AI" },
      { label: "배포 플랫폼", value: "GCP Cloud Run" }
    ],
    techStack: [
      "Raspberry Pi 3B+",
      "GrovePi+",
      "Python 3.x",
      "Flask",
      "YAMNet (Edge AI)",
      "Google Cloud Run",
      "SwiftUI (iOS)"
    ],
    overview: "반려견의 짖음과 분리불안 행동을 라즈베리파이 엣지 환경에서 YAMNet 딥러닝 모델로 실시간 분석하고, 온습도·조도·초음파 센서 데이터를 수집하여 Google Cloud Run 백엔드로 전송합니다. 견주는 iOS SwiftUI 앱을 통해 실시간 텔레메트리를 확인하고 원격으로 간식 디스펜서를 작동하거나 안정 음성을 전달할 수 있습니다.",
    architecture: `[라즈베리파이 3B+ (Edge AI)]
  ├── 마이크 입력 ──> YAMNet 음향 분류 (짖음/울음 감지)
  ├── 온습도(DHT11) / 조도(Light) / 거리(Ultrasonic) 센서 수집
  └── 메디안 필터링 (Median Filter) 노이즈 제거
         │ (HTTP REST / 3s 주기)
         ▼
[Google Cloud Run (백엔드 API)]
  ├── RESTful API (Flask / Python)
  ├── 텔레메트리 히스토리 및 이상행동 이벤트 영속화
  └── Swagger OpenAPI 3.0 명세
         │
         ▼
[iOS Client (SwiftUI)]
  ├── 실시간 환경 대시보드 (온도·습도·조도 차트)
  ├── 원격 간식 디스펜서(서보모터) 및 부저 액추에이터 제어
  └── 견주 음성 녹음 전송 기능`,
    troubleshooting: [
      {
        problem: "초음파 센서 거리 측정 시 노이즈 및 간헐적 0/NaN 값 튐 현상",
        solution: "하드웨어단에서 메디안 필터(Median Filtering, 5개 샘플 윈도우) 알고리즘을 구현하여 이상치를 제거하고, 백엔드 API 쿼리단에서 결측치 및 NaN 방어 필터링 로직을 구축하여 텔레메트리 데이터 무결성을 확보했습니다."
      },
      {
        problem: "프론트엔드-백엔드 간 크로스 플랫폼 연동 시 CORS 및 통신 규격 충돌",
        solution: "언어/프레임워크에 종속되지 않는 프론트엔드 공식 핸드오프 패키지(docs/for_frontend)를 설계하고, 전 엔드포인트 CORS(*) 허용 및 OpenAPI 3.0 Swagger 스키마를 정립하여 Swift 클라이언트와의 무마찰 연동을 달성했습니다."
      }
    ],
    links: [
      { label: "Hardware & Backend GitHub", url: "https://github.com/kmj830/IoT" },
      { label: "SwiftUI Front GitHub", url: "https://github.com/kmj830/IoT-front" },
      { label: "Swagger Docs", url: "https://dogmate-backend-1089229092493.us-central1.run.app/docs" }
    ]
  },
  {
    id: "herstory",
    name: "HER-STORY (허스토리 & 노마드)",
    subtitle: "무명 여성 아티스트 지원 GenAI 패션 커머스 플랫폼 & 직원 어시스턴트 태블릿",
    categories: ["backend", "ai"],
    status: "해커톤 출품작 & 고도화",
    statusType: "milestone",
    affiliation: "해커톤 대회 출품 프로젝트",
    period: "2026.08",
    role: "Spring Boot 백엔드 코어 설계, GenAI 이미지 생성 파이프라인 및 직원 어시스턴트 웹 구축",
    metrics: [
      { label: "AI 모델", value: "FLUX.1 & DALL-E" },
      { label: "런타임", value: "Java 21 / Spring Boot 3" },
      { label: "인증 체계", value: "JWT & Spring Security" },
      { label: "3D 시연", value: "Google Model-Viewer" }
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3.4",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "OpenAI API",
      "FLUX.1 Text-to-Image",
      "Tailwind CSS"
    ],
    overview: "무명 여성 아티스트의 원화 및 스케치를 기반으로 생성형 AI(FLUX.1 및 DALL-E)가 2D 텍스타일 패턴을 생성하고, 이를 3D 가상 쇼룸 의류 모델에 맵핑하여 커스텀 주문 및 로열티를 정산하는 패션 팝업 플랫폼입니다. 오프라인 팝업스토어 직원을 위한 태블릿 어시스턴트 앱 및 여행 여정(보딩패스 OCR) 기반 목적지 기후 맞춤형 큐레이션 엔진을 함께 구축했습니다.",
    architecture: `[아티스트 & 고객 포털]
  ├── 원화/스케치 업로드
  ├── AI 프롬프트 프리셋 선택 ──> [FLUX.1 / DALL-E AI 엔진]
  │                                 └── 2D 심리스 텍스타일 패턴 생성
  └── Google Model-Viewer 3D 가상 쇼룸 맵핑
         │
         ▼
[Spring Boot 3.4 코어 백엔드 (Java 21)]
  ├── 도메인 모듈: Studio / Showroom / Order / Royalty / O2O
  ├── 비회원·아티스트·고객·관리자 RBAC 권한 분리 및 JWT 인증
  ├── 가상 시뮬레이션 결제 및 아티스트 후원금/로열티 자동 카운팅
  └── PostgreSQL DB 연동
         │
         ▼
[오프라인 매장 직원 어시스턴트 태블릿 (Nomad)]
  ├── 보딩패스 Vision OCR 스캔 & PNR 여정 자동 등록
  └── 목적지 기후/날씨 데이터 분석 기반 맞춤형 패션 & 케어 추천`,
    troubleshooting: [
      {
        problem: "AI 패턴 생성 시 인물/초상화가 혼입되어 텍스타일 원단 패턴으로 부적합한 문제",
        solution: "Negative Prompt와 시각적 컨텍스트 규칙을 강화하여 'Strict flat 2D seamless pattern texture' 규칙을 파이프라인에 강제 주입하고, FLUX.1 고해상도 생성기를 연동하여 패브릭 인쇄 품질의 텍스처를 안정적으로 확보했습니다."
      },
      {
        problem: "오프라인 팝업스토어 태블릿 UI와 백엔드 간 비행 여정 데이터 결합 시 지연",
        solution: "비행 여정 기반 공항 픽업 가능 일정 자동 계산 알고리즘 및 Fast Checkout 전용 DTO를 신설하고, DataInitializer 멱등성을 확보하여 현장 네트워크 불안정 환경에서도 일관된 오프라인 경험을 제공했습니다."
      }
    ],
    links: [
      { label: "Backend GitHub", url: "https://github.com/kmj830/herstory-backend" },
      { label: "Assistant Client GitHub", url: "https://github.com/kmj830/nomad" }
    ]
  },
  {
    id: "smoking-area",
    name: "Smoking Area (스모킹 에리어)",
    subtitle: "위치 기반 공공데이터 흡연구역 지도 및 시민 제보 플랫폼",
    categories: ["backend"],
    status: "Render 라이브 배포 완료",
    statusType: "live",
    affiliation: "개인 프로젝트",
    period: "2026.07",
    role: "백엔드 전체 아키텍처, 지오코딩 반경 검색 알고리즘 및 카카오 OAuth2 인증 구현",
    metrics: [
      { label: "배포 환경", value: "Render Docker" },
      { label: "검색 방식", value: "Haversine Geocoding" },
      { label: "인증 방식", value: "Kakao OAuth2" },
      { label: "문서화", value: "Swagger OpenAPI 3" }
    ],
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Kakao OAuth2",
      "Geocoding Service",
      "Docker",
      "Render",
      "Swagger UI"
    ],
    overview: "길거리 간접흡연 피해를 줄이고 흡연자의 편의를 돕기 위한 위치 기반 흡연구역 지도 서비스입니다. 공공데이터를 정제하여 반경 기반 공간 검색을 지원하며, 사용자가 새로운 흡연구역을 사진과 함께 제보하고 관리자가 검수·승인하는 참여형 제보 파이프라인을 갖추고 있습니다.",
    architecture: `[클라이언트 (Web / Mobile)]
  ├── 카카오 소셜 로그인 (OAuth2)
  ├── 사용자 현재 위치(GPS 위·경도) 획득
  └── 주변 흡연구역 지도 렌더링 & 북마크
         │ (RESTful API / JSON)
         ▼
[Spring Boot 백엔드 (Render / Docker)]
  ├── GeocodingService: Haversine 공식을 활용한 반경(500m/1km) 거리 필터링
  ├── SmokingAreaService: 공공데이터 흡연구역 목록 조회 및 북마크 영속화
  ├── ReportService: 사용자 사진 업로드 및 현장 제보 접수
  ├── AdminReportController: 관리자 전용 제보 승인/반려 워크플로우
  └── Swagger OpenAPI 3.0 대화형 문서 제공`,
    troubleshooting: [
      {
        problem: "Render 클라우드 무료 티어 인스턴스의 메모리 한계로 인한 빌드/기동 시 OOM(Out of Memory) 발생",
        solution: "JVM 힙 메모리 옵션을 최적화하고, 발표 및 시연 시 오류 발생에 대비해 `.env.local` 기반 원클릭 로컬 런타임 전환 스크립트(`scripts/run-local.sh`) 및 ngrok 터널링 파이프라인을 구축하여 가용성을 100% 보장했습니다."
      },
      {
        problem: "사용자 제보 사진 처리 및 관리자 권한 분리 보안 취약점",
        solution: "카카오 회원 ID와 시스템 내부 고유 User ID 매핑을 엄격히 분리하고, Role 기반 접근 제어(RBAC) 인터셉터를 적용하여 일반 사용자의 관리자 엔드포인트 무단 접근을 원천 차단했습니다."
      }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kmj830/smoking-area-backend" },
      { label: "Live Swagger UI", url: "https://smoking-area-21yb.onrender.com/swagger-ui/index.html" }
    ]
  },
  {
    id: "workguard",
    name: "WorkGuard (워크가드)",
    subtitle: "최신 Java 25 & Spring AI 기반 스마트 산업안전 관리 어시스턴트 API",
    categories: ["backend", "ai"],
    status: "Spring AI 2.0 연동 완료",
    statusType: "live",
    affiliation: "개인 프로젝트",
    period: "2026.08",
    role: "Spring AI 기반 LLM 오케스트레이션, Google Cloud GCP 연동 및 API 아키텍처 설계",
    metrics: [
      { label: "최신 런타임", value: "Java 25 (Loom)" },
      { label: "프레임워크", value: "Spring Boot 4.0" },
      { label: "AI 스택", value: "Spring AI 2.0.1" },
      { label: "LLM 엔진", value: "Gemini 3.7 Flash" }
    ],
    techStack: [
      "Java 25",
      "Spring Boot 4.0.8",
      "Spring AI 2.0.1",
      "Spring Cloud GCP 8.0.5",
      "Google Gemini 3.7 / 3.6 Flash",
      "Swagger UI"
    ],
    overview: "산업 현장에서 근로자와 안전 관리자가 안전 수칙 및 규정을 실시간으로 질의하고 작업 위험도를 사전 평가할 수 있는 스마트 안전 관리 API입니다. 차세대 기술 스택인 Java 25와 Spring Boot 4, Spring AI 2.0 및 Google Gemini 3.7 Flash 모델을 선제적으로 도입하여 초저지연 AI 응답을 제공합니다.",
    architecture: `[산업 현장 작업자 / 관리자 시스템]
  └── 안전 규정 질의 및 작업 환경 텍스트/상황 입력
         │
         ▼
[WorkGuard API (Spring Boot 4 / Java 25)]
  ├── SwaggerRedirectController: /api 및 /docs의 Swagger UI 자동 리다이렉트
  ├── AiController: 프롬프트 파라미터 유효성 검증 및 전처리
  └── Spring AI ChatClient: Google Cloud GCP 인증 파이프라인
         │
         ▼
[Google Gemini 3.7 / 3.6 Flash Engine]
  ├── 산업안전보건법 및 작업 환경 안전 수칙 분석
  └── 맞춤형 안전 체크리스트 및 위험도 평가 결과 JSON 스트리밍`,
    troubleshooting: [
      {
        problem: "HTTPS 환경 배포 시 Swagger UI 서버 베이스 URL이 HTTP로 바인딩되어 Mixed Content 경고 발생",
        solution: "OpenAPI 서버 설정을 프로토콜 독립적인 상대 경로(Relative Base URL)로 동적 구성하여 HTTPS 프록시 환경에서도 브라우저 보안 경고 없이 원활히 Swagger 대화형 테스트가 가능하도록 수정했습니다."
      },
      {
        problem: "급변하는 생성형 AI 모델 버전 변경에 따른 Spring AI 바인딩 호환성 문제",
        solution: "Gemini Flash 모델 변경(3.6 -> 3.7) 시 유연하게 대응할 수 있도록 환경 변수 및 모델 파라미터를 외부화하고, Spring AI 모델 인터페이스 계층을 추상화하여 모델 교체 비용을 최소화했습니다."
      }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kmj830/workguard-api" }
    ]
  },
  {
    id: "findbook",
    name: "FindBook (파인드북)",
    subtitle: "초고속 1ms 인메모리 캐싱 & 웹 브라우저 카메라 바코드 스캔 도서관 장서 점검 솔루션",
    categories: ["backend"],
    status: "1ms 응답속도 최적화 완료",
    statusType: "live",
    affiliation: "실무 솔루션 프로젝트",
    period: "2026.08",
    role: "백엔드 전체 개발, Supabase PostgreSQL 연동 및 인메모리 캐시 성능 최적화",
    metrics: [
      { label: "캐시 응답속도", value: "1ms" },
      { label: "스캔 방식", value: "HTML5 Camera Barcode" },
      { label: "데이터베이스", value: "Supabase PostgreSQL" },
      { label: "배포 플랫폼", value: "Render" }
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3.3.3",
      "Spring Data JPA",
      "Supabase PostgreSQL",
      "In-Memory Caching",
      "HTML5 Barcode Scanner",
      "Render"
    ],
    overview: "도서관의 대규모 장서 점검 업무를 획기적으로 개선하기 위해 개발된 웹 솔루션입니다. 고가의 전용 바코드 리더기 없이 스마트폰/노트북 웹 브라우저 카메라로 바코드를 실시간 인식하고, 서가 미배치 및 분실 도서를 즉각 대조합니다. Supabase 커넥션 풀러와 인메모리 캐싱을 도입하여 1ms대의 응답 속도를 기록했습니다.",
    architecture: `[현장 작업자 웹 브라우저]
  ├── 웹캠/스마트폰 카메라를 통한 실시간 바코드 스캔
  ├── 찾아야 하는 책 목록 실시간 일치 여부 피드백 (음향/진동)
  └── 점검 결과 엑셀 리포트 자동 다운로드
         │
         ▼
[Spring Boot 3.3.3 백엔드]
  ├── BookApiController & BookViewController
  ├── 2.5초 주기 인메모리 캐싱 계층 (In-Memory Hot Cache)
  │    └── 반복 조회 요청 시 DB 부하 제거 (1ms 이내 반환)
  └── Supabase IPv4 Connection Pooler (Singapore Region)
         │
         ▼
[PostgreSQL Database (Supabase Cloud)]
  └── 서가 도서 마스터 및 장서 점검 히스토리 보관`,
    troubleshooting: [
      {
        problem: "원격지(싱가포르) Supabase DB 연결 시 네트워크 레이턴시로 인한 도서 조회 딜레이 발생",
        solution: "IPv4 Connection Pooler 주소를 적용해 커넥션 오버헤드를 줄이고, 2.5초 유효 기간의 인메모리 캐싱 레이어를 도서 조회 서비스에 배치하여 반복 스캔 요청의 응답 시간을 1ms로 극대화했습니다."
      },
      {
        problem: "도서관 서지 정보 내 특수문자 및 따옴표로 인한 자바스크립트 렌더링 오류",
        solution: "Thymeleaf 및 클라이언트 템플릿의 HTML 이스케이프 정책을 전면 강화하고, 데이터 전송 DTO의 유효성 검증을 정밀화하여 스캔 중 렌더링 크래시 현상을 완전히 해소했습니다."
      }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kmj830/findbook" }
    ]
  }
];

// Technical Skills Data Matrix
const SKILLS_DATA = [
  {
    category: "Backend & Core",
    icon: "code",
    skills: [
      { name: "Java", level: "21 / 25", highlight: true },
      { name: "Spring Boot", level: "3.x / 4.x", highlight: true },
      { name: "Spring Data JPA", level: "Hibernate" },
      { name: "Spring Security", level: "JWT Authentication" },
      { name: "Spring AI", level: "2.0.1 Framework", highlight: true },
      { name: "Python / Flask", level: "IoT Server" },
      { name: "RESTful API Design", level: "OpenAPI 3.0" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      { name: "Google Cloud Run", level: "Serverless Container", highlight: true },
      { name: "Docker", level: "Containerization" },
      { name: "Render", level: "Cloud Deployment" },
      { name: "PostgreSQL", level: "RDBMS" },
      { name: "Supabase", level: "Cloud Database" },
      { name: "GitHub Actions", level: "CI/CD Pipeline" }
    ]
  },
  {
    category: "AI & Intelligent Systems",
    icon: "cpu",
    skills: [
      { name: "Google Gemini", level: "3.7 / 3.6 Flash", highlight: true },
      { name: "OpenAI API", level: "DALL-E / GPT" },
      { name: "FLUX.1", level: "Text-to-Image" },
      { name: "YAMNet", level: "Edge Audio AI", highlight: true },
      { name: "Vision OCR", level: "Document Parsing" }
    ]
  },
  {
    category: "IoT & Mobile Client",
    icon: "hard-drive",
    skills: [
      { name: "Raspberry Pi 3B+", level: "Edge Gateway", highlight: true },
      { name: "GrovePi+", level: "Sensor Integration" },
      { name: "GPIO Sensors", level: "DHT11 / Ultrasonic / Light" },
      { name: "Swift / SwiftUI", level: "iOS Native App", highlight: true }
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

      <div class="project-body">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <p class="project-overview-short">${p.overview}</p>
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

      <!-- Tech Stack Badges -->
      <div class="tech-pills">
        ${p.techStack.slice(0, 5).map(t => `<span class="tech-pill">${t}</span>`).join("")}
        ${p.techStack.length > 5 ? `<span class="tech-pill more">+${p.techStack.length - 5}</span>` : ""}
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
          <a href="${p.links[0].url}" target="_blank" rel="noopener noreferrer" class="btn-github" title="GitHub 코드 보기">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");
}

// Render Skills Matrix
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

  // Discord Copy Button
  const discordBtn = document.getElementById("btn-copy-discord");
  if (discordBtn) {
    discordBtn.addEventListener("click", copyDiscordHandle);
  }
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

  modalTitle.textContent = project.name;
  modalSubtitle.textContent = project.subtitle;
  modalAffiliation.textContent = `${project.affiliation} · ${project.period} · 역할: ${project.role}`;
  modalOverview.textContent = project.overview;
  modalArchitecture.textContent = project.architecture;

  modalTroubleshooting.innerHTML = project.troubleshooting.map((t, idx) => `
    <div class="trouble-item">
      <div class="trouble-challenge">
        <span class="badge-challenge">Challenge ${idx + 1}</span>
        <p><strong>문제:</strong> ${t.problem}</p>
      </div>
      <div class="trouble-solution">
        <span class="badge-solution">Solution</span>
        <p><strong>해결:</strong> ${t.solution}</p>
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
  const discordHandle = "kmj830"; // User's GitHub/Discord ID
  navigator.clipboard.writeText(discordHandle).then(() => {
    showToast(`디스코드 아이디 (${discordHandle}) 가 복사되었습니다!`);
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
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
