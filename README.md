# 💼 MinJung Kim — Portfolio Website

> 국립금오공과대학교 컴퓨터공학전공 김민중(`kmj830`)의 엔지니어 포트폴리오 웹사이트입니다.  
> 단순 과제나 실습성 레포지토리를 배제하고, 실제 클라우드 배포 및 현장 도입, 기술적 깊이가 있는 **핵심 5대 프로젝트**를 선별하여 구축되었습니다.

---

## 🎨 Design System: Minimalist Clean White & Responsive
- **미니멀 화이트톤**: 불필요한 장식과 과장된 수식어를 배제하고, 실제 구현 역량과 아키텍처 중심의 클린 엔지니어링 미학
- **PC & 모바일 차별화 레이아웃**:
  - **PC(데스크톱)**: 5대 프로젝트 와이드 벤토 그리드, 호버 인터랙션, 나란한 듀얼 뷰 갤러리
  - **모바일(스마트폰 / 디스코드)**: 1열 세로 피드, 좁은 화면에서도 원터치로 전환되는 스웨거/구동화면 탭, 바텀 시트(Bottom Sheet) 모달, 하단 엄지 최적화 퀵 액션 바
- **실측 스크린샷 연동**: 각 프로젝트별 실제 Swagger UI 명세 캡처 및 실제 구동 화면(대시보드, 관리자 포털, 현장 바코드 스캐너) 탑재
- **디스코드 공유 최적화**: 디스코드 채팅방에 링크 공유 시 깔끔한 대형 프리뷰 카드(`assets/images/og-preview.png`)와 테마 컬러(`#0284c7`)가 자동 임베드됩니다.

---

## 🚀 수록된 5대 핵심 프로젝트

1. **✈️ NOMAD (노마드)**: 스마트 공항 면세점 체크인 및 항공 여정 연동 럭셔리 트래블 플랫폼 백엔드
   - `Java`, `Spring Boot`, `Spring Data JPA`, `SSE (Server-Sent Events)`, `Vision OCR`, `Docker`, `Render`
   - 보딩패스 OCR 스캔, 면세점 실시간 체크인(SSE 알림), 매장 직원 전용 태블릿 관제 UI
2. **🐶 DogMate (멍메이트)**: 반려동물 분리불안 완화 및 이상행동 원격 케어 IoT 솔루션 `[진행 중]`
   - `Raspberry Pi`, `Python`, `Flask`, `YAMNet (Edge AI)`, `Google Cloud Run`, `SwiftUI (iOS)`
   - 3초 주기 텔레메트리, 메디안 필터링 오차 보정, 실시간 모니터링 웹 대시보드 및 iOS 네이티브 앱
3. **📍 Smoking Area (스모킹 에리어)**: 위치 기반 공공데이터 흡연구역 지도 및 시민 제보 플랫폼 `[해커톤 출품작]`
   - `Java`, `Spring Boot`, `Spring Data JPA`, `Kakao OAuth2`, `Geocoding`, `Docker`, `Render`
   - Haversine 반경 검색(500m/1km), 카카오 소셜 로그인, 현장 제보 및 관리자 검수 파이프라인
4. **📚 FindBook (파인드북)**: 초고속 인메모리 캐싱 & 웹 브라우저 카메라 바코드 스캔 도서관 장서 점검 솔루션 `[현장 실무 직접 도입]`
   - `Java`, `Spring Boot`, `Spring Data JPA`, `Supabase PostgreSQL`, `In-Memory Cache`, `HTML5 Scanner`, `Render`
   - 실제 도서관 현장에서 도입·사용되어 서가 미배치/분실 도서 검출, 인메모리 핫 캐시 기반 초고속 대조
5. **🛡️ WorkGuard (워크가드)**: Spring AI & Google Gemini 기반 산업 안전 관리 어시스턴트 API `[진행 중]`
   - `Java`, `Spring Boot`, `Spring AI`, `Google Cloud GCP`, `Google Gemini`, `Swagger UI`
   - 산업안전보건법 및 현장 작업 규정 RAG/지능형 질의응답 처리

---

## 🌐 GitHub Pages 배포 설정 방법 (1분 완료)

본 사이트는 별도의 복잡한 Node.js 빌드 과정 없이 GitHub Pages에서 즉시 동작하는 제로 컨피그(Zero Build Friction) 구조입니다.

### 방법 1: GitHub Actions 자동 배포 (추천)
1. GitHub 저장소의 **Settings** > **Pages** 이동
2. **Build and deployment** > **Source** 항목에서 **GitHub Actions** 선택
3. 코드가 `main` 브랜치에 푸시되면 `.github/workflows/deploy.yml`이 실행되어 자동으로 배포됩니다.

### 방법 2: 브랜치 직접 배포 (가장 간단)
1. GitHub 저장소의 **Settings** > **Pages** 이동
2. **Build and deployment** > **Source** 항목에서 **Deploy from a branch** 선택
3. Branch를 `main` / Folder를 `/ (root)`로 선택 후 **Save** 클릭
4. 수초 내에 `https://kmj830.github.io/portfolio` (또는 사용자 도메인)으로 사이트가 오픈됩니다.
