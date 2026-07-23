# 🧭 Expo Router 네비게이션 가이드

현재 프로젝트는 기존의 명령형 `React Navigation` 방식이 아닌, 최신 **Expo Router (파일 기반 라우팅)** 방식을 사용하고 있습니다.

## 1. 가장 큰 차이점 요약

| 구분 | ❌ 기존 방식 (React Navigation) | ✅ 현재 방식 (Expo Router) |
| :--- | :--- | :--- |
| **시작점 (Entry)** | `src/App.js` 파일이 필요함 | `package.json` 설정으로 자동 처리 (App.js 없음) |
| **라우터 설정** | `AuthStack.js`, `MainStack.js` 등 직접 코드 작성 | **`src/app/` 폴더 안의 파일 구조가 곧 경로** |
| **화면 이동** | `navigation.navigate('SignIn')` | `router.push('/sign-in')` 또는 `<Link>` 컴포넌트 |
| **레이아웃** | `NavigationContainer`로 감싸기 | `_layout.tsx` 파일에서 자동으로 공통 UI 관리 |

---

## 2. 프로젝트 폴더 구조 (`src/app/`)

Next.js처럼 `src/app/` 디렉토리 내에 파일을 만들면 자동으로 화면이 생성됩니다.

```text
src/app/
├── _layout.tsx    # 앱의 최상위 공통 레이아웃 (헤더, 테마 등)
├── index.tsx      # 앱을 켰을 때 가장 먼저 보이는 메인 화면 (경로: `/`)
├── explore.tsx    # 탐색 화면 (경로: `/explore`)
├── sign-in.tsx    # 로그인 화면 (경로: `/sign-in`)
└── sign-up.tsx    # 회원가입 화면 (경로: `/sign-up`)
```

- 파일 이름이 해당 화면의 **경로(URL)**가 됩니다.
- 화면을 추가하고 싶다면, `src/app/` 폴더에 새로운 `.tsx` 파일을 만들기만 하면 됩니다.

---

## 3. 화면 이동은 어떻게 하나요?

기존의 `navigation.navigate` 대신, 두 가지 방식을 주로 사용합니다.

### A. `<Link>` 컴포넌트 사용 (선언적)
웹 개발을 하듯이 직관적으로 사용할 수 있습니다.
```tsx
import { Link } from 'expo-router';

// ...
<Link href="/sign-in">로그인 화면으로 가기</Link>
```

### B. `router` 객체 사용 (함수형)
버튼 클릭 등의 이벤트 안에서 이동할 때 사용합니다.
```tsx
import { router } from 'expo-router';

// ...
<Button onPress={() => router.push('/sign-in')} title="로그인하기" />
```

---

## 4. 로그인 / 비로그인 분리는 어떻게 하나요? (Auth 라우팅)

기존에는 `App.js`에서 상태에 따라 `AuthStack`과 `MainStack`을 분기(If-Else) 처리했습니다. 
Expo Router에서는 주로 다음과 같이 처리합니다.

**✅ 추천하는 방식: 괄호 `()` 폴더(그룹 라우트) 사용하기**
폴더 이름을 괄호로 감싸면 URL 경로에는 포함되지 않지만, 관련 화면들을 그룹으로 묶을 수 있습니다.

```text
src/app/
├── (auth)/             # URL에 반영되지 않는 로그인 관련 그룹
│   ├── sign-in.tsx     # 경로: `/sign-in`
│   └── sign-up.tsx     # 경로: `/sign-up`
├── (main)/             # URL에 반영되지 않는 메인 화면 그룹
│   ├── index.tsx       # 경로: `/`
│   └── explore.tsx     # 경로: `/explore`
└── _layout.tsx         # 여기서 로그인 상태를 확인하고 화면을 리다이렉트
```

최상위 `_layout.tsx`에서 사용자가 로그인하지 않았는데 `(main)` 화면에 있다면 자동으로 `/sign-in`으로 보내는 식의 로직을 작성합니다.
