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

## 더 알아보기

Expo를 사용한 프로젝트 개발에 대해 더 자세히 알아보려면 다음 리소스를 참고하세요:

- [Expo 공식 문서](https://docs.expo.dev/): 기초를 배우거나 [가이드](https://docs.expo.dev/guides)를 통해 고급 주제를 다뤄보세요.
- [Expo 튜토리얼 배우기](https://docs.expo.dev/tutorial/introduction/): 안드로이드, iOS 및 웹에서 실행되는 프로젝트를 생성하는 단계별 튜토리얼을 따라 해보세요.

## 커뮤니티 참여하기

유니버설 앱을 개발하는 개발자 커뮤니티에 참여하세요.

- [GitHub의 Expo](https://github.com/expo/expo): 오픈소스 플랫폼을 확인하고 기여해 보세요.
- [Discord 커뮤니티](https://chat.expo.dev): Expo 사용자들과 채팅하고 질문할 수 있습니다.
