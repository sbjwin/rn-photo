# Expo 앱에 오신 것을 환영합니다

> **알아두기: 프로젝트 생성 방식의 변화**
> 과거에 자주 쓰이던 `expo init rn-photo` 명령어는 이제 사용하지 않습니다(deprecated).
> 현재 프로젝트는 최신 권장 방식인 `npx create-expo-app rn-photo` 명령어를 통해 생성된 [Expo](https://expo.dev) 프로젝트입니다.

이 프로젝트를 처음 생성하셨거나 내려받으셨다면, 앱을 실행하기 위해 아래의 단계를 따라주세요.

## 시작하기 (초기 설정 및 실행)

1. 종속성 설치하기

   ```bash
   npm install
   ```

2. 앱 실행하기

   ```bash
   npx expo start
   ```

출력되는 내용에서 다음 환경으로 앱을 열 수 있는 옵션을 확인할 수 있습니다.

- [개발 빌드 (development build)](https://docs.expo.dev/develop/development-builds/introduction/)
- [안드로이드 에뮬레이터 (Android emulator)](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS 시뮬레이터 (iOS simulator)](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), Expo로 앱 개발을 체험해 볼 수 있는 제한된 샌드박스 환경

**app** 디렉터리 내의 파일들을 수정하여 개발을 시작할 수 있습니다. 이 프로젝트는 [파일 기반 라우팅 (file-based routing)](https://docs.expo.dev/router/introduction)을 사용합니다.

## 새로운 프로젝트로 시작하기

준비가 되면 다음 명령어를 실행하세요:

```bash
npm run reset-project
```

이 명령어는 초기 시작 코드를 **app-example** 디렉터리로 이동시키고, 개발을 시작할 수 있도록 비어 있는 새로운 **app** 디렉터리를 생성합니다.

### 기타 설정 단계

- 린팅(Linting)을 위해 ESLint를 설정하려면 `npx expo lint`를 실행하거나 ["ESLint 및 Prettier 사용하기"](https://docs.expo.dev/guides/using-eslint/) 가이드를 따르세요.
- 단위 테스트를 설정하려면 ["Jest를 사용한 단위 테스트"](https://docs.expo.dev/develop/unit-testing/) 가이드를 참조하세요.
- 이 템플릿의 TypeScript 설정에 대해 더 자세히 알아보려면 ["TypeScript 사용하기"](https://docs.expo.dev/guides/typescript/) 가이드를 확인하세요.

#### React Hooks ESLint 플러그인 설정 가이드 (권장)

React 컴포넌트 개발 시 Hooks의 규칙(Rules of Hooks)을 위반하여 발생하는 버그를 미연에 방지하려면 플러그인 추가가 필요합니다.

1. **플러그인 설치하기**:
   터미널에서 아래 명령어를 실행하여 개발 의존성으로 설치합니다.
   ```bash
   npm install -D eslint-plugin-react-hooks
   ```

2. **ESLint 환경 설정하기**:
   프로젝트 루트의 `eslint.config.mjs` (또는 `.eslintrc.js` 등 사용하는 설정 파일)를 열고 아래와 같이 플러그인과 규칙을 추가합니다.
   
   ```javascript
   import reactHooks from 'eslint-plugin-react-hooks';

   export default [
     // ... 기존 설정 내용 ...
     {
       plugins: {
         'react-hooks': reactHooks,
       },
       rules: {
         ...reactHooks.configs.recommended.rules,
       },
     },
   ];
   ```

#### 패키지 설치 방식의 변화 (`expo install` 관련)

과거(구 버전 Expo CLI)에는 `expo install 패키지명` 명령어를 전역으로 사용했으나, 현재는 해당 명령어가 더 이상 지원되지 않습니다(deprecated). 최신 환경에서는 다음과 같은 방식을 사용해야 합니다.

- **Expo 호환 패키지 설치 권장 방식**: `npx expo install 패키지명`
  - (Expo SDK 버전에 맞춰 올바른 버전이 설치되어야 하는 패키지에 주로 사용합니다.)
- **일반 의존성/타입 패키지 설치**: `npm install -D 패키지명` (개발 의존성)
  - (예를 들어 `@types/react`, `@types/react-native`와 같은 타입 지원 패키지들은 npm으로 바로 설치하시면 됩니다.)

### 📚 화면 이동(Navigation) 개발 가이드 (책 vs 최신 트렌드)

현재 시중의 많은 React Native 교재는 전통적인 **`React Navigation`** 방식을 설명하고 있습니다. 하지만 우리 프로젝트는 최신 트렌드인 **`Expo Router` (파일 기반 라우팅)**를 사용하므로, 책의 코드를 그대로 따라 하면 에러가 발생할 수 있습니다.

#### ❌ 책의 방식 (React Navigation - 과거 방식)
1. 패키지 수동 설치: `npm install @react-navigation/native-stack` 등
2. 라우트 상수 정의: `routes.js` 파일에 `SIGN_IN: 'SignIn'` 같은 이름 정의
3. 스택(Stack) 등록: `<NavigationContainer>`와 `<Stack.Screen>`을 이용해 모든 화면을 수동으로 등록

#### ⭕ 우리 프로젝트 방식 (Expo Router - 최신 방식)
- **파일이 곧 화면입니다!** 복잡한 설치나 등록 과정이 전혀 필요 없습니다.
- 예: 로그인 화면을 만들고 싶다면 `src/app/sign-in.tsx` 파일을 생성하기만 하면 끝입니다. 자동으로 `/sign-in` 경로가 만들어지며 화면 이동이 가능해집니다.

> 💡 **개발 팁:** 책에서 네비게이션(화면 이동) 관련 단원을 진행하실 때는 코드를 그대로 치지 마시고, 해당 페이지의 목표(예: "로그인 화면과 회원가입 화면 연결하기")를 저에게 알려주세요! 최신 `Expo Router` 방식의 아주 쉬운 코드로 바로바로 번역해 드리겠습니다.

### 문제 해결 (Troubleshooting)

#### Expo Go 앱 연결 에러 (`Failed to download remote update`)
휴대폰의 Expo Go 앱에서 PC의 개발 서버로 접속하지 못할 때 발생하는 네트워크 에러입니다. 주로 아래의 원인으로 발생합니다.
1. **터널(Tunnel) 모드 사용 (가장 쉬운 해결책)**
   방화벽이나 네트워크 환경에 구애받지 않고 외부망을 통해 연결합니다.
   터미널에서 기존 서버를 종료(`Ctrl + C`)한 후, 이전 캐시로 인한 오류를 방지하기 위해 `-c` (캐시 지우기) 옵션을 추가하여 아래 명령어로 재실행하세요:
   ```bash
   npx expo start -c --tunnel
   ```
2. **동일한 Wi-Fi 네트워크 접속**
   휴대폰과 PC가 완전히 동일한 Wi-Fi 공유기(또는 LAN)에 연결되어 있는지 확인합니다. PC에 VPN이 켜져 있다면 종료하세요.
3. **윈도우 네트워크 프로필 변경**
   윈도우 방화벽이 연결을 차단하는 경우입니다. PC의 Wi-Fi '속성'에서 네트워크 프로필 유형을 **'공용'에서 '개인(Private)'**으로 변경하세요.

## 더 알아보기

Expo를 사용한 프로젝트 개발에 대해 더 자세히 알아보려면 다음 리소스를 참고하세요:

- [Expo 공식 문서](https://docs.expo.dev/): 기초를 배우거나 [가이드](https://docs.expo.dev/guides)를 통해 고급 주제를 다뤄보세요.
- [Expo 튜토리얼 배우기](https://docs.expo.dev/tutorial/introduction/): 안드로이드, iOS 및 웹에서 실행되는 프로젝트를 생성하는 단계별 튜토리얼을 따라 해보세요.

## 커뮤니티 참여하기

유니버설 앱을 개발하는 개발자 커뮤니티에 참여하세요.

- [GitHub의 Expo](https://github.com/expo/expo): 오픈소스 플랫폼을 확인하고 기여해 보세요.
- [Discord 커뮤니티](https://chat.expo.dev): Expo 사용자들과 채팅하고 질문할 수 있습니다.
