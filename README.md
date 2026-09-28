# 💼 MinJung Kim — Portfolio Website

> 국립금오공과대학교 컴퓨터공학전공 김민중(`kmj830`)의 엔지니어 포트폴리오 웹사이트입니다.  
> 단순 과제나 실습성 레포지토리를 배제하고, 실제 클라우드 프로덕션 배포 및 기술적 깊이가 있는 **핵심 5대 프로젝트**를 선별하여 구축되었습니다.

---

## 🎨 Design System: Minimalist Clean White
- **디자인 언어**: 불필요한 그라디언트와 과도한 장식을 배제한 **미니멀 화이트톤(Minimalist White)** 에디토리얼 엔지니어링 미학
- **아키텍처 중심**: 단순 화면 캡처가 아닌 시스템 아키텍처 다이어그램, 문제 해결(트러블슈팅) 지표, OpenAPI 3.0 스펙 강조
- **디스코드 공유 최적화**: 디스코드 채팅방에 링크 공유 시 깔끔한 화이트/블루 톤의 대형 프리뷰 카드(`assets/images/og-preview.png`)와 테마 컬러(`#0284c7`)가 자동 임베드됩니다.

---

## 🚀 수록된 5대 핵심 프로젝트

1. **🐶 DogMate (멍메이트)**: IoT 엣지 AI & 모바일 풀스택
   - Raspberry Pi 3B+, YAMNet(Edge Audio AI), Flask, Google Cloud Run, SwiftUI(iOS)
   - 실시간 3초 주기 텔레메트리, 메디안 필터링 오차 보정, iOS 네이티브 앱 원격 제어
2. **👗 HER-STORY (허스토리 & 노마드)**: GenAI 패션 커머스 플랫폼 & 매장 어시스턴트 태블릿
   - Java 21, Spring Boot 3.4, FLUX.1 & DALL-E AI 패턴 생성기, Spring Security (JWT), PostgreSQL
   - 3D 가상 쇼룸 전시, 스마트 로열티 정산, 비행 여정(보딩패스 OCR) 기반 여행지 기후 큐레이션
3. **📍 Smoking Area (스모킹 에리어)**: 위치 기반 공공데이터 흡연구역 지도 & 제보 플랫폼
   - Java, Spring Boot, Spring Data JPA, Kakao OAuth2, Geocoding (Haversine 반경 검색), Render 배포, Swagger UI
4. **🛡️ WorkGuard (워크가드)**: 최신 Java 25 & Spring AI 기반 스마트 산업안전 어시스턴트 API
   - Java 25, Spring Boot 4.0, Spring AI 2.0.1, Google Cloud GCP, Gemini 3.7 / 3.6 Flash
5. **📚 FindBook (파인드북)**: 초고속 1ms 인메모리 캐싱 & 웹 브라우저 카메라 바코드 스캔 도서관 장서 점검 솔루션
   - Java 21, Spring Boot 3.3.3, Supabase PostgreSQL, In-Memory Caching, Render

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

---

## 📁 디렉토리 구조

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포 워크플로우
├── assets/
│   └── images/
│       └── og-preview.png      # 디스코드/SNS 공유용 오픈그래프 프리뷰 카드
├── css/
│   └── style.css               # Minimalist White 반응형 스타일시트
├── js/
│   └── app.js                  # 프로젝트 데이터셋, 탭 필터링, 모달 팝업 로직
├── index.html                  # 시맨틱 마크업 & Open Graph 메타태그
└── README.md                   # 프로젝트 문서
```
